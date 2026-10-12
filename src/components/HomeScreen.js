import Benefits from "./HomeScreen/Benefits";
import Clients from "./HomeScreen/Clients";
import Hero from "./HomeScreen/Hero";
import Offer from "./HomeScreen/Offer";
import Proof from "./HomeScreen/Proof";
import ScreenWrapper from "./ScreenWrapper";

const HomeScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <Hero />
        <Offer />
        <Proof />
        <Benefits />
        <Clients />
      </ScreenWrapper>
    </>
  );
};

export default HomeScreen;
