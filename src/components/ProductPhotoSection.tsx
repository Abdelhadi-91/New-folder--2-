import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";

const labels = {
  title: { ar: "المنتج", en: "The Product", fr: "Le Produit" },
  subtitle: {
    ar: "النظام الكامل — البطاقة الذكية، المدقق، هيكل وتطبيق طرفية الشحن، تطبيق الهاتف، وموقع لوحة التحكم",
    en: "The full system — smart card, validator, recharge terminal body and app, mobile app, dashboard website",
    fr: "Le système complet — carte intelligente, validateur, corps et application du terminal de recharge, application mobile, site web du tableau de bord",
},
  zoom: { ar: "انقر للتكبير", en: "Click to zoom", fr: "Cliquer pour zoomer" },
};

const ProductPhotoSection = () => {
  const { lang } = useLanguage();
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display gradient-text tracking-widest mb-3">
            {labels.title[lang]}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">{labels.subtitle[lang]}</p>
        </div>

        {/* Photo container */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          onClick={() => setZoomed(true)}
          className="relative rounded-2xl overflow-hidden border border-primary/20 glow-border cursor-zoom-in group"
        >
          <img
            src="/images/img.jpg"
            alt="CIGO system product photo"
            className="w-full h-auto block"
            style={{ imageRendering: "auto" }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-end p-4">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-primary bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/30">
              {labels.zoom[lang]}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen lightbox */}
      {zoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomed(false)}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/images/img.jpg"
            alt="CIGO system product photo"
            className="max-w-full max-h-full object-contain rounded-xl"
            style={{ imageRendering: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ProductPhotoSection;
