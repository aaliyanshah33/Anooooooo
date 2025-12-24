import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let targetYear = currentYear;
      
      // Target date: December 24
      let birthday = new Date(targetYear, 11, 24); // Month is 0-indexed
      
      // If birthday has passed this year, target next year
      if (now > birthday) {
        targetYear = currentYear + 1;
        birthday = new Date(targetYear, 11, 24);
      }
      
      const difference = birthday.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    setIsLoaded(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days, color: "bg-graffiti-pink" },
    { label: "Hours", value: timeLeft.hours, color: "bg-graffiti-purple" },
    { label: "Minutes", value: timeLeft.minutes, color: "bg-graffiti-blue" },
    { label: "Seconds", value: timeLeft.seconds, color: "bg-graffiti-mint" },
  ];

  return (
    <section className="py-20 px-4 spray-paint-bg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          className="font-graffiti text-3xl sm:text-4xl md:text-5xl graffiti-text mb-4 animate-spray-reveal"
        >
          Countdown to the Big Day!
        </h2>
        <p className="font-nunito text-lg text-muted-foreground mb-12">
          December 24th is coming! 🎄🎂
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block, index) => (
            <div
              key={block.label}
              className={`graffiti-card ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`${block.color} rounded-2xl p-4 md:p-6 mb-3 border-4 border-graffiti-charcoal shadow-[3px_3px_0px_hsl(var(--graffiti-charcoal))]`}>
                <span 
                  className="font-graffiti text-4xl sm:text-5xl md:text-6xl text-white text-stroke animate-countdown-tick"
                  style={{ display: "inline-block" }}
                >
                  {block.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="font-nunito text-sm md:text-lg font-bold text-foreground/80 uppercase tracking-wider">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Paint splash decorations */}
        <div className="relative mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                ["bg-graffiti-pink", "bg-graffiti-purple", "bg-graffiti-blue", "bg-graffiti-yellow", "bg-graffiti-mint"][i]
              } opacity-70 animate-bounce-soft`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
