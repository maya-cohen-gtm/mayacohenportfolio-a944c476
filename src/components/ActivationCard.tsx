import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Project } from "@/data/projects";

const ActivationCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer surface-card overflow-hidden"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted relative">
        <img
          src={project.cardImage || project.image}
          alt={project.title}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.cardImage ? "object-contain bg-muted" : project.id === "becoming-memoir-launch" ? "object-cover object-[center_35%]" : "object-cover"}`}
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <span className="label-text mb-2 block">{project.brand}</span>
        <h3 className="text-2xl text-foreground font-semibold">{project.title}</h3>
        <p className="text-muted-foreground mt-3 text-lg">{project.description}</p>
        {project.metric && (
          <p className="mt-4 pt-4 border-t border-border text-sm font-semibold text-primary">
            {project.metric}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ActivationCard;
