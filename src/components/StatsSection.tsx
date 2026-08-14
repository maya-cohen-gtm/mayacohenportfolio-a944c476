import { motion } from "framer-motion";

const stats = [
  { value: "3M+", label: "Social followers supported across talent channels" },
  { value: "+42,425%", label: "YouTube view growth in two years" },
  { value: "$8M+", label: "Annual influencer & social budget managed" },
  { value: "+200%", label: "Engagement growth from a brand and content overhaul I owned end to end" },
  { value: "22,000+", label: "Downloads of the internal newsletter I launched" },
  { value: "111 weeks", label: "Combined NYT Bestseller run across two memoir launches" },
  { value: "$21M / 60 days", label: "Raised for the #MeToo Movement Fund campaign" },
  { value: "0", label: "Corrections, retractions, or walk-backs across two years of national press" },
];

const StatsSection = () => (
  <section className="px-8 md:px-16 py-24">
    <h2 className="label-text mb-10">By the Numbers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="surface-card p-8"
        >
          <div className="text-4xl font-semibold gradient-text mb-3">{stat.value}</div>
          <p className="text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
