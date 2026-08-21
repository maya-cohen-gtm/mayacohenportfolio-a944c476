import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

const MotionLink = motion.create(Link);

// Per-project crop focus so faces and key text stay in frame when filling the block
const CARD_FOCUS: Record<string, string> = {
  "henry-winkler-tiktok": "object-[center_40%]",
  "multiplatform-memoir-launch": "object-center",
  "becoming-memoir-launch": "object-[center_45%]",
  "humanitas-awards-show": "object-[center_35%]",
  "pipex-virtual-launch": "object-center",
};

const ActivationCard = ({
  project,
  accentClass = "accent-orange",
  filterTag = "All",
}: {
  project: Project;
  accentClass?: string;
  filterTag?: string;
}) => {
  const search = filterTag && filterTag !== "All" ? `?from=${encodeURIComponent(filterTag)}` : "";

  return (
    <MotionLink
      to={`/project/${project.id}${search}`}
      aria-label={`View case study: ${project.title}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -8 }}
      className={`group block cursor-pointer surface-card accent-card overflow-hidden ${accentClass}`}
    >

      <div className="aspect-[16/9] overflow-hidden bg-muted relative">
        <img
          src={project.cardImage || project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${CARD_FOCUS[project.id] ?? "object-center"}`}
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <span className="label-text mb-2 block">{project.brand}</span>
        <h3 className="type-h3 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mt-3 text-lg">{project.description}</p>
        {project.scope && project.scope.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.scope.slice(0, 3).map((s) => (
              <li
                key={s.label}
                className="type-tag rounded-full border-2 border-foreground bg-card px-3 py-1 text-foreground"
              >
                <span className="text-muted-foreground">{s.label}:</span> {s.value}
              </li>
            ))}
          </ul>
        )}
        {project.metric && (
          <p className="mt-4 pt-4 border-t border-border text-sm font-semibold accent-text">
            {project.metric}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ActivationCard;
