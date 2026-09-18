import { useEffect, useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { t } from "@/lib/copy";
import { useLang, type Lang } from "@/lib/language";
import { chipsInPhoto } from "@/lib/ask";
import { GALLERY, GALLERY_AISLES, GALLERY_CLOSEUPS, type Photo } from "@/lib/photos";

function PhotoGrid({
  photos,
  offset,
  lang,
  onOpen,
}: {
  photos: Photo[];
  offset: number;
  lang: Lang;
  onOpen: (index: number) => void;
}) {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, n) => (
        <li key={photo.src}>
          <button
            type="button"
            onClick={() => onOpen(offset + n)}
            className="group flex h-full w-full flex-col overflow-hidden rounded-xl bg-surface text-left text-fg shadow-border outline-none ring-offset-2 ring-offset-fg focus-visible:ring-2 focus-visible:ring-signal"
          >
            <img
              src={photo.src}
              alt={photo.alt[lang]}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover transition duration-200 group-hover:brightness-110"
            />
            <span className="line-clamp-2 min-h-10 px-2.5 py-2 text-xs font-medium leading-snug">
              {photo.alt[lang]}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function Lightbox({
  photos,
  index,
  lang,
  onClose,
  onGo,
}: {
  photos: Photo[];
  index: number;
  lang: Lang;
  onClose: () => void;
  onGo: (next: number) => void;
}) {
  const copy = t(lang);
  const photo = photos[index];
  const startX = useRef<number | null>(null);

  const prev = useCallback(() => onGo((index - 1 + photos.length) % photos.length), [index, onGo, photos.length]);
  const next = useCallback(() => onGo((index + 1) % photos.length), [index, onGo, photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("lightbox-open");
    };
  }, [onClose, prev, next]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid grid-rows-[auto_minmax(0,1fr)_auto] bg-fg md:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] md:grid-rows-[auto_minmax(0,1fr)]"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt[lang]}
    >
      <div className="flex items-center justify-between gap-3 px-3 py-3 md:col-span-2 sm:px-5">
        <p className="text-sm font-medium text-primary-fg/80">
          {index + 1} / {photos.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-11 items-center justify-center rounded-full bg-surface text-fg"
          aria-label={copy.lightboxClose}
        >
          <X className="size-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 items-center justify-center px-12 py-2 sm:px-16"
        onTouchStart={(e) => {
          startX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (startX.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
          if (dx > 50) prev();
          if (dx < -50) next();
          startX.current = null;
        }}
      >
        <button
          type="button"
          onClick={prev}
          className="absolute left-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-signal-fg sm:left-3"
          aria-label={copy.lightboxPrev}
        >
          <ChevronLeft className="size-6" />
        </button>
        <img
          src={photo.src}
          alt={photo.alt[lang]}
          className="max-h-full max-w-full object-contain outline-none"
        />
        <button
          type="button"
          onClick={next}
          className="absolute right-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-signal text-signal-fg sm:right-3"
          aria-label={copy.lightboxNext}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="mx-3 mb-3 max-h-[42vh] overflow-y-auto rounded-xl bg-surface p-4 text-fg md:mx-0 md:mb-5 md:mr-5 md:max-h-none md:self-stretch">
        <p className="font-display text-lg font-semibold leading-snug">{photo.alt[lang]}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{photo.desc[lang]}</p>
        <PhotoChips photo={photo} lang={lang} label={copy.askOnShelf} onClose={onClose} />
      </div>
    </div>
  );
}

function PhotoChips({
  photo,
  lang,
  label,
  onClose,
}: {
  photo: Photo;
  lang: Lang;
  label: string;
  onClose: () => void;
}) {
  const chips = chipsInPhoto(photo);
  if (!chips.length) return null;
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {chips.map((item) => (
          <li key={item.name.en}>
            <button
              type="button"
              className="rounded-full bg-bg px-3 py-1.5 text-xs text-fg"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("lmm-ask", { detail: item.name.en }));
                window.setTimeout(() => document.getElementById("stock")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}
            >
              {item.name[lang]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StorePhotos() {
  const lang = useLang();
  const copy = t(lang);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <h3 className="mt-10 font-display text-2xl font-semibold text-primary-fg">{copy.photosAislesTitle}</h3>
      <PhotoGrid photos={GALLERY_AISLES} offset={0} lang={lang} onOpen={setOpen} />
      <h3 className="mt-12 font-display text-2xl font-semibold text-primary-fg">{copy.photosCloseTitle}</h3>
      <PhotoGrid photos={GALLERY_CLOSEUPS} offset={GALLERY_AISLES.length} lang={lang} onOpen={setOpen} />
      {open !== null ? (
        <Lightbox
          photos={GALLERY}
          index={open}
          lang={lang}
          onClose={() => setOpen(null)}
          onGo={setOpen}
        />
      ) : null}
    </>
  );
}
