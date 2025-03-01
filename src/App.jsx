import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing"; // Comment this line
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[6rem] lg:pt-[8rem] xl:pt-[10rem] overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        {/* <Pricing /> // Comment this line */}
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
