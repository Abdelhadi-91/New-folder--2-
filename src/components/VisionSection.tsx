import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const VisionSection = () => {
  const { lang } = useLanguage();
  const v = translations.vision;

  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-xl border border-primary/30 bg-card p-10 glow-border text-center"
      >
        <p className="text-primary text-sm tracking-widest mb-4">{v.label[lang]}</p>
        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
          {v.text[lang]}
        </p>
      </motion.div>
    </section>
  );
};

export default VisionSection;
