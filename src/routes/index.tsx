import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS, jsonLd, shopNow, WEEKDAYS } from "@/lib/business";
import { DAY_LABELS, t } from "@/lib/copy";
import { useLang } from "@/lib/language";
import { DEPARTMENTS, GALLERY, PRODUCT_SHOTS } from "@/lib/photos";
import { REVIEWS } from "@/lib/reviews";
import { SERVICES } from "@/lib/stock";
import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StockGuide } from "@/components/stock-guide";
import { StickyDock } from "@/components/sticky-dock";

export const Route = createFileRoute("/")({
  component: Home,
});

const REVIEW_PREVIEW = 6;

function Home() {
  const lang = useLang();
  const copy = t(lang);
  const status = shopNow();
  const schema = JSON.stringify(jsonLd());

  return (
    <div id="top" className="relative min-h-dvh bg-fg pb-dock text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        {copy.skip}
      </a>
      <div className="relative z-10">
        <SiteHeader />

        <main id="main">
          <section className="relative px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              <div className="order-2 max-w-xl lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">
                  {copy.kicker}
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold text-primary-fg sm:text-5xl md:text-6xl">
                  {copy.headline}
                </h1>
                <p className="mt-5 text-base leading-relaxed text-primary-fg/85 sm:text-lg">
                  {copy.lede}
                </p>
                <a
                  href="#reviews"
                  className="mt-8 flex w-full items-center gap-2.5 rounded-2xl bg-surface px-4 py-3 text-fg shadow-border"
                >
                  <GoogleG className="size-6 shrink-0" />
                  <span className="font-display text-3xl font-semibold leading-none">{BUSINESS.rating}</span>
                  <GoogleStars count={5} className="flex shrink-0 gap-px" />
                  <span className="truncate text-sm text-muted">
                    {BUSINESS.reviewCount} {copy.reviews}
                  </span>
                </a>
              </div>
              <div className="order-1 max-w-sm lg:order-2 lg:max-w-none">
                {BUSINESS.femaleOwned ? (
                  <p className="mb-3 inline-flex min-h-11 items-center rounded-full bg-signal px-4 text-sm font-bold uppercase tracking-wide text-signal-fg">
                    {copy.owned}
                  </p>
                ) : null}
                <div className="overflow-hidden rounded-lg bg-fg shadow-border ring-1 ring-primary-fg/20">
                  <img
                    src="/images/sign.webp"
                    alt={copy.signAlt}
                    width={680}
                    height={510}
                    fetchPriority="high"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl bg-surface px-4 py-3.5 shadow-border">
              <div className="flex items-center gap-3">
                <img
                  src="/images/pay/snap.webp"
                  alt="SNAP"
                  className="h-12 w-auto outline-none sm:h-14"
                />
                <img
                  src="/images/pay/ebt.svg"
                  alt="EBT"
                  className="h-8 w-auto outline-none sm:h-9"
                />
              </div>
              <ul className="flex items-center gap-1.5 sm:gap-2" aria-label={copy.cards}>
                <li>
                  <img src="/images/pay/visa.svg" alt="Visa" className="h-8 w-auto outline-none sm:h-9" />
                </li>
                <li>
                  <img
                    src="/images/pay/mastercard.svg"
                    alt="Mastercard"
                    className="h-8 w-auto outline-none sm:h-9"
                  />
                </li>
                <li>
                  <img
                    src="/images/pay/amex.webp"
                    alt="American Express"
                    className="h-8 w-8 rounded-md object-cover outline-none sm:h-9 sm:w-9"
                  />
                </li>
                <li>
                  <img
                    src="/images/pay/discover.svg"
                    alt="Discover"
                    className="h-8 w-auto outline-none sm:h-9"
                  />
                </li>
              </ul>
            </div>
          </section>

          <section id="entrance" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="max-w-xl rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{copy.videoTitle}</h2>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-xl bg-fg shadow-border">
                <video
                  className="aspect-video w-full outline-none"
                  src="/videos/entrance-approach.mp4"
                  poster="/images/storefront.webp"
                  controls
                  playsInline
                  preload="metadata"
                />
                <figcaption className="bg-surface px-4 py-3 text-sm font-medium text-fg">
                  {copy.videoApproach}
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl bg-fg shadow-border">
                <video
                  className="aspect-video w-full outline-none"
                  src="/videos/entrance-walkin.mp4"
                  poster="/images/entrance.webp"
                  controls
                  playsInline
                  preload="metadata"
                />
                <figcaption className="bg-surface px-4 py-3 text-sm font-medium text-fg">
                  {copy.videoWalkin}
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div className="rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {BUSINESS.name}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{copy.aboutTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{copy.aboutBody}</p>
            </div>
            <img
              src="/images/storefront.webp"
              alt={GALLERY[0].alt[lang]}
              className="h-full max-h-[28rem] w-full rounded-xl object-cover shadow-border"
            />
          </section>

          <section id="shop" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-xl rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{copy.deptsTitle}</h2>
              <p className="mt-3 text-muted">{copy.deptsLede}</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {DEPARTMENTS.map((dept) => (
                <article
                  key={dept.title}
                  className="overflow-hidden rounded-xl bg-surface/92 shadow-border backdrop-blur-sm"
                >
                  <img src={dept.img} alt={dept.alt[lang]} className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-semibold">{copy[dept.title]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {copy[dept.body]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-16">
              <div className="max-w-xl rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm">
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">{copy.pantryShotsTitle}</h3>
                <p className="mt-3 text-muted">{copy.pantryShotsLede}</p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {PRODUCT_SHOTS.map((photo) => (
                  <li key={photo.src} className="overflow-hidden rounded-xl shadow-border">
                    <img
                      src={photo.src}
                      alt={photo.alt[lang]}
                      className="aspect-[3/4] w-full object-cover object-bottom"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <StockGuide />
          </section>

          <section id="photos" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-xl rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{copy.photosTitle}</h2>
              <p className="mt-3 text-muted">{copy.photosLede}</p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {GALLERY.map((photo) => (
                <li key={photo.src} className="overflow-hidden rounded-xl shadow-border">
                  <img src={photo.src} alt={photo.alt[lang]} className="aspect-square w-full object-cover" />
                </li>
              ))}
            </ul>
          </section>

          <ReviewsBlock />

          <section
            id="hours"
            className="scroll-mt-20 mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2"
          >
            <div className="rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">{copy.hoursLabel}</h2>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    status.open ? "bg-success/15 text-success" : "bg-fg/10 text-muted"
                  }`}
                >
                  {status.open ? copy.openNow : copy.closedNow}
                </span>
              </div>
              <p className="mt-3 text-muted">{copy.hoursNote}</p>
              <ol className="mt-8 divide-y divide-border rounded-lg bg-bg">
                {WEEKDAYS.map((day, i) => (
                  <li key={day} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <span className="text-sm font-medium">{DAY_LABELS[lang][i]}</span>
                    <span className="text-sm tabular-nums text-muted">{copy.hoursRange}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {copy.servicesTitle}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {SERVICES.map((item) => (
                  <li key={item.en} className="rounded-full bg-bg px-3 py-1.5 text-sm text-fg">
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>

            <div id="visit" className="scroll-mt-20 rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm sm:p-8">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{copy.visitTitle}</h2>
              <p className="mt-3 text-muted">{copy.visitBody}</p>
              <img
                src="/images/street.webp"
                alt={GALLERY[1].alt[lang]}
                className="mt-6 w-full rounded-xl object-cover shadow-border"
              />
              <p className="mt-6 flex items-start gap-3 text-sm sm:text-base">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {BUSINESS.street}
                  <br />
                  {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
                </span>
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm sm:text-base">
                <Phone className="size-5 shrink-0 text-primary" />
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={BUSINESS.mapsDirections} target="_blank" rel="noreferrer">
                    <Navigation />
                    {copy.directions}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer">
                    <GoogleG className="size-4" />
                    {copy.readReviews}
                  </a>
                </Button>
              </div>
              <div className="relative mt-8 overflow-hidden rounded-xl shadow-border">
                <iframe
                  title={copy.mapTitle}
                  src={BUSINESS.mapsEmbed}
                  className="h-64 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={BUSINESS.mapsDirections}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-x-3 bottom-3 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg shadow-border"
                >
                  {copy.directions}
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
      <StickyDock />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </div>
  );
}

function ReviewsBlock() {
  const lang = useLang();
  const copy = t(lang);
  const [showAll, setShowAll] = useState(false);
  const featured = REVIEWS[0];
  const rest = REVIEWS.slice(1);
  const visible = showAll ? rest : rest.slice(0, REVIEW_PREVIEW);
  const max = Math.max(...BUSINESS.ratingBreakdown.map((row) => row.count), 1);

  return (
    <section id="reviews" className="scroll-mt-20 bg-surface text-fg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{copy.reviewsOnGoogle}</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold sm:text-4xl">{copy.reviewsTitle}</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="rounded-2xl border border-fg/10 bg-card p-6 text-card-fg sm:p-8">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              <GoogleG className="size-5" />
              Google
            </p>
            <div className="mt-4 flex items-end gap-3">
              <p className="font-display text-6xl font-semibold leading-none sm:text-7xl">{BUSINESS.rating}</p>
              <div className="pb-1">
                <GoogleStars count={5} className="flex gap-0.5" />
                <p className="mt-1 text-sm text-muted">
                  {BUSINESS.reviewCount} {copy.reviews}
                </p>
              </div>
            </div>
            <p className="mt-6 text-xl text-fg">{copy.reviewsPeople}</p>
            <p className="mt-3 border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-fg/80">
              “{featured.quote[lang]}”
              <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-muted">
                {featured.name} · Google
              </span>
            </p>
            <ul className="mt-6 space-y-2">
              {BUSINESS.ratingBreakdown.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-3 tabular-nums text-muted">{row.stars}</span>
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-fg/10">
                    <span
                      className="block h-full rounded-full bg-google"
                      style={{ width: `${(row.count / max) * 100}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.googleWriteReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex min-h-12 items-center justify-center rounded-lg bg-fg px-4 text-center text-sm font-semibold text-primary-fg hover:bg-fg/90"
            >
              {copy.reviewsWrite}
            </a>
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex min-h-11 items-center justify-center text-sm text-primary underline-offset-4 hover:underline"
            >
              {copy.reviewsGoogle}
            </a>
          </div>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {visible.map((review) => (
                <li
                  key={review.name}
                  className="flex flex-col justify-between rounded-xl border border-fg/10 bg-card p-5 text-card-fg"
                >
                  <div>
                    <GoogleStars count={5} className="flex gap-0.5" />
                    <p className="mt-3 text-sm leading-relaxed text-fg/85">
                      “{review.quote[lang]}”
                    </p>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-primary">
                    {review.name}
                  </p>
                </li>
              ))}
            </ul>
            {rest.length > REVIEW_PREVIEW ? (
              <button
                type="button"
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl border border-fg/15 bg-card text-sm font-semibold text-fg hover:border-fg/30"
                onClick={() => setShowAll((open) => !open)}
              >
                {showAll ? copy.reviewsLess : copy.reviewsMore}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
