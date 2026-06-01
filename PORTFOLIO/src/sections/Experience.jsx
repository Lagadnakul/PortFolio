import { motion } from "framer-motion";

// Experience data
const experiences = [
  {
    id: 1,
    period: "Dec 2024 – Mar 2025",
    title: "Software Developer Intern",
    company: "Mamo Technolabs",
    description: "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, and Express.js. Built RESTful APIs for business applications. Improved backend efficiency using asynchronous programming and Redis caching. Worked with GitHub Actions and Docker for deployment workflows.",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Redis", "Docker", "GitHub Actions"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />      {/* Connecting line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-1.5 top-4 w-0.5 h-24 bg-linear-to-b from-primary/50 to-transparent" />
      )}

      {/* Card content */}
      <div className="group relative rounded-xl bg-card border border-border/50 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Period */}
        <span className="text-primary text-sm font-semibold tracking-wide">
          {experience.period}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {experience.title}
        </h3>

        {/* Company */}
        <p className="text-muted-foreground text-sm font-medium mt-1">
          {experience.company}
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mt-4">
          {experience.description}
        </p>

        {/* Skills/Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/30">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>        {/* Decorative accent */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-r from-primary/0 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Experience</span>
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              that speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A timeline of my professional growth, from curious beginner to senior engineer leading teams and building products at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};