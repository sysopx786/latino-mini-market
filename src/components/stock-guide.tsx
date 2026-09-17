import {
  Beef,
  Cookie,
  CupSoda,
  Flag,
  Leaf,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { STOCK, STOCK_INTRO, type StockCategory } from "@/lib/stock";
import { useLang } from "@/lib/language";

const ICONS: Record<string, LucideIcon> = {
  produce: Leaf,
  meats: Beef,
  pantry: Wheat,
  drinks: CupSoda,
  tortillas: Cookie,
  brazil: Flag,
};

export function StockGuide() {
  const lang = useLang();

  return (
    <div id="stock" className="mt-16 scroll-mt-20">
      <div className="max-w-2xl rounded-xl bg-surface/92 p-6 shadow-border backdrop-blur-sm sm:p-8">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">{STOCK_INTRO.title[lang]}</h3>
        <p className="mt-3 text-muted">{STOCK_INTRO.lede[lang]}</p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {STOCK.map((category) => (
          <StockCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function StockCard({ category }: { category: StockCategory }) {
  const lang = useLang();
  const Icon = ICONS[category.id] ?? Leaf;

  return (
    <article className="rounded-xl bg-surface/92 p-5 shadow-border backdrop-blur-sm sm:p-6">
      <h4 className="flex items-center gap-2.5 font-display text-xl font-semibold">
        <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-4" />
        </span>
        {category.title[lang]}
      </h4>
      <div className="mt-5 space-y-5">
        {category.groups.map((group, i) => (
          <div key={group.heading.en || category.id + i}>
            {group.heading.en ? (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {group.heading[lang]}
              </p>
            ) : null}
            <ul className={`flex flex-wrap gap-2 ${group.heading.en ? "mt-2" : ""}`}>
              {group.items.map((item) => (
                <li key={item.en} className="rounded-full bg-bg px-3 py-1.5 text-sm text-fg">
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
