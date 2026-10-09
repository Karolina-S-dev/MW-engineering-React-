import footerLogo from "../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-main-div-row">
        <img
          src={footerLogo}
          alt="MW-Engineering - instalacje elektryczne"
          loading="lazy"
        />

        <div className="footer-contact-and-map-data-row">
          <div className="flex-col footer-data">
            <div className="footer-contact-data flex-col">
              <p className="company-data">Dane firmy</p>
              <p className="company-name">MW-Engineering Mariusz Wąchocki</p>
            </div>

            <div className="footer-ion-icon-and-data-row">
              <ion-icon name="location-outline"></ion-icon>
              <div className="footer-menu-text">
                <address>
                  <p>ul. Spacerowa 10H/2</p>
                  <p>26-052 Zagrody</p>
                </address>
              </div>
            </div>

            <div className="footer-ion-icon-and-data-row">
              <ion-icon name="business-outline"></ion-icon>
              <div className="footer-menu-text">
                <p>NIP: 6572847203</p>
                <p>REGON: 542543502</p>
              </div>
            </div>
          </div>
          <div className="flex-col footer-data">
            <div className="footer-contact-data">
              <p className="company-data">Dane kontaktowe</p>
            </div>
            <div className="footer-ion-icon-and-data-row">
              <ion-icon name="call-outline"></ion-icon>
              <div className="footer-menu-text">
                <p>
                  tel.{" "}<a href="tel:+48695413382">+48 695 413 382</a>
                </p>
              </div>
            </div>

            <div className="footer-ion-icon-and-data-row">
              <ion-icon name="mail-outline"></ion-icon>
              <div className="footer-menu-text">
                <p>
                  email:{" "}
                  <a href="mailto:biuro@mw-engineering.pl">
                    biuro@mw-engineering.pl
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67592.2203266502!2d20.58913883477503!3d50.86295589423068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717862fe4188845%3A0x3804630dd9b9de70!2sSpacerowa%2010H%2F2%2C%2026-052%20Zagrody!5e1!3m2!1spl!2spl!4v1782246513320!5m2!1spl!2spl"
              title="Lokalizacja MW-Engineering na mapie Google"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          2026 © Wszystkie prawa zastrzeżone
          <span> | </span>
          <a href="/privacy-policy">Polityka prywatności</a>
          <span> | </span>Projekt i wykonanie:{" "}
          <a href="https://www.linkedin.com/in/karolina-s-123bb238b/">
            Karolina Szary
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
