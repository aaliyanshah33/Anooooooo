import { useEffect, useState } from "react";
import { Star, Heart, Sparkles } from "lucide-react";

const FloatingDoodles = () => {
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; color: string; delay: number }[]>([]);

  useEffect(() => {
    const colors = ["bg-graffiti-pink", "bg-graffiti-purple", "bg-graffiti-blue", "bg-graffiti-yellow", "bg-graffiti-mint"];
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating stars */}
      <Star 
        className="floating-doodle text-graffiti-yellow fill-graffiti-yellow" 
        style={{ top: "10%", left: "5%", animationDelay: "0s" }}
        size={32}
      />
      <Star 
        className="floating-doodle text-graffiti-pink fill-graffiti-pink" 
        style={{ top: "25%", right: "8%", animationDelay: "1s" }}
        size={24}
      />
      <Heart 
        className="floating-doodle text-graffiti-pink fill-graffiti-pink" 
        style={{ top: "60%", left: "3%", animationDelay: "2s" }}
        size={28}
      />
      <Sparkles 
        className="floating-doodle text-graffiti-purple" 
        style={{ top: "80%", right: "5%", animationDelay: "0.5s" }}
        size={30}
      />
      <Heart 
        className="floating-doodle text-graffiti-mint fill-graffiti-mint" 
        style={{ top: "40%", right: "2%", animationDelay: "1.5s" }}
        size={20}
      />
      <Star 
        className="floating-doodle text-graffiti-blue fill-graffiti-blue" 
        style={{ bottom: "15%", left: "10%", animationDelay: "3s" }}
        size={26}
      />

      {/* Confetti burst on load */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className={`absolute w-3 h-3 ${c.color} rounded-full opacity-60`}
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            animation: `float 8s ease-in-out infinite`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDoodles;
