import { motion } from "framer-motion";

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
            src="/headshot.png"
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
        Most of my best work has somebody else's name on it. That's the job. For two
        years I was Chief of Staff to Henry Winkler, which meant learning a
        seventy-something legend's cadence well enough that three million people
        couldn't tell where he stopped and I started — and then running the content
        calendar, the owned channels, and an $8M+ creator and influencer budget
        underneath it.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-6">
        The numbers were good (Facebook +495%, YouTube views up from a nearly dormant
        channel to +42,425%, subscribers +4,035%), but the part I'd actually tell you
        about over coffee is what drove them: social-first cutdowns built for the way
        younger audiences actually scroll, creator partnerships that carried a show
        beyond its own fandom, and press timed to the platform moment instead of the
        press release.
      </p>
      <p className="text-lg text-foreground leading-relaxed mb-6">
        I've marketed television (HBO's <em>Barry</em>), a NYT-bestselling memoir across
        15+ markets, and consumer brands with real fandoms. Before that I was at
        DreamWorks Animation, translating a cloud migration into something 3,000 artists
        would willingly read on a Monday, and at Joy Mill Entertainment, where I helped
        launch Michelle Obama's <em>Becoming</em> and the #MeToo Movement Fund.
        Different rooms, same problem: find the true sentence, then get it in front of
        the right audience — and prove it moved something.
      </p>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        <strong>USC Marshall MBA</strong> (Dean's List, Forté Fellow),{" "}
        <strong>Swarthmore College</strong> Political Science. Based in Los Angeles.
        Currently consulting on content marketing, social, and exec comms — and{" "}
        <a
          href="https://medium.com/@marissacohen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline underline-offset-4"
        >
          writing about it on Medium
        </a>
        .
      </p>
      <div className="divider mb-8" />
      <div className="flex flex-wrap gap-2">
        {["Content & IP Marketing", "Social-First Strategy", "Creator & Influencer Marketing", "Integrated Campaigns", "Paid Media Partnership", "Audience Growth", "PR & Publicity", "Executive Communications", "Marketing Analytics", "GTM Strategy"].map((skill) =>
          <span key={skill} className="rounded-full bg-muted text-foreground/80 px-4 py-2 text-sm">
            {skill}
          </span>
        )}
      </div>
    </motion.div>
  </section>;

export default AboutSection;
