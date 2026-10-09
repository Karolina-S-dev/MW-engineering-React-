import { useState } from "react";
import DesktopNav from "./HomeScreen/Nav/DesktopNav";
import MobileNav from "./HomeScreen/Nav/MobileNav";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // mobile nav opening
  const handleMobileNavOpen = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <DesktopNav isMobileNavOpen={isMobileNavOpen} />
      <button onClick={handleMobileNavOpen} className="hamburger-button">
        <ion-icon
          name={isMobileNavOpen ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </button>
    </>
  );
};

export default Header;
