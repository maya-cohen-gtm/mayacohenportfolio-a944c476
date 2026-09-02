import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const NUM = /(\d[\d,]*(?:\.\d+)?)/g;

const formatLike = (template: string, value: number) => {
  const decimals = template.includes(".") ? template.split(".")[1].length : 0;
  const fixed = value.toFixed(decimals);
  if (!template.includes(",")) return fixed;
  const [intPart, dec] = fixed.split(".");
  const withCommas = Number(intPart).toLocaleString("en-US");
  return dec ? `${withCommas}.${dec}` : withCommas;
};

/**
 * Renders a string (e.g. "$21M / 60 days") and counts every numeric token
 * up from zero once the element scrolls into view.
 */
const CountUp = ({ value, duration = 1400 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, duration]);

  const parts = value.split(NUM);

  return (
    <span ref={ref} className="tabular-nums">
      {parts.map((part, i) => {
        if (!NUM.test(part) || !/^\d/.test(part)) return <span key={i}>{part}</span>;
        const target = Number(part.replace(/,/g, ""));
        if (Number.isNaN(target)) return <span key={i}>{part}</span>;
        return <span key={i}>{formatLike(part, target * progress)}</span>;
      })}
    </span>
  );
};

export default CountUp;
