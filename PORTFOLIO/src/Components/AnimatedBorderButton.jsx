import { Download } from 'lucide-react'

export const AnimatedBorderButton = () => {
  return (
    <button className="group relative px-6 py-3 text-foreground font-medium flex items-center gap-2 cursor-pointer">
      <Download className="w-4 h-4 relative z-10" />
      <span className="relative z-10">Download CV</span>
      
      {/* SVG Border Animation */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 56"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        {/* Background border (gray) */}
        <rect
          x="2"
          y="2"
          width="196"
          height="52"
          rx="26"
          ry="26"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        {/* Animated border (green) */}
        <rect
          x="2"
          y="2"
          width="196"
          height="52"
          rx="26"
          ry="26"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="500"
          strokeDashoffset="500"
          strokeLinecap="round"
          className="animated-border"
        />
      </svg>
    </button>
  )
}