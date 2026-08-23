import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, type ProjectLink, type ProjectSection } from "@/data/projects";
import { resolveSections } from "@/config/caseStudyTemplates";
import { ArrowLeft, BookOpen } from "lucide-react";
import { accentFor, accentForKey } from "@/lib/accents";
import React from "react";
import { Starburst, Asterisk, Checker } from "@/components/GenZGraphics";

const slugify = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const useActiveSection = (ids: string[]) => {
  const [active, setActive] = React.useState<string>(ids[0] ?? "");
  React.useEffect(() => {
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids.join("|")]);
  return active;
};

const CaseStudyToc = ({
  items,
  active,
}: {
  items: { id: string; label: string }[];
  active: string;
}) => {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="hidden lg:block lg:sticky lg:top-24 w-48 shrink-0 self-start"
    >
      <span className="type-kicker text-foreground mb-4 block">On This Page</span>
      <ul className="space-y-3 border-l-2 border-foreground/20 pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`type-tag block transition-colors ${
                active === item.id
                  ? "accent-text font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const CaseStudyNav = ({
  items,
  readingMode,
}: {
  items: { id: string; label: string }[];
  readingMode: boolean;
}) => {
  const active = useActiveSection(items.map((i) => i.id));

  const jumpTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <CaseStudyToc items={items} active={active} />
      {readingMode && items.length > 0 && (
        <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 lg:hidden">
          <div className="flex items-center gap-1 rounded-full border-2 border-foreground bg-card/95 px-2 py-2 shadow-lg backdrop-blur">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => jumpTo(item.id)}
                className={`type-tag rounded-full px-3 py-1.5 transition-colors cursor-pointer ${
                  active === item.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};




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
  const [searchParams] = useSearchParams();
  const fromTag = searchParams.get("from");
  const backTo = fromTag ? `/?tag=${encodeURIComponent(fromTag)}#work` : "/#work";
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const pageAccent = projectIndex >= 0 ? accentFor(projectIndex) : accentForKey(id ?? "");
  const [readingMode, setReadingMode] = React.useState(false);


  if (!project) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-8 accent-orange">
        <span className="label-text mb-4 block">404</span>
        <h1 className="type-h1 text-foreground mb-6">
          Project not found
        </h1>
        <button
          onClick={() => navigate(backTo)}
          className="group flex items-center gap-4 accent-text type-cta cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
          <div className="h-px w-12 accent-fill transition-all duration-500 group-hover:w-20" />
        </button>
      </main>
    );
  }

  const allSections: ProjectSection[] = resolveSections(project);
  const FOCUS_LABELS = ["Context", "My Role", "Impact"];
  const sectionList = readingMode
    ? allSections.filter((s) => FOCUS_LABELS.includes(s.label))
    : allSections;

  const tocItems = readingMode
    ? sectionList.map((s) => ({ id: slugify(s.label), label: s.label }))
    : [
        ...(project.problem ? [{ id: "the-challenge", label: "The Challenge" }] : []),
        ...sectionList.map((s) => ({ id: slugify(s.label), label: s.label })),
        ...(project.video ? [{ id: "video", label: project.video.label ?? "Trailer" }] : []),
        ...(project.gallery && project.gallery.length > 0
          ? [{ id: "gallery", label: "Gallery" }]
          : []),
        ...(project.reflection
          ? [{ id: "reflection", label: "What I'd Do Differently" }]
          : []),
      ];


  return (

    <main className={`relative bg-background min-h-screen overflow-x-clip ${pageAccent}`}>
      {!readingMode && (
        <>
          <Starburst className="pointer-events-none absolute top-[55vh] right-[-2rem] w-32 h-32 md:right-[-4rem] md:w-56 md:h-56 text-secondary/70" />
          <Asterisk className="pointer-events-none absolute top-[120vh] left-[-2rem] w-28 h-28 text-primary/50 rotate-12 hidden md:block" />
          <Checker className="pointer-events-none absolute bottom-24 right-8 w-28 h-28 text-brand-blue/60 hidden md:block" />
        </>
      )}

      {/* Header image */}
      <div className="relative aspect-[16/9] md:aspect-auto md:h-[60vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover object-center ${project.id === "becoming-memoir-launch" ? "object-[center_25%] md:object-[center_30%]" : project.id === "pipex-virtual-launch" ? "object-top" : project.id === "henry-winkler-tiktok" ? "object-[35%_30%] md:object-[center_30%]" : ""}`}
        />


        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button
          onClick={() => navigate(backTo)}
          className="absolute top-8 left-8 z-10 flex items-center gap-3 rounded-full bg-card/90 px-5 py-3 accent-text border-2 border-foreground type-cta cursor-pointer hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="type-kicker text-foreground mb-4 block">{project.brand}</span>
          <h1 className="type-h1 text-foreground mb-4">
            {project.title}
          </h1>
          <p className="type-lead text-muted-foreground mb-8 max-w-2xl text-pretty">
            {project.description}
          </p>
          {project.scope && project.scope.length > 0 && !readingMode && (
            <dl className="mb-16 grid grid-cols-2 gap-x-6 gap-y-5 border-y-2 border-foreground py-6 sm:grid-cols-4 max-w-4xl">
              {project.scope.map((s) => (
                <div key={s.label}>
                  <dt className="type-tag text-muted-foreground">{s.label}</dt>
                  <dd className="type-meta mt-1 font-semibold text-foreground text-pretty">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <button
            type="button"
            onClick={() => setReadingMode((v) => !v)}
            aria-pressed={readingMode}
            className="mb-12 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-5 py-2.5 type-cta text-foreground cursor-pointer transition-colors hover:accent-tint focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-foreground/30"
          >
            <BookOpen className="w-4 h-4" />
            <span>{readingMode ? "Exit reading mode" : "Reading mode"}</span>
          </button>
        </motion.div>

        <div className="lg:flex lg:gap-14 lg:items-start">
          <CaseStudyNav items={tocItems} readingMode={readingMode} />


          <div className="min-w-0 flex-1">
        {project.problem && (
          <motion.div
            id="the-challenge"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`scroll-mt-28 mb-16 rounded-2xl border-2 border-foreground accent-tint p-5 md:p-6 max-w-3xl ${accentFor(projectIndex)}`}
          >
            <h2 className="type-tag text-muted-foreground mb-2">The Challenge</h2>
            <p className="type-lead font-semibold text-foreground text-pretty">{project.problem}</p>
          </motion.div>
        )}
        {/* Sections */}
        <div className="space-y-16">
          {sectionList.map((section, sIdx) => (

            <motion.div
              key={section.label}
              id={slugify(section.label)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`scroll-mt-28 border-t border-border pt-8 ${accentFor(projectIndex + sIdx)}`}
            >
              <h2 className="type-kicker text-foreground mb-[clamp(1rem,2vw,1.5rem)]">{section.label}</h2>
              {section.label === "Impact" && project.outcome && (
                <div className="mb-6 max-w-3xl rounded-2xl border-2 border-foreground accent-tint p-5 md:p-6">
                  <span className="type-tag text-muted-foreground block mb-2">Why it mattered to the business</span>
                  <p className="type-lead font-semibold text-foreground text-pretty">{project.outcome}</p>
                </div>
              )}
              {section.content && (
                section.label === "Press & Recognition" ? (
                  <div className="type-lead text-foreground/80 max-w-3xl whitespace-pre-line text-pretty">
                    {renderPressContent(section.content, project.links)}
                  </div>
                ) : (
                  <p className="type-lead text-foreground/80 max-w-3xl text-pretty">
                    {renderTextWithLinks(section.content, project.links)}
                  </p>
                )
              )}
              {section.items && section.items.length > 0 && (
                <ul className="space-y-4 max-w-3xl mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="type-lead text-foreground/80 flex gap-3 text-pretty">
                      <span className="accent-text mt-1.5 shrink-0 font-bold">•</span>
                      <span>{renderTextWithLinks(item, project.links)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Video */}
        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="video"
            className={`scroll-mt-28 mt-24 ${accentFor(projectIndex + 1)}`}
          >
            <h2 className="type-kicker text-foreground mb-[clamp(1.25rem,2.4vw,2rem)]">{project.video.label ?? "Trailer"}</h2>
            <div className="w-full max-w-full overflow-hidden rounded-2xl md:rounded-3xl border-2 border-foreground accent-card bg-muted aspect-video">
              <iframe
                src={project.video.url}
                title={project.video.title}
                className="block w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {project.video.caption && (
              <p className="mt-4 type-meta text-muted-foreground max-w-3xl">{project.video.caption}</p>
            )}
          </motion.div>
        )}

        {/* Gallery */}
        <div id="gallery" className="scroll-mt-28 mt-24">
          <h2 className="type-kicker text-foreground mb-[clamp(1.25rem,2.4vw,2rem)]">Gallery</h2>
          <div className={project.id === "pipex-virtual-launch" || project.id === "multiplatform-memoir-launch" ? "columns-1 md:columns-2 lg:columns-3" : project.id === "becoming-memoir-launch" ? "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-12" : `grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
            {project.gallery.map((item, i) => {
              const img = typeof item === "string" ? item : item.src;
              const href = typeof item === "string" ? undefined : item.href;
              const caption = typeof item === "string" ? undefined : item.caption;
              const alt =
                (typeof item === "string" ? undefined : item.alt) ??
                `${project.title} gallery ${i + 1}`;
              const isPipex = project.id === "pipex-virtual-launch";
              const isHenry = project.id === "multiplatform-memoir-launch";
              const isBecoming = project.id === "becoming-memoir-launch";
              const isHumanitas = project.id === "humanitas-awards-show";
              const isBarryVertical = project.id === "henry-winkler-tiktok" && i < 3;
              const isMasonry = isPipex || isHenry;

              const imgClass = isMasonry
                ? "w-full h-auto object-cover"
                : `w-full h-full ${
                    isHumanitas
                      ? "object-cover object-center"
                      : isBecoming
                      ? i === 3
                        ? "object-contain p-4 bg-background"
                        : "object-cover object-center"
                      : isBarryVertical
                      ? "object-cover object-center"
                      : "object-cover"
                  }`;

              const picture = (
                <img src={img} alt={alt} className={imgClass} loading="lazy" />
              );

              const media = href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={caption ? `${caption} (opens in a new tab)` : alt}
                  className="block w-full h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-foreground/40 transition-transform duration-300 hover:scale-[1.02]"
                >
                  {picture}
                </a>
              ) : (
                picture
              );

              const wrapperClass = isMasonry
                ? `overflow-hidden rounded-3xl bg-muted border-2 border-foreground accent-card ${accentFor(i)}`
                : `overflow-hidden rounded-3xl bg-muted relative border-2 border-foreground accent-card ${accentFor(i)} ${
                    isBecoming
                      ? "aspect-[4/3] md:aspect-auto md:h-[380px]"
                      : isHumanitas
                      ? "aspect-video"
                      : isBarryVertical
                      ? "aspect-[3/4]"
                      : "aspect-square"
                  }`;

              return (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={
                    isMasonry
                      ? "break-inside-avoid mb-4"
                      : isBecoming
                      ? i === 1 || i === 3
                        ? "lg:col-span-8"
                        : "lg:col-span-4"
                      : ""
                  }
                >

                  <div className={wrapperClass}>{media}</div>
                  {caption && (
                    <figcaption className="mt-2 type-meta text-muted-foreground">
                      {caption}
                    </figcaption>
                  )}
                </motion.figure>
              );
            })}

          </div>
        </div>

        {project.reflection && (
          <motion.div
            id="reflection"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`scroll-mt-28 mt-24 border-t-2 border-foreground pt-8 max-w-3xl ${accentFor(projectIndex + 2)}`}
          >
            <h2 className="type-kicker text-foreground mb-[clamp(1rem,2vw,1.5rem)]">What I'd Do Differently</h2>
            <p className="type-lead text-foreground/80 text-pretty">{project.reflection}</p>
          </motion.div>
        )}
          </div>
        </div>
      </div>


      {/* Back to work */}
      <div className="px-8 md:px-16 py-16 border-t border-border">
        <button
          onClick={() => navigate(backTo)}
          className="group flex items-center gap-4 accent-text type-cta cursor-pointer"
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
