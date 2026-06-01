import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitStatus({
        type: "error",
        message:
          error?.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-foreground font-semibold mb-3">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name..."
          className="w-full px-4 py-3 bg-card border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
        />
      </div>

      <div>
        <label className="block text-foreground font-semibold mb-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-card border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
        />
      </div>

      <div>
        <label className="block text-foreground font-semibold mb-3">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
          className="w-full px-4 py-3 bg-card border border-border/50 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
        />
      </div>

      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 p-4 rounded-xl ${
            submitStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}

          <p className="text-sm">{submitStatus.message}</p>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Let&apos;s build</span>
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Send me a message and let&apos;s discuss how
            we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-1"
          >
            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Email
                </h3>
                <a
                  href="mailto:nakullagad084@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  nakullagad084@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Phone
                </h3>
                <a
                  href="tel:+919328321950"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +91 93283 21950
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Location
                </h3>
                <p className="text-muted-foreground">Vadodara, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-card border border-border/50 p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
          >
            <ContactForm />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Or reach out on social media:
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/nakul-lagad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/Lagadnakul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};