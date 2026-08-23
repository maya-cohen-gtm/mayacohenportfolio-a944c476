import { motion } from "framer-motion";
import { accentFor } from "@/lib/accents";

const clients = [
  "HBO",
  "DreamWorks Animation",
  "ABC Signature",
  "SAG-AFTRA",
  "Kia Forum",
  "Glamour",
  "Humanitas Prize",
];


const LogoStrip = () => (
  <section className="px-8 md:px-16 py-10 border-y border-border bg-background accent-blue overflow-hidden">
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
          <motion.span
            key={client}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.2, 0, 0, 1] }}
            className={`${accentFor(i)} accent-text text-base md:text-lg font-semibold tracking-tight`}
          >
            {client}
          </motion.span>
        ))}
      </div>
    </motion.div>

  </section>
);

export default LogoStrip;
