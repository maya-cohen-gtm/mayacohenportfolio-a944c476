import { useState } from "react";
import { projects, filterTags } from "@/data/projects";
import ActivationCard from "./ActivationCard";

const ActivationGrid = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tag === activeTag);

  return (
    <section id="work" className="py-24 px-8 md:px-16 bg-background">
      <div className="flex flex-wrap gap-3 mb-16">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer ${
              activeTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((project) => (
          <ActivationCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ActivationGrid;
