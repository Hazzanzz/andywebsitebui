import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Image as ImageIcon, Play, X } from "lucide-react";
import { PROJECTS, type Media, type Project } from "./projectsData";

function MediaItem({ media, onOpen }: { media: Media; onOpen: () => void }) {
  if (media.type === "video") {
    return (
      <figure className="space-y-2">
        <div className="relative rounded-xl overflow-hidden glass border border-white/10">
          <video
            src={media.src}
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-[60vh] bg-black"
          />
        </div>
        <figcaption className="text-xs text-muted-foreground text-center">
          {media.caption}
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="space-y-2">
      <button
        type="button"
        onClick={onOpen}
        className="group relative w-full rounded-xl overflow-hidden glass border border-white/10 hover:border-[var(--neon-cyan)]/40 transition"
      >
        <img
          src={media.src}
          alt={media.caption}
          loading="lazy"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const fb = t.nextElementSibling as HTMLElement | null;
            if (fb) fb.style.display = "flex";
          }}
          className="w-full max-h-[60vh] object-contain bg-black"
        />
        <div
          className="hidden w-full h-48 items-center justify-center text-xs text-muted-foreground bg-black/60"
          style={{ display: "none" }}
        >
          <ImageIcon className="w-4 h-4 mr-2 opacity-60" /> Media missing — drop the file in
          <code className="mx-1 text-[var(--neon-cyan)]">{media.src}</code>
        </div>
      </button>
      <figcaption className="text-xs text-muted-foreground text-center">
        {media.caption}
      </figcaption>
    </figure>
  );
}

function MediaCarousel({
  items,
  onOpenLightbox,
}: {
  items: Media[];
  onOpenLightbox: (idx: number) => void;
}) {
  const [i, setI] = useState(0);
  if (items.length === 0) return null;
  if (items.length === 1) {
    return <MediaItem media={items[0]} onOpen={() => onOpenLightbox(0)} />;
  }
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  return (
    <div className="space-y-3">
      <div className="relative">
        <MediaItem media={items[i]} onOpen={() => onOpenLightbox(i)} />
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong grid place-items-center hover:bg-[var(--neon-cyan)]/20 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong grid place-items-center hover:bg-[var(--neon-cyan)]/20 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((it, idx) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Go to ${it.caption}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i
                ? "w-8 bg-[var(--neon-cyan)]"
                : "w-3 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center">
        {i + 1} / {items.length}
      </p>
    </div>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: Media[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndex]);
  const m = items[index];
  if (!m) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl grid place-items-center p-4"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 rounded-full glass-strong grid place-items-center hover:bg-white/10"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + items.length) % items.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong grid place-items-center hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % items.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong grid place-items-center hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
      <motion.div
        key={m.src}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-3"
      >
        {m.type === "video" ? (
          <video src={m.src} controls autoPlay className="max-w-[92vw] max-h-[80vh] rounded-xl" />
        ) : (
          <img
            src={m.src}
            alt={m.caption}
            className="max-w-[92vw] max-h-[80vh] object-contain rounded-xl"
          />
        )}
        <p className="text-sm text-white/80 text-center">{m.caption}</p>
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lightbox, setLightbox] = useState<{ items: Media[]; index: number } | null>(null);

  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !lightbox) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, lightbox]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-xl grid place-items-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 10, opacity: 0 }}
        transition={{ type: "spring", damping: 24, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-strong rounded-3xl border border-white/10 shadow-neon"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10 bg-[oklch(0.16_0.03_260/0.85)] backdrop-blur-xl">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-md bg-[var(--neon-cyan)]/15 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30">
                {project.category}
              </span>
              {project.badges.slice(0, 4).map((b) => (
                <span
                  key={b}
                  className="text-[10px] px-2 py-1 rounded-md glass border border-white/10"
                >
                  {b}
                </span>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gradient leading-tight">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 w-10 h-10 rounded-full glass grid place-items-center hover:bg-white/10 transition"
            aria-label="Close project"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-8">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.overview}
          </p>

          {project.sections.map((s, idx) => (
            <section key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg glass-strong grid place-items-center text-xs font-bold text-[var(--neon-cyan)]">
                  {String.fromCharCode(65 + idx)}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{s.title}</h3>
              </div>
              {s.text && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-11">
                  {s.text}
                </p>
              )}
              {s.media && s.media.length > 0 && (
                <div className="pl-0 sm:pl-11">
                  <MediaCarousel
                    items={s.media}
                    onOpenLightbox={(i) => setLightbox({ items: s.media!, index: i })}
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            items={lightbox.items}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onIndex={(i) => setLightbox({ ...lightbox, index: i })}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: () => void;
  index: number;
}) {
  const hasMedia = project.sections.some((s) => s.media && s.media.length > 0);
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="text-left glass rounded-2xl p-6 group relative overflow-hidden border border-white/10 hover:border-[var(--neon-cyan)]/40 transition-all duration-300 cursor-pointer"
    >
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition bg-[var(--neon-blue)]" />
      <div className="absolute inset-0 grid-bg opacity-[0.04] group-hover:opacity-[0.08] transition" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-md bg-[var(--neon-cyan)]/15 text-[var(--neon-cyan)] border border-[var(--neon-cyan)]/30">
            {project.category}
          </span>
          {hasMedia && (
            <span className="text-[10px] inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--neon-amber)]/15 text-[var(--neon-amber)] border border-[var(--neon-amber)]/30">
              <Play className="w-3 h-3" /> Media
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg leading-tight group-hover:text-[var(--neon-cyan)] transition">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.badges.slice(0, 3).map((b) => (
            <span
              key={b}
              className="text-[10px] px-2 py-1 rounded-md glass border border-white/10"
            >
              {b}
            </span>
          ))}
          {project.badges.length > 3 && (
            <span className="text-[10px] px-2 py-1 rounded-md glass border border-white/10 text-muted-foreground">
              +{project.badges.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--neon-cyan)] group-hover:gap-2.5 transition-all">
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.button>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-3">
            Focus Areas
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Projects &amp; Specializations
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Hands-on work across mechatronics, robotics, manufacturing, automotive, 3D printing,
            electrical systems, volunteering and culinary training. Click any card to open the
            full case study.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
