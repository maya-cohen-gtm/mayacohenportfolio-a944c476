import { motion } from "framer-motion";
import resumeAsset from "@/assets/Marissa-Cohen-Resume.pdf.asset.json";
import headshot from "@/assets/headshot.jpg";
import { Starburst, Asterisk, Checker, Bolt, Flower, ZigZag, Eye } from "@/components/GenZGraphics";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden pastel-bg pt-24 lg:pt-28">
      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
        {/* ---------------- Left: editorial type block ---------------- */}
        <div className="relative px-6 sm:px-8 md:px-16 pb-14 lg:pb-24 pt-6 lg:pt-10">
          <Starburst className="pointer-events-none absolute -top-10 -left-14 w-36 h-36 md:w-56 md:h-56 text-brand-yellow" />
          <Asterisk className="pointer-events-none absolute top-2 right-4 w-14 h-14 md:w-24 md:h-24 text-secondary rotate-12 lg:hidden" />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 label-text mb-4 inline-block border-2 border-foreground bg-card px-3 py-1.5 uppercase"
          >
            Entertainment &middot; Social &middot; Creator Campaigns
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="relative z-10 font-bold uppercase tracking-[-0.045em] leading-[0.82] mb-6"
          >
            <span className="block text-[clamp(3.5rem,13vw,10rem)] text-foreground">
              Marissa
            </span>
            <span className="block text-[clamp(3.5rem,13vw,10rem)] text-primary">
              Cohen
            </span>
            <span className="mt-3 block text-[clamp(1rem,2.4vw,1.75rem)] tracking-[0.06em] leading-tight text-brand-green">
              Social &amp; Executive Communications
            </span>
          </motion.h1>

          <div className="relative z-10 flex items-stretch gap-4 mb-8">
            <div className="w-2 shrink-0 stripe-bar rounded-full" />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0, 0, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Six-plus years in entertainment and digital marketing, scaling content from launch
              to millions of views. I bridge creative storytelling and business rigor&mdash;brand
              narrative and influencer strategy, backed by performance attribution, budget
              optimization, and ROI tracking. MBA from USC Marshall; based in Los Angeles.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative z-10 flex flex-wrap items-center gap-3"
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

          <ZigZag className="pointer-events-none absolute bottom-6 left-[40%] w-40 h-10 md:w-64 md:h-14 text-brand-blue hidden md:block" />
        </div>

        {/* ---------------- Right: solid color block + portrait ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="relative flex items-end justify-center bg-brand-green border-t-2 lg:border-t-0 lg:border-l-2 border-foreground overflow-hidden min-h-[24rem]"
        >
          <Checker className="pointer-events-none absolute top-4 left-4 w-16 h-16 md:w-28 md:h-28 text-brand-yellow" />
          <Bolt className="pointer-events-none absolute top-8 right-6 w-10 h-20 md:w-16 md:h-28 text-brand-yellow -rotate-12" />
          <Flower className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 md:w-48 md:h-48 text-secondary" />
          <Eye className="pointer-events-none absolute bottom-6 right-4 w-16 h-9 md:w-24 md:h-14 text-card" />

          <img
            src={headshot}
            alt="Marissa Cohen, social media and executive communications marketer"
            className="relative z-10 w-[85%] max-w-sm h-[22rem] md:h-[28rem] object-cover object-[center_18%] border-2 border-foreground rounded-t-[3rem]"
          />
        </motion.div>
      </div>

      <div className="h-3 stripe-bar border-t-2 border-foreground" />
    </section>
  );
};

export default HeroSection;
