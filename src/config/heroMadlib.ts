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

export const ROTATION_MS = 3200;

export const MADLIB_SLOTS: MadlibSlot[] = [
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
    verb: "scale executive voice",
    verbClass: "bg-brand-blue text-primary-foreground",
    noun: "the C-suite.",
    nounClass: "bg-secondary",
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
];
