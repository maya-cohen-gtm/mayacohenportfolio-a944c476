

const clients = [
  "HBO",
  "DreamWorks Animation",
  "ABC Signature",
  "SAG-AFTRA",
  "Kia Forum",
  "Glamour",
  "Humanitas Prize",
];

const SEP_COLORS = ["text-[#c90301]", "text-[#fea015]", "text-[#027ffb]"];

const LogoStrip = () => (
  <section className="px-8 md:px-16 py-16 md:py-24 bg-foreground text-background overflow-hidden">
    <span className="mono-meta opacity-60 block mb-8">Selected partners</span>
    <div className="flex flex-wrap items-baseline gap-x-8 gap-y-5">
      {clients.map((client, i) => (
        <span key={client} className="flex items-baseline gap-8">
          <span className="text-xl md:text-3xl font-bold tracking-tight">{client}</span>
          {i < clients.length - 1 && (
            <span className={`${SEP_COLORS[i % 3]} text-xl md:text-3xl font-black`}>
              {client === "SAG-AFTRA" ? "—" : "/"}
            </span>
          )}
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
