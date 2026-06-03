import { useTranslation } from "react-i18next";
import { heLayout } from "./he";
import { enLayout } from "./en";
import { ruLayout } from "./ru";

const layouts = { he: heLayout, en: enLayout, ru: ruLayout } as const;

export type Layout = typeof heLayout;

export function useLayout(): Layout {
  const { i18n } = useTranslation();
  const lang = (i18n.language === "he" || i18n.language === "en" || i18n.language === "ru")
    ? i18n.language
    : "en";
  return layouts[lang];
}

/** Body/UI font class for the active locale (Montserrat for RU, Rubik otherwise). */
export function useFontClass(): string {
  return useLayout().fontSans;
}
