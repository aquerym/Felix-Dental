import svgPaths from "./svg-rjqvmd6t5l";
import imgFrame1171275779 from "../assets/15c12b64f8ae214d3dbfd1a4ad28f0c3ee6817da.png";
import imgFrame1171275778 from "../assets/8cd2b4b5ffea4585e0f8d9a7a946f2e66db544a2.png";
import imgFrame1171275780 from "../assets/d11c116f13bb5f74e52d85017aca6c4c884e1519.png";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";

function Frame() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-0 items-center justify-between relative shrink-0 w-full">
      <div className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f5e7b] text-[28px] md:text-[48px] text-center md:text-start w-full md:w-fit whitespace-pre-wrap flex flex-col gap-[15px] items-center justify-start">
        <p>{t("workflow.title")}</p>
      </div>
    </div>
  );
}

function Frame9() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-start leading-[normal] relative shrink-0 w-full">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[#5980cc] text-[18px] md:text-[24px] ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric1.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-normal relative shrink-0 text-[#7c96c7] text-[14px] md:text-[16px] w-full md:w-[270px] whitespace-pre-wrap ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric1.desc")}</p>
    </div>
  );
}

function IonStatsChart() {
  return (
    <div className="h-[28px] md:h-[49px] relative shrink-0 w-[28px] md:w-[50px]" data-name="ion:stats-chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 49">
        <g id="ion:stats-chart">
          <path d={svgPaths.p2eb63d80} fill="var(--fill-0, #B0CBFB)" fillOpacity="0.88" id="Vector" />
          <path d={svgPaths.p187d2db0} fill="var(--fill-0, #7097E2)" id="Vector_2" opacity="0.77" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5980cc] text-[28px] md:text-[48px] text-right">{t("workflow.metric1.stat")}</p>
      <IonStatsChart />
    </div>
  );
}

function Metrica() {
  return (
    <div className="h-auto md:min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px relative rounded-[30px] w-full" data-name="metrica" style={{ backgroundImage: "linear-gradient(77.9981deg, rgb(255, 255, 255) 5.0424%, rgba(244, 244, 244, 0.5) 112.25%)" }}>
      <div className="overflow-clip rounded-[inherit] h-auto md:h-full w-full">
        <div className="content-stretch flex flex-col items-start gap-[20px] md:justify-between p-[30px] relative h-auto md:h-full w-full">
          <Frame9 />
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame4() {
  const { t } = useTranslation();
  return (
    <div className="h-auto min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px relative rounded-[30px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-[#ddd] inset-0 rounded-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgFrame1171275779} />
      </div>
      <p className="absolute font-['Rubik',sans-serif] font-bold leading-[normal] text-[18px] md:text-[24px] text-right text-white bottom-[20px] md:top-[217px] right-[20px] md:right-[30px] w-[150px] md:w-[175px] whitespace-pre-wrap" dir="rtl">{t("workflow.photo1")}</p>
    </div>
  );
}

function Frame10() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-between leading-[normal] relative shrink-0 w-full">
      <p className={`font-['Rubik',sans-serif] font-semibold relative shrink-0 text-[#5980cc] text-[20px] md:text-[24px] ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric2.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-light relative shrink-0 text-[#7c96c7] text-[14px] md:text-[16px] w-full md:w-[270px] whitespace-pre-wrap ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric2.desc")}</p>
    </div>
  );
}

function StreamlineClassLessonSolid() {
  return (
    <div className="relative shrink-0 size-[28px] md:size-[42px]" data-name="streamline:class-lesson-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_9_397)" id="streamline:class-lesson-solid">
          <path clipRule="evenodd" d={svgPaths.p2dfa5300} fill="var(--fill-0, #B0CBFB)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pc9ffd80} fill="var(--fill-0, #7097E2)" fillRule="evenodd" id="Vector_2" opacity="0.77" />
        </g>
        <defs>
          <clipPath id="clip0_9_397">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <StreamlineClassLessonSolid />
      <p className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5980cc] text-[28px] md:text-[48px] text-right">{t("workflow.metric2.stat")}</p>
    </div>
  );
}

function Metrica1() {
  return (
    <div className="h-auto md:min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px relative rounded-[30px] w-full" data-name="metrica" style={{ backgroundImage: "linear-gradient(77.9981deg, rgb(255, 255, 255) 5.0424%, rgba(244, 244, 244, 0.5) 112.25%)" }}>
      <div className="overflow-clip rounded-[inherit] h-auto md:h-full w-full">
        <div className="content-stretch flex flex-col items-start gap-[20px] md:justify-between p-[30px] relative h-auto md:h-full w-full">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[10px] items-start h-auto md:flex-[1_0_0] md:min-h-px md:min-w-px relative w-full [&>*]:w-full md:[&>*]:w-auto">
      <Metrica />
      <Frame4 />
      <Metrica1 />
    </div>
  );
}

function Frame3() {
  const { t } = useTranslation();
  return (
    <div className="h-auto min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px relative rounded-[30px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-[#ddd] inset-0 rounded-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgFrame1171275778} />
      </div>
      <p className="absolute font-['Rubik',sans-serif] font-bold leading-[normal] text-[18px] md:text-[24px] text-right text-white bottom-[20px] md:top-[217px] right-[20px] md:right-[30px] w-[150px] md:w-[175px] whitespace-pre-wrap" dir="rtl">{t("workflow.photo2")}</p>
    </div>
  );
}

function Frame12() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-start leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">
      <p className={`font-['Rubik',sans-serif] font-semibold min-w-full relative shrink-0 text-[#5980cc] text-[20px] md:text-[24px] w-[min-content] ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric3.title")}</p>
      <p className={`font-['Rubik',sans-serif] font-light relative shrink-0 text-[#7c96c7] text-[14px] md:text-[16px] w-full md:w-[270px] ${layout.textAlign}`} dir={layout.dir}>{t("workflow.metric3.desc")}</p>
    </div>
  );
}

function TeenyiconsAppointmentsSolid() {
  return (
    <div className="relative shrink-0 size-[28px] md:size-[49px]" data-name="teenyicons:appointments-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="teenyicons:appointments-solid">
          <path clipRule="evenodd" d={svgPaths.p8e7ed00} fill="var(--fill-0, #B0CBFB)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p24145f00} fill="var(--fill-0, #7097E2)" fillRule="evenodd" id="Vector_2" opacity="0.77" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5980cc] text-[28px] md:text-[48px] text-right">{t("workflow.metric3.stat")}</p>
      <TeenyiconsAppointmentsSolid />
    </div>
  );
}

function Metrica2() {
  return (
    <div className="h-auto md:min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px relative rounded-[30px] w-full" data-name="metrica" style={{ backgroundImage: "linear-gradient(77.9981deg, rgb(255, 255, 255) 5.0424%, rgba(244, 244, 244, 0.5) 112.25%)" }}>
      <div className="overflow-clip rounded-[inherit] h-auto md:h-full w-full">
        <div className="content-stretch flex flex-col items-start gap-[20px] md:justify-between p-[30px] relative h-auto md:h-full w-full">
          <Frame12 />
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]" />
    </div>
  );
}

function Frame14() {
  const { t } = useTranslation();
  return (
    <div className="h-auto min-h-[250px] md:flex-[1_0_0] md:h-full md:min-h-px md:min-w-px overflow-clip relative rounded-[30px] w-full text-center">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute bg-[#ddd] inset-0 rounded-[30px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <img alt="" className="absolute h-full left-[-1.46%] max-w-none top-0 w-[102.91%]" src={imgFrame1171275780} />
        </div>
      </div>
      <p className="absolute font-['Rubik',sans-serif] font-bold leading-[normal] text-[18px] md:text-[24px] text-right text-white bottom-[20px] md:top-[214px] right-[20px] md:right-[30px] md:-translate-x-full md:left-[412px] w-[150px] md:w-[129px] whitespace-pre-wrap" dir="rtl">{t("workflow.photo3")}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[10px] items-start h-auto md:flex-[1_0_0] md:min-h-px md:min-w-px relative w-full">
      <Frame3 />
      <Metrica2 />
      <Frame14 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-auto md:h-[606px] items-center justify-center relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function WorkflowMetrics() {
  return (
    <div className="bg-[#e6efff] content-stretch flex flex-col gap-[50px] md:gap-[100px] items-start px-[50px] py-[100px] relative size-full" data-name="Workflow + metrics">
      <Frame />
      <Frame7 />
    </div>
  );
}