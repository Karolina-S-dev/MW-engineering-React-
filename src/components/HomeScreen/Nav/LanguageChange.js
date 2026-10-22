import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const { i18n } = useTranslation("common");
  const isActiveLanguagePL = i18n.resolvedLanguage === "pl";
  const isActiveLanguageEN = i18n.resolvedLanguage === "en";
  const isActiveLanguageDE = i18n.resolvedLanguage === "de";

  return (
    <>
      <div className="language-change-buttons flex-row">
        <button
          className={`language-change ${isActiveLanguagePL ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("pl")}
        >
          <ReactCountryFlag countryCode="PL" svg className="emoji-flag" />
          PL
        </button>

        <button
          className={`language-change ${isActiveLanguageDE ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("de")}
        >
          <ReactCountryFlag countryCode="DE" svg className="emoji-flag" />
          DE
        </button>

        <button
          className={`language-change ${isActiveLanguageEN ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("en")}
        >
          <ReactCountryFlag countryCode="GB" svg className="emoji-flag" />
          EN
        </button>
      </div>
    </>
  );
};

export default LanguageChange;
