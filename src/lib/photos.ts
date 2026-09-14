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
];
