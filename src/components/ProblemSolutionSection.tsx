import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ProblemSolutionSection = () => {
  const { lang } = useLanguage();
  const problem = translations.problem;
  const solution = translations.solution;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-destructive/30 bg-card p-8"
        >
          <div className="flex items-center gap-3 mb-6 justify-end">
            <span className="text-primary font-semibold">{problem.label[lang]}</span>
            <span className="w-8 h-[2px] bg-primary" />
            <span className="w-2 h-2 rounded-full bg-destructive" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">{problem.text[lang]}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 bg-card p-8 glow-border"
        >
          <div className="flex items-center gap-3 mb-6 justify-end">
            <span className="text-primary font-semibold">{solution.label[lang]}</span>
            <span className="w-8 h-[2px] bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">{solution.text[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
