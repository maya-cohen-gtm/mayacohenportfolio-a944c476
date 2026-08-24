import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

import type { ReactNode } from "react";

const stats: { value: string; label: ReactNode; valueClass?: string }[] = [
  { value: "2.15M", label: "First-week viewers for Trolls: Holiday in Harmony, with zero theatrical box office available" },
  { value: "$21M / 60 days", label: "Raised for the Time's Up Legal Defense Fund through a celebrity-led launch" },
  {
    value: "+66,000",
    label: (
      <>
        Copies sold of a New York Times bestselling memoir,{" "}
        <strong className="font-bold accent-text">+17,000</strong> in week one
      </>
    ),
  },
  { value: "+3,000", valueClass: "text-brand-yellow", label: "Enterprise employees onboarded to DreamWorks Technology (PipelineX)" },
  { value: "1.3M", label: "Followers built on a talent-led TikTok channel during HBO's Barry finale" },
  {
    value: "$100,000",
    label: (
      <>
        Writers' fund converted from{" "}
        <strong className="font-bold accent-text">+9,000</strong> followers of audience growth
      </>
    ),
  },

];




const StatsSection = () => (
  <section className="relative overflow-hidden px-8 md:px-16 py-24 accent-orange">
    <h2 className="label-text rule-heading mb-10">By the Numbers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className={`surface-card accent-card card-tab p-8 ${accentFor(i)}`}
        >
          <div className={`type-stat mb-3 ${stat.valueClass ?? "accent-text"}`}>
            {stat.value}
          </div>
          <p className="text-foreground/70 leading-tight font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
