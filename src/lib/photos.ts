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

export const GALLERY_AISLES: Photo[] = [
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
    src: "/images/aisle-wide.webp",
    alt: {
      en: "Inside the shop — freezer wall, aisles, and charcoal by the butcher",
      es: "Dentro de la tienda — congeladores, pasillos y carbón junto a la carnicería",
      pt: "Dentro da loja — congeladores, corredores e carvão junto ao talho",
    },
  },
  {
    src: "/images/frozen-wall.webp",
    alt: {
      en: "Glass freezer wall with Goya frozen foods, empanadas, and vegetables",
      es: "Pared de congeladores Goya con empanadas y verduras",
      pt: "Parede de congeladores Goya com empadas e vegetais",
    },
  },
  {
    src: "/images/aisle-laundry.webp",
    alt: {
      en: "Laundry aisle with Suavitel, Palmolive, and Goya canned goods",
      es: "Pasillo de lavandería con Suavitel, Palmolive y enlatados Goya",
      pt: "Corredor de lavandaria com Suavitel, Palmolive e conservas Goya",
    },
  },
  {
    src: "/images/aisle-canned.webp",
    alt: {
      en: "Goya canned aisle and prayer candles toward the front door",
      es: "Pasillo de enlatados Goya y veladoras hacia la puerta",
      pt: "Corredor de conservas Goya e velas em direção à porta",
    },
  },
  {
    src: "/images/aisle-juice.webp",
    alt: {
      en: "Juice, soda, snacks, and paper goods along the freezer doors",
      es: "Jugos, refrescos, botanas y desechables junto a los congeladores",
      pt: "Sumos, refrigerantes, snacks e descartáveis junto aos congeladores",
    },
  },
  {
    src: "/images/aisle-pasta.webp",
    alt: {
      en: "Pasta, fideo, Maruchan, and a Sabritas snack rack",
      es: "Pasta, fideo, Maruchan y un rack de Sabritas",
      pt: "Massa, fideo, Maruchan e um expositor de Sabritas",
    },
  },
  {
    src: "/images/aisle-coffee.webp",
    alt: {
      en: "Coffee aisle with Nescafé and Café Santo Domingo, looking toward the meat case",
      es: "Pasillo de café con Nescafé y Café Santo Domingo, hacia la carnicería",
      pt: "Corredor de café com Nescafé e Café Santo Domingo, rumo ao talho",
    },
  },
  {
    src: "/images/drink-coolers.webp",
    alt: {
      en: "Drink coolers with dairy, Gatorade, Coca-Cola, Arizona, and energy drinks",
      es: "Refrigeradores con lácteos, Gatorade, Coca-Cola, Arizona y energéticas",
      pt: "Frigoríficos com laticínios, Gatorade, Coca-Cola, Arizona e energéticos",
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
];

export const GALLERY_CLOSEUPS: Photo[] = [
  {
    src: "/images/produce-case.webp",
    alt: {
      en: "Produce case with plantains, bananas, peppers, oranges, and cabbage",
      es: "Vitrina de frutas y verduras con plátanos, pimientos, naranjas y col",
      pt: "Vitrine de hortifrúti com bananas-da-terra, pimentões, laranjas e couve",
    },
  },
  {
    src: "/images/butcher-wide.webp",
    alt: {
      en: "Full butcher counter with fresh cuts, Goya bags, and charcoal",
      es: "Carnicería completa con cortes frescos, sacos Goya y carbón",
      pt: "Talho completo com cortes frescos, sacos Goya e carvão",
    },
  },
  {
    src: "/images/deli-dietz.webp",
    alt: {
      en: "Dietz & Watson deli case with packaged meats and sausages",
      es: "Vitrina Dietz & Watson con fiambres y salchichas",
      pt: "Vitrine Dietz & Watson com fiambre e salsichas",
    },
  },
  {
    src: "/images/frozen-goya.webp",
    alt: {
      en: "Goya frozen tostones, beef empanadas, banana leaves, and yuca",
      es: "Tostones, empanadas de res, hojas de plátano y yuca Goya congelados",
      pt: "Tostones, empadas de carne, folhas de bananeira e aipim Goya congelados",
    },
  },
  {
    src: "/images/aisle-spices.webp",
    alt: {
      en: "Spice aisle with Sazón Goya, adobo, cinnamon, and teas",
      es: "Pasillo de especias con Sazón Goya, adobo, canela e infusiones",
      pt: "Corredor de especiarias com Sazón Goya, adobo, canela e chás",
    },
  },
  {
    src: "/images/aisle-sauces.webp",
    alt: {
      en: "Oils, Goya vinegar, Herdez salsas, and hot sauces",
      es: "Aceites, vinagre Goya, salsas Herdez y salsas picantes",
      pt: "Óleos, vinagre Goya, molhos Herdez e pimentas",
    },
  },
  {
    src: "/images/candles-aisle.webp",
    alt: {
      en: "Household endcap with prayer candles, Raid, and charcoal",
      es: "Cabecera con veladoras, Raid y carbón",
      pt: "Expositor com velas, Raid e carvão",
    },
  },
  {
    src: "/images/candles.webp",
    alt: {
      en: "Prayer candles, air fresheners, and charcoal on the household shelf",
      es: "Veladoras, aromatizantes y carbón en el estante de hogar",
      pt: "Velas, ambientadores e carvão na prateleira de casa",
    },
  },
  {
    src: "/images/molcajetes.webp",
    alt: {
      en: "Lava-stone molcajetes on the kitchen shelf",
      es: "Molcajetes de piedra volcánica en el estante de cocina",
      pt: "Molcajetes de pedra vulcânica na prateleira da cozinha",
    },
  },
  {
    src: "/images/steamer-pots.webp",
    alt: {
      en: "Mi Pueblo aluminum steamer pots",
      es: "Vaporeras de aluminio Mi Pueblo",
      pt: "Panelas a vapor de alumínio Mi Pueblo",
    },
  },
  {
    src: "/images/pharmacy.webp",
    alt: {
      en: "Pharmacy shelf with Tabcin, Advil, Vicks, and neighborhood remedies",
      es: "Estante de farmacia con Tabcin, Advil, Vicks y remedios del barrio",
      pt: "Prateleira de farmácia com Tabcin, Advil, Vicks e remédios do bairro",
    },
  },
  {
    src: "/images/tostadas.webp",
    alt: {
      en: "El Milagro homemade corn tostadas",
      es: "Tostadas de maíz caseras El Milagro",
      pt: "Tostadas de milho caseiras El Milagro",
    },
  },
  {
    src: "/images/rice-shelf.webp",
    alt: {
      en: "Tio João, Canilla, and Goya rice bags on the shelf",
      es: "Arroz Tio João, Canilla y Goya en el estante",
      pt: "Arroz Tio João, Canilla e Goya na prateleira",
    },
  },
  {
    src: "/images/pantry-mojo.webp",
    alt: {
      en: "Goya mojo, naranja agria, Herdez salsa, and cooking oils",
      es: "Mojo Goya, naranja agria, salsa Herdez y aceites",
      pt: "Mojo Goya, naranja agria, molho Herdez e óleos",
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

export const GALLERY: Photo[] = [...GALLERY_AISLES, ...GALLERY_CLOSEUPS];
