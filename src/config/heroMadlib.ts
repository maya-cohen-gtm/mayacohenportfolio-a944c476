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
    verb: "earn attention on day one",
    verbClass: "bg-brand-yellow",
    noun: "streaming premieres.",
    nounClass: "bg-secondary",
  },
  {
    verb: "amplify talent's real voice",
    verbClass: "bg-secondary",
    noun: "talent-led social.",
    nounClass: "bg-brand-blue text-primary-foreground",
  },
  {
    verb: "turn superfans into opening-weekend numbers",
    verbClass: "bg-brand-green text-primary-foreground",
    noun: "premium IP.",
    nounClass: "bg-brand-yellow",
  },
  {
    verb: "build storytelling-rich campaigns",
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
    verb: "grow communities that keep showing up",
    verbClass: "bg-brand-yellow",
    noun: "fandom-led brands.",
    nounClass: "bg-brand-green text-primary-foreground",
  },
  {
    verb: "turn watch data into the next campaign",
    verbClass: "bg-brand-green text-primary-foreground",
    noun: "always-on social.",
    nounClass: "bg-brand-blue text-primary-foreground",
  },
  {
    verb: "make big products land",
    verbClass: "bg-primary text-primary-foreground",
    noun: "global audiences.",
    nounClass: "bg-brand-yellow",
  },
  {
    verb: "sell out launches",
    verbClass: "bg-brand-blue text-primary-foreground",
    noun: "global IP.",
    nounClass: "bg-secondary",
  },
  {
    verb: "make premium storytelling unmissable",
    verbClass: "bg-secondary",
    noun: "audiences who lean in and subscribe.",
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
  verb: "build storytelling-rich campaigns",
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
