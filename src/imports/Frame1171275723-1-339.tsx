import svgPaths from "./svg-4lmx67dqhs";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

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

function Frame1() {
  return (
    <div className="overflow-clip relative rounded-[34px] size-[27px]" style={{ backgroundColor: '#89AEFD' }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[15px] top-1/2">
        <div className="-scale-y-100 flex-none">
          <TablerGiftFilled />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] md:px-[30px] py-[10px] relative rounded-[35px] w-auto shrink-0 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer ${layout.buttons.demoMinW}`}>
      <p className={`font-['Rubik',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5f80c9] ${layout.buttons.fontSize} ${layout.textAlign}`}>
        {t("hero.demo")}
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}