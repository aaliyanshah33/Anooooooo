import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 spray-paint-bg relative overflow-hidden">
      {/* Paint drips from top */}
      <div className="absolute top-0 left-[10%] w-3 h-12 bg-graffiti-pink rounded-b-full opacity-50" />
      <div className="absolute top-0 left-[25%] w-2 h-16 bg-graffiti-purple rounded-b-full opacity-40" />
      <div className="absolute top-0 left-[50%] w-3 h-10 bg-graffiti-blue rounded-b-full opacity-45" />
      <div className="absolute top-0 left-[75%] w-2 h-14 bg-graffiti-yellow rounded-b-full opacity-50" />
      <div className="absolute top-0 left-[90%] w-3 h-8 bg-graffiti-mint rounded-b-full opacity-40" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Shimmer text effect */}
        <p 
          className="font-graffiti text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-graffiti-pink via-graffiti-purple to-graffiti-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
        >
          Made with
        </p>
        
        <div className="flex items-center justify-center gap-3 my-4">
          <Heart className="w-8 h-8 text-graffiti-pink fill-graffiti-pink animate-bounce-soft" />
          <Heart className="w-10 h-10 text-graffiti-pink fill-graffiti-pink animate-bounce-soft" style={{ animationDelay: "0.2s" }} />
          <Heart className="w-8 h-8 text-graffiti-pink fill-graffiti-pink animate-bounce-soft" style={{ animationDelay: "0.4s" }} />
        </div>

        <p 
          className="font-graffiti text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-graffiti-blue via-graffiti-mint to-graffiti-yellow bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
          style={{ animationDelay: "1s" }}
        >
          for Anaya
        </p>

        {/* Year badge */}
        <div className="mt-8 inline-flex items-center gap-2 bg-graffiti-charcoal/90 text-white px-6 py-3 rounded-full border-4 border-graffiti-yellow shadow-[3px_3px_0px_hsl(var(--graffiti-yellow))]">
          <span className="font-nunito font-bold">🎂 December 24, 2024 🎂</span>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-3">
          {["🎈", "🎁", "🎀", "🧁", "🎉"].map((emoji, i) => (
            <span 
              key={i} 
              className="text-2xl animate-bounce-soft"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-graffiti-pink/10 to-transparent" />
    </footer>
  );
};

export default Footer;
