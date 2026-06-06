import Desktop from "@/imports/Desktop5";
import KeyAdvantagesBento from "@/app/components/KeyAdvantagesBento";
import ValueForBusiness from "@/app/components/ValueForBusiness";
import { showKeyAdvantagesSection, showTroubleshootingSection } from "@/app/landingConfig";
import Troubleshooting from "@/imports/Troubleshooting";
import WorkflowMetrics from "@/imports/WorkflowMetrics";
import FAQSection from "@/app/components/FAQSection";
import CtaFooter from "@/imports/CtaFooter";
import { ContactSection } from "@/app/components/ContactSection";
import { ScaledContainer } from "@/app/components/ScaledContainer";

/** Shared landing content — sections and layout. Each language page can customize or replace. */
export function LandingContent() {
  return (
    <ScaledContainer>
      <div className="min-h-screen overflow-visible bg-gradient-to-b from-[#e6efff] to-white">
        <Desktop />
        {showKeyAdvantagesSection ? <KeyAdvantagesBento /> : null}
        <ValueForBusiness />
        {showTroubleshootingSection ? <Troubleshooting /> : null}
        <WorkflowMetrics />
        <FAQSection />
        <ContactSection />
        <CtaFooter />
      </div>
    </ScaledContainer>
  );
}
