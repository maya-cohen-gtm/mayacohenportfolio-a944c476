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
  {
    quote: "Marissa has been instrumental in transforming GWiB's social media presence and in being a board member. As a team member, Marissa has been especially proactive. She's not only contributed to social media but other aspects of the club as well, and supported other members in their initiatives. As a leader, she is someone I genuinely never need to worry about because I know the work will be done (and it will be done WELL), I know she will remain creative, and I know she will contribute and support everyone else whenever needed, and that should there be any hesitation on any assignment, she won't assume, but will rather have a conversation and ask questions, and asks for feedback. Not only did she come in with some amazing and feasible ideas, but she re-vamped our logo, our campaigns, and our posts. Everything became cohesive; there was a schedule (but still room for spontaneity), and we had over 200% engagement growth. GWiB has been reached out to by major conferences, brands, and professionals to collaborate and host events with – primarily because of our increased social media presence and engagement. I've really enjoyed working with Marissa and am so excited to see what she does next because any team would be lucky to have her (and also grateful to call her a friend!).",
    name: "Jasmine Kaur",
    role: "Senior Consultant, EY; President of Graduate Women in Business",
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
