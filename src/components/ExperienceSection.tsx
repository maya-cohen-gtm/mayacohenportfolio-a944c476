import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const roles = [
  {
    company: "Fair Dinkum Productions",
    title: "Chief of Staff — Henry Winkler",
    period: "2022 – 2024",
    points: [
      "Owned marketing strategy and execution across content launches, owned social channels, studio marketing, and primetime network partnerships.",
      "Led integrated campaigns with talent, filmmakers, and creators for HBO's Barry and a memoir launch — 11 weeks on the NYT Bestsellers list.",
      "Grew the owned digital network: Facebook likes +495%, YouTube views +42,425%, subscribers +4,035%, with a social-first content cadence built for younger audiences.",
      "Managed an $8M+ creator, influencer, and paid social budget alongside agencies, publicists, and platform partners.",
      "Reported campaign KPIs — reach, engagement, viewership, audience growth — directly to talent and partner leadership.",
    ],
  },
  {
    company: "DreamWorks Animation",
    title: "Marketing Lead — PipelineX (Cloud Platform)",
    period: "2019 – 2022",
    points: [
      "Built go-to-market positioning and messaging for a platform launch serving 3,000+ creatives, including a newsletter with 22,000+ downloads.",
      "Project managed a 70+ page website redesign and the studio's first crowdsourcing campaign (3x industry average in ideas submitted).",
      "Piloted a social collaboration channel to 80%+ adoption; ran the OKR program behind 50%+ of infrastructure priorities.",
    ],
  },
  {
    company: "Joy Mill Entertainment",
    title: "Marketing Manager — Content, Social & Executive Communications",
    period: "2017 – 2019",
    points: [
      "Doubled audience in six months through co-marketing campaigns with third-party studios, networks, and distribution partners.",
      "Built GTM launches for Michelle Obama's Becoming (100 weeks NYT Bestseller) and the #MeToo Movement Fund ($21M in 60 days).",
      "Wrote executive keynote content for Glamour that drove 5M+ social views.",
      "Led messaging and the launch playbook for two national product launches across paid, earned, and owned channels — 2M+ units sold in four months.",
    ],
  },
];


const ExperienceSection = () => (
  <section id="experience" className="px-8 md:px-16 py-24 border-t border-border accent-blue">
    <h2 className="label-text mb-10">Experience</h2>
    <div className="space-y-6">
      {roles.map((role, i) => (
        <motion.div
          key={role.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className={`surface-card accent-card p-8 md:p-10 ${accentFor(i + 4)}`}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <div>
              <h3 className="text-2xl font-semibold">{role.company}</h3>
              <p className="accent-text font-semibold">{role.title}</p>
            </div>
            <span className="text-sm text-muted-foreground">{role.period}</span>
          </div>
          <ul className="space-y-3">
            {role.points.map((point) => (
              <li key={point} className="flex gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full accent-fill" />
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
