import imgVisual from "../assets/trouble-visual-panel.png";
import { CalendarDays, Link2, MessageCircle, Users, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

const FEATURE_CARD_HOVER = "group relative cursor-pointer border border-solid border-transparent transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[#dce8ff] hover:shadow-[2px_8px_14px_0px_rgba(168,168,168,0.16)]";

const FEATURES: { icon: LucideIcon; titleKey: string; descKey: string; bg: string; iconBg: string }[] = [
  { icon: MessageCircle, titleKey: "trouble.instant.title", descKey: "trouble.instant.desc", bg: "bg-[#e8f1ff]", iconBg: "bg-[#c5d9fc]" },
  { icon: Users, titleKey: "trouble.lessLoad.title", descKey: "trouble.lessLoad.desc", bg: "bg-[#e8f5ee]", iconBg: "bg-[#b8e0c8]" },
  { icon: CalendarDays, titleKey: "trouble.scheduling.title", descKey: "trouble.scheduling.descCard", bg: "bg-[#e8f5ee]", iconBg: "bg-[#b8e0c8]" },
  { icon: Link2, titleKey: "trouble.crm.title", descKey: "trouble.crm.desc", bg: "bg-[#e8f1ff]", iconBg: "bg-[#c5d9fc]" },
];

function FeatureCard({ icon: Icon, titleKey, descKey, bg, iconBg }: (typeof FEATURES)[number]) {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`flex flex-col gap-[14px] rounded-[24px] p-[20px] md:p-[24px] ${bg} ${FEATURE_CARD_HOVER} ${layout.textAlign}`}>
      <div className={`flex size-[44px] items-center justify-center rounded-[14px] ${iconBg} transition-transform duration-300 group-hover:scale-105`}>
        <Icon className="size-[22px] text-[#4f5e7b]" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-['Rubik',sans-serif] text-[16px] font-semibold leading-snug text-[#2d3a52] md:text-[18px]">{t(titleKey)}</h3>
        <p className="font-['Rubik',sans-serif] text-[13px] font-normal leading-[20px] text-[#5a6b85] md:text-[14px]">{t(descKey)}</p>
      </div>
    </div>
  );
}

function VisualPanel() {
  const { t } = useTranslation();
  const layout = useLayout();
  const isRtl = layout.dir === "rtl";
  const bubbleAlign = isRtl ? "left-[100px] md:left-[130px] items-start" : "right-[100px] md:right-[130px] items-end";
  const bubbleCorner = isRtl ? "rounded-tl-[6px]" : "rounded-tr-[6px]";
  const tailPosition = isRtl ? "left-[22px]" : "right-[22px]";
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[#ddd] lg:min-h-[480px] lg:w-[42%] lg:shrink-0">
      <img alt="" className="absolute inset-0 size-full object-cover object-center" src={imgVisual} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4f5e7b]/30 via-transparent to-transparent" />
      <div className={`absolute top-[5%] z-10 flex max-w-[230px] flex-col gap-[8px] md:top-[7%] md:max-w-[272px] ${bubbleAlign}`}>
        <div className={`flex items-center gap-[6px] rounded-full border border-white/40 bg-white/25 px-[8px] py-[3px] shadow-[0_4px_20px_rgba(0,0,0,0.14)] backdrop-blur-md ${isRtl ? "" : "flex-row-reverse"}`}>
          <div className="flex size-[26px] shrink-0 items-center justify-center rounded-full shadow-[0_2px_8px_rgba(42,97,201,0.3)]" style={{ backgroundImage: "linear-gradient(117.66deg, rgba(137, 191, 253, 0.64) 10.73%, rgba(78, 133, 221, 0.554) 70.44%, rgba(42, 97, 201, 0.5) 108.23%)" }}>
            <span className="font-['Rubik',sans-serif] text-[11px] font-bold text-white">F</span>
          </div>
          <span className="font-['Rubik',sans-serif] text-[12px] font-semibold text-[#2a4f8f] md:text-[13px]">Felix</span>
        </div>
        <div className="relative">
          <div className={`rounded-[18px] bg-white px-[14px] py-[11px] shadow-[0_10px_28px_rgba(79,94,123,0.22)] md:px-[16px] md:py-[13px] ${bubbleCorner}`}>
            <p className={`font-['Rubik',sans-serif] text-[13px] font-normal leading-[20px] text-[#4f5e7b] md:text-[14px] ${layout.textAlign}`}>{t("trouble.visual.chat")}</p>
          </div>
          <div className={`absolute -bottom-[5px] ${tailPosition} size-[10px] rotate-45 bg-white shadow-[2px_2px_4px_rgba(79,94,123,0.08)]`} />
        </div>
      </div>
    </div>
  );
}

export default function Troubleshooting() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div id="pricing" className="bg-white content-stretch flex flex-col gap-[40px] md:gap-[50px] items-center px-[20px] md:px-[50px] py-[50px] md:py-[80px] relative size-full scroll-mt-[120px]" data-name="Troubleshooting" dir={layout.dir}>
      <div className="flex w-full max-w-[900px] flex-col items-center gap-[14px] md:gap-[16px] text-center">
        <h2 className="font-['Rubik',sans-serif] text-[26px] font-semibold leading-[1.15] text-[#2d3a52] md:text-[40px] md:leading-[1.2]">{t("trouble.title")}</h2>
        <p className="font-['Rubik',sans-serif] text-[14px] font-normal leading-normal text-[#7c96c7] md:text-[18px]">{t("trouble.subtitle")}</p>
      </div>

      <div className="w-full rounded-[30px] bg-white p-[20px] md:p-[30px]">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[30px]">
          <VisualPanel />
          <div className="grid flex-1 grid-cols-1 gap-[14px] sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.titleKey} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
