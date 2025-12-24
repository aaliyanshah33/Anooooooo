import { Button } from "@/components/ui/button";
import { PartyPopper, Sparkles } from "lucide-react";
import graffitiBg from "@/assets/graffiti-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with graffiti texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${graffitiBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      
      {/* Spray paint splashes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-graffiti-pink/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-graffiti-purple/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-36 h-36 bg-graffiti-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-graffiti-mint/25 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Party emoji */}
        <div className="flex justify-center mb-6 animate-bounce-soft">
          <div className="bg-graffiti-yellow/90 p-4 rounded-full border-4 border-graffiti-charcoal shadow-[4px_4px_0px_hsl(var(--graffiti-charcoal))]">
            <PartyPopper className="w-12 h-12 text-graffiti-charcoal" />
          </div>
        </div>

        {/* Main title with spray reveal animation */}
        <h1 
          className="font-graffiti text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 graffiti-text animate-spray-reveal"
          style={{ animationDelay: "0.2s" }}
        >
          Happy 4th Birthday
        </h1>
        
        <h2 
          className="font-graffiti text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 text-graffiti-pink animate-spray-reveal text-stroke"
          style={{ animationDelay: "0.5s" }}
        >
          Anaya!
        </h2>

        {/* Subtitle */}
        <p 
          className="font-nunito text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-10 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          Our little star turns four 🎉✨
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "1s" }}>
          <Button variant="graffiti" size="xl" className="animate-bounce-soft">
            <Sparkles className="w-6 h-6" />
            Celebrate!
            <Sparkles className="w-6 h-6" />
          </Button>
        </div>

        {/* Decorative paint drips */}
        <div className="absolute -bottom-10 left-1/4 w-3 h-20 bg-graffiti-pink rounded-b-full opacity-60 animate-float" />
        <div className="absolute -bottom-16 left-1/3 w-2 h-24 bg-graffiti-purple rounded-b-full opacity-50 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute -bottom-12 right-1/4 w-3 h-16 bg-graffiti-blue rounded-b-full opacity-55 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
