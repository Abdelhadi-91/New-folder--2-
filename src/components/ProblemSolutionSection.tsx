import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ProblemSolutionSection = () => {
  const { lang } = useLanguage();
  const problem = translations.problem;
  const solution = translations.solution;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-destructive/30 bg-card p-5 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-end">
            <span className="text-primary font-semibold text-sm sm:text-base">{problem.label[lang]}</span>
            <span className="w-6 sm:w-8 h-[2px] bg-primary" />
            <span className="w-2 h-2 rounded-full bg-destructive shrink-0" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">{problem.text[lang]}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 bg-card p-5 sm:p-8 glow-border"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-end">
            <span className="text-primary font-semibold text-sm sm:text-base">{solution.label[lang]}</span>
            <span className="w-6 sm:w-8 h-[2px] bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">{solution.text[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
