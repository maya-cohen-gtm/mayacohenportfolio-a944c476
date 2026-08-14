import { motion } from "framer-motion";

const clients = [
  "HBO",
  "DreamWorks Animation",
  "Celadon Books",
  "PATTERN Beauty",
  "The Shade Room",
  "Infosys",
  "Humanitas Prize",
];

const LogoStrip = () => (
  <section className="px-8 md:px-16 py-10 border-y border-border bg-background">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-5"
    >
      <p className="label-text">Selected brands &amp; partners</p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {clients.map((client) => (
          <span
            key={client}
            className="text-base md:text-lg font-semibold tracking-tight text-foreground/45"
          >
            {client}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default LogoStrip;
