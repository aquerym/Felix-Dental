import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import imgFrame1171275745 from "../../assets/cb46a8b7eff6d86c4529ff2718c1a45ef36f8124.png";

export function WaitingListFeature() {
  const { t } = useTranslation();
  const layout = useLayout();
  const bullets = [t("waitingList.bullet1"), t("waitingList.bullet2"), t("waitingList.bullet3")];

  return (
    <div className="bg-[rgb(230,239,255)] content-stretch flex flex-col items-center px-[20px] md:px-[100px] py-[50px] md:py-[100px] relative w-full" data-name="Waiting List">
      <div className={`content-stretch flex flex-col-reverse md:flex-row gap-[30px] md:gap-[60px] items-center justify-between max-w-[1240px] relative w-full ${layout.dir === "rtl" ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className={`content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full md:flex-1 ${layout.textAlign}`} dir={layout.dir}>
          <p className="font-['Rubik',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#4f5e7b] text-[28px] md:text-[48px] w-full">{t("waitingList.title")}</p>
          <p className="font-['Rubik',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7c96c7] text-[14px] md:text-[18px] w-full whitespace-pre-wrap">{t("waitingList.subtitle")}</p>
          <ul className={`content-stretch flex flex-col gap-[12px] list-none m-0 p-0 relative shrink-0 w-full ${layout.textAlign}`}>
            {bullets.map((text) => (
              <li key={text} className="font-['Rubik',sans-serif] font-normal leading-[22px] relative text-[#4f5e7b] text-[16px] flex gap-[10px] items-start">
                <span className="text-[#7097E2] font-semibold shrink-0">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative shrink-0 w-full max-w-[400px] md:max-w-[480px] aspect-square rounded-[40px] overflow-hidden shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171275745} />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(112,151,226,0.35)] to-[rgba(51,83,208,0.2)]" />
        </div>
      </div>
    </div>
  );
}
