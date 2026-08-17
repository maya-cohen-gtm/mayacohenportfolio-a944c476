// Rotating brand accent classes: orange -> pink -> yellow -> green -> blue.
// Each class sets --section-accent (fill/shadow) and --section-accent-ink (readable text).
export const ACCENTS = [
  "accent-orange",
  "accent-pink",
  "accent-yellow",
  "accent-green",
  "accent-blue",
] as const;

export const accentFor = (index: number) => ACCENTS[Math.abs(index) % ACCENTS.length];

export const accentForKey = (key: string) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) | 0;
  return accentFor(hash);
};
