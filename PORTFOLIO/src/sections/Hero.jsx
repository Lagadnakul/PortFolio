import { useState } from "react";

// Generate dots outside component (runs once on module load)
const generateDots = () =>
  [...Array(30)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

const initialDots = generateDots();

export const Hero = () => {
  const [dots] = useState(initialDots);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Hero.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary opacity-60"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="Container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className= "grid">
            {/* Left Column - Text Content */}
            <div className= "space-y-8">
                <div className= "animated-fade-in">
                    <span className= "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className= "w-2 h-2 bg-primary rounded-full"/> Full-Stack Developer • Immersive Web • Interactive Experiences • MERN </span>
</div>
            </div>
            {/* Right Column - Profile Image  */}
        </div>
      </div>
    </section>
  );
};
