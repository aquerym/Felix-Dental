import { useLayoutEffect } from "react";
import i18n from "@/i18n/i18n";
import { LandingContent } from "./LandingContent";

/** Russian page — isolated. Edit here without affecting HE/EN. */
export function RuPage() {
  useLayoutEffect(() => {
    i18n.changeLanguage("ru");
  }, []);
  return <LandingContent />;
}
