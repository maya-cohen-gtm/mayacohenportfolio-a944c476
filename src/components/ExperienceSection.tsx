import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const roles = [
  {
    company: "Fair Dinkum Productions",
    title: "Chief of Staff — Henry Winkler (The Fonz)",
    period: "Jul 2022 – Jun 2023",
    points: [
      "Owned marketing strategy and execution across content launches, owned social channels, studio marketing, and primetime network partnerships.",
      "Adapted legacy IP into short-form built for digital, driving global engagement; partnered with HBO teams on creator marketing for the Barry series finale.",
      "Enabled GTM for Being Henry: The Fonz…and Beyond — 11 weeks on the NYT Bestsellers list.",
      "Grew the owned digital network: Facebook likes +495%, YouTube views +42,425%, subscribers +4,035%, with a social-first content cadence built for younger audiences.",
      "Managed multi-million-dollar brand deals and partnerships alongside an $8M+ creator, influencer, and paid social budget with agencies, publicists, and platform partners.",
      "Project managed press and fan expo circuits across 20+ cities in North America; reported reach, engagement, viewership, and audience growth directly to talent and partner leadership.",
    ],
  },
  {
    company: "DreamWorks Animation",
    title: "Marketing Lead — Trolls: Holiday in Harmony × PipelineX (Cloud Platform)",
    period: "Mar 2020 – Aug 2021",
    points: [
      "Launched Trolls IP onto DreamWorks' new cloud-based production pipeline, enabling simultaneous GTMs for Trolls: Holiday in Harmony and PipelineX.",
      "Drove content production and product development across 9 cross-functional teams under live studio constraints.",
      "Built go-to-market positioning and messaging for a platform serving 3,000+ creatives, including a newsletter with 22,000+ downloads.",
      "Project managed a 70+ page website redesign and the studio's first crowdsourcing campaign (3x industry average in ideas submitted).",
      "Piloted a social collaboration channel to 80%+ adoption; ran the OKR program behind 50%+ of infrastructure priorities.",
    ],
  },
  {
    company: "Joy Mill Entertainment (ABC Signature)",
    title: "Creator & Influencer Marketing",
    period: "Jul 2017 – Dec 2020",
    points: [
      "Built a close, texting-level working relationship with Emmy-winning actress Tracee Ellis Ross (ABC's Black-ish) as a primary talent partner.",
      "Enabled GTM for Michelle Obama's Becoming (100 weeks NYT Bestseller), including a sold-out press appearance at the Kia Forum (18,000 capacity).",
      "Enabled the historic launch of Time's Up, which initiated the #MeToo Movement Fund and raised $21M in just 60 days.",
      "Collaborated with C-suite at SAG-AFTRA plus Tracee Ellis Ross, Natalie Portman, Tessa Thompson, Brie Larson, and Laura Dern.",
      "Wrote executive keynote content for Glamour that drove 5M+ social views; doubled audience in six months through co-marketing with third-party studios, networks, and distribution partners.",
    ],
  },
];


const ExperienceSection = () => (
  <section id="experience" className="relative overflow-hidden px-8 md:px-16 py-24 border-t border-border accent-blue">
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
              <h3 className="type-h3">{role.company}</h3>
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
