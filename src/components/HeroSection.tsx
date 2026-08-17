import { motion } from "framer-motion";
import resumeAsset from "@/assets/Marissa-Cohen-Resume.pdf.asset.json";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[85svh] flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden pastel-bg">
      {/* Flat graphic shapes */}
      <div className="absolute -top-28 -left-24 w-[26rem] h-[26rem] rounded-full bg-secondary" />
      <div className="absolute -top-16 left-[18rem] w-56 h-56 rounded-full bg-primary hidden md:block" />
      <div className="absolute bottom-[-8rem] right-[-4rem] w-[26rem] h-[26rem] rounded-full bg-brand-yellow" />
      <div className="absolute bottom-[-6rem] left-1/3 w-72 h-72 rounded-full bg-brand-green hidden md:block" />
      <div className="absolute top-1/4 right-[-8rem] w-80 h-80 rounded-full bg-brand-blue hidden lg:block" />
      <div className="absolute inset-x-6 md:inset-x-12 top-20 bottom-10 rounded-[3rem] bg-background border-2 border-foreground" />
      <div className="absolute inset-x-0 bottom-0 h-3 stripe-bar" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-12 lg:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="label-text mb-5 block uppercase"
          >
            Entertainment Marketing &middot; Social &amp; Creator Campaigns
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.03em] text-foreground mb-6"
          >
            Marissa Cohen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Over six years in entertainment and digital marketing, I&rsquo;ve scaled content 
            from launch to millions of views.{" "}
            <br className="hidden sm:block" />
            I bridge creative storytelling and business rigor&mdash;brand narrative and influencer 
            strategy, backed by performance attribution, budget optimization, and ROI tracking. 
            MBA from USC Marshall; based in Los Angeles.
          </motion.p>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-bold tracking-widest uppercase cursor-pointer border-2 border-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span>See My Work</span>
              <div className="h-px w-8 bg-primary-foreground transition-all duration-500 group-hover:w-14" />
            </button>
            <a
              href={resumeAsset.url}
              download
              className="rounded-full border-2 border-foreground bg-brand-yellow text-foreground px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              Résumé
            </a>
            <a
              href="https://www.linkedin.com/in/mayadcohen/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-foreground bg-card text-foreground px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
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
