import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const routes = [
  {
    greeting: "Hi, I'm hiring for",
    label: "Social",
    detail: "Talent-led short-form, always-on channel growth, and the numbers behind them.",
    cta: "See social work",
    accent: "accent-orange",
    to: "/?tag=Social%20Media#work",
  },
  {
    greeting: "Hi, I'm hiring for",
    label: "Exec Comms",
    detail: "Executive voice, enterprise launches, and communications for matrixed orgs.",
    cta: "See comms work",
    accent: "accent-blue",
    to: "/?tag=Executive%20Comms#work",
  },
  {
    greeting: "Hi, I'm",
    label: "Just Curious",
    detail: "Full campaign case studies, how I operate, and what I actually believe.",
    cta: "Start anywhere",
    accent: "accent-yellow",
    to: "/#work",
  },
] as const;

const AudienceRouter = () => {
  const navigate = useNavigate();

  const go = (to: string) => {
    navigate(to);
    if (to === "/#work") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="start-here" className="relative overflow-hidden section-x py-24">
      <h2 className="label-text mb-10">Start Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map((route, i) => (
          <motion.button
            key={route.label}
            type="button"
            onClick={() => go(route.to)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`surface-card accent-card p-8 text-left cursor-pointer transition-transform hover:-translate-y-1 ${route.accent}`}
          >
            <span className="accent-fill mb-5 block h-2 w-14" />
            <span className="label-text text-muted-foreground block mb-2">{route.greeting}</span>
            <h3 className="type-h3 accent-text mb-3">{route.label}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{route.detail}</p>
            <span className="type-cta inline-flex items-center gap-3 text-foreground">
              {route.cta}
              <span className="h-px w-8 bg-foreground" />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default AudienceRouter;
