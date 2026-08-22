import type { Project, ProjectSection } from "@/data/projects";

/**
 * Case study page templates.
 *
 * Each template is an ordered list of blocks. A block maps a heading label to a
 * field on the project (`context`, `role`, `impact`, `press`, ...). Blocks whose
 * source field is empty are skipped automatically, so a template can safely list
 * optional sections like Press.
 *
 * To add a new layout: add a key here and set `template: "<key>"` on the project
 * in src/data/projects.ts. No component changes required.
 */

export type TemplateBlock = {
  /** Heading rendered on the page (also drives the table-of-contents anchor). */
  label: string;
  /** Project field this block reads its prose from. */
  field: "context" | "role" | "impact" | "press";
};

export type CaseStudyTemplate = {
  name: string;
  blocks: TemplateBlock[];
};

export const CASE_STUDY_TEMPLATES = {
  /** Default narrative: what the situation was, what I did, what changed. */
  standard: {
    name: "Standard narrative",
    blocks: [
      { label: "Context", field: "context" },
      { label: "My Role", field: "role" },
      { label: "Impact", field: "impact" },
      { label: "Press & Recognition", field: "press" },
    ],
  },
  /** Leads with results — good for metric-heavy campaigns. */
  outcomeFirst: {
    name: "Outcome first",
    blocks: [
      { label: "Impact", field: "impact" },
      { label: "Context", field: "context" },
      { label: "My Role", field: "role" },
      { label: "Press & Recognition", field: "press" },
    ],
  },
  /** Strips press; useful for internal or confidential work. */
  minimal: {
    name: "Minimal",
    blocks: [
      { label: "Context", field: "context" },
      { label: "My Role", field: "role" },
      { label: "Impact", field: "impact" },
    ],
  },
} satisfies Record<string, CaseStudyTemplate>;

export type CaseStudyTemplateKey = keyof typeof CASE_STUDY_TEMPLATES;

export const DEFAULT_TEMPLATE: CaseStudyTemplateKey = "standard";

/**
 * Resolves the sections rendered on a case study page.
 * Priority: explicit `project.sections` > `project.template` > default template.
 */
export const resolveSections = (project: Project): ProjectSection[] => {
  if (project.sections && project.sections.length > 0) return project.sections;

  const template =
    CASE_STUDY_TEMPLATES[project.template ?? DEFAULT_TEMPLATE] ??
    CASE_STUDY_TEMPLATES[DEFAULT_TEMPLATE];

  return template.blocks
    .map((block) => ({ label: block.label, content: project[block.field] ?? "" }))
    .filter((section) => section.content.trim().length > 0);
};
