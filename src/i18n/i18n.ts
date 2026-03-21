import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import he from "./he.json";
import en from "./en.json";
import ru from "./ru.json";

// Initialize i18next with bundled translations
i18n.use(initReactI18next).init({
  resources: { he: { translation: he }, en: { translation: en }, ru: { translation: ru } },
  lng: "he",
  fallbackLng: "he",
  interpolation: { escapeValue: false },
});

export default i18n;
