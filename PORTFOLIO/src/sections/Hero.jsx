import { useState } from "react";
import { Button } from "../Components/Button";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
import { ArrowRight } from "lucide-react";

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
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Crafting{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                <span className="text-primary glow-text">experiences</span> with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                Hi, I'm Pedro Machado — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img
                src="/Profile.img.jpeg"
                alt="Profile"
                className="w-80 h-80 object-cover rounded-full border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};