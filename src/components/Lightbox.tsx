import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const Lightbox = ({ items, index, onClose, onIndexChange }: LightboxProps) => {
  const isOpen = index !== null && index >= 0 && index < items.length;

  const go = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, go]);

  const item = isOpen ? items[index as number] : null;

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-foreground/95 p-3 sm:p-6"
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 text-background">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">
              {(index as number) + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close viewer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-background/70 bg-background/10 transition-colors hover:bg-background/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute left-0 z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-background/70 bg-background/10 text-background transition-colors hover:bg-background/25 sm:static"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center"
            >
              {item.type === "video" ? (
                <div className="w-full overflow-hidden rounded-2xl border-2 border-background/70 bg-black aspect-video">
                  <iframe
                    src={item.src}
                    title={item.alt ?? "Video"}
                    className="block h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt ?? ""}
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl border-2 border-background/70 object-contain"
                />
              )}
            </motion.div>

            {items.length > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute right-0 z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-background/70 bg-background/10 text-background transition-colors hover:bg-background/25 sm:static"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>

          {item.caption && (
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-background/80">
              {item.caption}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
