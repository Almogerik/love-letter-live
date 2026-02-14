import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  duration: number;
}

const colors = [
  "#ff6b9d",
  "#c44569",
  "#ffa07a",
  "#ff1493",
  "#ff69b4",
  "#ffd700",
  "#ffb6c1",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20 - Math.random() * 20,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      duration: Math.random() * 2 + 2,
    }));
    setPieces(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: `${piece.x}vw`,
            y: `${piece.y}vh`,
            rotate: piece.rotation,
            opacity: 1,
          }}
          animate={{
            y: "120vh",
            rotate: piece.rotation + 720,
            opacity: 0,
          }}
          transition={{
            duration: piece.duration,
            ease: "easeIn",
            delay: Math.random() * 0.5,
          }}
          style={{
            position: "absolute",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
