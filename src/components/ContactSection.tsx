import { motion } from "framer-motion";

const ContactSection = () => (
  <footer id="contact" className="py-32 px-8 md:px-16 text-center border-t border-border pastel-bg accent-orange">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-semibold text-foreground mb-12 tracking-tighter"
    >
      Contact
    </motion.h2>
    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
      Los Angeles based, and happiest launching content people actually talk about &mdash;
      shows, IP, creators, streaming. If that&rsquo;s the campaign you&rsquo;re hiring for,
      I&rsquo;d love to hear about it.

    </p>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
        className="rounded-full border border-primary text-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default ContactSection;
