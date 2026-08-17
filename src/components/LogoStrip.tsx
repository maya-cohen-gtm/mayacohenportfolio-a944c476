import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const clients = [
  "HBO",
  "DreamWorks Animation",
  "Celadon Books",
  "Michelle Obama",
  "Humanitas Prize",
];

const LogoStrip = () => (
  <section className="px-8 md:px-16 py-10 accent-blue band-cream border-b-2 border-foreground">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-5"
    >
      <p className="label-text">Selected brands &amp; partners</p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {clients.map((client, i) => (
          <span
            key={client}
            className={`${accentFor(i)} accent-text text-base md:text-lg font-semibold tracking-tight`}
          >
            {client}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default LogoStrip;
