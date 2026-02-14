import { motion } from "framer-motion";

interface OpeningScreenProps {
  onStart: () => void;
}

const OpeningScreen = ({ onStart }: OpeningScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 animate-soft-glow"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(350 60% 50% / 0.08) 0%, transparent 60%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="font-display text-2xl md:text-4xl italic text-foreground tracking-wide text-center px-6"
      >
        J'ai quelque chose à te dire…
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
        onClick={onStart}
        className="mt-12 font-body text-lg md:text-xl tracking-widest text-primary 
                   border border-primary/30 rounded-full px-10 py-4
                   hover:bg-primary/10 hover:border-primary/50
                   transition-all duration-700 ease-out
                   animate-pulse-heart cursor-pointer"
      >
        Clique ici ❤️
      </motion.button>
    </motion.div>
  );
};

export default OpeningScreen;
