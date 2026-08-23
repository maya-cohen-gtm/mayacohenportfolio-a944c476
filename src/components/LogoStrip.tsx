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
  <section className="px-8 md:px-16 py-16 md:py-20 bg-foreground text-background overflow-hidden">
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <span className="mono-meta opacity-60">Selected partners:</span>
      {clients.map((client, i) => (
        <span key={client} className="flex items-center gap-5">
          <span className="mono-meta text-lg md:text-2xl font-bold tracking-[0.14em]">
            {client}
          </span>
          {i < clients.length - 1 && (
            <span className={`${accentFor(i)} accent-text font-black text-lg md:text-2xl`}>
              {client === "SAG-AFTRA" ? "—" : "/"}
            </span>
          )}
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
