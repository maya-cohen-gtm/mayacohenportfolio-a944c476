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
  <section className="px-8 md:px-16 py-10 border-y border-border bg-background accent-blue overflow-hidden">
    <div className="flex flex-col gap-5">
      <p className="label-text">Selected brands &amp; partners</p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {clients.map((client, i) => (
          <span
            key={client}
            className={`${accentFor(i)} accent-text text-base md:text-lg font-semibold tracking-tight`}
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoStrip;
