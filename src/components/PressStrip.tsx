import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const items = [
  {
    outlet: "New York Times Bestseller List",
    note: "Being Henry: The Fonz…and Beyond — 11 weeks on the list",
  },
  {
    outlet: "Business Insider",
    note: "Henry Winkler's first six TikToks hit 33M views",
  },
  {
    outlet: "75th Emmy Awards",
    note: "HBO's Barry Season 4 — 11 nominations",
  },
  {
    outlet: "The Washington Post",
    note: "Coverage of the Glamour Women of the Year keynote",
  },
  {
    outlet: "W Magazine",
    note: "Time's Up at the Golden Globes",
  },
  {
    outlet: "Variety · The Hollywood Reporter",
    note: "Annual Humanitas Prizes awards coverage",
  },
];

const PressStrip = () => (
  <section
    id="press"
    className="relative overflow-hidden section-x section-y border-t border-border"
  >
    <h2 className="label-text space-kicker">Selected Press &amp; Recognition</h2>

    <p className="type-lead text-muted-foreground max-w-2xl space-lead text-pretty">
      Campaigns I've worked on, as covered by the rooms that were watching.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 stack-grid space-block">
      {items.map((item, i) => (
        <motion.div
          key={item.outlet}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`surface-card accent-card p-6 ${accentFor(i)}`}
        >
          <p className="type-h3 text-foreground text-pretty">{item.outlet}</p>
          <p className="type-meta text-muted-foreground mt-2 text-pretty">
            {item.note}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PressStrip;
