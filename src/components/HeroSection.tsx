import { motion } from "framer-motion";
import resumeAsset from "@/assets/Marissa-Cohen-Resume.pdf.asset.json";
import headshot from "@/assets/headshot.jpg";
import { Starburst, Asterisk, Checker, Bolt, Flower, ZigZag, Eye } from "@/components/GenZGraphics";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[80svh] flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden pastel-bg">
      {/* Gen Z graphic set — hard-edged flat shapes, no dots */}
      <Starburst className="absolute -top-12 -left-12 w-40 h-40 md:-top-24 md:-left-20 md:w-[22rem] md:h-[22rem] text-secondary" />
      <Asterisk className="absolute top-10 left-[16rem] w-28 h-28 text-primary hidden md:block rotate-12" />
      <Checker className="absolute top-24 right-8 w-32 h-32 text-brand-blue hidden lg:block" />
      <Bolt className="absolute top-[45%] right-[3rem] w-16 h-28 text-brand-yellow hidden lg:block -rotate-12" />
      <Flower className="absolute bottom-[-3rem] right-[-2.5rem] w-40 h-40 md:bottom-[-6rem] md:right-[-4rem] md:w-[20rem] md:h-[20rem] text-brand-yellow" />
      <ZigZag className="absolute bottom-24 left-[8%] w-56 h-16 text-brand-green hidden md:block" />
      <Eye className="absolute bottom-8 right-[30%] w-24 h-14 text-primary hidden lg:block" />
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
              className="rounded-full border-2 border-foreground bg-brand-yellow text-primary-foreground px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              Résumé
            </a>
            <a
              href="https://medium.com/@marissacohen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-foreground bg-brand-green text-primary-foreground px-7 py-3.5 text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-0.5"
            >
              Blog
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
            src={headshot}
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
