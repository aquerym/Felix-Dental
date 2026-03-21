import { useLayoutEffect } from "react";
import i18n from "@/i18n/i18n";
import { LandingContent } from "./LandingContent";

/** Hebrew page — isolated. Edit here without affecting EN/RU. */
export function HePage() {
  useLayoutEffect(() => {
    i18n.changeLanguage("he");
  }, []);
  return <LandingContent />;
}
