import { motion } from "framer-motion";
import resumeAsset from "@/assets/Marissa-Cohen-Resume.pdf.asset.json";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[85svh] flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden pastel-bg">
      {/* Soft pastel blobs */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-secondary/70 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full bg-accent/70 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-muted/80 blur-3xl" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="label-text mb-5 block"
          >
            Social Media &amp; Executive Communications
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-semibold tracking-tight text-foreground mb-6"
          >
            Marissa Cohen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            I grew up in a family of engineers, snuck into Hollywood anyway, and ended up
            doing both: writing for the people in front of the camera and marketing the
            technology behind it. Social strategy and executive communications, mostly in
            somebody else&rsquo;s voice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span>See My Work</span>
              <div className="h-px w-8 bg-primary-foreground transition-all duration-500 group-hover:w-14" />
            </button>
            <a
              href="/Marissa-Cohen-Resume.pdf"
              download
              className="rounded-full border border-primary text-primary px-7 py-3.5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              Résumé
            </a>
            <a
              href="https://www.linkedin.com/in/mayadcohen/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border text-foreground/80 px-7 py-3.5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a
              href="mailto:marissadcohen@gmail.com"
              className="rounded-full border border-border text-foreground/80 px-7 py-3.5 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="justify-self-center lg:justify-self-end w-full max-w-sm"
        >
          <div className="relative rounded-[2rem] overflow-hidden surface-card p-0">
          <img
            src="/headshot.png"
            alt="Marissa Cohen, social media and executive communications marketer"
            className="w-full h-[22rem] md:h-[26rem] object-cover object-[center_20%]"
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
