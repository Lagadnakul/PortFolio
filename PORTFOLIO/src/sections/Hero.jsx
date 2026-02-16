import { useState } from "react";
import { Button } from "../Components/Button";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB", "Git", "Docker", "Vercel"]

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
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Hero.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
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
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Developer • Immersive Web • Interactive Experiences • MERN
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Crafting{" "}
                <span className="text-primary glow-text">immersive Web</span>
                <br />
                <span className="text-primary glow-text">experiences</span> with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                Hi, I'm Nakul Lagad — a full-stack developer working with React, Next.js, and TypeScript. I build interactive, scalable web applications focused on performance and experience.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image (Desktop) */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>

              <img
                src="/Profile.img.jpeg"
                alt="Nakul Lagad"
                className="w-full aspect-4/5 object-cover rounded-2xl h-80 border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Desktop Skills Section */}
            <div className="mt-12">
              <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                  {[...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="shrink-0 px-8 py-4">
                      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Single Column Vertical */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in w-full">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Full-Stack Developer • MERN
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-fade-in text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Crafting{" "}
              <span className="text-primary glow-text">immersive Web</span>
              <br />
              <span className="text-primary glow-text">experiences</span> with
              <br />
              <span className="font-serif italic font-normal text-white">
                precision.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">
              Hi, I'm Nakul Lagad — a full-stack developer working with React, Next.js, and TypeScript.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Profile Image */}
          <div className="animate-fade-in animation-delay-300 w-full max-w-xs mx-auto">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
              
              {/* Profile Image */}
              <img
                src="/Profile.img.jpeg"
                alt="Nakul Lagad"
                className="relative w-full aspect-square object-cover rounded-2xl border-4 border-primary/20"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/60 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Skills Section */}
          <div className="w-full mt-8 animate-fade-in animation-delay-300">
            <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="shrink-0 px-6 py-4">
                    <span className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};