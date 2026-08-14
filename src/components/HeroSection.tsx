import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-svh w-full flex flex-col justify-center px-8 md:px-16 py-32 overflow-hidden pastel-bg">
      {/* Soft pastel blobs */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-secondary/70 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-accent/70 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-muted/80 blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label-text mb-6 block"
        >
          Social Media &amp; Executive Communications
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] font-semibold tracking-tight text-foreground mb-8"
        >
          Marissa Cohen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
        >
          I grew up in a family of engineers, snuck into Hollywood anyway, and ended up
          doing both: writing for the people in front of the camera and marketing the
          technology behind it. Social strategy and executive communications, mostly in
          somebody else's voice.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={scrollToWork}
          className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-transform hover:-translate-y-0.5"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <span>See My Work</span>
          <div className="h-px w-8 bg-primary-foreground transition-all duration-500 group-hover:w-14" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
