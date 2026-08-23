import { accentFor } from "@/lib/accents";

const clients = [
  "HBO",
  "DreamWorks Animation",
  "ABC Signature",
  "SAG-AFTRA",
  "Kia Forum",
  "Glamour",
  "Humanitas Prize",
];

const LogoStrip = () => (
  <section className="px-8 md:px-16 py-8 bg-foreground text-background overflow-hidden">
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <span className="mono-meta opacity-60">Selected partners:</span>
      {clients.map((client, i) => (
        <span key={client} className="flex items-center gap-6">
          <span className="mono-meta tracking-[0.18em]">{client}</span>
          {i < clients.length - 1 && (
            <span className={`${accentFor(i)} accent-text font-black`}>/</span>
          )}
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
