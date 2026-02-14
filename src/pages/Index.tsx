import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import RosePetals from "@/components/RosePetals";
import OpeningScreen from "@/components/OpeningScreen";
import Slideshow from "@/components/Slideshow";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <FloatingHearts />
      <RosePetals />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="opening"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <OpeningScreen onStart={() => setStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          >
            <Slideshow />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
