import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoveLetter = ({ isOpen, onClose }: LoveLetterProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-2 border-primary/30 rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="sticky top-4 float-right mr-4 mt-4 p-2 rounded-full bg-background/80 hover:bg-primary/20 border border-primary/30 transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={24} className="text-primary" />
          </button>

          <div className="p-8 md:p-12">
            {/* Titre */}
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-tight mb-4">
                Ma Lettre d'Amour
              </h1>
              <div className="flex justify-center gap-2">
                <Heart className="text-primary animate-pulse" size={20} />
                <Heart className="text-primary animate-pulse" size={16} style={{ animationDelay: '0.2s' }} />
                <Heart className="text-primary animate-pulse" size={20} style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            {/* Lettre d'amour */}
            <div className="bg-background/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="font-display text-lg md:text-xl text-foreground/90 space-y-6 leading-relaxed">
                <p className="italic">
                  Mon bébé,

                </p>
                
                <p>
Cela fait maintenant plus d'un an que nous sommes ensemble.
Nous avons déjà partagé de beaux moments, mais aussi des moments plus difficiles.
Pourtant, chacun de ces moments bon ou mauvais nous a aidés à grandir, à mieux nous comprendre et à rendre notre relation encore plus forte.
                </p>

                <p>
Je sais que je ne fais pas toujours les choses comme il le faudrait, et que j’ai encore beaucoup à apprendre.
Mais j'essaie de faire de mon mieux. J'admire profondément la patience et le calme dont tu fais preuve avec moi.
                </p>

                <p>
Je sais que ce n’est pas toujours facile, mais j’ose espérer que nous continuerons à partager encore tant de moments magiques ensemble : d'amour, de rires, de complicité et de tendresse.
                </p>

                <p>
                  Merci d'être toi. Merci d'être à mes côtés. Merci de m'aimer.
                </p>

                <p className="text-primary font-semibold">
                  Je t'aime
                </p>

                <p className="italic text-right mt-8">
                  Almo ton mari qui t'aime,
                  <br />
                  <span className="text-primary">Pour toujours ❤️</span>
                </p>
              </div>
            </div>

            {/* Message final */}
            <div className="mt-8 text-center text-gold-warm font-body text-sm tracking-[0.3em] uppercase">
              14 Février 2026
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoveLetter;
