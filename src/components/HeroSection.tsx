import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import headshot from "@/assets/headshot.jpg";
import { Starburst, Asterisk, Checker, Bolt, Flower, ZigZag, Eye } from "@/components/GenZGraphics";
import { MADLIB_SLOTS as BIO_SLOTS, ROTATION_MS } from "@/config/heroMadlib";

const HeroSection = () => {
  const [slotIndex, setSlotIndex] = useState(0);
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">("loading");
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
      {/* Editorial stripes: retro-broadcast red / orange / blue rules */}
      <div className="absolute top-0 left-0 h-full w-2 stripe-block hidden lg:block" />
      <div className="absolute top-10 right-0 w-40 md:w-72 stripe-block h-6 md:h-9" />
      <div className="absolute bottom-24 right-10 w-24 md:w-40 stripe-block h-4 md:h-6 hidden md:block" />
      <div className="absolute inset-x-0 bottom-0 h-3 stripe-bar" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] stack-columns items-center">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="label-text space-kicker block uppercase"
          >
            WHAT DO HENRY WINKLER, TRACEE ELLIS ROSS, AND SHREK HAVE IN COMMON?
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
            USC MBA, ENTERTAINMENT & DIGITAL MARKETING
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0, 0, 1] }}
            className="text-foreground space-lead hero-bio text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.6]"
          >
            <p>
              <span>Let&rsquo;s </span>
              <span className="swipe-slot">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={slot.verb}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`swipe ${slot.verbClass}`}
                  >
                    {slot.verb}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span> for </span>
              <span className="swipe-slot">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={slot.noun}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`swipe ${slot.nounClass}`}
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
              className="group inline-flex items-center gap-3 rounded-none bg-primary text-primary-foreground px-8 py-4 uppercase tracking-[0.18em] type-cta cursor-pointer border-2 border-foreground transition-transform hover:-translate-y-0.5"
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
          <div className="relative overflow-hidden surface-card p-0">
            {imageState !== "loaded" && (
              <div
                aria-hidden
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-secondary via-accent to-primary/60"
              >
                <Starburst className="w-14 h-14 text-foreground/70" />
                {imageState === "error" && (
                  <span className="type-cta text-foreground">Marissa Cohen</span>
                )}
              </div>
            )}
            {imageState !== "error" && (
              <img
                src={headshot}
                alt="Marissa Cohen, social media and executive communications marketer"
                loading="eager"
                decoding="async"
                onLoad={() => setImageState("loaded")}
                onError={() => setImageState("error")}
                className={`w-full h-[22rem] md:h-[26rem] object-cover object-[center_20%] transition-opacity duration-500 ${
                  imageState === "loaded" ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
            {imageState === "error" && <div className="w-full h-[22rem] md:h-[26rem]" />}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
