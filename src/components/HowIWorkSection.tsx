import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";
import { Flower, Eye } from "@/components/GenZGraphics";

const operatingModel = [
  {
    label: "Budget",
    value: "$8M+ / yr",
    detail: "Creator, influencer and paid social spend planned, allocated and reconciled against ROI targets.",
  },
  {
    label: "Team",
    value: "Cross-functional pods",
    detail: "Led marketing, PR, content and production partners; briefed agencies and freelance editors on deadline.",
  },
  {
    label: "Cadence",
    value: "Daily ship, weekly read",
    detail: "Daily publishing calendar, weekly performance readout, monthly strategy reset with leadership.",
  },
  {
    label: "Stack",
    value: "Native + measured",
    detail: "Meta, TikTok, YouTube, X native tools plus Sprout, GA4 and UTM-level attribution back to spend.",
  },
];

const principles = [
  "Start from the audience insight, not the asset list.",
  "Every campaign gets one primary metric before anything ships.",
  "Talent voice is a guardrail, not a template — I write to it, not over it.",
  "If a post can't be defended in a crisis, it doesn't go live.",
];

const HowIWorkSection = () => (
  <section id="how-i-work" className="relative overflow-hidden section-x section-y border-t border-border accent-green">
    <Flower className="pointer-events-none absolute -top-6 left-[-2rem] w-28 h-28 md:-top-10 md:left-[-3rem] md:w-48 md:h-48 text-brand-green/50" />
    <Eye className="pointer-events-none absolute top-16 right-6 w-16 h-9 md:right-12 md:w-24 md:h-14 text-primary/70" />
    <h2 className="label-text space-title">How I Work</h2>
    <p className="type-lead text-muted-foreground max-w-2xl space-lead text-pretty">
      The operating model behind the campaigns — what I own, how fast we move, and
      how decisions get made.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 stack-grid space-block">
      {operatingModel.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className={`surface-card accent-card p-8 ${accentFor(i + 3)}`}
        >
          <span className="label-text mb-3 block">{item.label}</span>
          <div className="text-xl font-semibold text-foreground mb-3">{item.value}</div>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
        </motion.div>
      ))}
    </div>

    <motion.ul
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="surface-card accent-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4"
    >
      {principles.map((line) => (
        <li key={line} className="flex gap-3 text-foreground/80 leading-relaxed">
          <span className="accent-text font-semibold">&mdash;</span>
          <span>{line}</span>
        </li>
      ))}
    </motion.ul>
  </section>
);

export default HowIWorkSection;
