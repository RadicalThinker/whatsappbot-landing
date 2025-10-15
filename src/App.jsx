import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import DeepfakeDetector from "./components/Test";
import Chat from "./pages/Chat";

const App = () => {
  console.log("✅ App component is rendering...");

  return (
    <>
      <Header />
      <div className="pt-[6rem] lg:pt-[8rem] xl:pt-[5rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/upload" element={<DeepfakeDetector />} /> */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
