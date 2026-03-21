import svgPaths from "./svg-4yvwr1x3vc";
import imgFrame1171275620 from "../assets/e988e6ef720aa675113d122b1059a42df6b88463.png";
import imgFrame1171275621 from "../assets/7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";
import imgFrame1171275622 from "../assets/72b8dc871231ac78f17cd908872fabb84c9a937a.png";
import imgGroup4111 from "../assets/7b3a1e1c19d2db49705070aafd2334b24873ec4b.png";
import { CTAButton } from "@/app/components/CTAButton";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

function Frame8() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[10px] md:gap-[20px] items-center md:items-start justify-start leading-[normal] relative shrink md:shrink-0 text-[#4f5e7b] w-full">
      <p className="font-['Rubik',sans-serif] font-semibold relative shrink md:shrink-0 text-[28px] md:text-[48px] text-center md:text-start w-full md:w-[596px]">{t("integrations.title")}</p>
      <p className="font-['Rubik',sans-serif] font-normal relative shrink md:shrink-0 text-[14px] md:text-[18px] w-full md:w-[607px] whitespace-pre-wrap text-center md:text-start">{t("integrations.subtitle")}</p>
    </div>
  );
}

function Frame9() {
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col ${layout.integrations.frame9Gap ?? "gap-[30px]"} justify-start ${layout.integrations.frame9Items} ${layout.integrations.frame9Justify || ""} relative shrink md:shrink-0 w-full`}>
      <Frame8 />
      <CTAButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 mt-[0.38px] pointer-events-none relative rounded-[80px] row-1 size-[50px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[80px]">
        <div className="absolute bg-white inset-0 rounded-[80px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[80px] size-full" src={imgFrame1171275620} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[80px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 mt-[0.13px] pointer-events-none relative rounded-[80px] row-1 size-[50px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[80px]">
        <div className="absolute bg-white inset-0 rounded-[80px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[80px] size-full" src={imgFrame1171275621} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[80px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 mt-0 pointer-events-none relative rounded-[80px] row-1 size-[50px]">
      <div aria-hidden="true" className="absolute inset-0 rounded-[80px]">
        <div className="absolute bg-white inset-0 rounded-[80px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[80px] size-full" src={imgFrame1171275622} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[80px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 mt-[0.88px] relative row-1 size-[50px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Frame 1171275623">
          <rect fill="url(#paint0_linear_9_599)" height="48" rx="24" width="48" x="1" y="1" />
          <rect height="48" rx="24" stroke="var(--stroke-0, white)" strokeWidth="2" width="48" x="1" y="1" />
          <path d={svgPaths.pe8169c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_599" x1="25" x2="45.05" y1="0" y2="40.3">
            <stop stopColor="#74CAFF" />
            <stop offset="1" stopColor="#7D69FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Контейнер фреймов с отрицательным отступом для наложения друг на друга
function Group() {
  return (
    <div className="flex flex-row items-end justify-start gap-0 leading-[0] relative shrink-0 w-fit">
      <Frame />
      <div className="ml-[-12px]"><Frame1 /></div>
      <div className="ml-[-12px]"><Frame2 /></div>
      <div className="ml-[-12px]"><Frame3 /></div>
    </div>
  );
}

function Frame4() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex gap-[10px] items-center ${layout.integrations?.frame4Justify ?? "justify-start"} overflow-visible md:overflow-clip px-[0px] py-[3px] relative rounded-[36px] shrink-0 w-fit`}>
      <Group />
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[12px] md:text-[18px] text-start">{t("integrations.users")}</p>
    </div>
  );
}

function Frame6() {
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col ${layout.integrations.frame6Gap} ${layout.integrations?.frame6Height ?? "h-auto md:h-[366px]"} items-center md:items-start justify-start relative shrink md:shrink-0 mr-0 md:mr-[40px] w-fit md:w-[596px]`}>
      <Frame9 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  const layout = useLayout();
  const mobileDir = layout.integrations?.frame7MobileDir ?? "flex-col-reverse";
  return (
    <div className={`content-stretch flex ${mobileDir} md:flex-row flex-[1_0_0] h-auto md:h-[644px] items-center justify-between min-h-px min-w-px relative gap-[30px] md:gap-0 w-full`}>
      <Frame6 />
      <div className="relative shrink-0 w-[280px] h-[280px] md:size-[684px]" data-name="Group 411 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup4111} />
      </div>
    </div>
  );
}

export default function IntegrationsWhyUs() {
  return (
    <div className="flex items-center justify-start px-[20px] py-[40px] md:p-[100px] relative w-full bg-[rgb(230,239,255)] text-white" data-name="Integrations+Why Us">
      <Frame7 />
    </div>
  );
}