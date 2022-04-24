import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: require("./Constants/language/en.json"),
    },
    tr: {
      translation: require("./Constants/language/tr.json"),
    },
    fr: {
      translation: require("./Constants/language/fr.json"),
    },
  },
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

// i18n.languages = ['en', 'tr'];

export default i18n;
