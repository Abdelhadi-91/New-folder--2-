import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="text-muted-foreground text-sm">{translations.footer.text[lang]}</p>
    </footer>
  );
};

export default Footer;
