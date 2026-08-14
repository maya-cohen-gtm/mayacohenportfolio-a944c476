import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const AboutSection = () =>
  <section id="about" className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center border-t border-border">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center">

      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div
          className="absolute -inset-6 rounded-full blur-2xl opacity-70"
          style={{ backgroundImage: 'var(--gradient-primary)' }} />

        <div className="relative w-full h-full rounded-full overflow-hidden bg-card ring-8 ring-card">
          <img
            src={headshot}
            alt="Marissa Cohen professional headshot"
            className="w-full h-full object-cover scale-150" />
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}>

      <h2 className="label-text mb-8">About</h2>
      <p className="text-lg text-foreground leading-relaxed mb-6">
        I'm a social media and executive communications marketer in Los Angeles. As
        Chief of Staff to Henry Winkler, I led executive communications and social
        strategy across a 3M+ follower digital network, growing Facebook likes 495%,
        YouTube views 42,425%, and YouTube subscribers 4,035% in two years, while
        managing an $8M+ annual influencer and social budget.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-6">
        Before that I built the internal comms engine at DreamWorks Animation for
        PipelineX — a weekly campaign to 3,000+ employees, a newsletter with 22,000+
        downloads, and a 70-page website redesign — and launched Michelle Obama's
        <em> Becoming</em> and the #MeToo Movement Fund at Joy Mill Entertainment.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        <strong>USC Marshall MBA</strong> (Dean's List, Forté Fellow) and
        <strong> Swarthmore College</strong> Political Science, 3.9 GPA. VP Marketing
        of Graduate Women in Business, where I drove over 200% social growth.
      </p>
      <div className="divider mb-8" />
      <div className="flex flex-wrap gap-2">
        {["Social Media Strategy", "Executive Communications", "Content Strategy", "Internal Comms", "Event Production", "PR & Publicity", "Marketing Analytics", "GTM Strategy"].map((skill) =>
          <span key={skill} className="rounded-full bg-muted text-foreground/80 px-4 py-2 text-sm">
            {skill}
          </span>
        )}
      </div>
    </motion.div>
  </section>;

export default AboutSection;
