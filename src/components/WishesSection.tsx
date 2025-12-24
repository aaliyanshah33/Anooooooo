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
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-background via-graffiti-purple/5 to-background overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-graffiti text-2xl sm:text-3xl md:text-4xl lg:text-5xl graffiti-text mb-3 sm:mb-4">
          Birthday Wishes
        </h2>
        <p className="font-nunito text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
          Sending you all the best wishes! 🌈
        </p>

        <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {wishes.map((wish, index) => {
            const IconComponent = wish.icon;
            return (
              <div
                key={wish.text}
                className="graffiti-card flex flex-col items-center p-3 sm:p-4 md:p-6 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] hover:scale-110 transition-transform duration-300"
                style={{ 
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div className={`${wish.color} mb-2 sm:mb-3`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-current" />
                </div>
                <span className="font-nunito font-bold text-foreground text-xs sm:text-sm md:text-base">
                  {wish.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Big wish message */}
        <div className="graffiti-card bg-gradient-to-br from-graffiti-pink/10 via-graffiti-purple/10 to-graffiti-blue/10 border-2 sm:border-4 border-graffiti-pink/30 animate-pulse-glow p-4 sm:p-6">
          <p className="font-graffiti text-xl sm:text-2xl md:text-3xl lg:text-4xl graffiti-text leading-tight">
            Wishing you the happiest birthday ever!
          </p>
          <p className="font-nunito text-base sm:text-lg md:text-xl mt-3 sm:mt-4 text-muted-foreground">
            Anno isi tarha Mama ko tang krti raha kro Heheheheheh 🎈🎁🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
