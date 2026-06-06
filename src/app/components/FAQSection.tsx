import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const FAQ_ITEMS = [0, 1, 2, 3, 4, 5] as const;
const BADGE_GRADIENT = "linear-gradient(117.66deg, rgba(137, 191, 253, 0.64) 10.73%, rgba(78, 133, 221, 0.554) 70.44%, rgba(42, 97, 201, 0.5) 108.23%)";

export default function FAQSection() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <section id="faq" className="relative w-full scroll-mt-[120px] bg-white px-[20px] py-[50px] md:px-[50px] md:py-[100px]" data-name="FAQ" dir={layout.dir}>
      <div className="relative z-10 mx-auto w-full max-w-[720px] overflow-hidden rounded-[30px] border border-solid border-[#dce8ff] bg-white px-[20px] py-[32px] shadow-[0_8px_32px_rgba(112,151,226,0.1)] md:px-[28px] md:py-[48px]">
        <div className="relative flex w-full flex-col items-center gap-[40px] md:gap-[50px]">
        <div className="flex w-full flex-col items-center gap-[14px] md:gap-[16px] text-center">
          <div className="flex h-fit items-center justify-center overflow-clip rounded-[170px] px-[12px] py-[7px] shrink-0" style={{ backgroundImage: BADGE_GRADIENT }}>
            <span className="font-['Rubik',sans-serif] text-[14px] font-semibold leading-normal text-white whitespace-nowrap md:text-[16px]">FAQ</span>
          </div>
          <h2 className="font-['Rubik',sans-serif] text-[26px] font-semibold leading-[1.15] text-[#2d3a52] md:text-[40px] md:leading-[1.2]">{t("faq.title")}</h2>
          <p className="font-['Rubik',sans-serif] text-[14px] font-normal leading-normal text-[#7c96c7] md:text-[18px]">{t("faq.subtitle")}</p>
        </div>

        <Accordion type="single" collapsible className="flex w-full flex-col gap-[12px]">
          {FAQ_ITEMS.map((index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="overflow-hidden rounded-[24px] border border-solid border-[#dce8ff] bg-white px-[20px] shadow-[2px_4px_12px_0px_rgba(168,168,168,0.08)] last:border-b last:border-solid last:border-[#dce8ff] md:px-[24px]">
              <AccordionTrigger className={`rounded-[24px] py-[18px] font-['Rubik',sans-serif] text-[15px] font-semibold leading-snug text-[#2d3a52] hover:no-underline md:text-[17px] ${layout.textAlign}`}>
                {t(`faq.items.${index}.question`)}
              </AccordionTrigger>
              <AccordionContent className={`pb-[18px] font-['Rubik',sans-serif] text-[13px] font-normal leading-[22px] text-[#5a6b85] md:text-[15px] md:leading-[24px] ${layout.textAlign}`}>
                {t(`faq.items.${index}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      </div>
    </section>
  );
}
