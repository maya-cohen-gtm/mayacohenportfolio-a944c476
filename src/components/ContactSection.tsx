import { motion } from "framer-motion";

const ContactSection = () => (
  <footer id="contact" className="relative overflow-hidden section-y-lg section-x text-center border-t border-border pastel-bg accent-orange">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 type-h1 text-foreground space-heading"
    >
      Let's Connect
    </motion.h2>

    <p className="relative z-10 type-lead text-muted-foreground max-w-xl mx-auto space-lead text-pretty">
      Los Angeles based, and happiest launching content people actually talk about &mdash;
      shows, IP, creators, streaming. If that&rsquo;s the campaign you&rsquo;re hiring for,
      I&rsquo;d love to hear about it.

    </p>
    <div className="relative z-10 flex flex-wrap justify-center stack-grid">

      <a
        href="mailto:marissadcohen@gmail.com"
        className="rounded-full border border-border bg-primary text-primary-foreground px-8 py-4 type-cta transition-transform hover:-translate-y-0.5"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/mayadcohen/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-border bg-brand-blue text-primary-foreground px-8 py-4 type-cta transition-transform hover:-translate-y-0.5"
      >
        LinkedIn
      </a>

    </div>
  </footer>
);

export default ContactSection;
