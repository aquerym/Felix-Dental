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
  return (
    <div className="flex h-full w-full items-center justify-center p-[20px] md:p-[24px]">
      <div className={cn("flex w-full max-w-[300px] flex-col gap-[8px] rounded-[20px] border border-[#e0ebfc] bg-white/90 p-[14px] shadow-[0_8px_24px_rgba(112,151,226,0.12)] transition-[transform,box-shadow] group-hover:scale-[1.03] group-hover:shadow-[0_12px_32px_rgba(112,151,226,0.2)]", VALUE_EASE)}>
        <div className="flex items-center justify-between gap-[8px]">
          <span className="font-['Rubik',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#5980cc]">{t("value.card1.visual.crm")}</span>
          <span className="rounded-[999px] bg-[#5980cc] px-[8px] py-[2px] font-['Rubik',sans-serif] text-[10px] font-semibold text-white">{t("value.card1.visual.agent")}</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[8px] rounded-[12px] bg-[#5980cc] px-[10px] py-[7px]">
            <span className="size-[8px] shrink-0 rounded-full bg-white" />
            <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-white">{t("value.card1.visual.row1Title")}</span>
              <span className="font-['Rubik',sans-serif] text-[10px] leading-tight text-white/80">{t("value.card1.visual.row1Sub")}</span>
            </div>
          </div>
          <div className="flex items-center gap-[8px] rounded-[12px] bg-[#f6f9ff] px-[10px] py-[7px] ring-1 ring-[#e0ebfc]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#b0cbfb]" />
            <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-[#4f5e7b]">{t("value.card1.visual.row2Title")}</span>
              <span className="font-['Rubik',sans-serif] text-[10px] leading-tight text-[#7c96c7]">{t("value.card1.visual.row2Sub")}</span>
            </div>
          </div>
          <div className="flex items-center gap-[8px] rounded-[12px] bg-[#eef4ff] px-[10px] py-[7px] ring-1 ring-[#d8e8ff]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#5980cc]" />
            <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-[#5980cc]">{t("value.card1.visual.row3Title")}</span>
              <span className="font-['Rubik',sans-serif] text-[10px] leading-tight text-[#7c96c7]">{t("value.card1.visual.row3Sub")}</span>
            </div>
          </div>
          <div className="flex items-center gap-[8px] rounded-[12px] bg-[#f6f9ff] px-[10px] py-[7px] ring-1 ring-[#e0ebfc]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#b0cbfb]" />
            <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-[#4f5e7b]">{t("value.card1.visual.row4Title")}</span>
              <span className="font-['Rubik',sans-serif] text-[10px] leading-tight text-[#7c96c7]">{t("value.card1.visual.row4Sub")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlwaysOnVisual() {
  const { t } = useTranslation();
  return (
    <div className="flex h-full w-full items-center justify-center p-[20px] md:p-[24px]">
      <div className={cn("relative flex w-full max-w-[300px] flex-col gap-[8px] rounded-[20px] border border-[#3e5f9a]/15 bg-gradient-to-b from-[#1e3a6e] to-[#2a4f8f] p-[12px] shadow-[0_12px_32px_rgba(30,58,110,0.25)] transition-[transform,box-shadow] group-hover:scale-[1.03] group-hover:shadow-[0_16px_40px_rgba(30,58,110,0.35)]", VALUE_EASE)}>
        <div className="flex items-center justify-between gap-[8px]">
          <span className="font-['Rubik',sans-serif] text-[10px] font-medium text-white/70">🌙 {t("value.card2.visual.time")}</span>
          <span className="rounded-[999px] bg-[#89bffd] px-[8px] py-[2px] font-['Rubik',sans-serif] text-[10px] font-semibold text-[#1e3a6e]">{t("value.card2.visual.badge")}</span>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="self-end max-w-[88%] rounded-[12px] rounded-tr-[4px] bg-white/15 px-[8px] py-[5px]">
            <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-white/90">{t("value.card2.visual.patient")}</p>
          </div>
          <div className="self-start max-w-[92%] rounded-[12px] rounded-tl-[4px] bg-[#5980cc] px-[8px] py-[5px]">
            <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card2.visual.bot")}</p>
          </div>
          <div className="flex items-center gap-[5px] self-start rounded-[999px] bg-white/95 px-[8px] py-[4px]">
            <span className="size-[5px] shrink-0 rounded-full bg-[#5980cc]" />
            <p className="font-['Rubik',sans-serif] text-[9px] font-semibold text-[#5980cc]">{t("value.card2.visual.booked")}</p>
          </div>
          <div className="self-end max-w-[88%] rounded-[12px] rounded-tr-[4px] bg-white/15 px-[8px] py-[5px]">
            <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-white/90">{t("value.card2.visual.cancelAsk")}</p>
          </div>
          <div className="self-start max-w-[92%] rounded-[12px] rounded-tl-[4px] bg-[#5980cc] px-[8px] py-[5px]">
            <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card2.visual.cancelBot")}</p>
          </div>
          <div className="flex flex-wrap gap-[5px] self-start">
            <span className="rounded-[999px] bg-white/95 px-[7px] py-[3px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#5980cc]">{t("value.card2.visual.cancelBadge")}</span>
            <span className="rounded-[999px] bg-[#89bffd]/90 px-[7px] py-[3px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#1e3a6e]">{t("value.card2.visual.rescheduleBadge")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FelixAgentIcon() {
  return (
    <svg className="size-[36px] shrink-0" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="18" fill="white" fillOpacity="0.2" />
      <path d="M18 9c2.8 0 5 2.2 5 5v1.2c1.4.8 2.3 2.3 2.3 4.1 0 2.6-2.1 4.7-4.7 4.7h-.6c-.4 1.5-1.7 2.5-3.2 2.5s-2.8-1-3.2-2.5h-.6c-2.6 0-4.7-2.1-4.7-4.7 0-1.8.9-3.3 2.3-4.1V14c0-2.8 2.2-5 5-5z" fill="white" fillOpacity="0.95" />
      <circle cx="14.5" cy="16" r="1.2" fill="#5980cc" />
      <circle cx="21.5" cy="16" r="1.2" fill="#5980cc" />
      <path d="M15 20.5c1 1 1.8 1.5 3 1.5s2-.5 3-1.5" stroke="#5980cc" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SyncBridge() {
  const { t } = useTranslation();
  return (
    <div className="relative flex w-[52px] shrink-0 flex-col items-center justify-center gap-[6px] bg-[#eef4ff] px-[4px]">
      <div className="absolute inset-y-[12px] left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-[#b0cbfb]/60" />
      <span className={cn("relative z-10 size-[8px] rounded-full bg-[#5980cc] transition-transform group-hover:translate-x-[3px]", VALUE_EASE)} />
      <span className={cn("relative z-10 size-[8px] rounded-full bg-[#89bffd] transition-transform group-hover:translate-x-[-3px]", VALUE_EASE)} />
      <span className={cn("relative z-10 size-[8px] rounded-full bg-[#5980cc] transition-transform group-hover:translate-x-[3px]", VALUE_EASE)} />
      <span className="relative z-10 font-['Rubik',sans-serif] text-[8px] font-bold uppercase tracking-wider text-[#5980cc] [writing-mode:vertical-rl] rotate-180">{t("value.card3.visual.sync")}</span>
    </div>
  );
}

function OptimaIntegrationVisual() {
  const { t } = useTranslation();
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-[16px] md:p-[20px]">
      <div className="pointer-events-none absolute left-[10%] top-[15%] size-[120px] rounded-full bg-[#89bffd]/25 blur-[40px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] size-[100px] rounded-full bg-[#00a878]/15 blur-[36px]" />
      <div className={cn("relative flex w-full max-w-[320px] flex-col gap-[10px] transition-[transform,box-shadow] group-hover:scale-[1.02]", VALUE_EASE)}>
        <div className="flex min-h-[148px] overflow-hidden rounded-[18px] border border-[#e0ebfc] bg-white shadow-[0_10px_28px_rgba(89,128,204,0.14)]">
          <div className="flex w-[38%] flex-col justify-between bg-gradient-to-br from-[#5980cc] to-[#3e5f9a] p-[12px]">
            <FelixAgentIcon />
            <div className="flex flex-col gap-[6px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold text-white">{t("value.card3.visual.agent")}</span>
              <div className="flex flex-col gap-[4px]">
                <span className="h-[6px] w-full rounded-full bg-white/25" />
                <span className="h-[6px] w-[70%] rounded-full bg-white/15" />
              </div>
            </div>
          </div>
          <SyncBridge />
          <div className="flex min-w-0 flex-1 flex-col gap-[8px] bg-[#f8fafc] p-[12px]">
            <div className="flex items-center gap-[8px]">
              <div className="flex size-[28px] shrink-0 items-center justify-center rounded-[8px] bg-[#00a878] font-['Rubik',sans-serif] text-[14px] font-bold text-white">O</div>
              <div className="flex min-w-0 flex-col">
                <span className="font-['Rubik',sans-serif] text-[13px] font-bold leading-tight text-[#1e3a5c]">{t("value.card3.visual.optima")}</span>
                <span className="font-['Rubik',sans-serif] text-[9px] font-medium leading-tight text-[#7c96c7]">{t("value.card3.visual.optimaSub")}</span>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] rounded-[10px] border border-[#e8edf5] bg-white p-[8px] shadow-[0_2px_8px_rgba(168,168,168,0.08)]">
              <div className="flex items-center gap-[6px]">
                <span className="size-[22px] shrink-0 rounded-full bg-[#eef4ff]" />
                <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <span className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-[#4f5e7b]">{t("value.card3.visual.patient")}</span>
                  <span className="h-[4px] w-[80%] rounded-full bg-[#eef2f8]" />
                </div>
                <span className="font-['Rubik',sans-serif] text-[12px] leading-none text-[#00a878]">✓</span>
              </div>
              <div className="flex items-center gap-[6px] rounded-[8px] bg-[#f6f9ff] px-[8px] py-[5px]">
                <svg className="size-[12px] shrink-0 text-[#5980cc]" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <rect x="1.5" y="2.5" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1" />
                  <path d="M1.5 5h9M4 1.5v2M8 1.5v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="font-['Rubik',sans-serif] text-[10px] font-medium text-[#5980cc]">{t("value.card3.visual.appt")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[8px]">
          <span className="font-['Rubik',sans-serif] text-[10px] font-medium text-[#a8b8d4] line-through decoration-[#c5d0e4]">{t("value.card3.visual.manualCards")}</span>
          <span className="flex items-center gap-[5px] rounded-[999px] bg-[#eef4ff] px-[10px] py-[5px] ring-1 ring-[#d8e8ff]">
            <span className="font-['Rubik',sans-serif] text-[11px] leading-none text-[#5980cc]">✓</span>
            <span className="font-['Rubik',sans-serif] text-[10px] font-semibold text-[#4f5e7b]">{t("value.card3.visual.autoSync")}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function SecretaryVisual() {
  const { t } = useTranslation();
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-[14px] md:p-[18px]">
      <div className="pointer-events-none absolute left-[8%] top-[20%] size-[100px] rounded-full bg-[#89bffd]/20 blur-[32px]" />
      <div className={cn("relative w-full max-w-[300px] transition-[transform,box-shadow] group-hover:scale-[1.02]", VALUE_EASE)}>
        <div className="overflow-hidden rounded-[18px] border border-[#e0ebfc] bg-white shadow-[0_10px_28px_rgba(89,128,204,0.14)]">
          <div className="flex items-center gap-[8px] border-b border-[#eef2f8] bg-[#f6f9ff] px-[12px] py-[10px]">
            <div className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5980cc] to-[#3e5f9a]">
              <svg className="size-[18px]" viewBox="0 0 36 36" fill="none" aria-hidden>
                <path d="M18 11c2 0 3.6 1.6 3.6 3.6v.8c1 .6 1.7 1.8 1.7 3.1 0 2-1.6 3.6-3.6 3.6h-.4c-.3 1.2-1.3 2-2.5 2s-2.2-.8-2.5-2h-.4c-2 0-3.6-1.6-3.6-3.6 0-1.3.7-2.5 1.7-3.1v-.8C14.4 12.6 16 11 18 11z" fill="white" />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
              <span className="font-['Rubik',sans-serif] text-[11px] font-semibold leading-tight text-[#4f5e7b]">{t("value.card4.visual.header")}</span>
              <span className="font-['Rubik',sans-serif] text-[8px] font-semibold tracking-wide text-[#7c96c7]">{t("value.card4.visual.langs")}</span>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] bg-[#fafbfd] p-[10px]">
            <div className="self-end max-w-[88%] rounded-[12px] rounded-tr-[4px] bg-white px-[9px] py-[6px] shadow-[0_1px_4px_rgba(168,168,168,0.12)] ring-1 ring-[#eef2f8]">
              <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-[#4f5e7b]">{t("value.card4.visual.msgPatient1")}</p>
            </div>
            <div className="self-start max-w-[92%] rounded-[12px] rounded-tl-[4px] bg-[#5980cc] px-[9px] py-[6px]">
              <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card4.visual.msgBot1")}</p>
            </div>
            <div className="self-end max-w-[88%] rounded-[12px] rounded-tr-[4px] bg-white px-[9px] py-[6px] shadow-[0_1px_4px_rgba(168,168,168,0.12)] ring-1 ring-[#eef2f8]">
              <p className="font-['Rubik',sans-serif] text-[10px] font-medium leading-tight text-[#4f5e7b]">{t("value.card4.visual.msgPatient2")}</p>
            </div>
            <div className="self-start max-w-[92%] rounded-[12px] rounded-tl-[4px] bg-[#5980cc] px-[9px] py-[6px]">
              <p className="font-['Rubik',sans-serif] text-[10px] font-semibold leading-tight text-white">{t("value.card4.visual.msgBot2")}</p>
            </div>
            <div className="flex justify-center pt-[2px]">
              <span className="rounded-[999px] bg-[#eef4ff] px-[10px] py-[4px] font-['Rubik',sans-serif] text-[9px] font-semibold text-[#5980cc] ring-1 ring-[#d8e8ff]">{t("value.card4.visual.leadBadge")}</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[6px] -right-[4px] flex max-w-[58%] items-center gap-[6px] rounded-[12px] border border-[#e8edf5] bg-white px-[10px] py-[8px] shadow-[0_6px_16px_rgba(89,128,204,0.15)]">
          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#eef4ff]">
            <svg className="size-[12px] text-[#5980cc]" viewBox="0 0 12 12" fill="none" aria-hidden>
              <circle cx="6" cy="4" r="2.5" stroke="currentColor" strokeWidth="1" />
              <path d="M2.5 10.5c0-2 1.6-3.5 3.5-3.5s3.5 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex min-w-0 flex-col gap-[1px]">
            <span className="font-['Rubik',sans-serif] text-[9px] font-semibold text-[#4f5e7b]">{t("value.card4.visual.team")}</span>
            <span className="font-['Rubik',sans-serif] text-[9px] font-medium text-[#5980cc]">✓ {t("value.card4.visual.focus")}</span>
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
        <p className="font-['Rubik',sans-serif] text-[16px] font-medium leading-[22px] text-[#7c96c7]">{t(descKey)}</p>
      </div>
    </article>
  );
}

const VALUE_CARDS = [
  { numKey: "value.card1.num", titleKey: "value.card1.title", descKey: "value.card1.desc", Visual: FollowUpVisual },
  { numKey: "value.card2.num", titleKey: "value.card2.title", descKey: "value.card2.desc", Visual: AlwaysOnVisual },
  { numKey: "value.card3.num", titleKey: "value.card3.title", descKey: "value.card3.desc", Visual: OptimaIntegrationVisual },
  { numKey: "value.card4.num", titleKey: "value.card4.title", descKey: "value.card4.desc", Visual: SecretaryVisual },
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
