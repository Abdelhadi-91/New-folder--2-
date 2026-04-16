import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const WorkflowColumn = ({ title, steps }: { title: string; steps: string[] }) => (
  <div className="rounded-xl border border-border bg-card p-8">
    <div className="flex items-center gap-3 mb-8 justify-end">
      <span className="text-primary font-semibold">{title}</span>
      <span className="w-8 h-[2px] bg-primary" />
    </div>
    <div className="space-y-6">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4"
        >
          <p className="flex-1 text-muted-foreground">{step}</p>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold text-sm shrink-0">
            {i + 1}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const WorkflowSection = () => {
  const { lang } = useLanguage();
  const t = translations.workflow;

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-display text-center gradient-text mb-16 tracking-widest">
        {t.title[lang]}
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <WorkflowColumn
          title={t.validator.title[lang]}
          steps={t.validator.steps.map((s) => s[lang])}
        />
        <WorkflowColumn
          title={t.distributor.title[lang]}
          steps={t.distributor.steps.map((s) => s[lang])}
        />
      </div>
    </section>
  );
};

export default WorkflowSection;
