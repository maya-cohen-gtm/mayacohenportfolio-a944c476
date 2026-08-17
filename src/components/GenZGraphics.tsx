/**
 * Gen Z graphic vocabulary — flat, hard-edged SVG shapes used as decoration.
 * All shapes inherit color via `currentColor`, so they respect the brand palette.
 */

type ShapeProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const Starburst = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M50 0l9.6 27.4L82 9.5 71.2 36.3 100 33l-22.6 17L100 67l-28.8-3.3L82 90.5 59.6 72.6 50 100l-9.6-27.4L18 90.5l10.8-26.8L0 67l22.6-17L0 33l28.8 3.3L18 9.5l22.4 17.9z" />
  </svg>
);

export const Asterisk = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="currentColor">
    <rect x="40" y="0" width="20" height="100" />
    <rect x="40" y="0" width="20" height="100" transform="rotate(60 50 50)" />
    <rect x="40" y="0" width="20" height="100" transform="rotate(120 50 50)" />
  </svg>
);

export const Bolt = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 60 100" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M36 0L0 58h20L14 100 60 36H36L52 0z" />
  </svg>
);

export const ZigZag = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 120 40" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M0 28l20-24 20 24 20-24 20 24 20-24 20 24-8 10-12-14-20 24-20-24-20 24-20-24-8 10z" />
  </svg>
);

export const Flower = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="currentColor">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <ellipse key={deg} cx="50" cy="22" rx="17" ry="22" transform={`rotate(${deg} 50 50)`} />
    ))}
  </svg>
);

export const Blob = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M52 2c22 0 46 12 46 34s-9 30-24 40-30 22-45 14S2 62 2 44 12 16 26 9 38 2 52 2z" />
  </svg>
);

export const Eye = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 120 70" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M60 0C24 0 2 30 0 35c2 5 24 35 60 35s58-30 60-35C118 30 96 0 60 0zm0 54a19 19 0 110-38 19 19 0 010 38z" />
  </svg>
);

export const Checker = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 80 80" className={className} style={style} aria-hidden="true" fill="currentColor">
    {Array.from({ length: 16 }).map((_, i) => {
      const x = i % 4;
      const y = Math.floor(i / 4);
      return (x + y) % 2 === 0 ? (
        <rect key={i} x={x * 20} y={y * 20} width="20" height="20" />
      ) : null;
    })}
  </svg>
);

export const Arrow = ({ className, style }: ShapeProps) => (
  <svg viewBox="0 0 100 60" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M0 22h58V0l42 30-42 30V38H0z" />
  </svg>
);
