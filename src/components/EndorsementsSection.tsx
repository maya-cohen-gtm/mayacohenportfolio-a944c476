import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";
import { Starburst, Asterisk } from "@/components/GenZGraphics";

// Add real endorsements here (name + role required). The section stays hidden
// until at least one quote exists — never ship invented praise.
type Endorsement = {
  quote: string;
  name: string;
  role: string;
};

const endorsements: Endorsement[] = [
  {
    quote: "Marissa is a natural public speaker, promoter and storyteller. She has a sharp understanding of how to position ideas, products, and narratives in a way that resonates with target audiences. Her instincts in marketing are both data-informed and culturally aware, allowing her to craft strategies that feel timely, relevant, and impactful. In high-pressure, fast-paced environments, Marissa takes initiative, brings clarity to ambiguity, and keeps the team aligned and motivated. She balances confidence with humility, always open to feedback while maintaining a strong point of view.",
    name: "Cian Nacar",
    role: "Director Strategic Initiatives, Warner Music Group; Classmate, USC Marshall School of Business",
  },
  {
    quote: "Marissa transformed GWiB's social media presence from the ground up — she re-vamped our logo, campaigns, and posts, built a cohesive content schedule, and drove over 200% engagement growth. As a leader, she is someone I never need to worry about: the work gets done, and done well. She brings creative ideas, asks smart questions, supports the team, and collaborates with humility and confidence. Any team would be lucky to have her.",
    name: "Jasmine Kaur",
    role: "Senior Consultant, EY; President of Graduate Women in Business (GWiB)",
  },
  {
    quote: "Marissa's flavor of public speaking is unlike anything I've ever seen! I was blown away. She has all the makings of a confident and strategic thinker, but blends it with comedy. Marissa's presentations are an incredible portrayal of humor, persuasion, and strength.",
    name: "John Shehan",
    role: "Consultant, Deloitte",
  },
];

const EndorsementsSection = () => {
  if (endorsements.length === 0) return null;

  return (
    <section id="words" className="relative overflow-hidden px-8 md:px-16 py-24 border-t border-border accent-pink">
      <Starburst className="pointer-events-none absolute -bottom-10 left-[-2rem] w-32 h-32 md:-bottom-16 md:left-[-3rem] md:w-56 md:h-56 text-secondary/70" />
      <Asterisk className="pointer-events-none absolute top-10 right-5 w-12 h-12 md:right-8 md:w-20 md:h-20 text-primary/60 -rotate-12" />
      <h2 className="label-text mb-10">What People Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {endorsements.map((item, i) => {
          const isWide = i === endorsements.length - 1 && endorsements.length % 2 === 1;
          return (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`surface-card accent-card p-8 md:p-10 ${accentFor(i + 1)} ${
                isWide
                  ? "lg:col-span-2 lg:flex lg:items-center lg:gap-10"
                  : ""
              }`}
            >
              <blockquote
                className={`text-xl leading-relaxed text-foreground/85 ${
                  isWide ? "lg:flex-1" : ""
                }`}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption
                className={`text-sm ${
                  isWide
                    ? "mt-6 lg:mt-0 lg:w-56 lg:shrink-0 lg:border-l-2 lg:border-foreground/20 lg:pl-8"
                    : "mt-6"
                }`}
              >
                <span className="font-semibold text-foreground block">{item.name}</span>
                <span className="text-muted-foreground">{isWide ? "" : " — "}{item.role}</span>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

    </section>
  );
};

export default EndorsementsSection;
