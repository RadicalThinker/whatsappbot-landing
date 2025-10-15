import { useEffect, useRef, useState } from "react";
import { Groq } from "groq-sdk";

const client = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // ⚠️ Only for demo; use backend proxy in production
});

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: "init",
      text: "👋 Hey! I'm your ForReal assistant. Paste a news headline or article below, and I’ll detect if it’s fake or misleading.",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMsg = { id: Date.now().toString(), text, from: "user" };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);

    try {
      const systemMsg = {
        role: "system",
        content: `
You are a fake news detection assistant. When given a news headline or article, respond in EXACT format:

Your Analysis: <very short and precise explanation based on factual accuracy, plausibility, verifiability, contradictory info, source reliability, propaganda/bias, satire/parody, misleading headlines, and Indian laws where applicable. Mention baseless claims if any.>
Fake News Verdict: (Yes / No / Submit news to database for credibility)

Do NOT provide citations, origins, or extra text. Always keep it concise.
        `,
      };

      const chatHistory = messages.map((m) => ({
        role: m.from === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const response = await client.chat.completions.create({
        model: "openai/gpt-oss-20b",
        messages: [systemMsg, ...chatHistory, { role: "user", content: text }],
        temperature: 0.3,
      });

      const rawReply =
        response?.choices?.[0]?.message?.content?.trim() ||
        "Your Analysis: Unable to analyze. Fake News Verdict: Submit news to database for credibility";

      const botMsg = { id: Date.now().toString(), text: rawReply, from: "bot" };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((m) => [
        ...m,
        {
          id: Date.now().toString(),
          text: "Your Analysis: Error connecting to API. Fake News Verdict: Submit news to database for credibility",
          from: "bot",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-6 text-white">
      <div className="w-full max-w-3xl flex flex-col border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        {/* Chat messages */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-800"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-[75%] shadow-lg break-words ${
                  m.from === "user"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {sending && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-100 px-5 py-3 rounded-2xl shadow-lg animate-pulse">
                🤖 Checking news...
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="flex border-t border-gray-700 bg-gray-900 p-4 items-center space-x-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Paste a news headline or article..."
            rows={1}
            className="flex-1 resize-none rounded-xl bg-gray-800 border border-gray-600 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <button
            onClick={handleSend}
            disabled={sending}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white shadow-md transition-all duration-200"
          >
            Send
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Your privacy is protected. No data is stored permanently.
      </p>
    </div>
  );
};

export default Chat;
