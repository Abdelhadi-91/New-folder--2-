import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { useRef, useState, useCallback } from "react";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  // Drag-to-rotate state
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const lastRotateY = useRef(0);
  const lastRotateX = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    setIsDragging(true);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (dragStartX.current === null || dragStartY.current === null) return;
    const dx = e.clientX - dragStartX.current;
    const dy = e.clientY - dragStartY.current;
    const newRotateY = lastRotateY.current + dx * 0.6;
    const newRotateX = lastRotateX.current - dy * 0.3;
    setRotateY(newRotateY);
    setRotateX(Math.max(-25, Math.min(25, newRotateX)));
    // Determine flip: every 180° flip face
    const face = Math.floor(Math.abs(newRotateY) / 180) % 2;
    setIsFlipped(newRotateY < 0 ? face === 1 : face === 1);
  }, []);

  const onPointerUp = useCallback(() => {
    dragStartX.current = null;
    dragStartY.current = null;
    lastRotateY.current = rotateY;
    lastRotateX.current = rotateX;
    setIsDragging(false);
  }, [rotateY, rotateX]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg px-4">
      {/* Decorative elements — hidden on very small screens */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 border border-primary/30 rounded-full hidden xs:flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-5 h-5 sm:w-8 sm:h-8 text-primary" fill="currentColor">
          <path d="M20 2 L26 14 L20 26 L14 14 Z" />
          <path d="M20 8 L23 14 L20 20 L17 14 Z" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-16 sm:top-20 right-4 sm:right-32 w-10 h-10 sm:w-14 sm:h-14 border border-primary/40 rounded-full hidden xs:flex items-center justify-center text-xs font-display text-primary">
        <div className="text-center leading-tight">
          <div className="font-bold text-[10px] sm:text-xs">ESI</div>
          <div className="text-[8px] sm:text-[10px]">SBA</div>
        </div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-wider glow-text text-primary text-center"
      >
        {t.title[lang]}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-primary/80 text-center max-w-xs sm:max-w-none"
      >
        {t.subtitle[lang]}
      </motion.p>

      {/* Drag to rotate label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 sm:mt-16 text-xs sm:text-sm text-muted-foreground tracking-widest select-none"
      >
        {t.dragToRotate[lang]}
      </motion.p>

      {/* Card display — draggable 3D rotation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-3 sm:mt-4 w-full flex justify-center"
        style={{ perspective: 1200 }}
      >
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            transition: isDragging ? "none" : "transform 0.4s ease-out",
            transformStyle: "preserve-3d",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "none",
          }}
          className="relative w-[280px] sm:w-[350px] md:w-[450px] h-[176px] sm:h-[220px] md:h-[280px]"
        >
          {/* Front face */}
          <div
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-border glow-border"
          >
            <img src="/images/fcard.png" alt="CIGO Card Front" className="w-full h-full object-cover" draggable={false} />
          </div>
          {/* Back face */}
          <div
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-border glow-border"
          >
            <img src="/images/bcard.png" alt="CIGO Card Back" className="w-full h-full object-cover" draggable={false} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
