import svgPaths from "./svg-4yvwr1x3vc";
import imgFrame1171275620 from "../assets/e988e6ef720aa675113d122b1059a42df6b88463.png";
import imgFrame1171275621 from "../assets/7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";
import imgFrame1171275622 from "../assets/72b8dc871231ac78f17cd908872fabb84c9a937a.png";
import imgGroup4111 from "../assets/7b3a1e1c19d2db49705070aafd2334b24873ec4b.png";
import { CTAButton } from "@/app/components/CTAButton";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

const AVATAR_SIZE = 50;
const AVATAR_OVERLAP = 14;
const AVATAR_STEP = AVATAR_SIZE - AVATAR_OVERLAP;
const AVATAR_STACK_WIDTH = AVATAR_SIZE + AVATAR_STEP * 3;
const AVATAR_IMAGES = [imgFrame1171275620, imgFrame1171275621, imgFrame1171275622];

function Frame8() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[10px] md:gap-[20px] items-center md:items-start justify-start leading-[normal] relative shrink md:shrink-0 text-[#4f5e7b] w-full max-w-[340px] md:max-w-[480px]">
      <p className="font-['Rubik',sans-serif] font-semibold relative shrink md:shrink-0 text-[28px] md:text-[48px] text-center md:text-start w-full">{t("integrations.title")}</p>
      <p className="font-['Rubik',sans-serif] font-normal relative shrink md:shrink-0 text-[14px] md:text-[18px] w-full whitespace-pre-wrap text-center md:text-start">{t("integrations.subtitle")}</p>
    </div>
  );
}

function Frame9() {
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col ${layout.integrations.frame9Gap ?? "gap-[30px]"} justify-start ${layout.integrations.frame9Items} ${layout.integrations.frame9Justify || ""} relative shrink md:shrink-0 w-full max-w-[340px] md:max-w-[480px]`}>
      <Frame8 />
      <CTAButton />
    </div>
  );
}

function AvatarCircle({ src, zIndex }: { src: string; zIndex: number }) {
  return (
    <div className="pointer-events-none relative size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-solid border-white bg-white" style={{ zIndex }}>
      <img alt="" className="size-full object-cover" src={src} />
    </div>
  );
}

function AvatarPlusBadge({ zIndex }: { zIndex: number }) {
  return (
    <div className="relative size-[50px] shrink-0" style={{ zIndex }}>
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

function UserAvatarStack() {
  return (
    <div className="relative h-[50px] shrink-0" style={{ width: AVATAR_STACK_WIDTH }}>
      {AVATAR_IMAGES.map((src, index) => (
        <div key={src} className="absolute top-0" style={{ left: index * AVATAR_STEP }}>
          <AvatarCircle src={src} zIndex={index + 10} />
        </div>
      ))}
      <div className="absolute top-0" style={{ left: AVATAR_STEP * 3 }}>
        <AvatarPlusBadge zIndex={40} />
      </div>
    </div>
  );
}

function Frame4() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`flex gap-[16px] items-center ${layout.integrations?.frame4Justify ?? "justify-start"} shrink-0 w-fit`}>
      <UserAvatarStack />
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[12px] md:text-[18px] text-start">{t("integrations.users")}</p>
    </div>
  );
}

function Frame6() {
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col ${layout.integrations.frame6Gap} ${layout.integrations?.frame6Height ?? "h-auto md:h-[366px]"} items-center md:items-start justify-start relative shrink md:shrink-0 w-fit max-w-[340px] md:max-w-[480px]`}>
      <Frame9 />
      <Frame4 />
    </div>
  );
}

function Frame7() {
  const layout = useLayout();
  const mobileDir = layout.integrations?.frame7MobileDir ?? "flex-col-reverse";
  return (
    <div className={`content-stretch flex ${mobileDir} md:flex-row flex-[1_0_0] h-auto md:h-[644px] items-center md:justify-start justify-between min-h-px min-w-px relative gap-[30px] md:gap-[60px] w-full`}>
      <Frame6 />
      <div className="relative shrink-0 w-[280px] h-[280px] md:size-[684px]" data-name="Group 411 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup4111} />
      </div>
    </div>
  );
}

export default function IntegrationsWhyUs() {
  const layout = useLayout();
  return (
    <div id="integrations" className="flex items-center justify-start py-[40px] px-[20px] md:py-[100px] md:pl-[100px] md:pr-[60px] relative w-full bg-white text-white scroll-mt-[120px]" data-name="Integrations+Why Us" dir={layout.dir}>
      <Frame7 />
    </div>
  );
}