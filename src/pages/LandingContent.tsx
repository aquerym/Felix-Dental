import Desktop from "@/imports/Desktop5";
import KeyAdvantages from "@/imports/KeyAdvantages";
import ValueForBusiness from "@/app/components/ValueForBusiness";
import { WaitingListFeature } from "@/app/components/WaitingListFeature";
import IntegrationsWhyUs from "@/imports/IntegrationsWhyUs";
import CtaFooter from "@/imports/CtaFooter";
import { ScaledContainer } from "@/app/components/ScaledContainer";

/** Shared landing content — sections and layout. Each language page can customize or replace. */
export function LandingContent() {
  return (
    <ScaledContainer>
      <div className="min-h-screen bg-gradient-to-b from-[#e6efff] to-white">
        <Desktop />
        <KeyAdvantages />
        <ValueForBusiness />
        <WaitingListFeature />
        <IntegrationsWhyUs />
        <CtaFooter />
      </div>
    </ScaledContainer>
  );
}
