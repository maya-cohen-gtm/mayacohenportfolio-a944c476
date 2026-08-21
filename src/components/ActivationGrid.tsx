import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { projects, filterTags } from "@/data/projects";
import ActivationCard from "./ActivationCard";
import { accentFor } from "@/lib/accents";
import { Checker, ZigZag } from "@/components/GenZGraphics";

const ActivationGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tagParam = searchParams.get("tag");
  const activeTag = tagParam && filterTags.includes(tagParam) ? tagParam : "All";

  const setActiveTag = (tag: string) => {
    const next = new URLSearchParams(searchParams);
    if (tag === "All") next.delete("tag");
    else next.set("tag", tag);
    setSearchParams(next, { replace: true });
  };

  // Deep link back into the grid: /?tag=...#work should land on the work section
  useEffect(() => {
    if (tagParam && window.location.hash === "#work") {
      document.getElementById("work")?.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [tagParam]);

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tag === activeTag);


  return (
    <section id="work" className="relative overflow-hidden py-24 px-8 md:px-16 bg-background accent-pink">
      <Checker className="pointer-events-none absolute top-10 right-6 w-16 h-16 md:w-28 md:h-28 text-secondary" />
      <ZigZag className="pointer-events-none absolute bottom-10 left-[-2rem] w-40 h-10 md:w-64 md:h-16 text-brand-green/70" />
      <h2 className="label-text mb-10">Work</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        {filterTags.map((tag, i) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`${accentFor(i)} rounded-full px-5 py-2 type-tag transition-colors cursor-pointer ${
              activeTag === tag
                ? "bg-primary text-primary-foreground border-2 border-foreground"
                : "accent-chip border-2 border-transparent hover:border-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filtered.map((project, i) => (
          <ActivationCard key={project.id} project={project} accentClass={accentFor(i)} />
        ))}
      </div>
    </section>
  );
};

export default ActivationGrid;
