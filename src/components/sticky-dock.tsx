import { MessageSquare, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { t } from "@/lib/copy";
import { LANG_NAME, LANG_SHORT, otherLangs, setLang, useLang, type Lang } from "@/lib/language";
import { cn } from "@/lib/utils";

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 6" className={cn("shrink-0 rounded-sm", className)} aria-hidden>
      <rect width="9" height="6" fill="#c60b1e" />
      <rect y="1.5" width="9" height="3" fill="#ffc400" />
    </svg>
  );
}

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={cn("shrink-0 rounded-sm", className)} aria-hidden>
      <rect width="19" height="10" fill="#bf0a30" />
      <rect y="1.1" width="19" height="1.1" fill="#fff" />
      <rect y="3.3" width="19" height="1.1" fill="#fff" />
      <rect y="5.5" width="19" height="1.1" fill="#fff" />
      <rect y="7.7" width="19" height="1.1" fill="#fff" />
      <rect width="7.6" height="5.4" fill="#002868" />
    </svg>
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={cn("shrink-0 rounded-sm", className)} aria-hidden>
      <rect width="20" height="14" fill="#009b3a" />
      <polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00" />
      <circle cx="10" cy="7" r="2.5" fill="#002776" />
    </svg>
  );
}

function LangFlag({ lang, className }: { lang: Lang; className?: string }) {
  if (lang === "es") return <SpainFlag className={className} />;
  if (lang === "pt") return <BrazilFlag className={className} />;
  return <UsFlag className={className} />;
}

export function StickyDock() {
  const lang = useLang();
  const copy = t(lang);
  const options = otherLangs(lang);

  return (
    <div data-dock className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-fg/15 bg-fg/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center justify-items-center">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-label={LANG_NAME[option]}
            className="inline-flex size-14 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-signal text-signal-fg shadow-sm hover:bg-signal-hover"
          >
            <LangFlag lang={option} className="h-3.5 w-4" />
            <span className="text-xs font-bold uppercase leading-none tracking-wide">
              {LANG_SHORT[option]}
            </span>
          </button>
        ))}
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          aria-label={`${copy.call} ${BUSINESS.phoneDisplay}`}
          className="inline-flex size-14 items-center justify-center rounded-full bg-call text-call-fg shadow-sm hover:brightness-110"
        >
          <Phone className="size-7" />
        </a>
        <a
          href={`sms:${BUSINESS.phoneTel}`}
          aria-label={`${copy.text} ${BUSINESS.phoneDisplay}`}
          className="inline-flex size-14 items-center justify-center rounded-full bg-sms text-sms-fg shadow-sm hover:brightness-110"
        >
          <MessageSquare className="size-7" />
        </a>
      </div>
    </div>
  );
}
