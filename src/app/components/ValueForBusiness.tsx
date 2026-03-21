import imgGeminiGeneratedImageMhp5E4Mhp5E4Mhp51 from "../../assets/1a6c43f2664406595a243d6ab55793381ea065ec.png";
import imgGeminiGeneratedImageZ8P9R0Z8P9R0Z8P91 from "../../assets/4343c12919bae205da0e692865dcb94e26a18e39.png";
import imgFrame1171275745 from "../../assets/cb46a8b7eff6d86c4529ff2718c1a45ef36f8124.png";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

function Frame8() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[10px] ${layout.itemsAlign} relative shrink-0 text-white w-[200px] md:w-full whitespace-pre-wrap`} dir={layout.dir}>
      <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[24px] w-full ${layout.textAlign}`}>{t("value.card1.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[16px] w-full ${layout.textAlign}`}>{t("value.card1.desc")}</p>
    </div>
  );
}

function Frame9() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col h-full items-start ${layout.valueForBusiness.frame9Justify} ${layout.valueForBusiness.frame9Gap} relative shrink-0 ${layout.textAlign} w-[297px] md:w-[300px]`}>
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[16px]">{t("value.card1.num")}</p>
      <Frame8 />
    </div>
  );
}

function Frame3() {
  const layout = useLayout();
  // Mobile phone image position: EN/RU right edge, HE left edge; vertical offset layout-driven
  const card1MobilePos = layout.valueForBusiness?.card1MobilePos ?? "left-[-10px]";
  const card1MobileBottom = layout.valueForBusiness?.card1MobileBottom ?? "bottom-[-80px]";
  const card1ShadowBottom = layout.valueForBusiness?.card1ShadowBottom ?? "bottom-[20px]";
  const cardH = layout.valueForBusiness?.cardMobileHeight ?? "h-[280px]";
  return (
    <div className={`${cardH} md:h-full relative rounded-[40px] shrink-0 w-full md:flex-[1_0_0] md:w-auto bg-[rgba(194,194,194,0.1)]`}>
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex gap-[10px] items-center ${layout.valueForBusiness?.frame3Justify ?? "justify-end"} p-[30px] relative size-full backdrop-blur-md bg-white/10`} style={{ backdropFilter: 'blur(12px)' }}>
          <div className={`absolute flex items-center justify-center ${card1MobilePos} ${card1ShadowBottom} md:left-[14.57px] md:top-[73.99px] md:bottom-auto h-[195px] w-[192px] md:h-[457.291px] md:w-[379.675px]`} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-24.55deg]">
              <div className="bg-[rgba(6,28,76,0.11)] blur-[19.6px] h-[167px] w-[100px] md:h-[394.36px] md:w-[237.262px]" data-name="Gemini_Generated_Image_mhp5e4mhp5e4mhp5 2" />
            </div>
          </div>
          <div className={`absolute flex items-center justify-center ${card1MobilePos} ${card1MobileBottom} md:left-[0px] md:top-[12px] md:bottom-auto h-[213px] w-[197px] md:h-[500.281px] md:w-[415.368px]`} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="flex-none rotate-[-20deg]">
              <div className="h-[220px] w-[132px] md:h-[431.434px] md:w-[259.567px] relative" data-name="Gemini_Generated_Image_mhp5e4mhp5e4mhp5 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[139.7%] left-[-65.99%] max-w-none top-[-19.85%] w-[232.2%]" src={imgGeminiGeneratedImageMhp5E4Mhp5E4Mhp51} />
                </div>
              </div>
            </div>
          </div>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[15px] ${layout.itemsAlign} relative shrink-0 w-full whitespace-pre-wrap`} dir={layout.dir}>
      <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f5e7b] text-[24px] w-full ${layout.valueForBusiness?.titleTextAlign ?? "text-left"}`}>{t("value.card2.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#7c96c7] text-[16px] w-[min-content] ${layout.textAlign}`}>{t("value.card2.desc")}</p>
    </div>
  );
}

function Frame10() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-[1_0_0] flex-col items-start justify-between gap-0 min-h-px min-w-px relative ${layout.textAlign} w-full`}>
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[16px]">{t("value.card2.num")}</p>
      <Frame11 />
    </div>
  );
}

function Frame2() {
  const layout = useLayout();
  const cardH = layout.valueForBusiness?.cardMobileHeight ?? "h-[280px]";
  return (
    <div className={`${cardH} md:h-full relative rounded-[40px] shrink-0 w-full md:w-[469px]`} style={{ backgroundImage: "linear-gradient(85.6222deg, rgb(246, 249, 255) 2.1194%, rgb(245, 245, 245) 96.707%)" }}>
      <div className="content-stretch flex flex-col items-end justify-between overflow-clip p-[30px] relative rounded-[inherit] size-full">
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[20px] h-auto md:h-[310px] items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame13() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[15px] ${layout.itemsAlign} relative shrink-0 w-full whitespace-pre-wrap`} dir={layout.dir}>
      <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f5e7b] text-[24px] w-full ${layout.valueForBusiness?.titleTextAlign ?? "text-left"}`}>{t("value.card3.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#7c96c7] text-[16px] w-[min-content] ${layout.textAlign}`}>{t("value.card3.desc")}</p>
    </div>
  );
}

function Frame12() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between gap-0 min-h-px min-w-px relative ${layout.textAlign}`}>
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3e5f9a] text-[16px]">{t("value.card3.num")}</p>
      <Frame13 />
    </div>
  );
}

function Frame5() {
  const layout = useLayout();
  const cardH = layout.valueForBusiness?.cardMobileHeight ?? "h-[280px]";
  return (
    <div className={`${cardH} md:h-full relative rounded-[40px] shrink-0 w-full md:w-[492px]`} style={{ backgroundImage: "linear-gradient(85.4084deg, rgb(246, 249, 255) 2.1194%, rgb(245, 245, 245) 96.707%)" }}>
      <div className="content-stretch flex items-start overflow-clip p-[30px] relative rounded-[inherit] size-full">
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Group() {
  const layout = useLayout();
  // Image position is layout-driven: Hebrew pushes image left, EN/RU push to right on mobile
  const imageLeft = layout.valueForBusiness?.imageLeft ?? "md:left-[417px]";
  const imageMobilePos = layout.valueForBusiness?.imageMobilePos ?? "left-[10px]";
  const card4ImageTop = layout.valueForBusiness?.card4ImageMobileTop ?? "top-[100px]";
  return (
    <div className="absolute contents left-[437px] top-[13px]">
      <div className="absolute h-[27px] left-[485px] top-[259px] w-[112px]">
        <div className="absolute inset-[-54.44%_-13.12%]" />
      </div>
      <div className={`absolute h-[168px] md:h-[280.427px] ${imageMobilePos} ${imageLeft} ${card4ImageTop} md:top-[13px] w-[118px] md:w-[196.672px]`} data-name="Gemini_Generated_Image_z8p9r0z8p9r0z8p9 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[123.82%] left-[-38.97%] max-w-none top-[-11%] w-[176.55%]" src={imgGeminiGeneratedImageZ8P9R0Z8P9R0Z8P91} />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col gap-[15px] items-start justify-center relative shrink-0 text-white w-[200px] md:w-full whitespace-pre-wrap md:self-auto`} dir={layout.dir}>
      <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[24px] w-full ${layout.valueForBusiness?.titleTextAlign ?? "text-left"}`} dir={layout.dir}>{t("value.card4.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[16px] w-[min-content] ${layout.textAlign}`} dir={layout.dir}>{t("value.card4.desc")}</p>
    </div>
  );
}

function Frame14() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`content-stretch flex flex-col h-full items-start justify-between gap-0 relative shrink-0 w-full md:w-[371px]`}>
      <p className={`font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[16px] ${layout.textAlign}`}>{t("value.card4.num")}</p>
      <Frame15 />
    </div>
  );
}

function Frame4() {
  const layout = useLayout();
  const cardH = layout.valueForBusiness?.cardMobileHeight ?? "h-[280px]";
  return (
    <div className={`${cardH} md:h-full relative rounded-[40px] shrink-0 w-full md:flex-[1_0_0] md:w-auto bg-[rgba(194,194,194,0.1)]`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-start p-[30px] relative size-full backdrop-blur-md bg-white/10" style={{ backdropFilter: 'blur(12px)' }}>
          <Group />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[20px] h-auto md:h-[310px] items-center relative shrink-0 w-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-auto md:h-[644px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[30px] md:rounded-[60px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] md:rounded-[60px] size-full" src={imgFrame1171275745} />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] md:gap-[40px] items-start p-[20px] md:p-[100px] relative size-full">
          <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px] md:text-[48px] ${layout.textAlign} text-white`} dir={layout.dir}>{t("value.title")}</p>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function ValueForBusiness() {
  return (
    <div className="bg-[rgb(230,239,255)] content-stretch flex items-center px-[20px] md:px-[50px] py-[15px] md:py-[25px] relative size-full" data-name="ValueForBusiness">
      <Frame />
    </div>
  );
}