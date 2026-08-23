import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { accentFor } from "@/lib/accents";

const clients = [
  "HBO",
  "DreamWorks Animation",
  "ABC Signature",
  "SAG-AFTRA",
  "Kia Forum",
  "Glamour",
  "Humanitas Prize",
];

const LogoStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, margin: "0px 0px -15% 0px" });

  return (
    <section className="px-8 md:px-16 py-10 border-y border-border bg-background accent-blue overflow-hidden">
      <div ref={ref} className="flex flex-col gap-5">
        <p className="label-text">Selected brands &amp; partners</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, x: 48 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -48 }
              }
              transition={{
                duration: 0.5,
                delay: inView ? i * 0.07 : 0,
                ease: [0.2, 0, 0, 1],
              }}
              className={`${accentFor(i)} accent-text text-base md:text-lg font-semibold tracking-tight`}
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
