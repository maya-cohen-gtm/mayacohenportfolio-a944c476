import { motion } from "framer-motion";

// Add real endorsements here (name + role required). The section stays hidden
// until at least one quote exists — never ship invented praise.
type Endorsement = {
  quote: string;
  name: string;
  role: string;
};

const endorsements: Endorsement[] = [
  {
    quote: "Marissa is a natural public speaker, promoter and storyteller. She has a sharp understanding of how to position ideas, products, and narratives in a way that resonates with target audiences. Her instincts in marketing are both data-informed and culturally aware, allowing her to craft strategies that feel timely, relevant, and impactful. She doesn't just contribute to projects, she elevates them. Equally important is her collaborative mindset. In high-pressure, fast-paced competition environments, Marissa is someone you can rely on to take initiative, bring clarity to ambiguity, and keep the team aligned and motivated. She balances confidence with humility, always open to feedback while maintaining a strong point of view.",
    name: "Cian Nacar",
    role: "Director Strategic Initiatives, Warner Music Group",
  },
];

const EndorsementsSection = () => {
  if (endorsements.length === 0) return null;

  return (
    <section id="endorsements" className="px-8 md:px-16 py-24 border-t border-border">
      <h2 className="label-text mb-10">What People Say</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {endorsements.map((item, i) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="surface-card p-8 md:p-10"
          >
            <blockquote className="text-xl leading-relaxed text-foreground/85">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-foreground">{item.name}</span>
              <span className="text-muted-foreground"> — {item.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

export default EndorsementsSection;
