import { Heart, Star, Sparkles } from "lucide-react";

const messages = [
  {
    text: "You light up every room with your smile!",
    author: "Mom & Dad",
    color: "border-graffiti-pink",
    bg: "bg-graffiti-pink/10",
    icon: Heart,
  },
  {
    text: "May all your dreams come true, little princess!",
    author: "Grandma",
    color: "border-graffiti-purple",
    bg: "bg-graffiti-purple/10",
    icon: Star,
  },
  {
    text: "Keep dancing through life, sweet Anaya!",
    author: "Auntie",
    color: "border-graffiti-blue",
    bg: "bg-graffiti-blue/10",
    icon: Sparkles,
  },
  {
    text: "You're the best little sister ever!",
    author: "Big Brother",
    color: "border-graffiti-mint",
    bg: "bg-graffiti-mint/10",
    icon: Heart,
  },
  {
    text: "Four years of pure joy and laughter!",
    author: "Uncle",
    color: "border-graffiti-yellow",
    bg: "bg-graffiti-yellow/10",
    icon: Star,
  },
  {
    text: "Happy Birthday to our sunshine girl!",
    author: "Grandpa",
    color: "border-graffiti-pink",
    bg: "bg-graffiti-pink/10",
    icon: Sparkles,
  },
];

const MessageWall = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-graffiti text-3xl sm:text-4xl md:text-5xl graffiti-text text-center mb-4">
          Birthday Message Wall
        </h2>
        <p className="font-nunito text-lg text-muted-foreground text-center mb-12">
          Love notes from everyone who adores you! 💖
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message, index) => {
            const IconComponent = message.icon;
            return (
              <div
                key={index}
                className={`graffiti-card ${message.bg} border-l-4 ${message.color} transition-all duration-300 hover:scale-[1.02] hover-glow-pink animate-slide-up`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${(index % 2 === 0 ? -1 : 1) * (Math.random() * 2)}deg)`
                }}
              >
                <IconComponent 
                  className={`w-8 h-8 mb-3 ${message.color.replace('border-', 'text-')} fill-current opacity-80`}
                />
                <p className="font-nunito text-lg text-foreground mb-4 leading-relaxed">
                  "{message.text}"
                </p>
                <p className="font-nunito font-bold text-sm text-muted-foreground">
                  — {message.author}
                </p>

                {/* Spray paint corner */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 ${message.color.replace('border-', 'bg-')} rounded-full opacity-40 blur-sm`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MessageWall;
