import { motion } from "framer-motion";
import { Heart, Images, Mail } from "lucide-react";

interface FinalScreenProps {
  onOpenLetter: () => void;
  onOpenGallery: () => void;
}

const FinalScreen = ({ onOpenLetter, onOpenGallery }: FinalScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-background/70 backdrop-blur-sm px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary leading-tight mb-4">
          Bonne Saint-Valentin
          <br />
          mon amour ❤️
        </h1>
        
        <div className="flex justify-center gap-2 mt-6">
          <Heart className="text-primary animate-pulse" size={24} />
          <Heart className="text-primary animate-pulse" size={20} style={{ animationDelay: '0.2s' }} />
          <Heart className="text-primary animate-pulse" size={24} style={{ animationDelay: '0.4s' }} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-8 font-display text-xl md:text-2xl italic text-foreground/80 max-w-2xl mx-auto"
        >
          J'ai préparé quelque chose de spécial pour toi...
        </motion.p>
      </motion.div>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex flex-col md:flex-row gap-6 items-center"
      >
        {/* Bouton Lettre */}
        <button
          onClick={onOpenLetter}
          className="group flex items-center gap-3 px-8 py-5 bg-primary/10 hover:bg-primary/20 border-2 border-primary rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 min-w-[280px]"
        >
          <Mail size={28} className="text-primary group-hover:animate-pulse" />
          <span className="font-display text-xl md:text-2xl text-primary">
            Lire ma lettre d'amour
          </span>
          <Heart size={22} className="text-primary" />
        </button>

        {/* Bouton Galerie */}
        <button
          onClick={onOpenGallery}
          className="group flex items-center gap-3 px-8 py-5 bg-primary/10 hover:bg-primary/20 border-2 border-primary rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 min-w-[280px]"
        >
          <Images size={28} className="text-primary" />
          <span className="font-display text-xl md:text-2xl text-primary">
            Nos plus beaux souvenirs
          </span>
          <Heart size={22} className="text-primary group-hover:animate-pulse" />
        </button>
      </motion.div>

      {/* Message final */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="mt-12 text-center"
      >
        <p className="text-gold-warm font-body text-sm tracking-[0.3em] uppercase">
          Avec tout mon amour
        </p>
        <p className="text-foreground/60 font-body text-xs mt-2">
          14 Février 2026
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
