import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import Confetti from "./Confetti";
import FinalScreen from "./FinalScreen";
import LoveLetter from "./LoveLetter";
import PhotoGallery from "./PhotoGallery";

/*
  IMAGES — Replace these paths with your own photos.
  Put your images in /public/images/ and update the paths below.
*/
const slides = [
  {
    image: "/images/whatsapp-image-1.jpeg",
    text: "Depuis le premier jour, tu remplis ma vie de surprises et de bonheur…",
  },
  {
    image: "/images/whatsapp-image-2.jpeg",
    text: "La distance fait que chaque instant avec toi devient un cadeau précieux.",
  },
  {
    image: "/images/whatsapp-image-3.jpeg",
    text: "Tu es une partie essentielle de moi.",
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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const advance = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowFinalMessage(true);
      setShowConfetti(true);
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const goToNext = () => {
    advance();
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  useEffect(() => {
    // Initialiser l'audio (mettre votre fichier audio dans /public/music/)
    audioRef.current = new Audio("/music/romantic-song.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Démarrer automatiquement la musique
    audioRef.current.play().then(() => {
      setIsMusicPlaying(true);
    }).catch((error) => {
      console.log("Lecture automatique bloquée:", error);
      // La musique sera démarrée manuellement par l'utilisateur
    });
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Confetti on final message */}
      {showConfetti && <Confetti />}
      
      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
        aria-label="Toggle music"
      >
        {isMusicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
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
            className={`absolute inset-0 bg-center ${currentIndex === 1 ? 'bg-contain bg-no-repeat' : 'bg-cover animate-ken-burns'}`}
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

      {/* Final Screen avec 2 boutons */}
      <AnimatePresence>
        {showFinalMessage && (
          <FinalScreen 
            onOpenLetter={() => setIsLetterOpen(true)}
            onOpenGallery={() => setIsGalleryOpen(true)} 
          />
        )}
      </AnimatePresence>

      {/* Love Letter Modal */}
      <LoveLetter 
        isOpen={isLetterOpen} 
        onClose={() => setIsLetterOpen(false)} 
      />

      {/* Photo Gallery Modal */}
      <PhotoGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />

      {/* Navigation buttons */}
      {!showFinalMessage && currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
      )}
      
      {!showFinalMessage && currentIndex < slides.length - 1 && (
        <button
          onClick={goToNext}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      )}

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
