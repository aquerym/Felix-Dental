import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { cn } from "@/app/components/ui/utils";

const VALUE_EASE = "duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
const CARD_SHELL = "group relative flex cursor-pointer flex-col overflow-hidden rounded-[30px] bg-white border-2 border-solid border-[#eef2f8] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] transition-[transform_2.2s_cubic-bezier(0.16,1,0.3,1),box-shadow_0.9s_cubic-bezier(0.22,1,0.36,1),border-color_0.9s_cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[4px] hover:border-[#e8edf5] hover:shadow-[2px_8px_14px_0px_rgba(168,168,168,0.2)]";

function ValueCardHoverOverlay({ className = "" }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100", VALUE_EASE, className)} />;
}

function FollowUpVisual() {
  const { t } = useTranslation();
  const rows = [
    { titleKey: "value.card1.visual.row1Title", subKey: "value.card1.visual.row1Sub", active: true },
    { titleKey: "value.card1.visual.row2Title", subKey: "value.card1.visual.row2Sub", success: true },
    { titleKey: "value.card1.visual.row3Title", subKey: "value.card1.visual.row3Sub", active: false },
  ] as const;
  return (
    <div className="flex h-full w-full items-center justify-center p-[20px] md:p-[24px]">
      <div className={cn("flex w-full max-w-[300px] flex-col gap-[8px] rounded-[20px] border border-[#e0ebfc] bg-white/90 p-[14px] shadow-[0_8px_24px_rgba(112,151,226,0.12)] transition-[transform,box-shadow] group-hover:scale-[1.03] group-hover:shadow-[0_12px_32px_rgba(112,151,226,0.2)]", VALUE_EASE)}>
        <div className="flex items-center justify-between gap-[8px]">
          <span className="font-['Rubik',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#5980cc]">{t("value.card1.visual.header")}</span>
          <span className="rounded-[999px] bg-[#5980cc] px-[8px] py-[2px] font-['Rubik',sans-serif] text-[10px] font-semibold text-white">{t("value.card1.visual.agent")}</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          {rows.map(({ titleKey, subKey, active, success }) => (
            <div key={titleKey} className={cn("flex items-center gap-[8px] rounded-[12px] px-[10px] py-[7px] ring-1", success ? "bg-[#e8f5ee] ring-[#b8e0c8]" : active ? "bg-[#5980cc] ring-[#5980cc]" : "bg-[#f6f9ff] ring-[#e0ebfc]")}>
              <span className={cn("size-[8px] shrink-0 rounded-full", success ? "bg-[#00a878]" : active ? "bg-white" : "bg-[#b0cbfb]")} />
              <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                <span className={cn("font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight", success ? "text-[#1e6b4f]" : active ? "text-white" : "text-[#4f5e7b]")}>{t(titleKey)}</span>
                <span className={cn("font-['Rubik',sans-serif] text-[10px] leading-tight", success ? "text-[#00a878]" : active ? "text-white/80" : "text-[#7c96c7]")}>{t(subKey)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-[2px]">
          <span className="rounded-[999px] bg-[#eef4ff] px-[10px] py-[4px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#5980cc] ring-1 ring-[#d8e8ff]">{t("value.card1.visual.footer")}</span>
        </div>
      </div>
    </div>
  );
}

function CareJourneyVisual() {
  const { t } = useTranslation();
  const steps = [
    { badgeKey: "value.card2.visual.step1Badge", textKey: "value.card2.visual.step1Text", color: "bg-[#5980cc]" },
    { badgeKey: "value.card2.visual.step2Badge", textKey: "value.card2.visual.step2Text", color: "bg-[#89bffd]" },
    { badgeKey: "value.card2.visual.step3Badge", textKey: "value.card2.visual.step3Text", color: "bg-[#00a878]" },
  ] as const;
  return (
    <div className="flex h-full w-full items-center justify-center p-[20px] md:p-[24px]">
      <div className={cn("relative flex w-full max-w-[280px] flex-col gap-[10px] rounded-[20px] border border-[#e0ebfc] bg-white p-[14px] shadow-[0_8px_24px_rgba(112,151,226,0.12)] transition-[transform,box-shadow] group-hover:scale-[1.03] group-hover:shadow-[0_12px_32px_rgba(112,151,226,0.2)]", VALUE_EASE)}>
        <div className="absolute top-[28px] bottom-[28px] left-[22px] w-[2px] rounded-full bg-[#dce8ff]" aria-hidden />
        {steps.map(({ badgeKey, textKey, color }, i) => (
          <div key={badgeKey} className="relative flex items-start gap-[10px]">
            <div className={cn("relative z-10 flex size-[18px] shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white", color)}>{i + 1}</div>
            <div className="flex min-w-0 flex-1 flex-col gap-[4px] pt-[1px]">
              <span className={cn("w-fit rounded-[999px] px-[8px] py-[2px] font-['Rubik',sans-serif] text-[9px] font-semibold text-white", color)}>{t(badgeKey)}</span>
              <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-[#4f5e7b]">{t(textKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardVisual() {
  const { t } = useTranslation();
  const kpis = [
    { labelKey: "value.card3.visual.kpi1Label", valueKey: "value.card3.visual.kpi1Value", trend: "up" },
    { labelKey: "value.card3.visual.kpi2Label", valueKey: "value.card3.visual.kpi2Value", trend: "up" },
    { labelKey: "value.card3.visual.kpi3Label", valueKey: "value.card3.visual.kpi3Value", trend: "down" },
    { labelKey: "value.card3.visual.kpi4Label", valueKey: "value.card3.visual.kpi4Value", trend: "neutral" },
  ] as const;
  return (
    <div className="flex h-full w-full items-center justify-center p-[16px] md:p-[20px]">
      <div className={cn("flex w-full max-w-[300px] flex-col gap-[8px] rounded-[20px] border border-[#e0ebfc] bg-white p-[12px] shadow-[0_8px_24px_rgba(112,151,226,0.12)] transition-[transform,box-shadow] group-hover:scale-[1.03] group-hover:shadow-[0_12px_32px_rgba(112,151,226,0.2)]", VALUE_EASE)}>
        <div className="flex items-center justify-between gap-[8px]">
          <span className="font-['Rubik',sans-serif] text-[12px] font-semibold text-[#4f5e7b]">{t("value.card3.visual.title")}</span>
          <span className="flex items-center gap-[4px] rounded-[999px] bg-[#e8f5ee] px-[8px] py-[2px]">
            <span className="size-[6px] rounded-full bg-[#00a878] animate-pulse" />
            <span className="font-['Rubik',sans-serif] text-[9px] font-semibold text-[#00a878]">{t("value.card3.visual.live")}</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[6px]">
          {kpis.map(({ labelKey, valueKey, trend }) => (
            <div key={labelKey} className="rounded-[10px] bg-[#f6f9ff] px-[8px] py-[6px] ring-1 ring-[#e8edf5]">
              <p className="font-['Rubik',sans-serif] text-[9px] font-medium text-[#7c96c7]">{t(labelKey)}</p>
              <p className={cn("font-['Rubik',sans-serif] text-[16px] font-semibold leading-tight", trend === "down" ? "text-[#00a878]" : "text-[#5980cc]")}>{t(valueKey)}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[10px] bg-gradient-to-r from-[#eef4ff] to-[#f6f9ff] px-[10px] py-[7px] ring-1 ring-[#d8e8ff]">
          <p className="font-['Rubik',sans-serif] text-[9px] font-semibold leading-tight text-[#5980cc]">💡 {t("value.card3.visual.insight")}</p>
        </div>
      </div>
    </div>
  );
}

function EmpathyVisual() {
  const { t } = useTranslation();
  const layout = useLayout();
  const isRtl = layout.dir === "rtl";
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-[14px] md:p-[18px]">
      <div className="pointer-events-none absolute left-[8%] top-[20%] size-[100px] rounded-full bg-[#ffc9d4]/25 blur-[32px]" />
      <div className={cn("relative w-full max-w-[300px] transition-[transform,box-shadow] group-hover:scale-[1.02]", VALUE_EASE)}>
        <div className="overflow-hidden rounded-[18px] border border-[#f0e0e8] bg-white shadow-[0_10px_28px_rgba(89,128,204,0.14)]">
          <div className="flex items-center gap-[8px] border-b border-[#fdf0f4] bg-gradient-to-r from-[#fff5f7] to-[#f6f9ff] px-[12px] py-[10px]">
            <div className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5980cc] to-[#7c96c7]">
              <span className="text-[14px]" aria-hidden>💙</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-[#4f5e7b]">{t("value.card4.visual.header")}</span>
              <span className="font-['Rubik',sans-serif] text-[8px] font-semibold tracking-wide text-[#c97b8f]">{t("value.card4.visual.tone")}</span>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] bg-[#fafbfd] p-[10px]">
            <div className={cn("max-w-[88%] rounded-[12px] bg-white px-[9px] py-[6px] shadow-[0_1px_4px_rgba(168,168,168,0.12)] ring-1 ring-[#eef2f8]", isRtl ? "self-end rounded-tr-[4px]" : "self-start rounded-tl-[4px]")}>
              <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-[#4f5e7b]">{t("value.card4.visual.msgPatient1")}</p>
            </div>
            <div className={cn("max-w-[92%] rounded-[12px] bg-gradient-to-br from-[#5980cc] to-[#4a6fb5] px-[9px] py-[6px]", isRtl ? "self-start rounded-tl-[4px]" : "self-end rounded-tr-[4px]")}>
              <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card4.visual.msgBot1")}</p>
            </div>
            <div className={cn("max-w-[88%] rounded-[12px] bg-white px-[9px] py-[6px] shadow-[0_1px_4px_rgba(168,168,168,0.12)] ring-1 ring-[#eef2f8]", isRtl ? "self-end rounded-tr-[4px]" : "self-start rounded-tl-[4px]")}>
              <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-[#4f5e7b]">{t("value.card4.visual.msgPatient2")}</p>
            </div>
            <div className={cn("max-w-[92%] rounded-[12px] bg-gradient-to-br from-[#5980cc] to-[#4a6fb5] px-[9px] py-[6px]", isRtl ? "self-start rounded-tl-[4px]" : "self-end rounded-tr-[4px]")}>
              <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card4.visual.msgBot2")}</p>
            </div>
            <div className="flex justify-center gap-[6px] pt-[2px]">
              <span className="rounded-[999px] bg-[#fff0f3] px-[10px] py-[4px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#c97b8f] ring-1 ring-[#ffd6e0]">{t("value.card4.visual.tone")}</span>
              <span className="rounded-[999px] bg-[#eef4ff] px-[10px] py-[4px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#5980cc] ring-1 ring-[#d8e8ff]">{t("value.card4.visual.escalate")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ numKey, titleKey, descKey, visual }: { numKey: string; titleKey: string; descKey: string; visual: React.ReactNode }) {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <article className={CARD_SHELL}>
      <ValueCardHoverOverlay className="bg-[#d8e8ff]/20" />
      <div className="relative z-10 flex h-[200px] items-center justify-center overflow-hidden bg-[#f6f9ff] transition-colors group-hover:bg-[#eef4ff] md:h-[256px]">{visual}</div>
      <div className={cn("relative z-10 flex flex-col gap-[12px] p-[24px] md:p-[32px]", layout.textAlign)} dir={layout.dir}>
        <span className={cn("font-['Rubik',sans-serif] text-[16px] font-medium text-[#7c96c7] transition-colors", VALUE_EASE, "group-hover:text-[#5980cc]")}>{t(numKey)}</span>
        <h3 className={cn("font-['Rubik',sans-serif] text-[20px] font-semibold leading-normal text-[#4f5e7b] transition-colors md:text-[24px]", VALUE_EASE, "group-hover:text-[#3e5f9a]")}>{t(titleKey)}</h3>
        <p className="font-['Rubik',sans-serif] text-[16px] font-normal leading-[22px] text-[#7c96c7]">{t(descKey)}</p>
      </div>
    </article>
  );
}

const VALUE_CARDS = [
  { numKey: "value.card1.num", titleKey: "value.card1.title", descKey: "value.card1.desc", Visual: FollowUpVisual },
  { numKey: "value.card2.num", titleKey: "value.card2.title", descKey: "value.card2.desc", Visual: CareJourneyVisual },
  { numKey: "value.card3.num", titleKey: "value.card3.title", descKey: "value.card3.desc", Visual: DashboardVisual },
  { numKey: "value.card4.num", titleKey: "value.card4.title", descKey: "value.card4.desc", Visual: EmpathyVisual },
] as const;

export default function ValueForBusiness() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <section id="use-cases" className="relative w-full scroll-mt-[120px] bg-white px-[20px] py-[50px] md:px-[50px] md:py-[100px]" data-name="ValueForBusiness" dir={layout.dir}>
      <div className="flex w-full flex-col gap-[40px] md:gap-[60px]">
        <h2 className={cn("font-['Rubik',sans-serif] text-[32px] font-semibold leading-normal text-[#4f5e7b] md:text-[48px]", layout.textAlign)}>{t("value.title")}</h2>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {VALUE_CARDS.map(({ numKey, titleKey, descKey, Visual }) => (
            <ValueCard key={numKey} numKey={numKey} titleKey={titleKey} descKey={descKey} visual={<Visual />} />
          ))}
        </div>
      </div>
    </section>
  );
}
