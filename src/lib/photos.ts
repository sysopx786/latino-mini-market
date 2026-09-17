import type { Lang } from "./language";

export type Photo = {
  src: string;
  alt: Record<Lang, string>;
};

export const DEPARTMENTS = [
  {
    img: "/images/produce.webp",
    title: "produceTitle",
    body: "produceBody",
    alt: {
      en: "Produce and deli case inside Latino Mini Market",
      es: "Vitrina de productos frescos y deli en Latino Mini Market",
      pt: "Vitrine de hortifrúti e deli no Latino Mini Market",
    },
  },
  {
    img: "/images/rice.webp",
    title: "pantryTitle",
    body: "pantryBody",
    alt: {
      en: "Stack of Tio João rice bags on the shop floor",
      es: "Pila de arroz Tio João en el piso de la tienda",
      pt: "Pilha de arroz Tio João no chão da loja",
    },
  },
  {
    img: "/images/meats.webp",
    title: "meatsTitle",
    body: "meatsBody",
    alt: {
      en: "Fresh meat counter at Latino Mini Market",
      es: "Mostrador de carnes frescas en Latino Mini Market",
      pt: "Balcão de carnes frescas no Latino Mini Market",
    },
  },
  {
    img: "/images/suavitel.webp",
    title: "homeTitle",
    body: "homeBody",
    alt: {
      en: "Suavitel fabric softener on the household aisle",
      es: "Suavitel en el pasillo de hogar",
      pt: "Suavitel no corredor de casa",
    },
  },
] as const;

export const PRODUCT_SHOTS: Photo[] = [
  {
    src: "/images/pantry-salsas.webp",
    alt: {
      en: "Goya Naranja Agria, Herdez Salsa Verde, Embasa chipotles, Goya pimientos, and Goya small white beans",
      es: "Goya Naranja Agria, Herdez Salsa Verde, chipotles Embasa, pimientos Goya y habichuelas blancas Goya",
      pt: "Goya Naranja Agria, Herdez Salsa Verde, chipotles Embasa, pimentos Goya e feijão branco Goya",
    },
  },
  {
    src: "/images/pantry-guava.webp",
    alt: {
      en: "Goya Naranja Agria and guava paste, Herdez salsa, Embasa chipotles, Goya white beans, cilantro, limes, garlic, and La Perla achiote",
      es: "Goya Naranja Agria y pasta de guayaba, salsa Herdez, chipotles Embasa, habichuelas Goya, cilantro, limones, ajo y achiote La Perla",
      pt: "Goya Naranja Agria e pasta de goiaba, salsa Herdez, chipotles Embasa, feijão Goya, coentro, limões, alho e urucum La Perla",
    },
  },
  {
    src: "/images/pantry-fideo.webp",
    alt: {
      en: "Cilantro, garlic, tomatoes, limes, dried red chiles, Goya fideo, and Del Maya achiote",
      es: "Cilantro, ajo, tomates, limones, chiles secos, fideo Goya y achiote Del Maya",
      pt: "Coentro, alho, tomates, limões, pimentas secas, fideo Goya e urucum Del Maya",
    },
  },
  {
    src: "/images/pantry-dulce.webp",
    alt: {
      en: "Ibarra Mexican chocolate, Nestlé La Lechera dulce de leche, and Goya guava paste",
      es: "Chocolate Ibarra, Nestlé La Lechera dulce de leche y pasta de guayaba Goya",
      pt: "Chocolate Ibarra, Nestlé La Lechera doce de leite e pasta de goiaba Goya",
    },
  },
  {
    src: "/images/pantry-crema.webp",
    alt: {
      en: "Cacique Crema Mexicana, crumbled queso fresco, and corn tortillas",
      es: "Cacique Crema Mexicana, queso fresco desmoronado y tortillas de maíz",
      pt: "Cacique Crema Mexicana, queijo fresco esfarelado e tortilhas de milho",
    },
  },
];

export const GALLERY: Photo[] = [
  {
    src: "/images/storefront.webp",
    alt: {
      en: "Latino Mini Market storefront on a sunny day",
      es: "Fachada de Latino Mini Market en un día soleado",
      pt: "Fachada do Latino Mini Market num dia de sol",
    },
  },
  {
    src: "/images/street.webp",
    alt: {
      en: "The market on Bridge Street with yellow storefront",
      es: "El mercado en Bridge Street con fachada amarilla",
      pt: "O mercado na Bridge Street com fachada amarela",
    },
  },
  {
    src: "/images/entrance.webp",
    alt: {
      en: "Front door with an OPEN sign, deli and butcher shop",
      es: "Puerta de entrada con letrero de ABIERTO, deli y carnicería",
      pt: "Porta da frente com letreiro ABERTO, deli e talho",
    },
  },
  {
    src: "/images/aisle.webp",
    alt: {
      en: "Snack aisle and drink cooler inside the store",
      es: "Pasillo de botanas y refrigerador de bebidas",
      pt: "Corredor de snacks e frigorífico de bebidas",
    },
  },
  {
    src: "/images/aisle-drinks.webp",
    alt: {
      en: "Aisles of bread, soda, and snacks",
      es: "Pasillos de pan, refrescos y botanas",
      pt: "Corredores de pão, refrigerantes e snacks",
    },
  },
  {
    src: "/images/aisle-carts.webp",
    alt: {
      en: "Shopping carts beside snack racks and cookie boxes",
      es: "Carritos junto a botanas y cajas de galletas",
      pt: "Carrinhos junto a snacks e caixas de bolachas",
    },
  },
  {
    src: "/images/cooler.webp",
    alt: {
      en: "Coca-Cola cooler filled with drinks",
      es: "Refrigerador de Coca-Cola con bebidas",
      pt: "Frigorífico da Coca-Cola com bebidas",
    },
  },
  {
    src: "/images/freezer.webp",
    alt: {
      en: "Ice cream freezer and shopping carts",
      es: "Congelador de helados y carritos",
      pt: "Arca de gelados e carrinhos",
    },
  },
  {
    src: "/images/snacks.webp",
    alt: {
      en: "Rack of Takis, Goya snacks, and chips",
      es: "Estante de Takis, botanas Goya y papas",
      pt: "Prateleira de Takis, snacks Goya e batatas",
    },
  },
  {
    src: "/images/sausage.webp",
    alt: {
      en: "Aurora Brazilian smoked calabresa sausage",
      es: "Linguiça calabresa ahumada Aurora de Brasil",
      pt: "Linguiça calabresa defumada Aurora",
    },
  },
  {
    src: "/images/tapioca.webp",
    alt: {
      en: "Amafil Brazilian tapioca flour",
      es: "Harina de tapioca Amafil de Brasil",
      pt: "Massa para tapioca Amafil",
    },
  },
  {
    src: "/images/rice-bag.webp",
    alt: {
      en: "Tio João long grain white rice on the shelf",
      es: "Arroz blanco Tio João en el estante",
      pt: "Arroz branco Tio João na prateleira",
    },
  },
  {
    src: "/images/peanuts.webp",
    alt: {
      en: "Amafil Brazilian peanuts",
      es: "Cacahuates Amafil de Brasil",
      pt: "Amendoim Amafil",
    },
  },
  {
    src: "/images/soap.webp",
    alt: {
      en: "Phebo rose soap on the household shelf",
      es: "Jabón Phebo de rosas en el estante",
      pt: "Sabonete Phebo odor de rosas",
    },
  },
  {
    src: "/images/molcajete.webp",
    alt: {
      en: "Stone molcajetes shaped like pigs",
      es: "Molcajetes de piedra con forma de puerco",
      pt: "Molcajetes de pedra em forma de porco",
    },
  },
  {
    src: "/images/gel.webp",
    alt: {
      en: "Moco de Gorila hair gel, made in Mexico",
      es: "Gel Moco de Gorila, hecho en México",
      pt: "Gel Moco de Gorila, feito no México",
    },
  },
  {
    src: "/images/stock-jarritos.webp",
    alt: {
      en: "Jarritos sodas on ice — pineapple, lime, mandarin, and more",
      es: "Jarritos en hielo — piña, limón, mandarina y más",
      pt: "Jarritos no gelo — abacaxi, limão, tangerina e mais",
    },
  },
  {
    src: "/images/stock-jarritos-shelf.webp",
    alt: {
      en: "Jarritos bottles on the drink shelf",
      es: "Botellas de Jarritos en el estante de bebidas",
      pt: "Garrafas de Jarritos na prateleira de bebidas",
    },
  },
  {
    src: "/images/stock-pan-dulce.webp",
    alt: {
      en: "Pan dulce — conchas and sweet breads",
      es: "Pan dulce — conchas y panes dulces",
      pt: "Pão doce — conchas e pães doces",
    },
  },
  {
    src: "/images/stock-pao-de-queijo.webp",
    alt: {
      en: "Brazilian pão de queijo",
      es: "Pão de queijo brasileño",
      pt: "Pão de queijo brasileiro",
    },
  },
];
