import { motion } from "framer-motion";

const roles = [
  {
    company: "Fair Dinkum Productions",
    title: "Chief of Staff — Henry Winkler",
    period: "2022 – 2024",
    points: [
      "Led executive communications and business operations across Social Media, Studio Marketing, and Primetime Network pillars.",
      "Built social campaigns with talent, filmmakers, and influencers for HBO's Barry and Henry's memoir — 11 weeks on the NYT Bestsellers list.",
      "Grew the digital network: Facebook likes +495%, YouTube views +42,425%, subscribers +4,035%.",
      "Produced virtual, hybrid, and in-person all-hands, leadership summits, and Q&As.",
    ],
  },
  {
    company: "DreamWorks Animation",
    title: "Marketing Lead — PipelineX (Cloud Platform)",
    period: "2019 – 2022",
    points: [
      "Launched the pipeline's first internal newsletter (22,000+ downloads) and a weekly campaign for 3,000+ employees.",
      "Project managed a 70+ page corporate website redesign and the first crowdsourcing campaign (3x industry average in ideas).",
      "Piloted internal social collaboration with 80%+ adoption; ran the OKR program behind 50%+ of infrastructure priorities.",
    ],
  },
  {
    company: "Joy Mill Entertainment",
    title: "Marketing Manager — Executive Communications & Social Media",
    period: "2017 – 2019",
    points: [
      "Doubled followers in six months through campaigns with third-party studios and networks.",
      "Built GTM launches for Michelle Obama's Becoming (100 weeks NYT Bestseller) and the #MeToo Movement Fund ($21M in 60 days).",
      "Wrote executive keynote content for Glamour with 5M+ social views.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="px-8 md:px-16 py-24 border-t border-border">
    <h2 className="label-text mb-10">Experience</h2>
    <div className="space-y-6">
      {roles.map((role, i) => (
        <motion.div
          key={role.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="surface-card p-8 md:p-10"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <div>
              <h3 className="text-2xl font-semibold">{role.company}</h3>
              <p className="text-primary">{role.title}</p>
            </div>
            <span className="text-sm text-muted-foreground">{role.period}</span>
          </div>
          <ul className="space-y-3">
            {role.points.map((point) => (
              <li key={point} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
