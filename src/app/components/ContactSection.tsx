import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLayout } from "@/layouts";
import { CONTACT_SECTION_ID } from "@/app/lib/scrollToContact";
import svgPaths from "@/imports/svg-4yvwr1x3vc";
import imgFrame1171275620 from "@/assets/e988e6ef720aa675113d122b1059a42df6b88463.png";
import imgFrame1171275621 from "@/assets/7357ce90f95eb8fe8b265017caf3a6deecadc7b6.png";
import imgFrame1171275622 from "@/assets/72b8dc871231ac78f17cd908872fabb84c9a937a.png";
import imgGroup4111 from "@/assets/7b3a1e1c19d2db49705070aafd2334b24873ec4b.png";

const AVATAR_SIZE = 50;
const AVATAR_OVERLAP = 14;
const AVATAR_STEP = AVATAR_SIZE - AVATAR_OVERLAP;
const AVATAR_STACK_WIDTH = AVATAR_SIZE + AVATAR_STEP * 3;
const AVATAR_IMAGES = [imgFrame1171275620, imgFrame1171275621, imgFrame1171275622];

function AvatarCircle({ src, zIndex }: { src: string; zIndex: number }) {
  return (
    <div className="pointer-events-none relative size-[50px] shrink-0 overflow-hidden rounded-full border-2 border-solid border-white bg-white" style={{ zIndex }}>
      <img alt="" className="size-full object-cover" src={src} />
    </div>
  );
}

function AvatarPlusBadge({ zIndex }: { zIndex: number }) {
  return (
    <div className="relative size-[50px] shrink-0" style={{ zIndex }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Frame 1171275623">
          <rect fill="url(#paint0_linear_9_599)" height="48" rx="24" width="48" x="1" y="1" />
          <rect height="48" rx="24" stroke="var(--stroke-0, white)" strokeWidth="2" width="48" x="1" y="1" />
          <path d={svgPaths.pe8169c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_599" x1="25" x2="45.05" y1="0" y2="40.3">
            <stop stopColor="#74CAFF" />
            <stop offset="1" stopColor="#7D69FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function UserAvatarStack() {
  return (
    <div className="relative h-[50px] shrink-0" style={{ width: AVATAR_STACK_WIDTH }}>
      {AVATAR_IMAGES.map((src, index) => (
        <div key={src} className="absolute top-0" style={{ left: index * AVATAR_STEP }}>
          <AvatarCircle src={src} zIndex={index + 10} />
        </div>
      ))}
      <div className="absolute top-0" style={{ left: AVATAR_STEP * 3 }}>
        <AvatarPlusBadge zIndex={40} />
      </div>
    </div>
  );
}

function UsersBadge() {
  const { t } = useTranslation();
  const layout = useLayout();
  return (
    <div className={`flex gap-[16px] items-center ${layout.integrations?.frame4Justify ?? "justify-start"} shrink-0 w-fit`}>
      <UserAvatarStack />
      <p className="font-['Rubik',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4f5e7b] text-[12px] md:text-[16px] text-start">{t("integrations.users")}</p>
    </div>
  );
}

/** Merged integrations + contact section. Every CTA scrolls here. */
export function ContactSection() {
  const { t } = useTranslation();
  const layout = useLayout();
  const textDir = layout.dir;
  const textAlignClass = layout.textAlign;
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "" });
    setIsSubmitted(true);
  };

  const handleSendAgain = () => {
    setIsSubmitted(false);
  };

  const inputClass = `w-full px-3 py-2.5 rounded-lg border-2 border-[#e6efff] bg-white focus:border-[#89AEFD] outline-none transition-colors ${textAlignClass} font-['Rubik',sans-serif] text-[#4f5e7b] text-[15px]`;
  const labelClass = `block text-[#4f5e7b] font-medium mb-1.5 ${textAlignClass} font-['Rubik',sans-serif] text-[14px]`;

  return (
    <section
      id={CONTACT_SECTION_ID}
      className="bg-white w-full px-[20px] md:px-[50px] py-[50px] md:py-[100px] scroll-mt-[100px]"
      data-name="Contact"
      dir={layout.dir}
    >
      <div className="mx-auto w-full max-w-[1080px] flex flex-col-reverse md:flex-row gap-[30px] md:gap-[60px] items-center md:items-center">
        <div className="w-full md:max-w-[480px] shrink-0 bg-white rounded-[30px] p-5 md:p-7 shadow-[2px_4px_20px_0px_rgba(168,168,168,0.16)]">
          <div className="flex flex-col gap-[10px] mb-5 items-center text-center">
            <h2 className="font-['Rubik',sans-serif] font-semibold text-[24px] md:text-[36px] text-[#4f5e7b] leading-[1.1]">
              {t("contact.title")}
            </h2>
            <p className="font-['Rubik',sans-serif] font-normal text-[14px] md:text-[16px] text-[#7c96c7] leading-normal">
              {t("contact.subtitle")}
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center gap-[16px] rounded-[24px] border border-[#dce8ff] bg-[#f6f9ff] px-[20px] py-[32px] text-center md:py-[40px]">
              <div className="flex size-[64px] items-center justify-center rounded-full bg-[#e8f5ee] shadow-[0_4px_14px_rgba(0,168,120,0.15)]">
                <Check className="size-[32px] text-[#00a878]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-['Rubik',sans-serif] text-[22px] font-semibold leading-tight text-[#2d3a52] md:text-[26px]">{t("contact.success.title")}</h3>
                <p className="font-['Rubik',sans-serif] text-[14px] font-normal leading-normal text-[#7c96c7] md:text-[16px]">{t("contact.success.message")}</p>
              </div>
              <button type="button" onClick={handleSendAgain} className="mt-[4px] font-['Rubik',sans-serif] text-[14px] font-medium text-[#5980cc] underline-offset-4 transition-colors hover:text-[#3e5f9a] hover:underline cursor-pointer border-0 bg-transparent">
                {t("contact.success.again")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="contact-name" className={labelClass} dir={textDir}>
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  dir={textDir}
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className={labelClass} dir={textDir}>
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                  dir={textDir}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass} dir={textDir}>
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  dir={textDir}
                />
              </div>

              <button
                type="submit"
                className="w-full font-['Rubik',sans-serif] font-medium text-white text-[16px] py-[11px] rounded-[35px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_8px_20px_rgba(87,115,255,0.4)] cursor-pointer border-0"
                style={{
                  backgroundImage:
                    "linear-gradient(84.3118deg, rgb(128, 172, 255) 0.34207%, rgb(87, 115, 255) 119.94%)",
                }}
              >
                {t("contact.submit")}
              </button>
            </form>
          )}

          <div className="mt-5">
            <UsersBadge />
          </div>
        </div>

        <div className="relative shrink-0 w-[240px] h-[240px] md:w-[560px] md:h-[560px] flex-1 flex items-center justify-center" data-name="Group 411 1">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGroup4111} />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
