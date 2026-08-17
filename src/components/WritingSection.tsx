import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

// NOTE: The `excerpt` fields below are drafted placeholders in Marissa's voice.
// Swap in the real (or lightly redacted) copy before sharing with recruiters.
const samples = [
  {
    kind: "Keynote",
    title: "Glamour Women of the Year — stage remarks",
    brief:
      "A principal with a global platform, ten minutes on stage, and a room that had already heard six speeches about resilience.",
    approach:
      "I cut every abstract noun and rebuilt the piece around one small, specific story, then let the argument land in the last thirty seconds so the clip would travel.",
    excerpt:
      "We don't get to choose the room we walk into. We do get to choose whether we hold the door.",
    result: "5M+ social views on the excerpted moment.",
  },
  {
    kind: "Executive comms",
    title: "Memoir launch — talent voice across owned channels",
    brief:
      "Take a beloved public figure with a very particular cadence and scale it to daily posting without it sounding like a publicist.",
    approach:
      "I built a one-page voice guide — his rhythms, his jokes, the words he'd never use — and ghostwrote against it so tightly that fans couldn't tell the difference. Then I let him break the rules whenever he wanted to.",
    excerpt:
      "I am seventy-seven years old and I have just learned how to make a video with a filter on it. Nobody is too late.",
    result: "11 weeks on the NYT Bestsellers list; +495% Facebook engagement.",
  },
  {
    kind: "Internal comms",
    title: "PipelineX — the newsletter 3,000 engineers actually opened",
    brief:
      "A multi-year cloud migration nobody outside the infrastructure team understood, and a studio that was tired of change announcements.",
    approach:
      "I stopped writing status updates and started writing a column: one human per issue, one thing that got easier this week, and a plain-English translation of whatever shipped.",
    excerpt:
      "Rendering used to mean going home and hoping. As of Tuesday, it means refreshing a tab. That's the whole update.",
    result: "22,000+ downloads; 80%+ adoption of the new collaboration tooling.",
  },
  {
    kind: "Campaign copy",
    title: "#MeToo Movement Fund — launch statement",
    brief:
      "A national fundraising moment where tone was the entire risk. Too soft and it's noise; too sharp and it's the story instead of the cause.",
    approach:
      "I wrote to one reader — a woman deciding in eight seconds whether this was for her — and kept the ask concrete, small, and repeatable across every channel.",
    excerpt:
      "This isn't a moment. It's a legal fund, a phone number, and a person on the other end of it.",
    result: "$21M raised in 60 days.",
  },
];

const WritingSection = () => (
  <section id="writing" className="px-8 md:px-16 py-24 border-t border-border accent-yellow">
    <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
      <h2 className="label-text">Words</h2>
      <a
        href="https://medium.com/@marissacohen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm accent-text font-semibold hover:underline underline-offset-4"
      >
        Read more on Medium &rarr;
      </a>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl mb-12">
      Exec comms lives or dies on the sentence. Here are four briefs, what I wrote,
      and what happened next.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {samples.map((sample, i) => (
        <motion.article
          key={sample.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className={`surface-card accent-card p-8 md:p-10 flex flex-col ${accentFor(i + 2)}`}
        >
          <span className="label-text mb-3">{sample.kind}</span>
          <h3 className="text-2xl font-semibold mb-6">{sample.title}</h3>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                The brief
              </span>
              <p className="text-foreground/80">{sample.brief}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                What I did
              </span>
              <p className="text-foreground/80">{sample.approach}</p>
            </div>
          </div>

          <blockquote
            className="accent-tint rounded-2xl p-6 text-lg italic text-foreground mb-6 mt-auto"
          >
            &ldquo;{sample.excerpt}&rdquo;
          </blockquote>

          <p className="text-sm font-semibold accent-text">{sample.result}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default WritingSection;
