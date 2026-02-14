import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  swayAmount: number;
}

const RosePetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 20,
      rotation: Math.random() * 360,
      swayAmount: Math.random() * 50 + 30,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float-petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: 0.4,
            transform: `rotate(${petal.rotation}deg)`,
            ['--sway-amount' as string]: `${petal.swayAmount}px`,
          }}
        >
          <span className="text-rose-400">🌸</span>
        </div>
      ))}
    </div>
  );
};

export default RosePetals;
