import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HePage, EnPage, RuPage } from "@/pages";

export default function App() {
  const { i18n } = useTranslation();
  // Sync document dir and lang when language changes — fixes layout for EN/RU (LTR) vs HE (RTL)
  useEffect(() => {
    const dir = i18n.language === "he" ? "rtl" : "ltr";
    const lang = i18n.language === "he" ? "he" : i18n.language === "ru" ? "ru" : "en";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return (
    <BrowserRouter basename="/Felix-Dental">
      <Routes>
        <Route path="/he" element={<HePage />} />
        <Route path="/en" element={<EnPage />} />
        <Route path="/ru" element={<RuPage />} />
        <Route path="/" element={<Navigate to="/he" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
