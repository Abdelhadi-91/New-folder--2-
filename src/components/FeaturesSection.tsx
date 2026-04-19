import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const FeaturesSection = () => {
  const { lang } = useLanguage();
  const t = translations.features;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-center gradient-text mb-10 sm:mb-16 tracking-widest">
        {t.title[lang]}
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {t.columns.map((col, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="rounded-xl border border-border bg-card p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-end">
              <span className="text-primary font-semibold text-sm">{col.label[lang]}</span>
              <span className="w-5 sm:w-6 h-[2px] bg-primary" />
            </div>

            {"tags" in col && col.tags ? (
              <div className="flex flex-wrap gap-2 justify-center">
                {col.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs border border-primary/40 text-primary bg-primary/10"
                  >
                    {tag[lang]}
                  </span>
                ))}
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {"items" in col && col.items?.map((item, ii) => (
                  <div key={ii} className="flex items-center gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground text-xs sm:text-sm">{item[lang]}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
