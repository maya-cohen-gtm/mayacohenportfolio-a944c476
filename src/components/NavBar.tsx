import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-16 h-14 transition-colors duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <a href="/" className="text-primary font-semibold text-lg tracking-tight">
        MC
      </a>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        {[
          { label: "Work", id: "work" },
          { label: "Words", id: "words" },
          { label: "Connect", id: "contact" },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
