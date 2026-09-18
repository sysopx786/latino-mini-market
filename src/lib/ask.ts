import { BUSINESS, getShopStatus, clockLabel } from "./business";
import type { Lang } from "./language";
import type { Photo } from "./photos";
import { STOCK } from "./stock";

export type StockHit = {
  name: Record<Lang, string>;
  category: Record<Lang, string>;
  categoryId: string;
};

const L = (en: string, es: string, pt: string): Record<Lang, string> => ({ en, es, pt });

export function fold(s: string) {
  return s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9ñáéíóúü\s/-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

let cache: StockHit[] | null = null;
export function allStockItems(): StockHit[] {
  if (cache) return cache;
  const out: StockHit[] = [];
  for (const cat of STOCK) {
    for (const group of cat.groups) {
      for (const item of group.items) {
        out.push({ name: item, category: cat.title, categoryId: cat.id });
      }
    }
  }
  cache = out;
  return out;
}

export function searchStock(q: string): StockHit[] {
  const n = fold(q);
  if (n.length < 2) return [];
  const scored = allStockItems()
    .map((item) => {
      const names = [item.name.en, item.name.es, item.name.pt].map(fold);
      const cat = [item.category.en, item.category.es, item.category.pt].map(fold);
      let score = 0;
      for (const name of names) {
        if (name === n) score = Math.max(score, 100);
        else if (name.startsWith(n)) score = Math.max(score, 80);
        else if (name.includes(n)) score = Math.max(score, 50);
        else if (n.includes(name) && name.length >= 5) score = Math.max(score, 40);
      }
      if (cat.some((c) => c.includes(n))) score = Math.max(score, 20);
      return { item, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const hits: StockHit[] = [];
  for (const row of scored) {
    if (seen.has(row.item.name.en)) continue;
    seen.add(row.item.name.en);
    hits.push(row.item);
    if (hits.length >= 12) break;
  }
  return hits;
}

export function chipsInPhoto(photo: Photo): StockHit[] {
  const hay = fold(
    [photo.alt.en, photo.alt.es, photo.alt.pt, photo.desc.en, photo.desc.es, photo.desc.pt].join(" "),
  );
  const scored = allStockItems()
    .map((item) => {
      let best = 0;
      for (const raw of [item.name.en, item.name.es, item.name.pt]) {
        const n = fold(raw);
        if (n.length >= 4 && hay.includes(n)) best = Math.max(best, n.length);
      }
      return { item, best };
    })
    .filter((x) => x.best >= 4)
    .sort((a, b) => b.best - a.best);
  const seen = new Set<string>();
  const hits: StockHit[] = [];
  for (const row of scored) {
    if (seen.has(row.item.name.en)) continue;
    seen.add(row.item.name.en);
    hits.push(row.item);
    if (hits.length >= 8) break;
  }
  return hits;
}

export type AskResult = {
  text: Record<Lang, string>;
  items: StockHit[];
  href?: string;
};

export function answerAsk(q: string): AskResult {
  const n = fold(q);
  const status = getShopStatus();
  const time = clockLabel(status.open ? BUSINESS.closeHour : BUSINESS.openHour);

  const faq: { keys: string[]; text: Record<Lang, string>; href?: string }[] = [
    {
      keys: ["hour", "horario", "open", "abierto", "aberto", "close", "cerrad", "fechad"],
      href: "#hours",
      text: L(
        status.open
          ? `Open now — we close at ${time}. Nine to nine, every day.`
          : `Closed now — we open at ${time}. Nine to nine, every day.`,
        status.open
          ? `Abierto ahora — cerramos a las ${time}. De nueve a nueve, todos los días.`
          : `Cerrado ahora — abrimos a las ${time}. De nueve a nueve, todos los días.`,
        status.open
          ? `Aberto agora — fechamos às ${time}. Das nove às nove, todos os dias.`
          : `Fechado agora — abrimos às ${time}. Das nove às nove, todos os dias.`,
      ),
    },
    {
      keys: ["ebt", "snap", "food stamp", "estam", "cupones", "vale"],
      href: "#shop",
      text: L(
        "Yes. SNAP / EBT is welcome, plus Visa, Mastercard, Amex, and Discover.",
        "Sí. Aceptamos SNAP / EBT, y también Visa, Mastercard, Amex y Discover.",
        "Sim. Aceitamos SNAP / EBT, e também Visa, Mastercard, Amex e Discover.",
      ),
    },
    {
      keys: ["phone", "call", "llamar", "ligar", "text", "mensaje", "sms", "610"],
      href: `tel:${BUSINESS.phoneTel}`,
      text: L(
        `Call or text ${BUSINESS.phoneDisplay}.`,
        `Llama o manda mensaje al ${BUSINESS.phoneDisplay}.`,
        `Ligue ou mande mensagem para ${BUSINESS.phoneDisplay}.`,
      ),
    },
    {
      keys: ["address", "donde", "onde", "bridge", "phoenix", "parking", "estacion", "estaciona"],
      href: "#visit",
      text: L(
        `${BUSINESS.fullAddress}. Street parking nearby.`,
        `${BUSINESS.fullAddress}. Estacionamiento en la calle cerca.`,
        `${BUSINESS.fullAddress}. Estacionamento na rua por perto.`,
      ),
    },
    {
      keys: ["butcher", "carnicer", "talho", "meat", "carne", "calabresa"],
      href: "#hours",
      text: L(
        "Yes — a butcher in back. Custom cuts if you ask. Brazilian linguica calabresa too.",
        "Sí — carnicería al fondo. Cortes a pedido. También linguiça calabresa de Brasil.",
        "Sim — talho ao fundo. Cortes por encomenda. Também linguiça calabresa do Brasil.",
      ),
    },
    {
      keys: ["remit", "envio", "envío", "western", "money", "dinero", "dinheiro", "transfer"],
      href: "#hours",
      text: L(
        "Money remittances at the counter, plus custom butcher cuts and panadería when we have it.",
        "Envíos de dinero en el mostrador, cortes de carnicería a pedido y panadería cuando hay.",
        "Transferências no balcão, cortes de talho por encomenda e padaria quando houver.",
      ),
    },
    {
      keys: ["woman", "mujer", "mulher", "owned", "dueña"],
      text: L("Woman-owned neighborhood market.", "Mercado del barrio, de mujer.", "Mercado do bairro, de mulher."),
    },
  ];

  for (const row of faq) {
    if (row.keys.some((k) => n.includes(k))) {
      return { text: row.text, items: searchStock(q).slice(0, 6), href: row.href };
    }
  }

  const items = searchStock(q);
  if (items.length) {
    const cat = items[0].category;
    return {
      text: L(
        `On the list — ${items.length} match${items.length === 1 ? "" : "es"} in ${cat.en}. Come by the shop; no prices online.`,
        `En la lista — ${items.length} coincidencia${items.length === 1 ? "" : "s"} en ${cat.es}. Pasa por la tienda; sin precios en línea.`,
        `Na lista — ${items.length} correspondência${items.length === 1 ? "" : "s"} em ${cat.pt}. Venha à loja; sem preços online.`,
      ),
      items,
      href: "#stock",
    };
  }

  return {
    text: L(
      `We didn’t list “${q.trim()}” on the site. Call or text ${BUSINESS.phoneDisplay} — they can check the shelf.`,
      `No tenemos “${q.trim()}” en la lista del sitio. Llama o manda mensaje al ${BUSINESS.phoneDisplay} — ellos revisan el estante.`,
      `Não listámos “${q.trim()}” no site. Ligue ou mande mensagem para ${BUSINESS.phoneDisplay} — eles confirmam na prateleira.`,
    ),
    items: [],
    href: `tel:${BUSINESS.phoneTel}`,
  };
}

export const ASK_SUGGESTIONS: Record<Lang, string[]> = {
  en: ["Hours", "EBT", "Jarritos", "Butcher"],
  es: ["Horario", "EBT", "Jarritos", "Carnicería"],
  pt: ["Horário", "EBT", "Jarritos", "Talho"],
};

export function openAsk(query?: string) {
  document.getElementById("ask")?.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => {
    const input = document.getElementById("ask-q") as HTMLInputElement | null;
    input?.focus();
    if (query) window.dispatchEvent(new CustomEvent("lmm-ask", { detail: query }));
  }, 280);
}
