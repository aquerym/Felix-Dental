import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { cn } from "@/app/components/ui/utils";
import imgClinicPhoto from "@/assets/bento-clinic-photo.png";
import imgCarousel1 from "@/assets/bento-carousel-1.png";
import imgCarousel2 from "@/assets/bento-carousel-2.png";
const CLINIC_CAROUSEL_IMAGES = [imgClinicPhoto, imgCarousel1, imgCarousel2];
const CAROUSEL_INTERVAL_MS = 4000;

const CARD_LIGHT_GRADIENT = "linear-gradient(83.88deg, rgb(246, 249, 255) 2.12%, rgb(245, 245, 245) 96.71%)";
const CARD_BLUE_GRADIENT = "linear-gradient(97.17deg, rgba(137, 191, 253, 0.64) 10.73%, rgba(78, 133, 221, 0.554) 70.44%, rgba(42, 97, 201, 0.5) 108.23%)";
const BADGE_GRADIENT = "linear-gradient(117.66deg, rgba(137, 191, 253, 0.64) 10.73%, rgba(78, 133, 221, 0.554) 70.44%, rgba(42, 97, 201, 0.5) 108.23%)";
const BENTO_EASE = "duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
const BENTO_CARD_HOVER = "group relative cursor-pointer transition-[transform_2.2s_cubic-bezier(0.16,1,0.3,1),box-shadow_0.9s_cubic-bezier(0.22,1,0.36,1),border-color_0.9s_cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[4px] hover:shadow-[2px_8px_14px_0px_rgba(168,168,168,0.2)]";

function BentoCardHoverOverlay({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100", BENTO_EASE, className)} />
  );
}
function BentoArrowIcon() {
  return (
    <svg className={cn("size-[24px] transition-transform group-hover:translate-x-px group-hover:-translate-y-px", BENTO_EASE)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M18.9411 5.94106C19.1285 6.12862 19.226 6.39084 19.2119 6.67003L18.7642 15.603C18.7456 15.8792 18.6194 16.148 18.4128 16.3513C18.2063 16.5547 17.9358 16.6764 17.6598 16.6902C17.3838 16.7041 17.1242 16.6089 16.937 16.4253C16.7498 16.2417 16.65 15.9843 16.659 15.7085L16.9794 9.31697L7.92232 18.374C7.71499 18.5813 7.44166 18.7057 7.16245 18.7197C6.88324 18.7337 6.62103 18.6362 6.43349 18.4486C6.24595 18.2611 6.14846 17.9989 6.16245 17.7197C6.17644 17.4405 6.30078 17.1671 6.50811 16.9598L15.5651 7.90275L9.1736 8.22308C8.89784 8.23212 8.64043 8.13229 8.45681 7.94511C8.27319 7.75793 8.17806 7.49837 8.19189 7.22232C8.20572 6.94628 8.32742 6.67585 8.53078 6.46927C8.73413 6.2627 9.00287 6.13651 9.27911 6.11788L18.2121 5.67018C18.4913 5.65614 18.7535 5.75358 18.9411 5.94106Z" fill="#7C96C7" />
    </svg>
  );
}

function ArrowButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={cn("flex size-[30px] min-w-[30px] max-w-[30px] shrink-0 items-center justify-center overflow-clip rounded-full bg-white shadow-[0px_4px_4px_0px_rgba(200,200,200,0.25)] cursor-pointer border-0 transition-[transform,box-shadow] group-hover:scale-[1.02] group-hover:shadow-[0px_5px_8px_0px_rgba(200,200,200,0.32)]", BENTO_EASE, className)} aria-label="Learn more">
      <BentoArrowIcon />
    </button>
  );
}

function BentoToothIcon() {
  return (
    <svg className="size-[135px] shrink-0" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M67.5 18.18C71.9567 20.4974 75.888 23.7083 79.0488 27.6123C82.2096 31.5164 84.532 36.0299 85.8712 40.8712C86.2681 42.3094 87.22 43.531 88.5175 44.2673C89.815 45.0036 91.3519 45.1943 92.79 44.7975C94.2281 44.4007 95.4497 43.4488 96.186 42.1513C96.9224 40.8538 97.1131 39.3169 96.7163 37.8788C94.1576 28.6345 88.8776 20.3736 81.5625 14.1694C82.4925 14.0944 83.43 14.0587 84.375 14.0625C95.6644 14.0625 105.075 18.1575 111.544 25.9313C117.917 33.5644 120.938 44.1337 120.938 56.25C120.938 73.6706 118.046 89.2406 113.091 100.676C108.366 111.578 100.671 120.938 90 120.938C83.8125 120.938 79.9481 117.27 77.6531 113.287C75.6169 109.744 74.4019 105.283 73.4231 101.689C72.2588 97.4137 71.3644 94.2187 70.0931 92.0137C69.0525 90.1969 68.3438 90 67.5 90C66.6562 90 65.9531 90.1969 64.9069 92.0137C63.6356 94.2187 62.7412 97.4137 61.5769 101.689C60.5981 105.283 59.3831 109.749 57.3469 113.287C55.0519 117.27 51.1875 120.938 45 120.938C34.3294 120.938 26.6344 111.578 21.9094 100.676C16.9594 89.2406 14.0625 73.6763 14.0625 56.25C14.0625 44.1337 17.0888 33.5644 23.4563 25.9313C29.925 18.1575 39.33 14.0625 50.625 14.0625H50.7825C56.6033 14.0847 62.3347 15.4963 67.5 18.18Z" fill="white" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center overflow-clip rounded-[170px] px-[12px] py-[7px] shrink-0" style={{ backgroundImage: BADGE_GRADIENT }}>
      <span className="font-['Rubik',sans-serif] text-[16px] font-semibold leading-normal text-white whitespace-nowrap">{children}</span>
    </div>
  );
}

function TextFeatureCard({ badge, title, desc, className = "" }: { badge: string; title: string; desc: string; className?: string }) {
  const layout = useLayout();
  return (
    <div className={cn("flex min-h-[220px] flex-1 min-w-0 flex-col items-end justify-between overflow-clip rounded-[30px] border-2 border-solid border-[#f5f6f8] p-[24px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] hover:border-[#e8edf5]", BENTO_CARD_HOVER, className)} style={{ backgroundImage: CARD_LIGHT_GRADIENT }}>
      <BentoCardHoverOverlay className="bg-[#d8e8ff]/25" />
      <div className="relative z-10 flex w-full flex-col items-end justify-between gap-0 min-h-full flex-1">
      <div className="flex w-full items-center justify-between">
        <Badge>{badge}</Badge>
        <ArrowButton />
      </div>
      <div className={`flex w-full flex-col gap-[12px] ${layout.textAlign}`}>
        <p className="font-['Rubik',sans-serif] text-[24px] font-semibold leading-normal text-[#4f5e7b]">{title}</p>
        <p className="font-['Rubik',sans-serif] text-[16px] font-medium leading-normal text-[#7c96c7] whitespace-pre-wrap">{desc}</p>
      </div>
      </div>
    </div>
  );
}

function ClinicPhotoCard({ className = "" }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % CLINIC_CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative min-h-[220px] w-full shrink-0 overflow-hidden rounded-[30px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] md:w-[367px] md:min-h-0 md:self-stretch ${className}`}>
      {CLINIC_CAROUSEL_IMAGES.map((src, index) => (
        <img key={index} alt="" src={src} className={`absolute inset-0 size-full max-w-none rounded-[30px] object-cover transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`} />
      ))}
    </div>
  );
}

function ToothFeatureCard({ title, subtitle, className = "" }: { title: string; subtitle: string; className?: string }) {
  return (
    <div className={`flex min-h-[220px] w-full shrink-0 flex-col items-center justify-center gap-[10px] overflow-clip rounded-[30px] p-[24px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] md:w-[318px] md:min-h-0 md:self-stretch ${className}`} style={{ backgroundImage: CARD_BLUE_GRADIENT }}>
      <BentoToothIcon />
      <p className="w-full text-center font-['Rubik',sans-serif] text-[24px] font-semibold leading-[1.15] text-white">
        {title}
        {subtitle ? (
          <>
            <br />
            {subtitle}
          </>
        ) : null}
      </p>
    </div>
  );
}

function ChatCard({ questions, className = "" }: { questions: string[]; className?: string }) {
  const lastQuestion = questions[questions.length - 1];
  const otherQuestions = questions.slice(0, -1);

  return (
    <div className={cn("flex min-h-[400px] w-full shrink-0 flex-col items-end justify-between overflow-clip rounded-[30px] p-[25px] shadow-[2px_4px_5.8px_0px_rgba(168,168,168,0.16)] md:w-[398px] md:min-h-0 md:self-stretch", BENTO_CARD_HOVER, className)} style={{ backgroundImage: CARD_BLUE_GRADIENT }}>
      <BentoCardHoverOverlay className="bg-white/10" />
      <div className="relative z-10 flex w-full flex-col items-end justify-between gap-0 min-h-full flex-1">
      {otherQuestions.map((q, i) => (
        <div key={i} className="flex shrink-0 items-center justify-center overflow-clip rounded-[35px] bg-white px-[14px] py-[10px]">
          <p className="font-['Rubik',sans-serif] text-[16px] font-medium leading-normal text-[#5f80c9] text-right">{q}</p>
        </div>
      ))}
      <div className="flex h-[40px] w-full shrink-0 items-stretch justify-between">
        <ArrowButton className="size-auto h-full aspect-square w-auto min-w-0 max-w-none" />
        {lastQuestion ? (
          <div className="flex h-[40px] shrink-0 items-center justify-center overflow-clip rounded-[35px] bg-white px-[14px] py-[10px]">
            <p className="font-['Rubik',sans-serif] text-[16px] font-medium leading-normal text-[#5f80c9] text-right">{lastQuestion}</p>
          </div>
        ) : null}
      </div>
      </div>
    </div>
  );
}

export default function KeyAdvantagesBento() {
  const { t } = useTranslation();
  const layout = useLayout();
  const chatQuestions = t("bento.chatQuestions", { returnObjects: true }) as string[];

  return (
    <section id="key-advantages" className="relative w-full scroll-mt-[120px] bg-white px-[20px] py-[50px] md:px-[50px] md:py-[100px]" data-name="Key Advantages" dir={layout.dir}>
      <div className="flex w-full flex-col items-start gap-[50px] md:gap-[80px]">
        <div className={`flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0 ${layout.textAlign}`}>
          <p className="max-w-[350px] font-['Rubik',sans-serif] text-[16px] font-medium leading-normal text-[#7c96c7] md:text-[18px]">{t("bento.subtitle")}</p>
          <h2 className="font-['Rubik',sans-serif] text-[32px] font-semibold leading-normal text-[#4f5e7b] md:text-[48px] md:whitespace-nowrap">{t("bento.title")}</h2>
        </div>

        <div className="hidden w-full flex-col gap-5 overflow-visible md:flex md:min-h-[640px] md:flex-row">
          <div className="flex min-h-px min-w-px flex-1 flex-col gap-5">
            <div className="flex min-h-[300px] flex-1 gap-5">
              <TextFeatureCard badge={t("bento.card1.badge")} title={t("bento.card1.title")} desc={t("bento.card1.desc")} />
              <ClinicPhotoCard />
            </div>
            <div className="flex min-h-[300px] flex-1 gap-5">
              <ToothFeatureCard title={t("bento.card3.title")} subtitle={t("bento.card3.subtitle")} />
              <TextFeatureCard badge={t("bento.card4.badge")} title={t("bento.card4.title")} desc={t("bento.card4.desc")} />
            </div>
          </div>
          <ChatCard questions={chatQuestions} />
        </div>

        <div className="flex w-full flex-col gap-5 md:hidden">
          <TextFeatureCard badge={t("bento.card1.badge")} title={t("bento.card1.title")} desc={t("bento.card1.desc")} />
          <ClinicPhotoCard />
          <ToothFeatureCard title={t("bento.card3.title")} subtitle={t("bento.card3.subtitle")} />
          <TextFeatureCard badge={t("bento.card4.badge")} title={t("bento.card4.title")} desc={t("bento.card4.desc")} />
          <ChatCard questions={chatQuestions} />
        </div>
      </div>
    </section>
  );
}
