import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";
import { Starburst, Bolt } from "@/components/GenZGraphics";

import type { ReactNode } from "react";

const stats: { value: string; label: ReactNode }[] = [
  { value: "2.15M", label: "First-week viewers for Trolls: Holiday in Harmony, with zero theatrical box office available" },
  { value: "$21M / 60 days", label: "Raised for the Time's Up Legal Defense Fund through a celebrity-led launch" },
  {
    value: "66,000+",
    label: (
      <>
        Copies sold of a New York Times bestselling memoir,{" "}
        <strong className="font-bold accent-text">17,000</strong> in week one
      </>
    ),
  },
  { value: "3,000+", label: "Enterprise employees onboarded to DreamWorks Technology (PipelineX)" },
  { value: "1.3M", label: "Followers built on a talent-led TikTok channel during HBO's Barry finale" },
  { value: "$100,000", label: "Writers' fund converted from +9,000 followers of audience growth" },
];




const StatsSection = () => (
  <section className="relative overflow-hidden px-8 md:px-16 py-24 accent-orange">
    <Starburst className="pointer-events-none absolute -top-8 right-[-2rem] w-32 h-32 md:-top-16 md:right-[-3rem] md:w-56 md:h-56 text-brand-yellow/70" />
    <Bolt className="pointer-events-none absolute bottom-6 left-[-1rem] w-14 h-24 text-primary/60 rotate-12" />
    <h2 className="label-text mb-10">By the Numbers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className={`surface-card accent-card p-8 ${accentFor(i)}`}
        >
          <div className="type-stat accent-text mb-3">
            {stat.value}
          </div>
          <p className="text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
