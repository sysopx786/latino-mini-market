import { REVIEWS } from "./reviews";

export const BUSINESS = {
  name: "Latino Mini Market",
  legalName: "Alaia Business Corp",
  dba: "LATINO MINI MARKET",
  category: "Supermarket",
  street: "317 Bridge Street",
  city: "Phoenixville",
  region: "PA",
  postalCode: "19460",
  country: "US",
  fullAddress: "317 Bridge Street, Phoenixville, PA 19460",
  phoneDisplay: "(610) 917-8800",
  phoneTel: "+16109178800",
  rating: 4.6,
  reviewCount: 35,
  ratingBreakdown: [
    { stars: 5, count: 25 },
    { stars: 4, count: 7 },
    { stars: 3, count: 2 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ],
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=Latinominimarket+317+Bridge+St+Phoenixville+PA+19460",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=317+Bridge+Street,+Phoenixville,+PA+19460",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-75.5218%2C40.1318%2C-75.5098%2C40.1356&layer=mapnik&marker=40.1336%2C-75.5159",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Latinominimarket+317+Bridge+St+Phoenixville+PA+19460",
  googleWriteReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Latinominimarket+317+Bridge+St+Phoenixville+PA+19460",
  timeZone: "America/New_York",
  openHour: 9,
  closeHour: 21,
  femaleOwned: true,
  acceptsSnap: true,
  acceptsCredit: true,
} as const;

export const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

export function shopNow(date = new Date()): { open: boolean; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BUSINESS.timeZone,
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const now = hour * 60 + minute;
  const open = BUSINESS.openHour * 60;
  const close = BUSINESS.closeHour * 60;
  return { open: now >= open && now < close, minutes: now };
}

export function clockLabel(hour: number) {
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: true }).format(
    new Date(2020, 0, 1, hour, 0),
  );
}

export function getShopStatus(date = new Date()) {
  const { open } = shopNow(date);
  return { open, time: clockLabel(open ? BUSINESS.closeHour : BUSINESS.openHour) };
}

export function jsonLd() {
  const hours = WEEKDAYS.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase()}${day.slice(1)}`,
    opens: "09:00",
    closes: "21:00",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: BUSINESS.name,
    image: "/images/storefront.webp",
    telephone: BUSINESS.phoneTel,
    priceRange: "$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, SNAP EBT",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.1336,
      longitude: -75.5159,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
    },
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.quote.en,
    })),
    openingHoursSpecification: hours,
  };
}
