import { motion } from "framer-motion";
import headshotAsset from "@/assets/headshot.png.asset.json";
import { accentFor } from "@/lib/accents";

const AboutSection = () =>
  <section id="about" className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center border-t border-border accent-green">
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
            src={headshotAsset.url}
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
      <p className="text-lg text-foreground leading-relaxed mb-8">
        Over six years in entertainment and digital marketing, I&rsquo;ve scaled content
        from launch to millions of views. I bridge creative storytelling and business
        rigor &mdash; brand narrative and influencer strategy, backed by performance
        attribution, budget optimization, and ROI tracking. MBA from USC Marshall;
        based in Los Angeles. Currently consulting on content marketing, social, and
        exec comms &mdash; and{" "}
        <a
          href="https://medium.com/@marissacohen"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-text font-semibold hover:underline underline-offset-4"
        >
          writing about it on Medium
        </a>
        .
      </p>
      <div className="divider mb-8" />
      <div className="flex flex-wrap gap-2">
        {["Content & IP Marketing", "Social-First Strategy", "Creator & Influencer Marketing", "Integrated Campaigns", "Paid Media Partnership", "Audience Growth", "PR & Publicity", "Executive Communications", "Marketing Analytics", "GTM Strategy"].map((skill, idx) =>
          <span key={skill} className={`${accentFor(idx)} accent-chip rounded-full px-4 py-2 text-sm font-medium`}>
            {skill}
          </span>
        )}
      </div>
    </motion.div>
  </section>;

export default AboutSection;
