import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, getShopStatus } from "@/lib/business";
import { t } from "@/lib/copy";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";
import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { MarketMark } from "@/components/market-mark";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#shop", key: "navShop" as const },
  { href: "#photos", key: "navPhotos" as const },
  { href: "#reviews", key: "navReviews" as const },
  { href: "#hours", key: "navHours" as const },
  { href: "#visit", key: "navVisit" as const },
];

function StatusTablet({ className }: { className?: string }) {
  const copy = t(useLang());
  const [status, setStatus] = useState(() => getShopStatus());

  useEffect(() => {
    const tick = () => setStatus(getShopStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "status-flash inline-flex h-11 w-fit shrink-0 items-center gap-1.5 rounded-full border-2 border-signal px-2.5 sm:h-12 sm:gap-2 sm:px-3.5",
        status.open ? "bg-signal/20 text-signal" : "bg-signal text-signal-fg",
        className,
      )}
      aria-live="polite"
    >
      <span className="status-dot size-2.5 shrink-0 rounded-full bg-signal sm:size-3" />
      <span className="shrink-0 text-xs font-bold uppercase tracking-wide sm:text-sm">
        {status.open ? copy.open : copy.closed}
      </span>
      <span className="shrink-0 whitespace-nowrap text-xs font-semibold sm:text-sm">
        {status.open ? copy.closesAt : copy.opensAt} {status.time}
      </span>
    </span>
  );
}

export function SiteHeader() {
  const lang = useLang();
  const copy = t(lang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-fg/10 bg-fg/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-3 sm:h-[4.5rem] sm:gap-3 sm:px-6">
        <a href="#top" className="flex min-w-0 shrink items-center gap-2 text-primary-fg">
          <MarketMark className="size-8 shrink-0" />
          <span className="min-w-0 leading-none">
            <span className="block font-display text-sm font-semibold uppercase tracking-wide sm:text-lg">
              Latino Mini
            </span>
            <span className="block text-xs uppercase tracking-widest text-primary-fg/70">Market</span>
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center px-3 text-sm font-medium text-primary-fg/70 transition-colors duration-150 hover:text-primary-fg"
            >
              {copy[link.key]}
            </a>
          ))}
        </nav>

        <StatusTablet className="ml-auto" />

        <a
          href={`tel:${BUSINESS.phoneTel}`}
          aria-label={`${copy.call} ${BUSINESS.phoneDisplay}`}
          className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-call text-call-fg shadow-sm hover:brightness-110 sm:inline-flex"
        >
          <Phone className="size-5" />
        </a>

        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 text-primary-fg hover:bg-primary-fg/10 hover:text-primary-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn("border-t border-primary-fg/10 bg-fg lg:hidden", open && "block")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Menu">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.key === "navReviews"
                  ? "flex min-h-11 items-center gap-2 text-base font-medium text-sms"
                  : "flex min-h-11 items-center text-base font-medium text-primary-fg"
              }
              onClick={() => setOpen(false)}
            >
              {link.key === "navReviews" ? <GoogleG className="size-5 shrink-0" /> : null}
              {copy[link.key]}
              {link.key === "navReviews" ? <GoogleStars count={5} className="ml-1 flex gap-px" /> : null}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="mt-2 flex min-h-11 items-center gap-2 text-base font-medium text-primary-fg"
            onClick={() => setOpen(false)}
          >
            <Phone className="size-4" />
            {copy.callShop} · {BUSINESS.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
