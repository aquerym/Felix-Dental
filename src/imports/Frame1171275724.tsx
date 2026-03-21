import svgPaths from "./svg-iw5n0hqzzz";
import { useTranslation } from "react-i18next";

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

export default function Frame() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[30px] py-[13px] relative rounded-[35px] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 199 46\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(9.9037 0.011621 -0.0028815 2.8665 99.963 22.884)\'><stop stop-color=\'rgba(51,83,208,0.5)\' offset=\'0.13462\'/><stop stop-color=\'rgba(94,128,230,0.57)\' offset=\'0.56731\'/><stop stop-color=\'rgba(137,174,253,0.64)\' offset=\'1\'/></radialGradient></defs></svg>')" }}>
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-right text-white" dir="auto">
        {t("hero.cta")}
      </p>
      <BasilArrowUpOutline />
    </div>
  );
}