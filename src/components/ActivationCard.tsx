import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Project } from "@/data/projects";

// Per-project crop focus so faces and key text stay in frame when filling the block
const CARD_FOCUS: Record<string, string> = {
  "henry-winkler-tiktok": "object-[center_40%]",
  "multiplatform-memoir-launch": "object-center",
  "becoming-memoir-launch": "object-[center_45%]",
  "humanitas-prize-42": "object-[center_35%]",
  "pipex-virtual-launch": "object-center",
};

const ActivationCard = ({ project, accentClass = "accent-orange" }: { project: Project; accentClass?: string }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -8 }}
      className={`group cursor-pointer surface-card accent-card overflow-hidden ${accentClass}`}
      onClick={() => navigate(`/project/${project.id}`)}
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
        <h3 className="text-2xl text-foreground font-semibold">{project.title}</h3>
        <p className="text-muted-foreground mt-3 text-lg">{project.description}</p>
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
