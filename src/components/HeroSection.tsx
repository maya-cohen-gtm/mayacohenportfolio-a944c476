import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import headshot from "@/assets/headshot.jpg";
import { Starburst, Asterisk, Checker, Bolt, Flower, ZigZag, Eye } from "@/components/GenZGraphics";
import { MADLIB_SLOTS as BIO_SLOTS, ROTATION_MS } from "@/config/heroMadlib";

const HeroSection = () => {
  const [slotIndex, setSlotIndex] = useState(0);
  const slot = BIO_SLOTS[slotIndex];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setSlotIndex((i) => (i + 1) % BIO_SLOTS.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);


  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="relative w-full min-h-[80svh] lg:min-h-[88svh] flex items-center section-x hero-y overflow-hidden pastel-bg">
      {/* Gen Z graphic set — hard-edged flat shapes, no dots */}
      <Starburst className="absolute -top-16 -left-16 w-32 h-32 md:-top-24 md:-left-20 md:w-[22rem] md:h-[22rem] text-secondary" />
      <Asterisk className="absolute top-6 left-[21rem] w-24 h-24 text-primary hidden md:block rotate-12" />
      <Checker className="absolute top-24 right-8 w-32 h-32 text-brand-blue hidden lg:block" />
      <Bolt className="absolute top-[45%] right-[3rem] w-16 h-28 text-brand-yellow hidden lg:block -rotate-12" />
      <Flower className="absolute bottom-[-3rem] right-[-2.5rem] w-40 h-40 md:bottom-[-6rem] md:right-[-4rem] md:w-[20rem] md:h-[20rem] text-brand-yellow" />
      <ZigZag className="absolute bottom-12 left-[4%] w-48 h-14 text-brand-green hidden md:block" />
      <Eye className="absolute bottom-10 right-[36%] w-20 h-12 text-primary hidden lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-3 stripe-bar" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] stack-columns items-center">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="label-text space-kicker block uppercase"
          >
            Entertainment Marketing &middot; Social &amp; Creator Campaigns
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="type-display text-foreground space-title text-balance"
          >
            Marissa Cohen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="type-kicker text-muted-foreground space-kicker"
          >
            MBA, University of Southern California
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0, 0, 1] }}
            className="text-foreground space-lead hero-bio text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.6]"
          >
            <p className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
              <span>Let&rsquo;s</span>
              <span className="relative inline-block align-baseline min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={slot.verb}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`swipe inline-block ${slot.verbClass}`}
                  >
                    {slot.verb}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span>for</span>
              <span className="relative inline-block align-baseline min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={slot.noun}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`swipe inline-block ${slot.nounClass}`}
                  >
                    {slot.noun}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </motion.div>




          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 type-cta cursor-pointer border-2 border-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span>See My Work</span>
              <div className="h-px w-8 bg-primary-foreground transition-all duration-500 group-hover:w-14" />
            </button>
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
