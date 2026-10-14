import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import plHomeScreen from "./locales/pl/homescreen.json";
import enHomeScreen from "./locales/en/homescreen.json";
import deHomeScreen from "./locales/de/homescreen.json";
import plCommon from "./locales/pl/common.json";
import enCommon from "./locales/en/common.json";
import deCommon from "./locales/de/common.json";
import plAbout from "./locales/pl/about.json";
import enAbout from "./locales/en/about.json";
import deAbout from "./locales/de/about.json";
import plProjects from "./locales/pl/projects.json";
import enProjects from "./locales/en/projects.json";
import deProjects from "./locales/de/projects.json";
import plContact from "./locales/pl/contact.json";
import enContact from "./locales/en/contact.json";
import deContact from "./locales/de/contact.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        home: plHomeScreen,
        common: plCommon,
        about: plAbout,
        projects: plProjects,
        contact: plContact,
      },
      de: {
        home: deHomeScreen,
        common: deCommon,
        about: deAbout,
        projects: deProjects,
        contact: deContact,
      },
      en: {
        home: enHomeScreen,
        common: enCommon,
        about: enAbout,
        projects: enProjects,
        contact: enContact,
      },
    },
    fallbackLng: "pl",
    supportedLngs: ["pl", "en", "de"],
    interpolation: {
      escapeValue: false,
    },
    defaultNs: "home",
    ns: ["home", "common", "about", "projects", "contact"],
  });

export default i18n;
