import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { t } from "@/lib/copy";
import { useLang } from "@/lib/language";
import { MarketMark } from "@/components/market-mark";

export function SiteFooter() {
  const copy = t(useLang());

  return (
    <footer className="border-t border-border bg-fg text-primary-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <MarketMark className="size-8" />
            <p className="font-display text-lg font-semibold tracking-tight">{BUSINESS.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-fg/70">
            {copy.aboutBody}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-fg/50">
            {copy.navVisit}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {BUSINESS.street}
            <br />
            {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
          </p>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-fg"
          >
            <Phone className="size-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-fg/50">
            {copy.navShop}
          </p>
          <nav className="mt-3 grid gap-1 text-sm" aria-label={copy.navHome}>
            <a className="min-h-11 inline-flex items-center" href="#shop">{copy.navShop}</a>
            <a className="min-h-11 inline-flex items-center" href="#stock">{copy.navStock}</a>
            <a className="min-h-11 inline-flex items-center" href="#photos">{copy.navPhotos}</a>
            <a className="min-h-11 inline-flex items-center" href="#reviews">{copy.navReviews}</a>
            <a className="min-h-11 inline-flex items-center" href="#hours">{copy.navHours}</a>
            <a className="min-h-11 inline-flex items-center" href="#visit">{copy.navVisit}</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-primary-fg/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-primary-fg/50 sm:px-6">
          {copy.copyright}
        </p>
      </div>
    </footer>
  );
}
