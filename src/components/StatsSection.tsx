import { motion } from "framer-motion";

const stats = [
  { value: "3M+", label: "Audience reached across owned talent and entertainment channels" },
  { value: "+42,425%", label: "YouTube view growth in two years on a video-first channel" },
  { value: "$8M+", label: "Annual creator, influencer & paid social budget managed" },
  { value: "$21M / 60 days", label: "Raised through an integrated celebrity-led campaign" },
];


const StatsSection = () => (
  <section className="px-8 md:px-16 py-24">
    <h2 className="label-text mb-10">By the Numbers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="surface-card p-8"
        >
          <div className="text-3xl lg:text-4xl font-semibold gradient-text mb-3">
            {stat.value}
          </div>
          <p className="text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
