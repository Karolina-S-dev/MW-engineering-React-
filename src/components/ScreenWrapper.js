import { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const ScreenWrapper = ({ children }) => {
  const headerRef = useRef(null);

  return (
    <>
      <Header headerRef={headerRef} />
      {children}
      <Footer />
      <ScrollToTop headerRef={headerRef}/>
    </>
  );
};

export default ScreenWrapper;
