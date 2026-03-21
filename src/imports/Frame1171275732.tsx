import svgPaths from "./svg-qqlal9wrj4";

function MaterialSymbolsDoneRounded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:done-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:done-rounded">
          <path d={svgPaths.pf08ee00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[7px] relative rounded-[170px] shadow-[0px_4px_7.5px_0px_rgba(98,147,239,0.5)] size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(1.493 0.007579 -0.0004344 1.8694 15.07 14.924)\'><stop stop-color=\'rgba(51,83,208,0.5)\' offset=\'0.13462\'/><stop stop-color=\'rgba(94,128,230,0.57)\' offset=\'0.56731\'/><stop stop-color=\'rgba(137,174,253,0.64)\' offset=\'1\'/></radialGradient></defs></svg>')" }}>
      <MaterialSymbolsDoneRounded />
    </div>
  );
}