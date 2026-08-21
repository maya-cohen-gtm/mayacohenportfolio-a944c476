import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";
import { Starburst, Zigzag } from "@/components/GenZGraphics";

const takes = [
  {
    number: "01",
    title: "Research is the creative brief",
    body:
      "The best creative I've shipped didn't start in a brainstorm — it started in a comment section, a search trend, or a sentiment read. Analytical rigor isn't the opposite of brand magic; it's the thing that tells you which magic will land. Teams that treat insight as a pre-step to creativity keep making work that tests well and travels nowhere.",
  },
  {
    number: "02",
    title: "The viewer is the stakeholder in the room",
    body:
      "Every campaign has a table full of people with opinions, and none of them are the audience. My job is to hold that empty seat — to ask what the person scrolling at 11pm actually wants from this, and to kill the asset that only exists to satisfy an internal note. Viewer obsession is a decision-making rule, not a value on a slide.",
  },
  {
    number: "03",
    title: "Talent voice is an asset, not a channel",
    body:
      "The fastest way to burn a talent-led channel is to treat it as free distribution for studio assets. Audiences can tell instantly. The durable play is to protect the voice that built the audience and let the campaign borrow its credibility — which means saying no to the trailer cut and yes to the thing only that person could make.",
  },
];

const PointOfViewSection = () => (
  <section
    id="point-of-view"
    className="relative overflow-hidden section-x section-y border-t border-border accent-blue"
  >
    <Starburst className="pointer-events-none absolute -top-8 right-[-2rem] w-28 h-28 md:right-[-3rem] md:w-48 md:h-48 text-brand-yellow/60" />
    <Zigzag className="pointer-events-none absolute bottom-10 left-6 w-24 h-8 md:w-40 md:h-12 text-brand-pink/70 hidden md:block" />

    <h2 className="label-text space-kicker">Point of View</h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="type-h2 text-foreground max-w-4xl space-title text-pretty"
    >
      Attention is earned by understanding people, not by out-spending them.
    </motion.p>

    <p className="type-lead text-muted-foreground max-w-2xl space-lead text-pretty">
      Three things I believe about building audiences for premium IP — and act on
      whether or not the room agrees.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-3 stack-grid space-block">
      {takes.map((take, i) => (
        <motion.article
          key={take.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className={`surface-card accent-card p-8 ${accentFor(i + 1)}`}
        >
          <span className="type-stat accent-text block mb-4">{take.number}</span>
          <h3 className="type-h3 text-foreground mb-4 text-pretty">{take.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">{take.body}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default PointOfViewSection;
