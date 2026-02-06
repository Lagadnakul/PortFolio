import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button 
      className="
        group relative
        text-foreground transition-all duration-300
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        px-8 py-4 text-lg font-medium rounded-full
        cursor-pointer
      "
    >
      {/* Hover Background Glow Effect */}
      <div 
        className="
          absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
        style={{
          backgroundColor: "color-mix(in srgb, #26c4b8 15%, transparent)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 0 25px color-mix(in srgb, #26c4b8 30%, transparent)",
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5" />
        Download CV
      </span>

      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        {/* Static border (gray) - always visible */}
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Animated border (green) - only visible on hover */}
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="500"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="download-cv-path"
        />
      </svg>
    </button>
  )
}