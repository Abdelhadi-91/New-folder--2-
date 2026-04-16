import { useLanguage } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي AR" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
            lang === l.code
              ? "bg-primary/20 border-primary text-primary glow-border"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
