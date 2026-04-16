import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/30 rounded-full flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary" fill="currentColor">
          <path d="M20 2 L26 14 L20 26 L14 14 Z" />
          <path d="M20 8 L23 14 L20 20 L17 14 Z" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-20 right-32 w-14 h-14 border border-primary/40 rounded-full flex items-center justify-center text-xs font-display text-primary">
        <div className="text-center leading-tight">
          <div className="font-bold">ESI</div>
          <div className="text-[10px]">SBA</div>
        </div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-wider glow-text text-primary text-center"
      >
        {t.title[lang]}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-xl md:text-2xl text-primary/80 text-center"
      >
        {t.subtitle[lang]}
      </motion.p>

      {/* Drag to rotate label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-sm text-muted-foreground tracking-widest"
      >
        {t.dragToRotate[lang]}
      </motion.p>

      {/* Card display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 animate-float"
      >
        <div className="relative w-[350px] md:w-[450px] h-[220px] md:h-[280px] rounded-2xl bg-gradient-to-br from-secondary to-muted border border-border overflow-hidden glow-border">
          {/* Card front placeholder - replace with fcard.png */}
          <img
            src="/images/fcard.png"
            alt="CIGO Card Front"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary to-muted p-8">
                  <span class="font-display text-4xl font-bold text-foreground">CIGO</span>
                  <span class="text-primary text-lg mt-1">Sidi Bel Abbes</span>
                  <div class="absolute bottom-6 right-6 text-primary text-3xl">))))</div>
                </div>
              `;
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
