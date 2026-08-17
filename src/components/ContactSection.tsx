import { motion } from "framer-motion";
import { Starburst, Checker, Bolt, Flower } from "@/components/GenZGraphics";
import resumeAsset from "@/assets/Marissa-Cohen-Resume.pdf.asset.json";

const ContactSection = () => (
  <footer id="contact" className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16 text-center border-t border-border pastel-bg accent-orange">
    <Flower className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 md:w-64 md:h-64 text-secondary" />
    <Checker className="pointer-events-none absolute bottom-10 right-10 w-28 h-28 text-brand-blue hidden md:block" />
    <Starburst className="pointer-events-none absolute -bottom-12 -right-10 w-36 h-36 md:w-64 md:h-64 text-brand-yellow" />
    <Bolt className="pointer-events-none absolute top-16 right-[18%] w-12 h-20 text-primary hidden md:block rotate-12" />
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-5xl md:text-7xl font-semibold text-foreground mb-12 tracking-tighter"
    >
      Let's Talk
    </motion.h2>

    <p className="relative z-10 text-lg text-muted-foreground max-w-xl mx-auto mb-12">
      Los Angeles based, and happiest launching content people actually talk about &mdash;
      shows, IP, creators, streaming. If that&rsquo;s the campaign you&rsquo;re hiring for,
      I&rsquo;d love to hear about it.

    </p>
    <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6">

      <a
        href="mailto:marissadcohen@gmail.com"
        className="rounded-full bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/mayadcohen/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-brand-blue text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        LinkedIn
      </a>
      <a
        href={resumeAsset.url}
        download
        className="rounded-full bg-brand-yellow text-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        Resume
      </a>
    </div>
  </footer>
);

export default ContactSection;
