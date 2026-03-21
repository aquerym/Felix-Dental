import svgPaths from "./svg-2iyt1rc5h3";
import svgPathsMobile from "./svg-qog8eaexpd";

export default function Vector() {
  return (
    <div className="relative size-full md:scale-100" data-name="Vector">
      {/* Mobile logo */}
      <svg className="block size-full md:hidden" fill="none" preserveAspectRatio="none" viewBox="0 0 157.907 29.9351">
        <g id="Frame 25">
          <path d={svgPathsMobile.p37d22100} fill="white" id="Vector" stroke="#8F93D3" strokeWidth="0.0507431" />
          <g id="Felix Labs">
            <path d={svgPathsMobile.p32887080} fill="white" />
            <path d={svgPathsMobile.p238cd00} fill="white" />
            <path d={svgPathsMobile.p1f277e00} fill="white" />
            <path d={svgPathsMobile.p316ae080} fill="white" />
            <path d={svgPathsMobile.pffa4980} fill="white" />
            <path d={svgPathsMobile.pe15cc80} fill="white" />
            <path d={svgPathsMobile.p20b15300} fill="white" />
            <path d={svgPathsMobile.p26fc5f80} fill="white" />
            <path clipRule="evenodd" d={svgPathsMobile.p199f4800} fill="white" fillRule="evenodd" />
          </g>
        </g>
      </svg>
      {/* Desktop logo */}
      <svg className="hidden md:block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.3333 43.9638">
        <path d={svgPaths.p41ee100} fill="url(#paint0_linear_19_279)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_279" x1="22.0009" x2="22.8641" y1="-0.0775769" y2="39.4266">
            <stop stopColor="#CAE7FF" />
            <stop offset="1" stopColor="#7898FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}