import svgPaths from "./svg-1kv87p58bp";
import imgFrame1171275758 from "../assets/85dd901ace2ead7e148a5a1b7aa5d35d9e2c5c82.png";
import imgFrame1171275765 from "../assets/87fabe930294deb02e73365768945da4c4a8e803.png";
import imgSlide2 from "../assets/b1e82f44c1b977118d1b18049b2db97326c6f5c6.png";
import imgSlide3 from "../assets/0adb314eb54a1cdfff06f1b0cab9c17304b4a7dc.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { ContactPopup } from "../app/components/ContactPopup";
import { motion, AnimatePresence } from "motion/react";

// Slide data with translation keys
const slideData = [
  {
    titleKey: "trouble.tab1",
    image: imgFrame1171275758,
    statKey: "trouble.slide1.stat",
    statTextKey: "trouble.slide1.statText"
  },
  {
    titleKey: "trouble.tab2",
    image: imgSlide2,
    statKey: "trouble.slide2.stat",
    statTextKey: "trouble.slide2.statText"
  },
  {
    titleKey: "trouble.tab3",
    image: imgSlide3,
    statKey: "trouble.slide3.stat",
    statTextKey: "trouble.slide3.statText"
  }
];

function Frame16({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <div 
      className={`${isActive ? 'bg-[rgba(255,255,255,0.35)]' : 'bg-transparent'} cursor-pointer content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px overflow-clip py-[12px] md:py-[15px] relative rounded-[47px] transition-all duration-300`}
      onClick={onClick}
    >
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] md:text-[16px] text-center text-white max-w-[90px] md:w-[157px] whitespace-pre-wrap" dir="rtl">{t("trouble.tab1")}</p>
    </div>
  );
}

function Frame17({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const { t } = useTranslation();
  const layout = useLayout();
  const tab2MaxW = layout.trouble?.tab2MaxW ?? "max-w-[85px]";
  return (
    <div 
      className={`${isActive ? 'bg-[rgba(255,255,255,0.35)]' : 'bg-transparent'} cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[200px] transition-all duration-300`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] md:p-[10px] relative size-full">
          <p className={`font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] md:text-[16px] text-center text-white ${tab2MaxW} md:w-[146px] whitespace-pre-wrap`} dir="rtl">{t("trouble.tab2")}</p>
        </div>
      </div>
    </div>
  );
}

function Frame18({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <div 
      className={`${isActive ? 'bg-[rgba(255,255,255,0.35)]' : 'bg-transparent'} cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[200px] transition-all duration-300`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] md:p-[10px] relative size-full">
          <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] md:text-[16px] text-left text-white max-w-[70px] md:w-[113px] whitespace-pre-wrap" dir="rtl">{t("trouble.tab3")}</p>
        </div>
      </div>
    </div>
  );
}

function Frame15({ activeSlide, onSlideChange }: { activeSlide: number; onSlideChange: (index: number) => void }) {
  return (
    <div className="bg-[rgba(119,119,119,0.35)] h-[50px] md:h-[77px] relative rounded-[25px] md:rounded-[50px] shrink-0 w-full z-10">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-px items-center p-[3px] md:p-[5px] relative size-full">
          <Frame16 isActive={activeSlide === 0} onClick={() => onSlideChange(0)} />
          <Frame17 isActive={activeSlide === 1} onClick={() => onSlideChange(1)} />
          <Frame18 isActive={activeSlide === 2} onClick={() => onSlideChange(2)} />
        </div>
      </div>
    </div>
  );
}

function Frame19({ activeSlide }: { activeSlide: number }) {
  return (
    <div className="h-[6px] md:h-[10px] relative shrink-0 w-[30px] md:w-[50px] z-10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 10">
        <g id="Frame 1171275764">
          <circle cx="5" cy="5" fill="var(--fill-0, white)" fillOpacity={activeSlide === 0 ? "0.79" : "0.42"} id="Ellipse 92" r="5" transform="rotate(180 5 5)" />
          <circle cx="25" cy="5" fill="var(--fill-0, white)" fillOpacity={activeSlide === 1 ? "0.79" : "0.42"} id="Ellipse 93" r="5" transform="rotate(180 25 5)" />
          <circle cx="45" cy="5" fill="var(--fill-0, white)" fillOpacity={activeSlide === 2 ? "0.79" : "0.42"} id="Ellipse 94" r="5" transform="rotate(180 45 5)" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[184px] left-[288.45px] top-[411px] w-[283.671px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283.671 184">
        <g id="Group 406">
          <path d={svgPaths.p231d1500} fill="var(--fill-0, white)" id="Union" />
          <ellipse cx="256.582" cy="26" fill="url(#paint0_radial_3_811)" id="Ellipse 90" rx="18.5" ry="18" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(18.414 0.0909477 -0.00535765 22.4333 256.668 25.9091)" gradientUnits="userSpaceOnUse" id="paint0_radial_3_811" r="1">
            <stop offset="0.134615" stopColor="#3353D0" stopOpacity="0.5" />
            <stop offset="1" stopColor="#89AEFD" stopOpacity="0.64" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2({ stat, statText }: { stat: string; statText: string }) {
  const { t } = useTranslation();
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] relative shrink-0 text-[#4f5e7b] text-right">
      <p className="-translate-x-full col-1 font-['Rubik',sans-serif] font-semibold ml-[221px] mt-0 relative row-1 text-[32px]" dir="rtl">{t(stat)}</p>
      <p className="-translate-x-full col-1 font-['Rubik',sans-serif] font-medium h-fit ml-[221px] mt-[51.24px] relative row-1 text-[16px] w-[207px] whitespace-pre-wrap" dir="rtl">{t(statText)}</p>
    </div>
  );
}

function Frame2({ stat, statText }: { stat: string; statText: string }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[118px] items-end justify-center left-[288px] overflow-clip py-[35px] top-[467px]">
      <Group2 stat={stat} statText={statText} />
    </div>
  );
}

function IcRoundPlus() {
  return (
    <div className="absolute left-[533px] size-[24px] top-[425.47px]" data-name="ic:round-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-plus">
          <path d={svgPaths.p7fcb800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1({ stat, statText }: { stat: string; statText: string }) {
  return (
    <div className="absolute hidden md:contents left-[288px] top-[411px]">
      <Group />
      <Frame2 stat={stat} statText={statText} />
      <IcRoundPlus />
    </div>
  );
}

// Компонент стрелочки для навигации
function NavigationArrow({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${direction === 'left' ? 'left-[5px] md:left-[-50px]' : 'right-[5px] md:right-[-50px]'} top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-20 cursor-pointer flex items-center justify-center`}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        className="w-4 h-4 md:w-6 md:h-6"
        fill="none"
        stroke="#4f5e7b"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

function Frame13({ activeSlide, onSlideChange }: { activeSlide: number; onSlideChange: (index: number) => void }) {
  const currentSlide = slideData[activeSlide];
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [direction, setDirection] = useState(0); // 1 для следующего, -1 для предыдущего

  const handlePrevSlide = () => {
    setDirection(-1);
    onSlideChange(activeSlide === 0 ? slideData.length - 1 : activeSlide - 1);
  };

  const handleNextSlide = () => {
    setDirection(1);
    onSlideChange(activeSlide === slideData.length - 1 ? 0 : activeSlide + 1);
  };

  // Минимальное расстояние свайпа для регистрации
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // сброс
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }
  };

  // Варианты анимации для изображения
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      x: direction > 0 ? 50 : -50,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      x: direction < 0 ? 50 : -50,
    }),
  };

  return (
    <div 
      className="content-stretch flex flex-col h-[60vh] md:h-full items-center justify-between overflow-clip px-[15px] md:px-[30px] py-[10px] md:py-[20px] relative rounded-[20px] md:rounded-[40px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] shrink-0 w-full max-w-none md:w-[680px]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img 
          key={activeSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.5, ease: "easeInOut" },
            x: { duration: 0.5, ease: "easeInOut" },
          }}
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] md:rounded-[40px] size-full" 
          src={currentSlide.image}
        />
      </AnimatePresence>
      <Frame15 activeSlide={activeSlide} onSlideChange={onSlideChange} />
      <Frame19 activeSlide={activeSlide} />
      <Group1 stat={currentSlide.statKey} statText={currentSlide.statTextKey} />
      
      {/* Навигационные стрелочки */}
      <NavigationArrow direction="left" onClick={handlePrevSlide} />
      <NavigationArrow direction="right" onClick={handleNextSlide} />
    </div>
  );
}

function Frame12({ activeSlide, onSlideChange }: { activeSlide: number; onSlideChange: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[15px] h-auto md:h-[670px] items-start justify-end relative shrink-0 w-full">
      <Frame13 activeSlide={activeSlide} onSlideChange={onSlideChange} />
      <Frame14 />
    </div>
  );
}

function Frame20() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="relative rounded-[20px] md:rounded-[40px] shrink-0 w-full md:min-h-0">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] md:rounded-[40px] size-full" src={imgFrame1171275765} />
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] md:px-[30px] py-[30px] md:py-[50px] relative w-full">
          <p className={`font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[24px] md:text-[40px] ${layout.textAlign} text-white w-full md:w-[545px] whitespace-pre-wrap`} dir={layout.dir}>{t("trouble.banner")}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px] md:rounded-[40px]" />
    </div>
  );
}

function Frame25() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[22px] min-h-px min-w-px relative text-[#4f5e7b] whitespace-pre-wrap">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[16px] md:text-[18px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.instant.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[14px] md:text-[16px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.instant.desc")}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-auto min-h-[100px] md:flex-[1_0_0] md:min-h-px min-w-px relative rounded-[20px] md:rounded-[30px] w-full" style={{ backgroundImage: "linear-gradient(78.5241deg, rgb(255, 255, 255) 8.728%, rgba(245, 245, 245, 0.5) 111.65%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-start gap-0 p-[20px] md:p-[30px] relative size-full">
          <Frame25 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px] md:rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame27() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center leading-[22px] min-h-px min-w-px relative text-[#4f5e7b] whitespace-pre-wrap h-fit">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[16px] md:text-[18px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.lessLoad.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[14px] md:text-[16px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.lessLoad.desc")}</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-auto min-h-[100px] md:flex-[1_0_0] md:min-h-px min-w-px relative rounded-[20px] md:rounded-[30px] w-full" style={{ backgroundImage: "linear-gradient(78.5241deg, rgb(255, 255, 255) 8.728%, rgba(245, 245, 245, 0.5) 111.65%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-start gap-0 p-[20px] md:p-[30px] relative size-full">
          <Frame27 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px] md:rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-auto items-start justify-center relative shrink-0 w-full md:w-[343px] md:h-full">
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[15px] items-start leading-[22px] relative shrink-0 text-[#4f5e7b] w-full whitespace-pre-wrap">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[16px] md:text-[18px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.scheduling.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[14px] md:text-[16px] w-full ${layout.textAlign}`} dir={layout.dir}>{t("trouble.scheduling.desc")}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-auto min-h-[200px] md:flex-[1_0_0] md:h-full md:min-h-px min-w-px relative rounded-[20px] md:rounded-[40px] w-full" style={{ backgroundImage: "linear-gradient(83.4339deg, rgb(255, 255, 255) 5.0424%, rgba(244, 244, 244, 0.5) 112.25%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[20px] md:px-[21px] py-[30px] md:py-[30px] relative size-full w-full">
          <Frame28 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px] md:rounded-[40px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[15px] items-center h-auto relative w-full md:flex-[1_0_0] md:min-h-px md:min-w-px">
      <Frame23 />
      <Frame21 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-auto md:h-full items-center overflow-clip relative w-full md:flex-[1_0_0] md:min-h-px md:min-w-px">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame11({ activeSlide, onSlideChange }: { activeSlide: number; onSlideChange: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[70px] h-auto md:h-full items-center justify-center overflow-clip relative md:flex-[1_0_0] md:min-h-px md:min-w-px w-full">
      <Frame12 activeSlide={activeSlide} onSlideChange={onSlideChange} />
      <Frame29 />
    </div>
  );
}

export default function Troubleshooting() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-[rgb(230,239,255)] content-stretch flex items-start px-[20px] md:px-[50px] py-[15px] md:py-[25px] relative size-full" data-name="Troubleshooting">
      <Frame11 activeSlide={activeSlide} onSlideChange={setActiveSlide} />
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

function Frame1() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button 
        onClick={() => setIsContactPopupOpen(true)}
        className="content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[30px] py-[13px] relative rounded-[35px] shrink-0 w-full md:w-[258px] cursor-pointer border-0 transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_20px_rgba(87,115,255,0.4)]"
        style={{ backgroundImage: "linear-gradient(84.3118deg, rgb(128, 172, 255) 0.34207%, rgb(87, 115, 255) 119.94%)" }}
      >
        <p className="font-['Rubik',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-white" dir="rtl">{t("trouble.moreDetails")}</p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <BasilArrowUpOutline />
          </div>
        </div>
        {/* Inset shadow overlay matching main CTA style */}
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(89,117,254,0.25),inset_0px_-8px_22px_1px_rgba(89,117,254,0.57)]" />
      </button>
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </>
  );
}

function Frame32() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col h-auto md:h-full items-center md:items-start justify-between relative shrink-0 w-full md:w-auto gap-[15px]">
      <p className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] md:text-[40px] text-center md:text-right text-white" dir="rtl">{t("trouble.cases.title")}</p>
      <p className="font-['Rubik',sans-serif] font-medium leading-[14px] md:leading-[22px] relative shrink-0 text-[14px] md:text-[16px] text-white text-center md:text-right max-w-[200px] md:max-w-none md:w-full whitespace-pre-wrap" dir="rtl">{t("trouble.cases.subtitle")}</p>
      <div className="hidden md:block w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame4() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] rounded-[170px] size-[62px] top-[calc(50%+0.5px)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 62 62\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(3.0856 0.015663 -0.00089777 3.8635 31.144 30.843)\\'><stop stop-color=\\'rgba(51,83,208,0.5)\\' offset=\\'0.13462\\'/><stop stop-color=\\'rgba(94,128,230,0.57)\\' offset=\\'0.56731\\'/><stop stop-color=\\'rgba(137,174,253,0.64)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Frame3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[170px] shrink-0 size-[133px]">
      <Frame4 />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['Rubik',sans-serif] font-semibold text-[24px] text-[#4f5e7b] z-10">24/7</p>
      </div>
    </div>
  );
}

function Frame6() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] rounded-[170px] size-[62px] top-[calc(50%+0.5px)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 62 62\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(3.0856 0.015663 -0.00089777 3.8635 31.144 30.843)\\'><stop stop-color=\\'rgba(51,83,208,0.5)\\' offset=\\'0.13462\\'/><stop stop-color=\\'rgba(94,128,230,0.57)\\' offset=\\'0.56731\\'/><stop stop-color=\\'rgba(137,174,253,0.64)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Frame5() {
  return (
    <div className="bg-white overflow-clip relative rounded-[170px] shrink-0 size-[133px]">
      <Frame6 />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['Rubik',sans-serif] font-semibold text-[24px] text-[#4f5e7b] z-10">95%</p>
      </div>
    </div>
  );
}

function Frame8() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] rounded-[170px] size-[62px] top-[calc(50%+0.5px)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 62 62\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(3.0856 0.015663 -0.00089777 3.8635 31.144 30.843)\\'><stop stop-color=\\'rgba(51,83,208,0.5)\\' offset=\\'0.13462\\'/><stop stop-color=\\'rgba(94,128,230,0.57)\\' offset=\\'0.56731\\'/><stop stop-color=\\'rgba(137,174,253,0.64)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Frame7() {
  return (
    <div className="bg-white overflow-clip relative rounded-[170px] shrink-0 size-[133px]">
      <Frame8 />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['Rubik',sans-serif] font-semibold text-[24px] text-[#4f5e7b] z-10">AI</p>
      </div>
    </div>
  );
}

function Frame10() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] rounded-[170px] size-[62px] top-[calc(50%+0.5px)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 62 62\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(3.0856 0.015663 -0.00089777 3.8635 31.144 30.843)\\'><stop stop-color=\\'rgba(51,83,208,0.5)\\' offset=\\'0.13462\\'/><stop stop-color=\\'rgba(94,128,230,0.57)\\' offset=\\'0.56731\\'/><stop stop-color=\\'rgba(137,174,253,0.64)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Frame9() {
  return (
    <div className="bg-white overflow-clip relative rounded-[170px] shrink-0 size-[133px]">
      <Frame10 />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['Rubik',sans-serif] font-semibold text-[24px] text-[#4f5e7b] z-10">80%</p>
      </div>
    </div>
  );
}

function Frame34() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full md:w-[638px] scale-[0.7] md:scale-100 origin-center">
      <div className="flex flex-col items-center gap-[10px]">
        <Frame3 />
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] text-white" dir="rtl">{t("trouble.stats.availability")}</p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Frame5 />
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] text-white" dir="rtl">{t("trouble.stats.accuracy")}</p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Frame7 />
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] text-white" dir="rtl">{t("trouble.stats.automation")}</p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Frame9 />
        <p className="font-['Rubik',sans-serif] font-medium text-[14px] text-white" dir="rtl">{t("trouble.stats.timeSaving")}</p>
      </div>
    </div>
  );
}

function Frame() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`bg-white content-stretch flex gap-[20px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[10px] relative rounded-[35px] shrink-0 ${layout.textAlign} w-[638px]`}>
      <p className={`flex-[1_0_0] font-['Rubik',sans-serif] font-normal min-h-px min-w-px relative text-[#4c659c] text-[16px] ${layout.textAlign} whitespace-pre-wrap`} dir={layout.dir}>{t("trouble.testimonial")}</p>
      <p className="font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[#4f5e7b] text-[36px]" dir={layout.dir}>50%</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch hidden md:flex flex-col gap-[20px] items-center md:items-start justify-center relative shrink-0 w-full md:w-auto">
      <Frame34 />
      <div className="hidden md:block">
        <Frame />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col md:flex-row flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full md:w-fit h-full gap-[10px] md:gap-0">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <Frame32 />
      </div>
      <Frame33 />
      {/* Кнопка для мобильной версии внизу */}
      <div className="block md:hidden w-full max-w-[200px]">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] md:rounded-[40px] w-full h-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] md:rounded-[40px] size-full" src={imgFrame1171275765} />
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[20px] md:px-[80px] py-[15px] md:py-[109px] relative w-full h-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col h-[160px] md:h-[351px] items-center justify-center relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}