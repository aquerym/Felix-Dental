import svgPaths from "./svg-9k15iha06e";
import { imgGroup } from "./svg-1fz1q";
import { CTAButton } from "@/app/components/CTAButton";
import { LanguageSwitcher } from "@/app/components/LanguageSwitcher";
import DemoButton from "./Frame1171275723-1-339";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { Menu, X } from "lucide-react";
import imgHeroBackground from "../assets/3f2cea963cd77c5a8561a6fb77d44e9752f22f08.png";
import imgHeroBackgroundDesktop from "../assets/2284a927288233872631718f8c537867c10a8b76.png";
import imgHeroBackgroundDesktopEn from "../assets/hero-bg-en-desktop.png";
import imgHeroBackgroundDesktopRu from "../assets/hero-bg-ru-desktop.png";
import imgHeroBackgroundMobileRu from "../assets/hero-bg-ru-mobile.png"; // updated
import imgHeroBackgroundMobileEn from "../assets/hero-bg-en-mobile.png";
import Vector from "./Vector";

function Frame() {
  const layout = useLayout();
  const logoMobileMargin = layout.hero?.logoMobileMargin ?? "ml-auto";
  return (
    <div className={`h-[30px] md:h-[36px] relative shrink-0 w-[157px] md:w-[36px] ${logoMobileMargin} md:ml-0`}>
      <Vector />
    </div>
  );
}

function Frame1() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch hidden md:flex font-['Rubik'] font-light gap-[70px] items-center leading-[normal] relative shrink-0 text-[#5f80c9] text-[16px]">
      <p className="relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-[#0514c0]">{t("nav.about")}</p>
      <p className="relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-[#0514c0]">{t("nav.useCases")}</p>
      <p className="relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-[#0514c0]">{t("nav.pricing")}</p>
      <p className="relative shrink-0 cursor-pointer transition-colors duration-200 hover:text-[#0514c0]">{t("nav.integrations")}</p>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[25px_25px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="Group">
          <path
            d={svgPaths.p23757c80}
            fill="var(--fill-0, #EEEEEE)"
            id="Vector"
          />
          <path
            d={svgPaths.p3b479f80}
            fill="var(--fill-0, #D80027)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1de9e0f0}
            fill="var(--fill-0, #0052B4)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pb1c4500}
            fill="var(--fill-0, #EEEEEE)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Mask group"
    >
      <Group />
    </div>
  );
}

function CircleFlagsLangEnUs() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[25px]"
      data-name="circle-flags:lang-en-us"
    >
      <MaskGroup />
    </div>
  );
}

function Frame2() {
  return <LanguageSwitcher />;
}

function Frame3() {
  const { t } = useTranslation();
  return <CTAButton text={t("nav.contact")} className="w-[177px]" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function ChildContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="relative w-full" data-name="Child content">
        <div className="flex items-center justify-between px-0 md:px-[50px] py-[15px] md:py-[20px] relative w-full md:bg-white md:rounded-[40px]">
          <Frame />
          <Frame1 />
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Open menu">
              <Menu className="w-8 h-8 text-white" />
            </button>
          </div>
          <div className="hidden md:flex">
            <Frame4 />
          </div>
        </div>
      </div>

      {/* Burger Menu Overlay */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <Frame />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close menu">
                  <X className="w-6 h-6 text-[#5f80c9]" />
                </button>
              </div>
              {/* Menu Items */}
              <div className="flex flex-col gap-6 p-6 font-['Rubik',sans-serif] font-medium text-[#5f80c9] text-[16px]">
                <p className="cursor-pointer transition-colors duration-200 hover:text-[#0514c0] text-start">{t("nav.about")}</p>
                <p className="cursor-pointer transition-colors duration-200 hover:text-[#0514c0] text-start">{t("nav.useCases")}</p>
                <p className="cursor-pointer transition-colors duration-200 hover:text-[#0514c0] text-start">{t("nav.pricing")}</p>
                <p className="cursor-pointer transition-colors duration-200 hover:text-[#0514c0] text-start">{t("nav.integrations")}</p>
              </div>
              <div className="mt-auto p-6 border-t border-gray-200 flex flex-col gap-4">
                <Frame2 />
                <Frame3 />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function Parent() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Parent"
    >
      <div className="content-stretch flex flex-col items-center justify-start px-[20px] md:px-[100px] py-[10px] md:py-[20px] relative w-full">
        <ChildContent />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="content-stretch flex flex-col h-[124.116px] items-center relative shrink-0 w-full"
      data-name="Navigation"
    >
      <Parent />
    </div>
  );
}

function Frame11() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col font-['Rubik',sans-serif] font-medium ${layout.hero.heroTextGap} leading-[normal] relative shrink-0 text-white w-full px-[20px] md:px-0 justify-center ${layout.hero.itemsAlign} ${layout.hero.containerWidth}`}>
      <p className={`${layout.hero.titleWidth ?? "min-w-full"} relative shrink-0 text-[40px] md:text-[64px] w-[min-content] whitespace-pre-wrap font-[Rubik] text-right`}>{t("hero.title")}</p>
      <p className={`max-w-full relative shrink-0 text-[15px] md:text-[18px] font-[Rubik] font-light text-right ${layout.hero.subtitleMaxW}`}>{t("hero.subtitle")}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative size-[27px]">
      <DemoButton />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex flex-row items-center self-auto md:self-stretch h-full">
      <DemoButton />
    </div>
  );
}

function Frame8() {
  return <CTAButton />;
}

function Frame9() {
  const layout = useLayout();
  // Button order, direction and alignment are layout-driven
  const buttonsDir = layout.hero.buttonsDirection ?? "flex-row";
  const buttonsAlign = layout.hero.buttonsAlign ?? "items-center justify-center";
  const demo = <div className="flex flex-row items-center self-auto md:self-stretch"><Frame7 /></div>;
  const cta = <Frame8 />;
  return (
    <div className={`content-stretch flex ${buttonsDir} gap-[20px] ${buttonsAlign} relative shrink-0 w-full md:w-auto`}>
      {layout.hero.ctaFirst ? <>{cta}{demo}</> : <>{demo}{cta}</>}
    </div>
  );
}

function Frame12() {
  const layout = useLayout();
  // Hebrew: text first, buttons second; EN/RU: buttons first, text second
  const buttons = <Frame9 />;
  const text = <Frame11 />;
  return (
    <div className={`content-stretch flex flex-col gap-[20px] justify-center ${layout.hero.itemsAlign} relative shrink-0 ${layout.hero.marginTop ?? "-mt-[70px]"} ${layout.hero.frame12Width ?? "md:w-[790px]"}`}>
      {layout.hero.buttonsFirst ? <>{buttons}{text}</> : <>{text}{buttons}</>}
    </div>
  );
}

function Frame6() {
  const layout = useLayout();
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className={`flex flex-col ${layout.hero.itemsAlign} justify-center size-full`}>
        <div className={`content-stretch flex flex-col ${layout.hero.itemsAlign} justify-center pb-[-30px] md:pb-[150px] pl-[20px] md:pl-[150px] pr-[20px] md:pr-[100px] pt-[-30px] md:pt-[100px] relative size-full`}>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  const { i18n } = useTranslation();
  // EN and RU use dedicated hero images; HE uses the default
  const desktopBg = i18n.language === "en" ? imgHeroBackgroundDesktopEn : i18n.language === "ru" ? imgHeroBackgroundDesktopRu : imgHeroBackgroundDesktop;
  const mobileBg = i18n.language === "en" ? imgHeroBackgroundMobileEn : i18n.language === "ru" ? imgHeroBackgroundMobileRu : imgHeroBackground;
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[98vh] items-start relative rounded-[30px] md:rounded-[50px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px] md:rounded-[50px]">
        {/* Mobile background */}
        <img
          alt="Hero background mobile"
          className="md:hidden absolute left-0 top-0 w-full h-full object-cover"
          src={mobileBg}
        />
        {/* Desktop background */}
        <img
          alt="Hero background desktop"
          className="hidden md:block absolute left-0 top-0 w-full h-full object-cover"
          src={desktopBg}
        />
      </div>
      <Navigation />
      <Frame6 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div
      className="bg-[rgb(230,239,255)] content-stretch flex flex-col items-start px-[10px] py-[10px] relative size-full"
      data-name="Desktop - 5"
    >
      <Frame5 />
    </div>
  );
}