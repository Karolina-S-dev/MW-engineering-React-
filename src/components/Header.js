import HeaderLogo from "../assets/img/header-logo.png";

const Header = () => {
  return (
    <header className="flex-row">
      <a href="index.html" className="header-brand-col flex-col">
        <img src={HeaderLogo} alt="MW-Engineering - instalacje elektryczne" />
        <p className="header-tagline">
          ELECTRICAL INSTALLATIONS | LIGHTING | INDUSTRY
        </p>
      </a>
      <nav>
        <ul className="nav-links flex-row">
          <li>
            <a href="index.html" className="nav-button nav-button--secondary">
              <span>STRONA GŁÓWNA</span>
            </a>
          </li>
          <li>
            <a href="about.html" className="nav-button nav-button--secondary">
              <span>O FIRMIE</span>
            </a>
          </li>
          <li>
            <a
              href="projects.html"
              className="nav-button nav-button--secondary"
            >
              <span>REALIZACJE</span>
            </a>
          </li>
          <li>
            <a href="contact.html" className="nav-button nav-button--primary">
              <span>KONTAKT</span>
            </a>
          </li>
        </ul>
        <ion-icon id="nav-burger" name="reorder-three"></ion-icon>
      </nav>
    </header>
  );
};

export default Header;
