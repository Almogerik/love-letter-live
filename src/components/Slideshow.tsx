import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  IMAGES — Replace these paths with your own photos.
  Put your images in /public/images/ and update the paths below.
*/
const slides = [
  {
    image: "/images/photo1.jpg",
    text: "Depuis le premier jour, tu as illuminé ma vie…",
  },
  {
    image: "/images/photo2.jpg",
    text: "Chaque instant avec toi est un cadeau précieux.",
  },
  {
    image: "/images/photo3.jpg",
    text: "Tu es mon aventure préférée, mon étoile dans la nuit.",
  },
  {
    image: "/images/photo4.jpg",
    text: "Je t'aime plus que tous les mots ne pourraient le dire.",
  },
];

const INTERVAL = 4000;

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const advance = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowFinalMessage(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Slide images with Ken Burns */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/40 vignette" />
        </motion.div>
      </AnimatePresence>

      {/* Slide text */}
      <AnimatePresence mode="wait">
        {!showFinalMessage && (
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex items-end justify-center pb-20 md:pb-28 px-6 z-20"
          >
            <p className="font-display text-xl md:text-3xl lg:text-4xl italic text-foreground text-center max-w-3xl leading-relaxed drop-shadow-lg">
              {slides[currentIndex].text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final message */}
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-background/70 backdrop-blur-sm px-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl text-primary text-center leading-tight"
            >
              Bonne Saint-Valentin
              <br />
              mon amour ❤️
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="mt-8 md:mt-12 font-display text-lg md:text-2xl italic text-foreground/80 text-center max-w-2xl leading-relaxed"
            >
              Tu es la plus belle chose qui me soit arrivée.
              <br className="hidden md:block" />
              Merci d'être toi, merci d'être là, merci de m'aimer.
              <br className="hidden md:block" />
              Aujourd'hui et pour toujours, je suis à toi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="mt-10 text-gold-warm font-body text-sm tracking-[0.3em] uppercase"
            >
              Avec tout mon amour
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots */}
      {!showFinalMessage && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-700 ${
                i === currentIndex
                  ? "bg-primary w-6"
                  : i < currentIndex
                  ? "bg-primary/40"
                  : "bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
