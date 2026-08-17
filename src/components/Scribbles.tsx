/** Decorative hand-drawn scribble shapes used behind the hero. */
const stroke = {
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Scribbles = () => (
  <>
    {/* top-left loops */}
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className="pointer-events-none absolute -top-16 -left-16 w-[22rem] h-[22rem] text-secondary"
    >
      <path
        d="M20 150c30-40 10-70 40-90s60 10 50 45-55 40-45 5 60-40 85-5"
        stroke="currentColor"
        strokeWidth={14}
        {...stroke}
      />
    </svg>

    {/* top squiggle */}
    <svg
      viewBox="0 0 220 120"
      aria-hidden="true"
      className="pointer-events-none absolute -top-6 left-[16rem] w-56 h-32 text-primary hidden md:block"
    >
      <path
        d="M10 90c25-60 45 40 70-20s45 55 70-5 40 20 60-15"
        stroke="currentColor"
        strokeWidth={13}
        {...stroke}
      />
    </svg>

    {/* bottom-right coil */}
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] w-[20rem] h-[20rem] text-brand-yellow"
    >
      <path
        d="M30 40c60-25 110 5 100 55s-90 60-95 15 70-45 85 5c10 33-25 60-60 55"
        stroke="currentColor"
        strokeWidth={15}
        {...stroke}
      />
    </svg>

    {/* bottom-left wave */}
    <svg
      viewBox="0 0 240 120"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[-3rem] left-1/4 w-64 h-32 text-brand-green hidden md:block"
    >
      <path
        d="M10 70c30-50 55 45 85-5s55 45 85-10 40 15 50 5"
        stroke="currentColor"
        strokeWidth={13}
        {...stroke}
      />
    </svg>

    {/* right vertical scribble */}
    <svg
      viewBox="0 0 140 240"
      aria-hidden="true"
      className="pointer-events-none absolute top-4 right-[-4rem] w-48 h-72 text-brand-blue hidden lg:block"
    >
      <path
        d="M70 15c-45 25 40 45 5 75s-55 20-30 55 55 25 45 65"
        stroke="currentColor"
        strokeWidth={14}
        {...stroke}
      />
    </svg>
  </>
);

export default Scribbles;
