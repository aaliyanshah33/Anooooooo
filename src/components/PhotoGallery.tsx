import { useState } from "react";

const photos = [
  { id: 1, caption: "First smile 💕", rotate: -3 },
  { id: 2, caption: "Birthday cake time! 🎂", rotate: 2 },
  { id: 3, caption: "Playing in the garden 🌸", rotate: -2 },
  { id: 4, caption: "Dancing queen 👑", rotate: 4 },
  { id: 5, caption: "Sweet dreams 🌙", rotate: -4 },
  { id: 6, caption: "Best day ever! ✨", rotate: 1 },
];

const PhotoGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 spray-paint-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-graffiti text-3xl sm:text-4xl md:text-5xl graffiti-text text-center mb-4">
          Memory Wall
        </h2>
        <p className="font-nunito text-lg text-muted-foreground text-center mb-12">
          Precious moments with our little star 📸
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Polaroid frame */}
              <div
                className={`bg-white p-3 pb-16 rounded-lg shadow-xl transition-all duration-500 cursor-pointer border-4 border-graffiti-charcoal/10`}
                style={{
                  transform: `rotate(${hoveredId === photo.id ? 0 : photo.rotate}deg) scale(${hoveredId === photo.id ? 1.05 : 1})`,
                  boxShadow: hoveredId === photo.id 
                    ? "0 20px 40px rgba(0,0,0,0.2)" 
                    : "4px 4px 0px hsl(var(--graffiti-charcoal) / 0.3)",
                }}
              >
                {/* Photo placeholder with gradient */}
                <div className="aspect-square rounded overflow-hidden bg-gradient-to-br from-graffiti-pink/30 via-graffiti-purple/20 to-graffiti-blue/30">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">
                      {["🎀", "🎂", "🌸", "👑", "🌙", "✨"][index]}
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="absolute bottom-4 left-0 right-0 text-center font-nunito font-semibold text-graffiti-charcoal text-sm">
                  {photo.caption}
                </p>

                {/* Tape decorations */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-graffiti-yellow/80 rotate-[-2deg] shadow-sm" />
              </div>

              {/* Colored dots */}
              <div className={`absolute -bottom-2 -right-2 w-4 h-4 rounded-full ${
                ["bg-graffiti-pink", "bg-graffiti-purple", "bg-graffiti-blue", "bg-graffiti-mint", "bg-graffiti-yellow", "bg-graffiti-pink"][index]
              } opacity-70`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
