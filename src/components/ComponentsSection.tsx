import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bus, Coins, CreditCard, Smartphone, LayoutDashboard, Play, Clock } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  bus: Bus,
  coin: Coins,
  creditcard: CreditCard,
  smartphone: Smartphone,
  dashboard: LayoutDashboard,
};

/** Video player that adapts to portrait or landscape naturally. */
const AdaptiveVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => { setIsPortrait(null); }, [src]);

  const onLoadedMetadata = () => {
    const v = videoRef.current;
    if (v) setIsPortrait(v.videoHeight > v.videoWidth);
  };

  return (
    <div className="w-full flex items-center justify-center bg-black rounded-lg overflow-hidden border border-border mb-4">
      <video
        ref={videoRef}
        key={src}
        src={src}
        onLoadedMetadata={onLoadedMetadata}
        controls
        autoPlay
        muted
        playsInline
        style={
          isPortrait === true
            ? { height: "min(65vh, 520px)", width: "auto", display: "block" }
            : { width: "100%", height: "auto", display: "block" }
        }
      />
    </div>
  );
};

/** Coming Soon placeholder shown instead of unavailable videos. */
const ComingSoon = ({ lang }: { lang: string }) => (
  <div className="w-full rounded-lg border border-primary/20 bg-secondary/20 mb-4 flex flex-col items-center justify-center gap-4 py-12 px-6">
    <div className="relative">
      <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
        <Clock className="w-7 h-7 text-primary/60" />
      </div>
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="text-center space-y-1">
      <p className="text-primary font-display tracking-widest text-sm font-semibold">
        {lang === "ar" ? "قريباً" : lang === "fr" ? "BIENTÔT DISPONIBLE" : "COMING SOON"}
      </p>
      <p className="text-muted-foreground text-xs">
        {lang === "ar"
          ? "سيتوفر الفيديو قريباً"
          : lang === "fr"
          ? "La démonstration vidéo sera disponible prochainement"
          : "Video demonstration will be available soon"}
      </p>
    </div>
  </div>
);

const ComponentCard = ({
  item,
  index,
  onOpen,
}: {
  item: (typeof translations.components.items)[0];
  index: number;
  onOpen: () => void;
}) => {
  const { lang } = useLanguage();
  const t = translations.components;
  const Icon = iconMap[item.icon] || Bus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group"
      onClick={onOpen}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/40 bg-secondary/50 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-primary transition-colors">
        <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
      </div>
      <h3 className="text-primary font-semibold text-xs sm:text-sm mb-1 sm:mb-1.5 tracking-wide leading-snug">{item.name[lang]}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed mb-3 sm:mb-4 hidden sm:block">{item.desc[lang]}</p>
      <button className="mt-auto flex items-center gap-1.5 text-xs transition-colors
        text-primary hover:text-primary/80">
        {item.media === "coming_soon" ? (
          <><Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /><span>{t.comingSoon[lang]}</span></>
        ) : item.media === "card" ? (
          <><Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" /><span>{t.viewCard[lang]}</span></>
        ) : (
          <><Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" /><span>{t.viewVideo[lang]}</span></>
        )}
      </button>
    </motion.div>
  );
};

const ComponentsSection = () => {
  const { lang } = useLanguage();
  const t = translations.components;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [cardFlipped, setCardFlipped] = useState(false);

  const activeItem = openIdx !== null ? t.items[openIdx] : null;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-center gradient-text mb-10 sm:mb-16 tracking-widest">
        {t.title[lang]}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {t.items.map((item, i) => (
          <ComponentCard key={i} item={item} index={i} onOpen={() => { setOpenIdx(i); setCardFlipped(false); }} />
        ))}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(open) => !open && setOpenIdx(null)}>
        <DialogContent className="w-[95vw] max-w-3xl bg-background/95 backdrop-blur-xl border-primary/20 p-0 overflow-hidden">
          <DialogHeader className="p-4 sm:p-6 pb-0">
            <DialogTitle className="text-primary font-display tracking-wider text-base sm:text-xl">
              {activeItem?.name[lang]}
            </DialogTitle>
          </DialogHeader>

          <div className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-y-auto max-h-[80vh]">
            {activeItem?.media === "coming_soon" && <ComingSoon lang={lang} />}
            {activeItem?.media === "video" && <AdaptiveVideo src={activeItem.src} />}
            {activeItem?.media === "card" && (
              <div className="w-full mb-4">
                <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden border border-border" style={{ aspectRatio: "1.586/1" }}>
                  <img
                    src={cardFlipped ? "/images/bcard.png" : "/images/fcard.png"}
                    alt={cardFlipped ? "Card Back" : "Card Front"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-3">
                  <button onClick={() => setCardFlipped(!cardFlipped)} className="text-sm text-primary hover:text-primary/80 transition-colors">
                    {cardFlipped
                      ? lang === "ar" ? "عرض الأمام" : lang === "fr" ? "Voir le devant" : "View Front"
                      : lang === "ar" ? "عرض الخلف" : lang === "fr" ? "Voir le dos" : "View Back"}
                  </button>
                </div>
              </div>
            )}
            <p className="text-muted-foreground text-sm leading-relaxed">{activeItem?.detail[lang]}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ComponentsSection;
