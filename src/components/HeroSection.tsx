import { Button } from "@/components/ui/button";
import { PartyPopper, Sparkles } from "lucide-react";
import graffitiBg from "@/assets/graffiti-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Background with graffiti texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${graffitiBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Spray paint splashes */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-graffiti-pink/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-graffiti-purple/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-24 sm:w-36 h-24 sm:h-36 bg-graffiti-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-28 h-20 sm:h-28 bg-graffiti-mint/15 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      {/* Content */}
      <div className="relative z-20 text-center w-full max-w-4xl mx-auto">
        {/* Party emoji */}
        <div className="flex justify-center mb-4 sm:mb-6 animate-bounce-soft">
          <div className="bg-graffiti-yellow/90 p-3 sm:p-4 rounded-full border-4 border-graffiti-charcoal shadow-[4px_4px_0px_hsl(0_0%_0%/0.5)]">
            <PartyPopper className="w-8 h-8 sm:w-12 sm:h-12 text-graffiti-charcoal" />
          </div>
        </div>

        {/* Main title with spray reveal animation */}
        <h1 
          className="font-graffiti text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-4 graffiti-text animate-spray-reveal leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Happy 4th Birthday
        </h1>
        
        <h2 
          className="font-graffiti text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 text-graffiti-pink animate-spray-reveal leading-tight"
          style={{ animationDelay: "0.5s" }}
        >
          Anaya!
        </h2>

        {/* Subtitle */}
        <p 
          className="font-nunito text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 sm:mb-10 animate-slide-up px-4"
          style={{ animationDelay: "0.8s" }}
        >
          Our little star turns four 🎉✨
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "1s" }}>
          <Button variant="graffiti" size="lg" className="animate-bounce-soft text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            Celebrate!
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
