import svgPaths from "./svg-e86oxqyiv1";

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
    <div className="overflow-clip relative rounded-[34px] size-[27px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 27 27\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(2.0997 0.019372 -0.013864 1.5027 13.563 13.432)\'><stop stop-color=\'rgba(51,83,208,0.5)\' offset=\'0.55999\'/><stop stop-color=\'rgba(94,128,230,0.57)\' offset=\'0.78\'/><stop stop-color=\'rgba(137,174,253,0.64)\' offset=\'1\'/></radialGradient></defs></svg>')" }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[15px] top-1/2">
        <div className="-scale-y-100 flex-none">
          <TablerGiftFilled />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[30px] py-[10px] relative rounded-[35px] size-full">
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5f80c9] text-[16px] text-right" dir="auto">
        הפעל דמו
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}