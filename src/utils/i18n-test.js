import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: false,
  lng: "cimode",
  fallbackLng: "en",
  appendNamespaceToCIMode: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {},
    es: {},
  },
});

export default i18n;
