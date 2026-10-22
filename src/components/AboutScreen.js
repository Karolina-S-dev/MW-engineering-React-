import HowWeWork from "./AboutScreen/HowWeWork";
import Industries from "./AboutScreen/Industries";
import Value from "./AboutScreen/Value";
import WhyUs from "./AboutScreen/WhyUs";
import ScreenWrapper from "./ScreenWrapper";

const AboutScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <WhyUs />
        <Industries />
        <HowWeWork />
        <Value />
      </ScreenWrapper>
    </>
  );
};

export default AboutScreen;
