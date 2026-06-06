import { useState, useEffect } from "react";
import imgSlide1 from "../assets/15c12b64f8ae214d3dbfd1a4ad28f0c3ee6817da.png";
import imgSlide2 from "../assets/8cd2b4b5ffea4585e0f8d9a7a946f2e66db544a2.png";
import imgDentalModel from "../assets/workflow-dental-model.png";
import imgFeaturedCard from "../assets/workflow-medical-tablet.png";
import imgAvatar1 from "../assets/e988e6ef720aa675113d122b1059a42df6b88463.png";
import imgAvatar2 from "../assets/7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";
import imgAvatar3 from "../assets/72b8dc871231ac78f17cd908872fabb84c9a937a.png";
import { Clock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

const BADGE_GRADIENT = "linear-gradient(117.66deg, rgba(137, 191, 253, 0.64) 10.73%, rgba(78, 133, 221, 0.554) 70.44%, rgba(42, 97, 201, 0.5) 108.23%)";
const STEP_CARD_HOVER = "group relative cursor-pointer border border-solid border-transparent transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[#e8edf5] hover:shadow-[2px_8px_14px_0px_rgba(168,168,168,0.2)]";
const SLIDE_INTERVAL_MS = 4000;

const STATS = [
  { statKey: "workflow.metric1.stat", labelKey: "workflow.metric1.title" },
  { statKey: "workflow.metric2.stat", labelKey: "workflow.metric2.title" },
  { statKey: "workflow.metric3.stat", labelKey: "workflow.metric3.title" },
] as const;

const SLIDES = [
  { image: imgSlide1, photoKey: "workflow.photo1" },
  { image: imgSlide2, photoKey: "workflow.photo2" },
  { image: imgDentalModel, photoKey: "workflow.photo3", imageClass: "object-[center_20%]" },
] as const;

const STEP_ICONS = [Clock, Users] as const;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit items-center justify-center overflow-clip rounded-[170px] px-[12px] py-[7px] shrink-0 w-fit" style={{ backgroundImage: BADGE_GRADIENT }}>
      <span className="font-['Rubik',sans-serif] text-[14px] font-semibold leading-normal text-white whitespace-nowrap md:text-[16px]">{children}</span>
    </div>
  );
}

function StatItem({ statKey, labelKey }: { statKey: string; labelKey: string }) {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`flex flex-col gap-[10px] rounded-[24px] bg-white p-[20px] shadow-[2px_4px_12px_0px_rgba(168,168,168,0.12)] ${STEP_CARD_HOVER} ${layout.textAlign}`}>
      <p className="font-['Rubik',sans-serif] text-[32px] font-semibold leading-none text-[#5980cc] md:text-[44px]">{t(statKey)}</p>
      <p className="font-['Rubik',sans-serif] text-[14px] font-medium leading-snug text-[#4f5e7b] md:text-[15px]">{t(labelKey)}</p>
    </div>
  );
}

function StepCard({ icon: Icon, titleKey, descKey }: { icon: typeof Clock; titleKey: string; descKey: string }) {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`flex flex-col gap-[14px] rounded-[24px] bg-white p-[20px] shadow-[2px_4px_12px_0px_rgba(168,168,168,0.12)] ${STEP_CARD_HOVER} ${layout.textAlign}`}>
      <div className="flex size-[44px] items-center justify-center rounded-full bg-[#e8f1ff] transition-colors duration-300 group-hover:bg-[#dce8ff]">
        <Icon className="size-[22px] text-[#5980cc] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="font-['Rubik',sans-serif] text-[16px] font-semibold leading-snug text-[#4f5e7b] transition-colors duration-300 group-hover:text-[#3e5f9a] md:text-[18px]">{t(titleKey)}</h4>
        <p className="font-['Rubik',sans-serif] text-[13px] font-normal leading-[20px] text-[#7c96c7] md:text-[14px]">{t(descKey)}</p>
      </div>
    </div>
  );
}

function WorkflowSlideshow() {
  const { t } = useTranslation();
  const layout = useLayout();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = SLIDES[activeIndex];
  const captionSide = layout.dir === "rtl" ? "right-[20px] text-right" : "left-[20px] text-left";

  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[24px] bg-[#ddd] lg:min-h-[520px] lg:w-[42%] lg:shrink-0">
      {SLIDES.map((slide, index) => (
        <img key={slide.image} alt="" src={slide.image} className={`absolute inset-0 size-full max-w-none object-cover transition-opacity duration-700 ease-in-out ${slide.imageClass ?? ""} ${index === activeIndex ? "opacity-100" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4f5e7b]/40 via-transparent to-transparent" />
      <p className={`absolute bottom-[20px] font-['Rubik',sans-serif] text-[18px] font-bold text-white md:text-[22px] ${captionSide}`}>{t(activeSlide.photoKey)}</p>
      <div className={`absolute bottom-[20px] flex gap-[6px] ${layout.dir === "rtl" ? "left-[20px]" : "right-[20px]"}`}>
        {SLIDES.map((slide, index) => (
          <button key={slide.image} type="button" aria-label={`Slide ${index + 1}`} onClick={() => setActiveIndex(index)} className={`size-[8px] rounded-full border-0 p-0 transition-colors ${index === activeIndex ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

function MetricBarChart({ label }: { label: string }) {
  const bars = [12, 18, 26, 36];
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="flex h-[40px] items-end justify-center gap-[5px]" aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className="w-[9px] rounded-t-[3px] bg-[#5980cc]" style={{ height: h, opacity: 0.35 + i * 0.2 }} />
        ))}
      </div>
      <p className="text-center font-['Rubik',sans-serif] text-[18px] font-semibold leading-tight text-[#5980cc] md:text-[20px]">{label}</p>
    </div>
  );
}

function FeaturedCard() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-[2px_4px_12px_0px_rgba(168,168,168,0.12)]">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-[160px] shrink-0 overflow-hidden bg-[#ddd] md:h-auto md:w-[200px]">
          <img alt="" className="absolute inset-0 size-full object-cover object-[center_35%]" src={imgFeaturedCard} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4f5e7b]/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#4f5e7b]/20" />
        </div>
        <div className={`flex min-w-0 flex-1 flex-col justify-center gap-[12px] p-[20px] ${layout.textAlign}`}>
          <Badge>{t("workflow.photo3")}</Badge>
          <h4 className="font-['Rubik',sans-serif] text-[18px] font-semibold leading-snug text-[#4f5e7b] md:text-[20px]">{t("workflow.metric3.title")}</h4>
          <p className="font-['Rubik',sans-serif] text-[13px] font-normal leading-[20px] text-[#7c96c7] md:text-[14px]">{t("workflow.metric3.desc")}</p>
          <div className="flex items-center gap-[10px] pt-[4px]">
            <div className="flex -space-x-[8px]">
              {[imgAvatar1, imgAvatar2, imgAvatar3].map((src) => (
                <img key={src} alt="" className="size-[32px] rounded-full border-2 border-white object-cover" src={src} />
              ))}
            </div>
            <p className="font-['Rubik',sans-serif] text-[12px] font-medium text-[#7c96c7] md:text-[13px]">{t("integrations.users")}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-center border-t border-[#eef2f8] px-[20px] py-[20px] md:min-w-[88px] md:border-t-0 md:border-l md:px-[16px] md:py-0">
          <MetricBarChart label={t("workflow.metric3.stat")} />
        </div>
      </div>
    </div>
  );
}

export default function WorkflowMetrics() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] md:gap-[50px] items-start px-[20px] md:px-[50px] py-[50px] md:py-[100px] relative size-full" data-name="Workflow + metrics" dir={layout.dir}>
      <div className="grid w-full grid-cols-1 gap-[14px] sm:grid-cols-3 md:gap-[20px]">
        {STATS.map((item) => (
          <StatItem key={item.statKey} {...item} />
        ))}
      </div>

      <div className="w-full rounded-[30px] bg-[#f2f5fa] p-[20px] md:p-[30px]">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[30px]">
          <WorkflowSlideshow />

          <div className={`flex flex-1 flex-col gap-[20px] md:gap-[24px] min-w-0 ${layout.textAlign}`}>
            <Badge>{t("workflow.badge")}</Badge>
            <div className="flex flex-col gap-[12px]">
              <h2 className="font-['Rubik',sans-serif] text-[26px] font-semibold leading-[1.15] text-[#4f5e7b] md:text-[36px]">{t("workflow.title")}</h2>
              <p className="font-['Rubik',sans-serif] text-[14px] font-normal leading-normal text-[#7c96c7] md:text-[16px]">{t("workflow.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              <StepCard icon={STEP_ICONS[0]} titleKey="workflow.metric1.title" descKey="workflow.metric1.desc" />
              <StepCard icon={STEP_ICONS[1]} titleKey="workflow.metric2.title" descKey="workflow.metric2.desc" />
            </div>

            <FeaturedCard />
          </div>
        </div>
      </div>
    </div>
  );
}
