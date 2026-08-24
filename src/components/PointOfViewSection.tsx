import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const takes = [
  {
    number: "01",
    title: "Research makes creative braver",
    body:
      "Some of my favorite work started in a comment section, a search trend, or a sentiment read. Insight doesn't box creative in — it gives the team the confidence to go bigger, because you already know what your audience is hungry for. When research and creative sit at the same table from day one, everybody gets to take smarter swings.",
  },
  {
    number: "02",
    title: "The viewer gets a seat at the table",
    body:
      "Every campaign has a room full of smart people with great opinions — and the audience isn't in it. I like holding that seat: asking what the person scrolling at 11pm actually wants from us, and letting that answer settle debates. It's a generous way to work, and it makes the whole team's decisions easier.",
  },
  {
    number: "03",
    title: "Talent voice is worth protecting",
    body:
      "Audiences show up for a person, not a distribution channel. The most rewarding campaigns I've run gave talent room to make the thing only they could make — and the campaign borrowed that trust. Protecting someone's voice isn't precious; it's the surest way to make work people actually want to share.",
  },
];


const PointOfViewSection = () => (
  <section
    id="point-of-view"
    className="relative overflow-hidden section-x section-y accent-blue"
  >

    <h2 className="label-text space-kicker">Point of View</h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="type-h2 text-foreground max-w-4xl space-title text-pretty"
    >
      Attention is earned by genuinely understanding people — and that's good news for everyone.
    </motion.p>

    <p className="type-lead text-muted-foreground max-w-2xl space-lead text-pretty">
      Three things I believe about building audiences for premium IP — and the
      ways they make teams better, not just campaigns bigger.
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
          <span className={`type-stat block mb-4 ${take.number === "03" ? "text-primary" : "accent-text"}`}>{take.number}</span>
          <h3 className="type-h3 text-foreground mb-4 text-pretty">{take.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">{take.body}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default PointOfViewSection;
