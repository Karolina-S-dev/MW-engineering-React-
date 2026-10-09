import HowWeWork from "./AboutScreen/HowWeWork";
import Industries from "./AboutScreen/Industries";
import Value from "./AboutScreen/Value";
import WhyUs from "./AboutScreen/WhyUs";
import Footer from "./Footer";
import Header from "./Header";
import "../assets/css/about.css";
import "../assets/css/queries.css";
import "../assets/css/about-queries.css";

const AboutScreen = () => {
  return (
    <>
      <Header />
      <WhyUs />
      <Industries />
      <HowWeWork />
      <Value />
      <Footer />
    </>
  );
};

export default AboutScreen;
