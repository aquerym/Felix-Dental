import svgPaths from "./svg-ycvrbjvrom";
import imgFrame1171275802 from "../assets/cb46a8b7eff6d86c4529ff2718c1a45ef36f8124.png";
import imgUnnamed7 from "../assets/e34ba9122e8124e6445d6e7cebb85b560ebca3a1.png";
import imgGeminiGeneratedImage5R9U6S5R9U6S5R9U1 from "../assets/270738b20fefab5250b83b79657c47e48123ef6b.png";
import DemoButton from "./Frame1171275723-1-339";
import { CTAButton } from "@/app/components/CTAButton";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

function Frame22() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
      <div className="content-stretch flex flex-col gap-[15px] items-center leading-[normal] relative shrink-0 text-[#4f5e7b] text-center whitespace-pre-wrap px-[20px]">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[28px] md:text-[48px] w-full ${layout.cta.titleWidth} text-white text-center`}>{t("cta.title")}</p>
      <p className="font-['Rubik',sans-serif] font-medium relative shrink-0 text-[14px] md:text-[18px] w-full md:w-[648px] text-white text-center">{t("cta.subtitle")}</p>
    </div>
  );
}

function TablerGiftFilled() {
  return (
    <div className="relative size-[15px]" data-name="tabler:gift-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="tabler:gift-filled">
          <path d={svgPaths.p1e2f680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="overflow-clip relative rounded-[34px] size-[27px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 27 27\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(2.0997 0.019372 -0.013864 1.5027 13.563 13.432)\'><stop stop-color=\'rgba(51,83,208,0.5)\' offset=\'0.55999\'/><stop stop-color=\'rgba(94,128,230,0.57)\' offset=\'0.78\'/><stop stop-color=\'rgba(137,174,253,0.64)\' offset=\'1\'/></radialGradient></defs></svg>')" }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[15px] top-1/2">
        <div className="-scale-y-100 flex-none">
          <TablerGiftFilled />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[30px] py-[10px] relative rounded-[35px] shrink-0">
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5f80c9] text-[16px] text-right" dir="rtl">הפעל דמו</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function BasilArrowUpOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="basil:arrow-up-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basil:arrow-up-outline">
          <path d={svgPaths.p6477e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[30px] py-[13px] relative rounded-[35px] shrink-0" style={{ backgroundColor: "#7097E2" }}>
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-right text-white" dir="rtl">קבל ייעוץ</p>
      <BasilArrowUpOutline />
    </div>
  );
}

function Frame19() {
  const layout = useLayout();
  return (
    <div className={`content-stretch flex ${layout.cta.buttonsDirection} gap-[10px] items-center justify-center relative shrink-0`}>
      <div className="flex flex-row items-center">
        <DemoButton />
      </div>
      <CTAButton />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[360px] items-center justify-center overflow-clip py-[20px] md:py-[50px] relative rounded-[40px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171275802} />
      <div className="relative z-10"><Frame22 /></div>
      <div className="relative z-10"><Frame19 /></div>
      <div className="absolute flex items-center justify-center right-[-120px] bottom-[-130px] md:right-auto md:bottom-auto md:left-[981px] md:top-[3px] size-[350px] md:size-[493.844px] z-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-174.06deg]">
          <div className="relative size-[250px] md:size-[449.711px]" data-name="unnamed 7">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnnamed7} />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute z-0 flex items-center justify-center left-[-376px] size-[867.794px] top-[calc(50%-81.1px)] scale-[0.5] md:scale-100" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-146.46deg]">
          <div className="relative size-[400px] md:size-[626.108px]" data-name="Gemini_Generated_Image_5r9u6s5r9u6s5r9u 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage5R9U6S5R9U6S5R9U1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[44.116px] relative shrink-0 w-[44.484px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.4843 44.1161">
        <g clipPath="url(#clip0_13_1485)" id="Frame 54">
          <path d={svgPaths.p157c8c00} fill="url(#paint0_linear_13_1485)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_1485" x1="22" x2="23" y1="3.15181e-08" y2="39.5">
            <stop stopColor="#CAE7FF" />
            <stop offset="1" stopColor="#7898FF" />
          </linearGradient>
          <clipPath id="clip0_13_1485">
            <rect fill="white" height="44.1161" width="44.4843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[20px] relative shrink-0 ${"logoColumnItems" in layout.footer ? layout.footer.logoColumnItems : layout.itemsAlign}`}>
      <Frame />
      <p className={`font-['Rubik',sans-serif] font-normal leading-[25px] relative shrink-0 text-[#4f5e7b] text-[16px] whitespace-pre-wrap ${layout.textAlign} ${layout.footer.descWidth}`}>{t("footer.description")}</p>
    </div>
  );
}

function Frame7() {
  const layout = useLayout();
  return (
    <div className={`content-stretch ${layout.footer.frame7Display} flex-col h-auto md:h-[255px] items-center md:items-start relative shrink-0`}>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[20px] relative shrink-0 ${layout.footer.columnAlign}`}>
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[20px] ${layout.textAlign}`}>{t("footer.contactAbout")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.contact")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.bookDemo")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.aboutUs")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.reviews")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.team")}</p>
    </div>
  );
}

function Frame5() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[20px] h-full relative shrink-0 ${layout.footer.columnAlign}`}>
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[20px] ${layout.textAlign}`}>{t("footer.technical")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.releaseNotes")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.serviceStatus")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.sitemap")}</p>
    </div>
  );
}

function Frame8() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[20px] h-full relative shrink-0 ${layout.footer.columnAlign}`}>
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[20px] ${layout.textAlign}`}>{t("footer.termsTitle")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.terms")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.cookies")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[16px] ${layout.textAlign}`}>{t("footer.privacy")}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch hidden md:flex gap-[100px] items-start leading-[normal] relative self-stretch shrink-0 text-[#4f5e7b]">
      <Frame4 />
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between relative shrink-0 w-full gap-[30px] md:gap-0 px-[20px] md:px-0">
      <div className="flex flex-col items-center md:items-start md:justify-start">
        <Frame7 />
      </div>
      <Frame6 />
    </div>
  );
}

function RiInstagramFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:instagram-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:instagram-fill">
          <path d={svgPaths.p2068e200} fill="var(--fill-0, #4F5E7B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#c7ddff] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0">
      <RiInstagramFill />
    </div>
  );
}

function RiFacebookFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:facebook-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:facebook-fill">
          <path d={svgPaths.p32db6580} fill="var(--fill-0, #4F5E7B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#c7ddff] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0">
      <RiFacebookFill />
    </div>
  );
}

function RiLinkedinFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ri:linkedin-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ri:linkedin-fill">
          <path d={svgPaths.p2c13d80} fill="var(--fill-0, #4F5E7B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#c7ddff] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0">
      <RiLinkedinFill />
    </div>
  );
}

function IcBaselineDiscord() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-discord">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-discord">
          <path d={svgPaths.p33b5a800} fill="var(--fill-0, #4F5E7B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#c7ddff] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0">
      <IcBaselineDiscord />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Frame1 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Albert_Sans:Regular',sans-serif] font-normal gap-[100px] items-center justify-end relative shrink-0 text-[#4f5e7b] text-[16px]">
      <a className="block leading-[0] relative shrink-0 whitespace-nowrap" href="mailto:felixlabs@gmail.com">
        <p className="cursor-pointer leading-[25px]">felixlabs@gmail.com</p>
      </a>
      <p className="leading-[25px] relative shrink-0">+972 50 12 123 123</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between relative shrink-0 w-full gap-[20px] md:gap-0">
      <Frame11 />
      <div className="hidden md:flex">
        <Frame15 />
      </div>
    </div>
  );
}

function Frame16() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col md:flex-row font-['Rubik',sans-serif] font-normal items-center justify-center md:justify-between leading-[25px] relative shrink-0 text-[#4f5e7b] text-[14px] md:text-[16px] w-full gap-[10px] md:gap-0">
      <p className="relative shrink-0 text-start">{t("footer.company")}</p>
      <p className="relative shrink-0 text-center md:text-start" dir="auto">{t("footer.copyright")}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center overflow-clip relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
      <Frame16 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Desktop - 3">
      <Frame2 />
    </div>
  );
}

export default function CtaFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[90px] items-start p-[20px] md:p-[50px] relative size-full bg-[#e6efff]" data-name="CTA + Footer">
      <Frame21 />
      <Desktop />
    </div>
  );
}