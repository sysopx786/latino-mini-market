import type { Lang } from "./language";

export type Review = {
  name: string;
  when: Record<Lang, string>;
  quote: Record<Lang, string>;
};

export const REVIEWS: Review[] = [
  {
    name: "Tania Bradkin",
    when: { en: "10 months ago", es: "hace 10 meses", pt: "há 10 meses" },
    quote: {
      en: "Love this place! Even though I don’t live in Phoenixville, I’ll gladly make the 20-minute drive. Found my beloved paleta de nueces here along with fresh baked goods and great imports. Well priced, the staff is friendly and welcoming, and parking was a breeze. Thank you!",
      es: "¡Me encanta este lugar! Aunque no vivo en Phoenixville, con gusto hago el viaje de 20 minutos. Encontré mi paleta de nueces, pan fresco y muy buenos importados. Buenos precios, el personal es amable y el estacionamiento fácil. ¡Gracias!",
      pt: "Adoro este lugar! Mesmo sem morar em Phoenixville, faço de bom grado os 20 minutos de carro. Encontrei a minha paleta de nueces, pão fresco e ótimos importados. Preços justos, pessoal simpático e estacionamento fácil. Obrigada!",
    },
  },
  {
    name: "CJ",
    when: { en: "2 years ago", es: "hace 2 años", pt: "há 2 anos" },
    quote: {
      en: "They carry a little bit of everything and great Mexican coke products. They even have a butcher with some fresh cuts.",
      es: "Tienen un poco de todo y muy buena Coca mexicana. Hasta hay carnicero con cortes frescos.",
      pt: "Têm um pouco de tudo e ótima Coca mexicana. Até têm talho com cortes frescos.",
    },
  },
  {
    name: "JewlsUncut",
    when: { en: "a year ago", es: "hace un año", pt: "há um ano" },
    quote: {
      en: "This small market was closest to a grocery store I could find to us during our visit on Bridge St. It has some house essentials, fresh fruits & veggies and the Mexican products we were looking for. There is a meat counter in back as well. No frills, limited stock and items but had what we needed for our short stay in town.",
      es: "Este mercado pequeño era el supermercado más cercano en nuestra visita a Bridge St. Tiene lo básico del hogar, frutas y verduras frescas y los productos mexicanos que buscábamos. Hay un mostrador de carnes al fondo. Sin lujos y con inventario limitado, pero tenía lo que necesitábamos.",
      pt: "Este mercado pequeno foi o supermercado mais perto na nossa visita à Bridge St. Tem essenciais de casa, frutas e legumes frescos e os produtos mexicanos que procurávamos. Há um balcão de carnes ao fundo. Sem luxos e com stock limitado, mas tinha o que precisávamos.",
    },
  },
  {
    name: "Tiffany Mann",
    when: { en: "2 years ago", es: "hace 2 años", pt: "há 2 anos" },
    quote: {
      en: "Clean, nice people & great prices.",
      es: "Limpio, gente amable y muy buenos precios.",
      pt: "Limpo, pessoas simpáticas e ótimos preços.",
    },
  },
  {
    name: "Marco Valdez",
    when: { en: "a year ago", es: "hace un año", pt: "há um ano" },
    quote: {
      en: "Very nice minimarket, you can find a little bit of everything and the service is good.",
      es: "Muy buen minimercado, encuentras un poco de todo y el servicio es bueno.",
      pt: "Muito bom minimercado, encontra-se um pouco de tudo e o serviço é bom.",
    },
  },
  {
    name: "Kevin Escalante",
    when: { en: "3 years ago", es: "hace 3 años", pt: "há 3 anos" },
    quote: {
      en: "Variety of products, attentive and friendly staff.",
      es: "Variedad de productos, personal atento y amable.",
      pt: "Variedade de produtos, pessoal atento e simpático.",
    },
  },
  {
    name: "Salvador Garcia",
    when: { en: "4 years ago", es: "hace 4 años", pt: "há 4 anos" },
    quote: {
      en: "They are very friendly to customers.",
      es: "Son muy amables con los clientes.",
      pt: "São muito simpáticos com os clientes.",
    },
  },
  {
    name: "Nomar Camboim",
    when: { en: "8 years ago", es: "hace 8 años", pt: "há 8 anos" },
    quote: {
      en: "Varieties of Spanish products.",
      es: "Variedad de productos hispanos.",
      pt: "Variedades de produtos hispânicos.",
    },
  },
];
