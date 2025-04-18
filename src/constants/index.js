import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  // discord,
  discordBlack,
  facebook,
  // figma,
  file02,
  // framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  // notion,
  photoshop,
  plusSquare,
  // protopie,
  // raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  // slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "/",
  },
  // {
  //   id: "1",
  //   title: "Pricing",
  //   url: "#pricing",
  // }, // Comment this block
  {
    id: "2",
    title: "How to use",
    url: "/",
  },
  {
    id: "3",
    title: "FAQ", // Changed from Roadmap
    url: "/", // Changed from #roadmap
  },
  {
    id: "6",
    title: "Upload",
    url: "/upload",
    // onlyMobile: true,
  },
  {
    id: "4",
    title: "New account",
    url: "/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Save our whatsapp number",
  "Send us a message",
  "Get your answer",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "In today's digital world, scams and misinformation are spreading faster than ever. From fake job offers to deepfake videos and fraudulent investment schemes, millions of people are falling victim to digital deception. Our AI-powered WhatsApp bot is here to protect you!";

export const collabContent = [
  {
    id: "0",
    title: "Stay Safe, Stay Smart!",
  },
  {
    id: "1",
    title: "Powered by AI & LLMs",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

// export const collabApps = [
//   {
//     id: "0",
//     title: "Figma",
//     icon: figma,
//     width: 26,
//     height: 36,
//   },
//   {
//     id: "1",
//     title: "Notion",
//     icon: notion,
//     width: 34,
//     height: 36,
//   },
//   {
//     id: "2",
//     title: "Discord",
//     icon: discord,
//     width: 36,
//     height: 28,
//   },
//   {
//     id: "3",
//     title: "Slack",
//     icon: slack,
//     width: 34,
//     height: 35,
//   },
//   {
//     id: "4",
//     title: "Photoshop",
//     icon: photoshop,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "5",
//     title: "Protopie",
//     icon: protopie,
//     width: 34,
//     height: 34,
//   },
//   {
//     id: "6",
//     title: "Framer",
//     icon: framer,
//     width: 26,
//     height: 34,
//   },
//   {
//     id: "7",
//     title: "Raindrop",
//     icon: raindrop,
//     width: 38,
//     height: 32,
//   },
// ];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Fake News Detection",
    text: "Forward any message, news article, or job offer to D-tox on WhatsApp, and it will verify its authenticity using AI.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Phising & Scam Detection",
    text: "Get real-time alerts for phishing attempts and scams. D-tox will analyze messages and links to identify potential threats.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Contribute to a Safer Internete",
    text: "Help stop misinformation at its source by debunking fake news and scams.Make social media and WhatsApp groups more reliable with AI-verified facts.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Prevent Fraud Before Its Too Late",
    text: "Dont get trapped in fake government schemes, false scholarship offers, or job scams.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Verified & Trusted Sources",
    text: "Cross-checks news, job posts, and investment offers with official government data, news agencies, and AI-driven analysis.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: " Super Easy to Use – Just WhatsApp It!",
    text: "No need to download an app! Just forward any message, image, or video to D-tox on WhatsApp.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
