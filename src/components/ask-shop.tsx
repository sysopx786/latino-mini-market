import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { ASK_SUGGESTIONS, answerAsk, type AskResult } from "@/lib/ask";
import { t } from "@/lib/copy";
import { useLang } from "@/lib/language";

export function AskShop() {
  const lang = useLang();
  const copy = t(lang);
  const [q, setQ] = useState("");
  const [result, setResult] = useState<AskResult | null>(null);

  useEffect(() => {
    const onAsk = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (!detail) return;
      setQ(detail);
      setResult(answerAsk(detail));
    };
    window.addEventListener("lmm-ask", onAsk as EventListener);
    return () => window.removeEventListener("lmm-ask", onAsk as EventListener);
  }, []);

  function run(value: string) {
    const next = value.trim();
    setQ(next);
    setResult(next ? answerAsk(next) : null);
  }

  return (
    <div id="ask" className="ask-console mt-6 scroll-mt-24 rounded-2xl bg-fg p-4 text-primary-fg sm:p-5">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ask">
        <Sparkles className="size-3.5" aria-hidden />
        {copy.askLabel}
      </p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          run(q);
        }}
      >
        <label className="sr-only" htmlFor="ask-q">
          {copy.askLabel}
        </label>
        <input
          id="ask-q"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (e.target.value.trim().length >= 2) setResult(answerAsk(e.target.value));
            else setResult(null);
          }}
          placeholder={copy.askPlaceholder}
          autoComplete="off"
          className="h-12 min-w-0 flex-1 rounded-xl border-0 bg-primary-fg/10 px-4 text-sm text-primary-fg outline-none ring-1 ring-primary-fg/15 placeholder:text-primary-fg/40 focus:ring-2 focus:ring-ask"
        />
        <button
          type="submit"
          className="inline-flex h-12 shrink-0 items-center gap-1.5 rounded-xl bg-ask px-4 text-sm font-bold text-ask-fg"
        >
          <Sparkles className="size-4" aria-hidden />
          {copy.askGo}
        </button>
      </form>
      <ul className="mt-3 flex flex-wrap gap-2">
        {ASK_SUGGESTIONS[lang].map((s) => (
          <li key={s}>
            <button
              type="button"
              onClick={() => run(s)}
              className="rounded-full bg-primary-fg/10 px-3 py-1.5 text-sm text-primary-fg ring-1 ring-primary-fg/10"
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
      {result ? (
        <div className="mt-4 rounded-xl bg-primary-fg/10 p-4 ring-1 ring-primary-fg/10">
          <p className="text-sm leading-relaxed text-primary-fg">{result.text[lang]}</p>
          {result.items.length ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {result.items.map((item) => (
                <li key={item.name.en} className="rounded-full bg-ask/20 px-3 py-1.5 text-sm text-ask-fg ring-1 ring-ask/40">
                  {item.name[lang]}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : (
        <p className="mt-3 text-sm text-primary-fg/55">{copy.askHint}</p>
      )}
    </div>
  );
}
