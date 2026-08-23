

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
  <section className="px-8 md:px-16 py-14 md:py-16 bg-foreground text-background overflow-hidden">
    <span className="mono-meta opacity-60 block mb-6">Selected partners</span>
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
      {clients.map((client, i) => (
        <span key={client} className="flex items-baseline gap-6">
          {i > 0 && (
            <span
              aria-hidden
              className={`${SEP_COLORS[(i - 1) % 3]} text-xl md:text-3xl font-black leading-none`}
            >
              /
            </span>
          )}
          <span className="text-xl md:text-3xl font-bold tracking-tight leading-tight">
            {client}
          </span>
        </span>
      ))}
    </div>
  </section>
);

export default LogoStrip;
