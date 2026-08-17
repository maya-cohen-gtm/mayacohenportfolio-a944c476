import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, type ProjectLink, type ProjectSection } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { accentFor, accentForKey } from "@/lib/accents";
import React from "react";
import { Starburst, Asterisk, Checker } from "@/components/GenZGraphics";

const renderTextWithLinks = (text: string, links?: ProjectLink[]): React.ReactNode => {
  if (!links || links.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest = -1;
    let matchedLink: ProjectLink | null = null;

    for (const link of links) {
      const idx = remaining.indexOf(link.text);
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        matchedLink = link;
      }
    }

    if (earliest === -1 || !matchedLink) {
      parts.push(remaining);
      break;
    }

    if (earliest > 0) {
      parts.push(remaining.slice(0, earliest));
    }

    parts.push(
      <a
        key={key++}
        href={matchedLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="accent-text font-medium hover:underline"
      >
        {matchedLink.text}
      </a>
    );

    remaining = remaining.slice(earliest + matchedLink.text.length);
  }

  return <>{parts}</>;
};

const renderPressContent = (text: string, links?: ProjectLink[]): React.ReactNode => {
  const result: React.ReactNode[] = [];
  
  // Check if text contains any quotes
  const hasQuotes = text.includes('"');
  
  if (!hasQuotes) {
    return <span>{renderTextWithLinks(text, links)}</span>;
  }

  // Get intro text (before first quote)
  const introMatch = text.match(/^([\s\S]*?)(?=")/);
  if (introMatch && introMatch[1].trim()) {
    result.push(<span key="intro">{renderTextWithLinks(introMatch[1].trim(), links)}</span>);
  }
  
  // Match "quote" attribution pattern
  const quoteRegex = /"([^"]+)"\s*(.+?)(?=\s*"|$)/gs;
  let match;
  let i = 0;
  while ((match = quoteRegex.exec(text)) !== null) {
    const quoteText = match[1];
    const attribution = match[2].trim().replace(/\.$/, '');
    result.push(
      <div key={`quote-${i}`} className="mt-6">
        <span>"{quoteText}"</span>
        <div className="mt-2 italic opacity-60">— {renderTextWithLinks(attribution, links)}</div>
      </div>
    );
    i++;
  }
  
  return <>{result}</>;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const pageAccent = projectIndex >= 0 ? accentFor(projectIndex) : accentForKey(id ?? "");

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-8 accent-orange">
        <span className="label-text mb-4 block">404</span>
        <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tighter mb-6">
          Project not found
        </h1>
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-4 accent-text font-semibold tracking-widest uppercase text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
          <div className="h-px w-12 accent-fill transition-all duration-500 group-hover:w-20" />
        </button>
      </main>
    );
  }

  return (
    <main className={`relative bg-background min-h-screen overflow-hidden ${pageAccent}`}>
      <Starburst className="pointer-events-none absolute top-[55vh] right-[-2rem] w-32 h-32 md:right-[-4rem] md:w-56 md:h-56 text-secondary/70" />
      <Asterisk className="pointer-events-none absolute top-[120vh] left-[-2rem] w-28 h-28 text-primary/50 rotate-12 hidden md:block" />
      <Checker className="pointer-events-none absolute bottom-24 right-8 w-28 h-28 text-brand-blue/60 hidden md:block" />
      {/* Header image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${project.id === "becoming-memoir-launch" ? "object-[center_30%]" : project.id === "pipex-virtual-launch" ? "object-top" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 z-10 flex items-center gap-3 rounded-full bg-card/90 px-5 py-3 accent-text border-2 border-foreground uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="label-text mb-4 block">{project.brand}</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tighter mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-16">
          {(project.sections || [
            { label: "Context", content: project.context },
            { label: "My Role", content: project.role },
            { label: "Impact", content: project.impact },
            ...(project.press ? [{ label: "Press & Recognition", content: project.press }] : []),
          ]).map((section, sIdx) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`border-t border-border pt-8 ${accentFor(projectIndex + sIdx)}`}
            >
              <h2 className="label-text mb-6">{section.label}</h2>
              {section.content && (
                section.label === "Press & Recognition" ? (
                  <div className="text-lg text-foreground/80 leading-relaxed max-w-3xl whitespace-pre-line">
                    {renderPressContent(section.content, project.links)}
                  </div>
                ) : (
                  <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                    {renderTextWithLinks(section.content, project.links)}
                  </p>
                )
              )}
              {section.items && section.items.length > 0 && (
                <ul className="space-y-4 max-w-3xl mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-lg text-foreground/80 leading-relaxed flex gap-3">
                      <span className="accent-text mt-1.5 shrink-0 font-bold">•</span>
                      <span>{renderTextWithLinks(item, project.links)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="label-text mb-8">Gallery</h2>
          <div className={project.id === "pipex-virtual-launch" || project.id === "being-henry-book-tour" ? "columns-1 md:columns-2 lg:columns-3" : project.id === "becoming-memoir-launch" ? "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12" : `grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {project.gallery.map((img, i) => {
              const isPipex = project.id === "pipex-virtual-launch";
              const isHenry = project.id === "being-henry-book-tour";
              const isBecoming = project.id === "becoming-memoir-launch";
              const isHumanitas = project.id === "humanitas-prize-42";
              const isMasonry = isPipex || isHenry;

              return isMasonry ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`overflow-hidden rounded-3xl bg-muted break-inside-avoid mb-4 border-2 border-foreground accent-card ${accentFor(i)}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`overflow-hidden rounded-3xl bg-muted relative border-2 border-foreground accent-card ${accentFor(i)} ${isBecoming ? `${i === 1 || i === 3 ? "lg:col-span-8" : "lg:col-span-4"} h-[380px]` : isHumanitas ? "aspect-video" : "aspect-square"}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    className={`w-full h-full ${isHumanitas ? "object-contain bg-muted" : isBecoming ? (i === 3 ? "object-contain p-4 bg-background" : i === 1 ? "object-cover object-[center_45%]" : "object-cover object-center") : "object-cover"}`}
                    loading="lazy"
                    />
                  </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Back to work */}
      <div className="px-8 md:px-16 py-16 border-t border-border">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-4 accent-text font-semibold tracking-widest uppercase text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
          <div className="h-px w-12 accent-fill transition-all duration-500 group-hover:w-20" />
        </button>
      </div>
    </main>
  );
};

export default ProjectDetail;
