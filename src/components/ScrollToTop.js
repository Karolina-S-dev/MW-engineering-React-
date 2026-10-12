import { useEffect, useState } from "react";

const ScrollToTop = ({ headerRef }) => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll); //utrzymuje nasłuchiwanie zdarzenia przez przeglądarkę
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        className={`scroll-top ${isVisible ? "visible" : ""}`}
        onClick={handleScrollToTop}
      >
        <ion-icon name="arrow-up-outline"></ion-icon>
      </button>
    </>
  );
};

export default ScrollToTop;
