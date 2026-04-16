import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "rtl" | "ltr";
  fontClass: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  dir: "rtl",
  fontClass: "font-arabic",
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ar");
  const dir = lang === "ar" ? "rtl" : "ltr";
  const fontClass = lang === "ar" ? "font-arabic" : "font-body";

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, fontClass }}>
      <div dir={dir} className={fontClass}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
