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
    <svg className="block size-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F0F0F0"/>
      <rect y="0" width="100" height="20" fill="#0038B8"/>
      <rect y="80" width="100" height="20" fill="#0038B8"/>
      <polygon points="50,30 58,44 66,58 50,52 34,58 42,44" fill="none" stroke="#0038B8" strokeWidth="3.5"/>
      <polygon points="50,70 42,56 34,42 50,48 66,42 58,56" fill="none" stroke="#0038B8" strokeWidth="3.5"/>
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
    return languageCode === "he" 
      ? "font-['Rubik',sans-serif]" 
      : "font-['Rubik',sans-serif]";
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