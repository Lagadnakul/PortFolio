import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Make sure your CV is named cv.pdf in public folder
    link.download = "Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownloadCV}
      className="group relative inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-foreground rounded-full overflow-hidden transition-all duration-300 hover:text-primary bg-transparent border-0 cursor-pointer"
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="198"
          height="58"
          rx="30"
          ry="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border group-hover:text-primary/50 transition-colors duration-300"
        />
        <rect
          x="1"
          y="1"
          width="198"
          height="58"
          rx="30"
          ry="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="500"
          className="download-cv-path text-primary"
        />
      </svg>

      {/* Button Content */}
      <span className="relative flex items-center gap-2">
        <Download className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        Download CV
      </span>
    </button>
  );
};