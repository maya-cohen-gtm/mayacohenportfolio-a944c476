import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/components/NavBar";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-background min-h-screen accent-orange">
      <NavBar />
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
        <span className="label-text mb-4 block">404</span>
        <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tighter mb-6">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mb-10">
          That link went off script. Let&rsquo;s get you back to the work.
        </p>
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-4 accent-text font-semibold tracking-widest uppercase text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back home</span>
          <div className="h-px w-12 accent-fill transition-all duration-500 group-hover:w-20" />
        </button>
      </section>
    </main>
  );
};

export default NotFound;
