import { useLayoutEffect } from "react";
import i18n from "@/i18n/i18n";
import { LandingContent } from "./LandingContent";

/** English page — isolated. Edit here without affecting HE/RU. */
export function EnPage() {
  useLayoutEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return <LandingContent />;
}
