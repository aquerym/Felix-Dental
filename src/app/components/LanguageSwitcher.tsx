import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Флаг США (английский) — круглая обрезка через контейнер
function USFlag() {
  return (
    <svg className="block size-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0F0F0"/>
      <rect y="0" width="100" height="7.7" fill="#D80027"/>
      <rect y="15.4" width="100" height="7.7" fill="#D80027"/>
      <rect y="30.8" width="100" height="7.7" fill="#D80027"/>
      <rect y="46.2" width="100" height="7.7" fill="#D80027"/>
      <rect y="61.5" width="100" height="7.7" fill="#D80027"/>
      <rect y="76.9" width="100" height="7.7" fill="#D80027"/>
      <rect y="92.3" width="100" height="7.7" fill="#D80027"/>
      <rect width="50" height="54" fill="#0052B4"/>
    </svg>
  );
}

// Флаг Израиля (иврит) — круглая обрезка через контейнер
function IsraelFlag() {
  return (
    <svg className="block size-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.0496 5C23.3496 2.5 19.7996 1 15.8496 1C11.8996 1 8.34961 2.5 5.64961 5H26.0496ZM5.64961 27C8.34961 29.5 11.8996 31 15.8496 31C19.7996 31 23.3496 29.5 26.0496 27H5.64961ZM0.849609 16C0.849609 18.15 1.29961 20.15 2.09961 22H29.5996C30.3996 20.15 30.8496 18.15 30.8496 16C30.8496 13.85 30.3996 11.85 29.5996 10H2.09961C1.29961 11.85 0.849609 13.85 0.849609 16Z" fill="#F9F9F9"/>
      <path d="M5.69961 27H26.0496C27.5496 25.6 28.7996 23.9 29.5996 22H2.09961C2.94961 23.9 4.19961 25.6 5.69961 27ZM26.0496 5H5.69961C4.19961 6.4 2.94961 8.1 2.14961 10H29.6496C28.7996 8.1 27.5496 6.4 26.0496 5ZM20.3496 13.5H17.3496L15.8496 11L14.3496 13.5H11.3496L12.8496 16L11.3496 18.5H14.3496L15.8496 21L17.3496 18.5H20.3496L18.8496 16L20.3496 13.5ZM15.8496 12.45L16.4996 13.5H15.2496L15.8496 12.45ZM12.6996 14.25H13.9496L13.3496 15.3L12.6996 14.25ZM12.6996 17.75L13.2996 16.7L13.8996 17.75H12.6996ZM15.8496 19.55L15.2496 18.5H16.4996L15.8496 19.55ZM16.9496 17.75H14.8496L13.7496 16L14.7996 14.25H16.8996L17.9996 16L16.9496 17.75ZM19.0496 17.75H17.7996L18.3996 16.7L19.0496 17.75ZM18.4496 15.25L17.8496 14.2H19.0996L18.4496 15.25Z" fill="#428BC1"/>
    </svg>
  );
}

// Флаг России (русский) — круглая обрезка через контейнер
function RussiaFlag() {
  return (
    <svg className="block size-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="33.3" fill="#F0F0F0"/>
      <rect y="33.3" width="100" height="33.4" fill="#0039A6"/>
      <rect y="66.7" width="100" height="33.3" fill="#D52B1E"/>
    </svg>
  );
}

interface Language {
  code: string;
  name: string;
  flag: React.ComponentType;
}

const languages: Language[] = [
  { code: "he", name: "עברית", flag: IsraelFlag },
  { code: "en", name: "English", flag: USFlag },
  { code: "ru", name: "Русский", flag: RussiaFlag },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Derive selected language from URL path (/he, /en, /ru)
  const pathLang = location.pathname === "/he" || location.pathname === "/en" || location.pathname === "/ru"
    ? location.pathname.slice(1) : "he";
  const selectedLanguage = languages.find((l) => l.code === pathLang) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (language: Language) => {
    navigate(`/${language.code}`);
    setIsOpen(false);
  };

  const getFontClass = (languageCode: string) => {
    if (languageCode === "ru") return "font-['Montserrat',sans-serif]";
    return "font-['Rubik',sans-serif]";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white h-[42px] relative rounded-[33px] shrink-0 cursor-pointer border-0"
      >
        <div className="content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[15px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip rounded-full relative shrink-0 size-[25px]">
            <selectedLanguage.flag />
          </div>
          <p className={`${getFontClass(selectedLanguage.code)} font-medium leading-[normal] relative shrink-0 text-[rgb(87,115,255)] text-[16px]`}>
            {selectedLanguage.name}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-0 border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[33px] shadow-[0px_1px_0.8px_1px_rgba(142,142,142,0.15)]"
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-[calc(100%+8px)] left-0 md:bottom-auto md:left-auto md:top-[calc(100%+8px)] md:right-0 bg-white rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden z-50 min-w-[160px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full flex items-center gap-[10px] px-[15px] py-[12px] border-0 cursor-pointer transition-colors ${
                selectedLanguage.code === language.code
                  ? "bg-[#f0f4ff]"
                  : "bg-white hover:bg-[#f8f9ff]"
              }`}
            >
              <div className="overflow-clip rounded-full relative shrink-0 size-[25px]">
                <language.flag />
              </div>
              <p className={`${getFontClass(language.code)} font-medium leading-[normal] text-[rgb(87,115,255)] text-[16px]`}>
                {language.name}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}