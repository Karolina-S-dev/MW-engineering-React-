import Footer from "./Footer";
import Header from "./Header";
import Benefits from "./HomeScreen/Benefits";
import Clients from "./HomeScreen/Clients";
import Hero from "./HomeScreen/Hero";
import Offer from "./HomeScreen/Offer";
import Proof from "./HomeScreen/Proof";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Offer/>
      <Proof/>
      <Benefits/>
      <Clients/>
      <Footer/>
    </>
  );
};

export default HomeScreen;
