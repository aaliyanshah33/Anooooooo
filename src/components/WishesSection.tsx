import { Heart, Star, Sparkles, Crown, Rainbow, Music } from "lucide-react";

const wishes = [
  { icon: Heart, text: "Love", color: "text-graffiti-pink" },
  { icon: Star, text: "Joy", color: "text-graffiti-yellow" },
  { icon: Sparkles, text: "Magic", color: "text-graffiti-purple" },
  { icon: Crown, text: "Dreams", color: "text-graffiti-mint" },
  { icon: Rainbow, text: "Fun", color: "text-graffiti-blue" },
  { icon: Music, text: "Laughter", color: "text-graffiti-pink" },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-graffiti-purple/5 to-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-graffiti text-3xl sm:text-4xl md:text-5xl graffiti-text mb-4">
          Birthday Wishes
        </h2>
        <p className="font-nunito text-lg text-muted-foreground mb-12">
          Sending you all the best wishes! 🌈
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {wishes.map((wish, index) => {
            const IconComponent = wish.icon;
            return (
              <div
                key={wish.text}
                className="graffiti-card flex flex-col items-center p-6 min-w-[120px] hover:scale-110 transition-transform duration-300"
                style={{ 
                  animation: `float 6s ease-in-out infinite, slide-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.5}s, ${index * 0.1}s`,
                }}
              >
                <div className={`${wish.color} mb-3`}>
                  <IconComponent className="w-10 h-10 fill-current" />
                </div>
                <span className="font-nunito font-bold text-foreground">
                  {wish.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Decorative spray bubbles */}
        <div className="relative h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                ["bg-graffiti-pink", "bg-graffiti-purple", "bg-graffiti-blue", "bg-graffiti-yellow", "bg-graffiti-mint"][i % 5]
              } opacity-30`}
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                left: `${10 + (i * 12)}%`,
                top: `${Math.random() * 60}%`,
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Big wish message */}
        <div className="graffiti-card bg-gradient-to-br from-graffiti-pink/10 via-graffiti-purple/10 to-graffiti-blue/10 border-4 border-graffiti-pink/30 animate-pulse-glow">
          <p className="font-graffiti text-2xl sm:text-3xl md:text-4xl graffiti-text">
            Wishing you the happiest birthday ever!
          </p>
          <p className="font-nunito text-xl mt-4 text-muted-foreground">
            May your 4th year be filled with adventures! 🎈🎁🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
