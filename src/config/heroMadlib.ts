/**
 * Hero madlib phrase pairs.
 *
 * Edit this file to change the rotating hero line:
 *   "Let's <verb> for <noun>"
 *
 * Available color classes (use one per slot):
 *   "bg-primary text-primary-foreground"      → orange
 *   "bg-secondary"                            → pink
 *   "bg-brand-yellow"                         → yellow
 *   "bg-brand-green text-primary-foreground"  → green
 *   "bg-brand-blue text-primary-foreground"   → blue
 *
 * Notes:
 *   - Always end the noun with a period.
 *   - ROTATION_MS controls how long each pair stays on screen.
 */

export type MadlibSlot = {
  verb: string;
  verbClass: string;
  noun: string;
  nounClass: string;
};

/** Desired rotation speed in ms. Clamped to a safe range below. */
const ROTATION_MS_RAW = 3200;

const RAW_SLOTS: MadlibSlot[] = [

  {
    verb: "engage global audiences",
    verbClass: "bg-brand-yellow",
    noun: "premium IP.",
    nounClass: "bg-secondary",
  },
  {
    verb: "turn fandom into reach",
    verbClass: "bg-secondary",
    noun: "talent-led social.",
    nounClass: "bg-brand-blue text-primary-foreground",
  },
  {
    verb: "drive measurable growth",
    verbClass: "bg-brand-green text-primary-foreground",
    noun: "streaming launches.",
    nounClass: "bg-brand-yellow",
  },
  {
    verb: "build story-first campaigns",
    verbClass: "bg-primary text-primary-foreground",
    noun: "creators & studios.",
    nounClass: "bg-brand-green text-primary-foreground",
  },
  {
    verb: "spark culture-first moments",
    verbClass: "bg-secondary",
    noun: "franchise launches.",
    nounClass: "bg-primary text-primary-foreground",
  },
  {
    verb: "grow communities that stick",
    verbClass: "bg-brand-yellow",
    noun: "fandom-led brands.",
    nounClass: "bg-brand-green text-primary-foreground",
  },
  {
    verb: "translate data into ideas",
    verbClass: "bg-brand-green text-primary-foreground",
    noun: "always-on social.",
    nounClass: "bg-brand-blue text-primary-foreground",
  },
  {
    verb: "make big news land",
    verbClass: "bg-primary text-primary-foreground",
    noun: "global audiences.",
    nounClass: "bg-brand-yellow",
  },
  {
    verb: "scale content from launch",
    verbClass: "bg-brand-blue text-primary-foreground",
    noun: "millions of sales worldwide.",
    nounClass: "bg-secondary",
  },
  {
    verb: "connect premium storytelling",
    verbClass: "bg-secondary",
    noun: "audiences who lean in, obsess, subscribe.",
    nounClass: "bg-brand-green text-primary-foreground",
  },
];


/* -------------------------------------------------------------------------
 * Validation & safe fallbacks
 * -----------------------------------------------------------------------*/

/** Color classes that are guaranteed to exist in the design system. */
const ALLOWED_CLASSES = [
  "bg-primary text-primary-foreground",
  "bg-secondary",
  "bg-brand-yellow",
  "bg-brand-green text-primary-foreground",
  "bg-brand-blue text-primary-foreground",
] as const;

const FALLBACK_CLASS = "bg-brand-yellow";

/** Used when the config is empty or every entry is unusable. */
const FALLBACK_SLOT: MadlibSlot = {
  verb: "build story-first campaigns",
  verbClass: "bg-brand-yellow",
  noun: "premium IP.",
  nounClass: "bg-secondary",
};

const MIN_ROTATION_MS = 1200;
const MAX_ROTATION_MS = 20000;

const warn = (message: string) => {
  if (import.meta.env.DEV) console.warn(`[heroMadlib] ${message}`);
};

const safeText = (value: unknown, fallback: string, field: string, index: number) => {
  if (typeof value === "string" && value.trim().length > 0) return value.trim();
  warn(`slot ${index}: missing "${field}" — using fallback text.`);
  return fallback;
};

const safeClass = (value: unknown, field: string, index: number) => {
  if (typeof value === "string" && (ALLOWED_CLASSES as readonly string[]).includes(value.trim())) {
    return value.trim();
  }
  warn(`slot ${index}: "${field}" is not an allowed color class — using ${FALLBACK_CLASS}.`);
  return FALLBACK_CLASS;
};

const sanitizeSlots = (slots: unknown): MadlibSlot[] => {
  if (!Array.isArray(slots) || slots.length === 0) {
    warn("MADLIB_SLOTS is empty or not an array — using a single fallback slot.");
    return [FALLBACK_SLOT];
  }

  const cleaned = slots
    .filter((slot): slot is Record<string, unknown> => !!slot && typeof slot === "object")
    .map((slot, index) => ({
      verb: safeText(slot.verb, FALLBACK_SLOT.verb, "verb", index),
      verbClass: safeClass(slot.verbClass, "verbClass", index),
      noun: safeText(slot.noun, FALLBACK_SLOT.noun, "noun", index),
      nounClass: safeClass(slot.nounClass, "nounClass", index),
    }));

  return cleaned.length > 0 ? cleaned : [FALLBACK_SLOT];
};

const sanitizeRotation = (ms: unknown): number => {
  if (typeof ms !== "number" || !Number.isFinite(ms)) {
    warn("ROTATION_MS is not a finite number — defaulting to 3200ms.");
    return 3200;
  }
  const clamped = Math.min(Math.max(ms, MIN_ROTATION_MS), MAX_ROTATION_MS);
  if (clamped !== ms) warn(`ROTATION_MS clamped to ${clamped}ms.`);
  return clamped;
};

/** Validated slots — always at least one entry with valid text and colors. */
export const MADLIB_SLOTS: MadlibSlot[] = sanitizeSlots(RAW_SLOTS);

/** Validated rotation interval, clamped to 1.2s–20s. */
export const ROTATION_MS: number = sanitizeRotation(ROTATION_MS_RAW);
