import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bus, Coins, CreditCard, Smartphone, LayoutDashboard, Play, Download } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  bus: Bus,
  coin: Coins,
  creditcard: CreditCard,
  smartphone: Smartphone,
  dashboard: LayoutDashboard,
};

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
      className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group"
      onClick={onOpen}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-secondary/50 flex items-center justify-center mb-4 group-hover:border-primary transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="text-primary font-semibold text-sm mb-1.5 tracking-wide">{item.name[lang]}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed mb-4">{item.desc[lang]}</p>

      {/* Action link */}
      <button className="mt-auto flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors">
        {item.media === "card" ? (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>{t.viewCard[lang]}</span>
          </>
        ) : item.media === "video" ? (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>{t.viewVideo[lang]}</span>
          </>
        ) : null}
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
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-display text-center gradient-text mb-16 tracking-widest">
        {t.title[lang]}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {t.items.map((item, i) => (
          <ComponentCard
            key={i}
            item={item}
            index={i}
            onOpen={() => {
              setOpenIdx(i);
              setCardFlipped(false);
            }}
          />
        ))}
      </div>

      {/* Detail Dialog */}
      <Dialog open={openIdx !== null} onOpenChange={(open) => !open && setOpenIdx(null)}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border-primary/20 p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-primary font-display tracking-wider text-xl">
              {activeItem?.name[lang]}
            </DialogTitle>
          </DialogHeader>

          <div className="px-6 pb-6">
            {/* Video or Card */}
            {activeItem?.media === "video" && (
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-border bg-secondary/30 mb-4">
                <video
                  key={activeItem.src}
                  src={activeItem.src}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              </div>
            )}

            {activeItem?.media === "card" && (
              <div className="w-full mb-4">
                <div className="w-full max-w-md mx-auto aspect-[1.6/1] rounded-lg overflow-hidden border border-border">
                  <img
                    src={cardFlipped ? "/images/bcard.png" : "/images/fcard.png"}
                    alt={cardFlipped ? "Card Back" : "Card Front"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="text-center mt-3">
                  <button
                    onClick={() => setCardFlipped(!cardFlipped)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    {cardFlipped
                      ? lang === "ar" ? "عرض الأمام" : lang === "fr" ? "Voir le devant" : "View Front"
                      : lang === "ar" ? "عرض الخلف" : lang === "fr" ? "Voir le dos" : "View Back"}
                  </button>
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {activeItem?.detail[lang]}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ComponentsSection;
