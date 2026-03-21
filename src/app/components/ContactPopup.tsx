import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { useLayout } from "@/layouts";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const { t } = useTranslation();
  const layout = useLayout();
  const textDir = layout.dir;
  const textAlignClass = textDir === "rtl" ? "text-right" : "text-left";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a backend
    alert(t("contact.thanks"));
    onClose();
    setFormData({ name: "", phone: "", email: "" });
  };

  return createPortal(
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[30px] p-6 md:p-8 w-[calc(100%-16px)] max-w-md mx-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold text-[#4f5e7b] font-['Rubik',sans-serif] ${textAlignClass}`} dir={textDir}>
            {t("contact.title")}
          </h2>
          <button
            onClick={onClose}
            className="text-[#7c96c7] hover:text-[#4f5e7b] text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-[#4f5e7b] font-medium mb-2 ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir}>
              {t("contact.name")}
            </label>
            <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full px-4 py-3 rounded-lg border-2 border-[#e6efff] focus:border-[#89AEFD] outline-none transition-colors ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir} />
          </div>

          <div>
            <label htmlFor="phone" className={`block text-[#4f5e7b] font-medium mb-2 ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir}>
              {t("contact.phone")}
            </label>
            <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full px-4 py-3 rounded-lg border-2 border-[#e6efff] focus:border-[#89AEFD] outline-none transition-colors ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir} />
          </div>

          <div>
            <label htmlFor="email" className={`block text-[#4f5e7b] font-medium mb-2 ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir}>
              {t("contact.email")}
            </label>
            <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-4 py-3 rounded-lg border-2 border-[#e6efff] focus:border-[#89AEFD] outline-none transition-colors ${textAlignClass} font-['Rubik',sans-serif]`} dir={textDir} />
          </div>

          <button
            type="submit"
            className="w-full font-['Rubik',sans-serif] font-medium text-white text-[16px] py-[13px] rounded-[35px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 219 46\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(10.899 0.011621 -0.0031711 2.8665 110.01 22.884)\\'><stop stop-color=\\'rgba(51,83,208,0.5)\\' offset=\\'0.13462\\'/><stop stop-color=\\'rgba(94,128,230,0.57)\\' offset=\\'0.56731\\'/><stop stop-color=\\'rgba(137,174,253,0.64)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}