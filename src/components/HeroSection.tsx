import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import headshot from "@/assets/headshot.jpg";
import { Starburst } from "@/components/GenZGraphics";
import { MADLIB_SLOTS as BIO_SLOTS, ROTATION_MS } from "@/config/heroMadlib";

const HERO_VIDEO_ID = "okb_--K7p14";

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



      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] stack-columns items-center">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mono-meta space-kicker flex items-start gap-2 whitespace-pre-line"
          >
            <span className="mt-1 inline-block h-3 w-3 shrink-0 bg-primary" />
            WHAT DO HENRY WINKLER, TRACEE ELLIS ROSS, AND SHREK{"\n"}HAVE IN COMMON?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="type-display text-foreground space-title text-balance"
          >
            MARISSA COHEN, MBA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mono-meta text-muted-foreground space-kicker"
          >
            ENTERTAINMENT + DIGITAL + CREATOR CAMPAIGNS
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
              className="group inline-flex items-center justify-between gap-6 rounded-none bg-primary text-primary-foreground px-8 py-5 uppercase tracking-tighter font-black text-xl cursor-pointer border-4 border-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))] transition-all hover:bg-foreground hover:shadow-[10px_10px_0_0_hsl(var(--foreground))]"
             
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
            <div className="relative w-full h-[22rem] md:h-[26rem] overflow-hidden bg-foreground">
              <iframe
                src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
                title="Trolls: Holiday in Harmony — official trailer"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
                aria-hidden="true"
                tabIndex={-1}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[240%] -translate-x-1/2 -translate-y-1/2 border-0"
              />

              <a
                href={`https://www.youtube.com/watch?v=${HERO_VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground/25 transition-colors hover:bg-foreground/40"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-background" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="mono-meta text-background">Watch the trailer</span>
              </a>
            </div>

            <div className="flex items-center gap-3 border-t-4 border-foreground bg-background p-3">
              {imageState !== "error" && (
                <img
                  src={headshot}
                  alt="Marissa Cohen, social media and executive communications marketer"
                  loading="eager"
                  decoding="async"
                  onLoad={() => setImageState("loaded")}
                  onError={() => setImageState("error")}
                  className="h-12 w-12 shrink-0 border-2 border-foreground object-cover object-[center_20%]"
                />
              )}
              {imageState === "error" && (
                <Starburst className="h-12 w-12 shrink-0 text-foreground/70" />
              )}
              <span className="mono-meta text-muted-foreground leading-tight">
                TROLLS: HOLIDAY IN HARMONY{"\n"}2.15M FIRST-WEEK VIEWERS
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
