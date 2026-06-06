import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import svgPaths from "@/imports/svg-iw5n0hqzzz";
import { scrollToContact } from "@/app/lib/scrollToContact";

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

interface CTAButtonProps {
  text?: string;
  className?: string;
}

export function CTAButton({ text, className = "" }: CTAButtonProps) {
  const { t } = useTranslation();
  const layout = useLayout();
  const displayText = text ?? t("hero.cta");

  return (
    <button
        onClick={scrollToContact}
        className={`content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[20px] md:px-[30px] py-[13px] relative rounded-[35px] shrink-0 cursor-pointer border-0 transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_20px_rgba(87,115,255,0.4)] ${layout.buttons.ctaWidth} ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(84.3118deg, rgb(128, 172, 255) 0.34207%, rgb(87, 115, 255) 119.94%)",
        }}
      >
        <p className={`font-['Rubik',sans-serif] font-normal leading-[normal] relative shrink-0 ${layout.buttons.fontSize} text-white ${layout.textAlign}`}>
          {displayText}
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <BasilArrowUpOutline />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_4px_0px_rgba(89,117,254,0.25),inset_0px_-8px_22px_1px_rgba(89,117,254,0.57)]" />
      </button>
  );
}