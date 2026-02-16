import { Layers, Zap, Network, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "Writing modular, maintainable code with scalable backend and frontend structure."
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizing applications for speed, efficiency, and smooth user experience."
  },
  {
    icon: Network,
    title: "System Design Thinking",
    description: "Designing APIs, authentication flows, and scalable system structures."
  },
  {
    icon: Sparkles,
    title: "Interactive Experiences",
    description: "Building engaging and immersive interfaces beyond static web pages."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            {/* Description Paragraph */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a full-stack developer focused on building scalable and interactive 
                web applications using React, Next.js, and Node.js. I enjoy designing 
                clean architectures, optimizing performance, and turning ideas into 
                reliable digital products. My approach combines technical depth with 
                thoughtful user experience.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build systems that are not only functional, but intuitive, 
                maintainable, and built to scale."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid with 3D Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ 
                  animationDelay: `${(index + 1) * 100}ms`,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* 3D Card */}
                <div 
                  className="
                    glass rounded-2xl p-6 space-y-4
                    transition-all duration-500 ease-out
                    group-hover:shadow-2xl group-hover:shadow-primary/20
                    group-hover:-translate-y-2
                    border border-transparent group-hover:border-primary/30
                  "
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(0deg) rotateY(0deg)",
                    transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out"
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon with 3D pop effect */}
                  <div 
                    className="
                      relative w-14 h-14 rounded-xl bg-primary/10 
                      flex items-center justify-center
                      transition-all duration-500
                      group-hover:bg-primary/20 group-hover:scale-110
                      group-hover:shadow-lg group-hover:shadow-primary/30
                    "
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <item.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title with lift effect */}
                  <h3 
                    className="text-lg font-semibold text-foreground transition-all duration-500 group-hover:text-primary"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm text-muted-foreground transition-all duration-500 group-hover:text-muted-foreground/80"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};