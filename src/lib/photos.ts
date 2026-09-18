import type { Lang } from "./language";

const L = (en: string, es: string, pt: string): Record<Lang, string> => ({ en, es, pt });

export type Photo = {
  src: string;
  alt: Record<Lang, string>;
  desc: Record<Lang, string>;
};

export const DEPARTMENTS = [
  {
    img: "/images/produce.webp",
    title: "produceTitle",
    body: "produceBody",
    alt: L(
      "Produce and deli case inside Latino Mini Market",
      "Vitrina de productos frescos y deli en Latino Mini Market",
      "Vitrine de hortifrúti e deli no Latino Mini Market",
    ),
  },
  {
    img: "/images/rice.webp",
    title: "pantryTitle",
    body: "pantryBody",
    alt: L(
      "Stack of Tio João rice bags on the shop floor",
      "Pila de arroz Tio João en el piso de la tienda",
      "Pilha de arroz Tio João no chão da loja",
    ),
  },
  {
    img: "/images/meats.webp",
    title: "meatsTitle",
    body: "meatsBody",
    alt: L(
      "Fresh meat counter at Latino Mini Market",
      "Mostrador de carnes frescas en Latino Mini Market",
      "Balcão de carnes frescas no Latino Mini Market",
    ),
  },
  {
    img: "/images/suavitel.webp",
    title: "homeTitle",
    body: "homeBody",
    alt: L(
      "Suavitel fabric softener on the household aisle",
      "Suavitel en el pasillo de hogar",
      "Suavitel no corredor de casa",
    ),
  },
] as const;

export const PRODUCT_SHOTS: Photo[] = [
  {
    src: "/images/pantry-salsas.webp",
    alt: L(
      "Goya salsas, chipotles, and beans",
      "Salsas Goya, chipotles y habichuelas",
      "Molhos Goya, chipotles e feijão",
    ),
    desc: L(
      "On the counter: Goya Naranja Agria, Herdez Salsa Verde, Embasa chipotles, Goya pimientos, and Goya small white beans.",
      "En el mostrador: Goya Naranja Agria, Herdez Salsa Verde, chipotles Embasa, pimientos Goya y habichuelas blancas Goya.",
      "No balcão: Goya Naranja Agria, Herdez Salsa Verde, chipotles Embasa, pimentos Goya e feijão branco Goya.",
    ),
  },
  {
    src: "/images/pantry-guava.webp",
    alt: L(
      "Guava paste, salsa, limes, and achiote",
      "Pasta de guayaba, salsa, limones y achiote",
      "Pasta de goiaba, salsa, limões e urucum",
    ),
    desc: L(
      "Goya Naranja Agria and guava paste, Herdez salsa, Embasa chipotles, Goya white beans, plus cilantro, limes, garlic, and La Perla achiote.",
      "Goya Naranja Agria y pasta de guayaba, salsa Herdez, chipotles Embasa, habichuelas Goya, cilantro, limones, ajo y achiote La Perla.",
      "Goya Naranja Agria e pasta de goiaba, molho Herdez, chipotles Embasa, feijão Goya, coentro, limões, alho e urucum La Perla.",
    ),
  },
  {
    src: "/images/pantry-fideo.webp",
    alt: L(
      "Cilantro, chiles, fideo, and achiote",
      "Cilantro, chiles, fideo y achiote",
      "Coentro, pimentas, fideo e urucum",
    ),
    desc: L(
      "Fresh cilantro, garlic, tomatoes, and limes with dried red chiles, Goya fideo, and Del Maya achiote.",
      "Cilantro, ajo, tomates y limones frescos con chiles secos, fideo Goya y achiote Del Maya.",
      "Coentro, alho, tomates e limões frescos com pimentas secas, fideo Goya e urucum Del Maya.",
    ),
  },
  {
    src: "/images/pantry-dulce.webp",
    alt: L(
      "Ibarra chocolate and dulce de leche",
      "Chocolate Ibarra y dulce de leche",
      "Chocolate Ibarra e doce de leite",
    ),
    desc: L(
      "Ibarra Mexican chocolate tablets, Nestlé La Lechera dulce de leche, and Goya guava paste.",
      "Tabletas de chocolate Ibarra, Nestlé La Lechera dulce de leche y pasta de guayaba Goya.",
      "Tabletes de chocolate Ibarra, Nestlé La Lechera doce de leite e pasta de goiaba Goya.",
    ),
  },
  {
    src: "/images/pantry-crema.webp",
    alt: L(
      "Crema, queso fresco, and tortillas",
      "Crema, queso fresco y tortillas",
      "Crema, queijo fresco e tortilhas",
    ),
    desc: L(
      "Cacique Crema Mexicana, crumbled queso fresco, and a stack of corn tortillas.",
      "Cacique Crema Mexicana, queso fresco desmoronado y tortillas de maíz.",
      "Cacique Crema Mexicana, queijo fresco esfarelado e uma pilha de tortilhas de milho.",
    ),
  },
];

export const GALLERY_AISLES: Photo[] = [
  {
    src: "/images/storefront.webp",
    alt: L(
      "Latino Mini Market storefront on a sunny day",
      "Fachada de Latino Mini Market en un día soleado",
      "Fachada do Latino Mini Market num dia de sol",
    ),
    desc: L(
      "The Bridge Street storefront. Grocery, deli, and butcher — Hispanic, American, and Brazilian products. SNAP/EBT and (610) 917-8800 on the sign.",
      "La fachada en Bridge Street. Abarrotes, deli y carnicería — productos hispanos, americanos y brasileños. SNAP/EBT y el (610) 917-8800 en el letrero.",
      "A fachada na Bridge Street. Mercearia, deli e talho — produtos hispânicos, americanos e brasileiros. SNAP/EBT e o (610) 917-8800 no letreiro.",
    ),
  },
  {
    src: "/images/street.webp",
    alt: L(
      "The market on Bridge Street with yellow storefront",
      "El mercado en Bridge Street con fachada amarilla",
      "O mercado na Bridge Street com fachada amarela",
    ),
    desc: L(
      "Yellow storefront on Bridge Street in downtown Phoenixville, next to neighboring shops.",
      "Fachada amarilla en Bridge Street, en el centro de Phoenixville, junto a los negocios vecinos.",
      "Fachada amarela na Bridge Street, no centro de Phoenixville, ao lado das lojas vizinhas.",
    ),
  },
  {
    src: "/images/entrance.webp",
    alt: L(
      "Front door with the OPEN sign",
      "Puerta con letrero de ABIERTO",
      "Porta com letreiro ABERTO",
    ),
    desc: L(
      "The walk-in door with the OPEN neon. Glass marked deli and butcher shop.",
      "La puerta de entrada con el letrero de ABIERTO. En el vidrio: deli y carnicería.",
      "A porta de entrada com o letreiro ABERTO. No vidro: deli e talho.",
    ),
  },
  {
    src: "/images/aisle-wide.webp",
    alt: L(
      "Aisles, freezers, and the butcher",
      "Pasillos, congeladores y carnicería",
      "Corredores, congeladores e talho",
    ),
    desc: L(
      "Center aisle toward the butcher. Left: Goya frozen empanadas, spinach, and yuca. Back: Royal Oak charcoal, canned goods, and the meat cases.",
      "Pasillo central hacia la carnicería. Izquierda: empanadas, espinaca y yuca Goya congeladas. Fondo: carbón Royal Oak, enlatados y las vitrinas de carne.",
      "Corredor central rumo ao talho. Esquerda: empadas, espinafre e aipim Goya congelados. Fundo: carvão Royal Oak, conservas e as vitrines de carne.",
    ),
  },
  {
    src: "/images/frozen-wall.webp",
    alt: L(
      "Goya frozen empanadas and vegetables",
      "Empanadas y verduras Goya congeladas",
      "Empadas e vegetais Goya congelados",
    ),
    desc: L(
      "Goya frozen wall: chopped spinach, beef and chicken empanadas, yellow rice, fruit pulp, tostones, ripe plantains, and yuca.",
      "Congeladores Goya: espinaca picada, empanadas de res y pollo, arroz amarillo, pulpa de fruta, tostones, plátano maduro y yuca.",
      "Congeladores Goya: espinafre picado, empadas de carne e frango, arroz amarelo, polpa de fruta, tostones, banana-da-terra madura e aipim.",
    ),
  },
  {
    src: "/images/aisle-laundry.webp",
    alt: L(
      "Suavitel, Palmolive, and Goya cans",
      "Suavitel, Palmolive y enlatados Goya",
      "Suavitel, Palmolive e conservas Goya",
    ),
    desc: L(
      "Palmolive dish soap, Suavitel, Downy, Arm & Hammer, and Fabuloso. Across the aisle: Goya beans, olives, and canned vegetables.",
      "Jabón Palmolive, Suavitel, Downy, Arm & Hammer y Fabuloso. Al otro lado: habichuelas, aceitunas y verduras enlatadas Goya.",
      "Detergente Palmolive, Suavitel, Downy, Arm & Hammer e Fabuloso. Do outro lado: feijão, azeitonas e legumes em lata Goya.",
    ),
  },
  {
    src: "/images/aisle-canned.webp",
    alt: L(
      "Goya beans, olives, and candles",
      "Habichuelas Goya, aceitunas y velas",
      "Feijão Goya, azeitonas e velas",
    ),
    desc: L(
      "Goya canned aisle — beans, chickpeas, olives, and vegetables — with prayer candles toward the front door.",
      "Pasillo de enlatados Goya — habichuelas, garbanzos, aceitunas y verduras — con veladoras hacia la puerta.",
      "Corredor de conservas Goya — feijão, grão-de-bico, azeitonas e legumes — com velas rumo à porta.",
    ),
  },
  {
    src: "/images/aisle-juice.webp",
    alt: L(
      "Juice, soda, and paper goods",
      "Jugos, refrescos y desechables",
      "Sumos, refrigerantes e descartáveis",
    ),
    desc: L(
      "Bottled juices and punch, paper plates and cups, chips, and a soda cooler along the freezer wall.",
      "Jugos y ponche embotellados, platos y vasos desechables, papas y un refrigerador de refrescos junto a los congeladores.",
      "Sumos e punch engarrafados, pratos e copos descartáveis, batatas e um frigorífico de refrigerantes junto aos congeladores.",
    ),
  },
  {
    src: "/images/aisle-pasta.webp",
    alt: L(
      "Pasta, Maruchan, and Sabritas",
      "Pasta, Maruchan y Sabritas",
      "Massa, Maruchan e Sabritas",
    ),
    desc: L(
      "Pasta and fideo, Goya canned vegetables, Maruchan ramen, and a Sabritas rack with Cheetos and Takis.",
      "Pasta y fideo, verduras enlatadas Goya, Maruchan, y un rack de Sabritas con Cheetos y Takis.",
      "Massa e fideo, legumes em lata Goya, Maruchan, e um expositor Sabritas com Cheetos e Takis.",
    ),
  },
  {
    src: "/images/aisle-coffee.webp",
    alt: L(
      "Nescafé and Café Santo Domingo",
      "Nescafé y Café Santo Domingo",
      "Nescafé e Café Santo Domingo",
    ),
    desc: L(
      "Nescafé Clásico, Café Santo Domingo, teas, and boxed mixes. The Dietz & Watson deli and meat case sit at the end of the aisle.",
      "Nescafé Clásico, Café Santo Domingo, tés y mezclas en caja. Al fondo, el deli Dietz & Watson y la vitrina de carnes.",
      "Nescafé Clásico, Café Santo Domingo, chás e misturas em caixa. Ao fundo, o deli Dietz & Watson e a vitrine de carnes.",
    ),
  },
  {
    src: "/images/drink-coolers.webp",
    alt: L(
      "Coke, Gatorade, Arizona, and milk",
      "Coke, Gatorade, Arizona y leche",
      "Coke, Gatorade, Arizona e leite",
    ),
    desc: L(
      "Open coolers: milk and juice, Gatorade, Coca-Cola and Sprite, Arizona teas, and energy drinks. Ice cream freezer on the end.",
      "Refrigeradores abiertos: leche y jugo, Gatorade, Coca-Cola y Sprite, tés Arizona y energéticas. Congelador de helados al extremo.",
      "Frigoríficos abertos: leite e sumo, Gatorade, Coca-Cola e Sprite, chás Arizona e energéticos. Arca de gelados na ponta.",
    ),
  },
  {
    src: "/images/aisle.webp",
    alt: L(
      "Snack aisle and drink cooler inside the store",
      "Pasillo de botanas y refrigerador de bebidas",
      "Corredor de snacks e frigorífico de bebidas",
    ),
    desc: L(
      "Snack racks of chips and cookies facing a glass drink cooler. Shopping carts at the front.",
      "Estantes de papas y galletas frente a un refrigerador de bebidas. Carritos al frente.",
      "Prateleiras de batatas e bolachas em frente a um frigorífico de bebidas. Carrinhos à frente.",
    ),
  },
  {
    src: "/images/aisle-drinks.webp",
    alt: L(
      "Aisles of bread, soda, and snacks",
      "Pasillos de pan, refrescos y botanas",
      "Corredores de pão, refrigerantes e snacks",
    ),
    desc: L(
      "Packaged bread and buns, bottled soda, and snack bags on the gondola toward the yellow front wall.",
      "Pan y bollos empaquetados, refrescos embotellados y bolsas de botanas hacia la pared amarilla del frente.",
      "Pão e pãezinhos embalados, refrigerantes e pacotes de snacks rumo à parede amarela da frente.",
    ),
  },
  {
    src: "/images/aisle-carts.webp",
    alt: L(
      "Shopping carts beside snack racks and cookie boxes",
      "Carritos junto a botanas y cajas de galletas",
      "Carrinhos junto a snacks e caixas de bolachas",
    ),
    desc: L(
      "Hand baskets and carts beside cookie boxes, crackers, and chip bags.",
      "Canastas y carritos junto a cajas de galletas, galletas saladas y bolsas de papas.",
      "Cestos e carrinhos junto a caixas de bolachas, crackers e pacotes de batatas.",
    ),
  },
  {
    src: "/images/cooler.webp",
    alt: L(
      "Coca-Cola cooler filled with drinks",
      "Refrigerador de Coca-Cola con bebidas",
      "Frigorífico da Coca-Cola com bebidas",
    ),
    desc: L(
      "Coca-Cola cooler stocked with Coke, Sprite, Fanta, and other bottled sodas.",
      "Refrigerador de Coca-Cola con Coke, Sprite, Fanta y otros refrescos.",
      "Frigorífico da Coca-Cola com Coke, Sprite, Fanta e outros refrigerantes.",
    ),
  },
  {
    src: "/images/freezer.webp",
    alt: L(
      "Ice cream freezer and shopping carts",
      "Congelador de helados y carritos",
      "Arca de gelados e carrinhos",
    ),
    desc: L(
      "Ice cream freezer by the carts — Magnum bars and other novelties.",
      "Congelador de helados junto a los carritos — Magnum y otros helados.",
      "Arca de gelados junto aos carrinhos — Magnum e outros gelados.",
    ),
  },
  {
    src: "/images/snacks.webp",
    alt: L(
      "Rack of Takis, Goya snacks, and chips",
      "Estante de Takis, botanas Goya y papas",
      "Prateleira de Takis, snacks Goya e batatas",
    ),
    desc: L(
      "Takis Fuego, Goya snack packs, and bagged chips on the wire rack.",
      "Takis Fuego, botanas Goya y papas en bolsa en el rack de alambre.",
      "Takis Fuego, snacks Goya e batatas no expositor de arame.",
    ),
  },
];

export const GALLERY_CLOSEUPS: Photo[] = [
  {
    src: "/images/produce-case.webp",
    alt: L(
      "Plantains, peppers, and produce",
      "Plátanos, pimientos y verduras",
      "Bananas-da-terra e hortifrúti",
    ),
    desc: L(
      "Produce case: plantains, bananas, tomatoes, peppers, oranges, cabbage, onions, and limes. Goya frozen foods in the case behind.",
      "Vitrina: plátanos, bananas, tomates, pimientos, naranjas, col, cebollas y limones. Congelados Goya atrás.",
      "Vitrine: bananas-da-terra, bananas, tomates, pimentões, laranjas, couve, cebolas e limões. Congelados Goya atrás.",
    ),
  },
  {
    src: "/images/butcher-wide.webp",
    alt: L(
      "Butcher counter and charcoal",
      "Carnicería y carbón",
      "Talho e carvão",
    ),
    desc: L(
      "Full butcher counter — fresh beef, pork, and chicken — with Goya rice and beans and Royal Oak charcoal stacked beside the case.",
      "Carnicería completa — res, cerdo y pollo frescos — con arroz y habichuelas Goya y carbón Royal Oak al lado.",
      "Talho completo — vaca, porco e frango frescos — com arroz e feijão Goya e carvão Royal Oak ao lado.",
    ),
  },
  {
    src: "/images/deli-dietz.webp",
    alt: L(
      "Dietz & Watson deli case with packaged meats and sausages",
      "Vitrina Dietz & Watson con fiambres y salchichas",
      "Vitrine Dietz & Watson com fiambre e salsichas",
    ),
    desc: L(
      "Dietz & Watson deli case: packaged ham, turkey, bologna, and smoked sausages.",
      "Vitrina Dietz & Watson: jamón, pavo, bologna y salchichas ahumadas empacadas.",
      "Vitrine Dietz & Watson: fiambre, peru, mortadela e salsichas fumadas embaladas.",
    ),
  },
  {
    src: "/images/frozen-goya.webp",
    alt: L(
      "Goya tostones, empanadas, and yuca",
      "Tostones, empanadas y yuca Goya",
      "Tostones, empadas e aipim Goya",
    ),
    desc: L(
      "Goya frozen: chopped spinach, beef empanadas, banana leaves, ripe plantains, yuca, and yellow rice.",
      "Congelados Goya: espinaca picada, empanadas de res, hojas de plátano, plátano maduro, yuca y arroz amarillo.",
      "Congelados Goya: espinafre picado, empadas de carne, folhas de bananeira, banana-da-terra madura, aipim e arroz amarelo.",
    ),
  },
  {
    src: "/images/aisle-spices.webp",
    alt: L(
      "Sazón Goya, adobo, and teas",
      "Sazón Goya, adobo y tés",
      "Sazón Goya, adobo e chás",
    ),
    desc: L(
      "Sazón Goya, adobo, cinnamon sticks, whole spices, teas, and Goya rice and beans on the next bay.",
      "Sazón Goya, adobo, canela en rama, especias enteras, tés, y arroz y habichuelas Goya en el siguiente estante.",
      "Sazón Goya, adobo, canela em pau, especiarias inteiras, chás, e arroz e feijão Goya na prateleira seguinte.",
    ),
  },
  {
    src: "/images/aisle-sauces.webp",
    alt: L(
      "Oils, Herdez salsa, and hot sauce",
      "Aceites, salsa Herdez y picante",
      "Óleos, molho Herdez e pimenta",
    ),
    desc: L(
      "Cooking oils, Goya vinegar, Herdez salsas, ketchup, soy sauce, and bottled hot sauce.",
      "Aceites, vinagre Goya, salsas Herdez, ketchup, salsa de soya y salsas picantes embotelladas.",
      "Óleos, vinagre Goya, molhos Herdez, ketchup, molho de soja e pimentas engarrafadas.",
    ),
  },
  {
    src: "/images/candles-aisle.webp",
    alt: L(
      "Prayer candles, Raid, and charcoal",
      "Veladoras, Raid y carbón",
      "Velas, Raid e carvão",
    ),
    desc: L(
      "Household endcap: Raid, air fresheners, prayer candles, and Royal Oak charcoal bags.",
      "Cabecera de hogar: Raid, aromatizantes, veladoras y sacos de carbón Royal Oak.",
      "Expositor de casa: Raid, ambientadores, velas e sacos de carvão Royal Oak.",
    ),
  },
  {
    src: "/images/candles.webp",
    alt: L(
      "Prayer candles and air fresheners",
      "Veladoras y aromatizantes",
      "Velas e ambientadores",
    ),
    desc: L(
      "Religious prayer candles — saints and Virgen de Guadalupe — with air fresheners and charcoal underneath.",
      "Veladoras religiosas — santos y Virgen de Guadalupe — con aromatizantes y carbón abajo.",
      "Velas religiosas — santos e Virgem de Guadalupe — com ambientadores e carvão em baixo.",
    ),
  },
  {
    src: "/images/molcajetes.webp",
    alt: L(
      "Lava-stone molcajetes",
      "Molcajetes de piedra",
      "Molcajetes de pedra",
    ),
    desc: L(
      "Lava-stone molcajetes (mortar and pestle) for salsa, on the kitchenware shelf.",
      "Molcajetes de piedra volcánica para salsa, en el estante de cocina.",
      "Molcajetes de pedra vulcânica para molho, na prateleira de cozinha.",
    ),
  },
  {
    src: "/images/steamer-pots.webp",
    alt: L(
      "Mi Pueblo aluminum steamer pots",
      "Vaporeras de aluminio Mi Pueblo",
      "Panelas a vapor de alumínio Mi Pueblo",
    ),
    desc: L(
      "Mi Pueblo aluminum steamer pots — for tamales and large batches.",
      "Vaporeras de aluminio Mi Pueblo — para tamales y cantidades grandes.",
      "Panelas a vapor de alumínio Mi Pueblo — para tamales e grandes quantidades.",
    ),
  },
  {
    src: "/images/pharmacy.webp",
    alt: L(
      "Tabcin, Advil, Vicks, and remedies",
      "Tabcin, Advil, Vicks y remedios",
      "Tabcin, Advil, Vicks e remédios",
    ),
    desc: L(
      "Pharmacy wall: Tabcin, Advil, Vicks, Pepto, and other cold, pain, and stomach remedies.",
      "Pared de farmacia: Tabcin, Advil, Vicks, Pepto y otros remedios para gripe, dolor y estómago.",
      "Parede de farmácia: Tabcin, Advil, Vicks, Pepto e outros remédios para gripe, dor e estômago.",
    ),
  },
  {
    src: "/images/tostadas.webp",
    alt: L(
      "El Milagro homemade corn tostadas",
      "Tostadas de maíz caseras El Milagro",
      "Tostadas de milho caseiras El Milagro",
    ),
    desc: L(
      "El Milagro homemade corn tostadas on the bakery / tortillas shelf.",
      "Tostadas de maíz caseras El Milagro en el estante de panadería y tortillas.",
      "Tostadas de milho caseiras El Milagro na prateleira de padaria e tortilhas.",
    ),
  },
  {
    src: "/images/rice-shelf.webp",
    alt: L(
      "Tio João, Canilla, and Goya rice bags on the shelf",
      "Arroz Tio João, Canilla y Goya en el estante",
      "Arroz Tio João, Canilla e Goya na prateleira",
    ),
    desc: L(
      "Rice bags: Tio João, Canilla, Goya Enriched, Goya Medium Grain, Goya Rice & Black Beans, and Canilla parboiled.",
      "Sacos de arroz: Tio João, Canilla, Goya Enriched, Goya grano medio, Goya Rice & Black Beans y Canilla precocido.",
      "Sacos de arroz: Tio João, Canilla, Goya Enriched, Goya grão médio, Goya Rice & Black Beans e Canilla parboilizado.",
    ),
  },
  {
    src: "/images/pantry-mojo.webp",
    alt: L(
      "Goya mojo, naranja agria, Herdez salsa, and cooking oils",
      "Mojo Goya, naranja agria, salsa Herdez y aceites",
      "Mojo Goya, naranja agria, molho Herdez e óleos",
    ),
    desc: L(
      "Goya Recaito, Recaito cilantro cooking base, Naranja Agria, Adobo, cooking oils, and Herdez salsas.",
      "Goya Recaito, base de cilantro Recaito, Naranja Agria, Adobo, aceites y salsas Herdez.",
      "Goya Recaito, base de coentro Recaito, Naranja Agria, Adobo, óleos e molhos Herdez.",
    ),
  },
  {
    src: "/images/sausage.webp",
    alt: L(
      "Aurora Brazilian smoked calabresa sausage",
      "Linguiça calabresa ahumada Aurora de Brasil",
      "Linguiça calabresa defumada Aurora",
    ),
    desc: L(
      "Aurora smoked calabresa sausage from Brazil — in the cooler.",
      "Linguiça calabresa ahumada Aurora de Brasil — en el refrigerador.",
      "Linguiça calabresa defumada Aurora — no frigorífico.",
    ),
  },
  {
    src: "/images/tapioca.webp",
    alt: L(
      "Amafil Brazilian tapioca flour",
      "Harina de tapioca Amafil de Brasil",
      "Massa para tapioca Amafil",
    ),
    desc: L(
      "Amafil Brazilian tapioca flour (massa para tapioca) on the Brazilian grocery shelf.",
      "Harina de tapioca Amafil de Brasil (massa para tapioca) en el estante brasileño.",
      "Massa para tapioca Amafil na prateleira de produtos do Brasil.",
    ),
  },
  {
    src: "/images/rice-bag.webp",
    alt: L(
      "Tio João long grain white rice on the shelf",
      "Arroz blanco Tio João en el estante",
      "Arroz branco Tio João na prateleira",
    ),
    desc: L(
      "Tio João long-grain white rice — Brazilian staple bags on the floor and shelf.",
      "Arroz blanco de grano largo Tio João — sacos brasileños en el piso y el estante.",
      "Arroz branco de grão longo Tio João — sacos brasileiros no chão e na prateleira.",
    ),
  },
  {
    src: "/images/peanuts.webp",
    alt: L("Amafil Brazilian peanuts", "Cacahuates Amafil de Brasil", "Amendoim Amafil"),
    desc: L(
      "Amafil Brazilian roasted peanuts on the snack shelf.",
      "Cacahuates tostados Amafil de Brasil en el estante de botanas.",
      "Amendoim torrado Amafil na prateleira de snacks.",
    ),
  },
  {
    src: "/images/soap.webp",
    alt: L(
      "Phebo rose soap on the household shelf",
      "Jabón Phebo de rosas en el estante",
      "Sabonete Phebo odor de rosas",
    ),
    desc: L(
      "Phebo rose soap from Brazil, on the household / toiletries shelf.",
      "Jabón Phebo de rosas de Brasil, en el estante de hogar y aseo.",
      "Sabonete Phebo odor de rosas do Brasil, na prateleira de casa e higiene.",
    ),
  },
  {
    src: "/images/molcajete.webp",
    alt: L(
      "Stone molcajetes shaped like pigs",
      "Molcajetes de piedra con forma de puerco",
      "Molcajetes de pedra em forma de porco",
    ),
    desc: L(
      "Pig-shaped stone molcajetes for salsa — kitchenware on the shelf.",
      "Molcajetes de piedra con forma de puerco para salsa — utensilios en el estante.",
      "Molcajetes de pedra em forma de porco para molho — utensílios na prateleira.",
    ),
  },
  {
    src: "/images/gel.webp",
    alt: L(
      "Moco de Gorila hair gel, made in Mexico",
      "Gel Moco de Gorila, hecho en México",
      "Gel Moco de Gorila, feito no México",
    ),
    desc: L(
      "Moco de Gorila hair gel, made in Mexico — on the toiletries shelf.",
      "Gel para el cabello Moco de Gorila, hecho en México — en el estante de aseo.",
      "Gel para cabelo Moco de Gorila, feito no México — na prateleira de higiene.",
    ),
  },
  {
    src: "/images/stock-jarritos.webp",
    alt: L(
      "Jarritos sodas on ice — pineapple, lime, mandarin, and more",
      "Jarritos en hielo — piña, limón, mandarina y más",
      "Jarritos no gelo — abacaxi, limão, tangerina e mais",
    ),
    desc: L(
      "Jarritos on ice: pineapple, lime, mandarin, and other fruit flavors.",
      "Jarritos en hielo: piña, limón, mandarina y otros sabores de fruta.",
      "Jarritos no gelo: abacaxi, limão, tangerina e outros sabores de fruta.",
    ),
  },
  {
    src: "/images/stock-jarritos-shelf.webp",
    alt: L(
      "Jarritos bottles on the drink shelf",
      "Botellas de Jarritos en el estante de bebidas",
      "Garrafas de Jarritos na prateleira de bebidas",
    ),
    desc: L(
      "Jarritos bottles lined on the drink shelf — fruit sodas by the cooler.",
      "Botellas de Jarritos en el estante de bebidas — refrescos de fruta junto al refrigerador.",
      "Garrafas de Jarritos na prateleira de bebidas — refrigerantes de fruta junto ao frigorífico.",
    ),
  },
  {
    src: "/images/stock-pan-dulce.webp",
    alt: L(
      "Pan dulce — conchas and sweet breads",
      "Pan dulce — conchas y panes dulces",
      "Pão doce — conchas e pães doces",
    ),
    desc: L(
      "Pan dulce — conchas and other sweet breads from the panadería, when available.",
      "Pan dulce — conchas y otros panes dulces de la panadería, cuando hay.",
      "Pão doce — conchas e outros pães da padaria, quando houver.",
    ),
  },
  {
    src: "/images/stock-pao-de-queijo.webp",
    alt: L("Brazilian pão de queijo", "Pão de queijo brasileño", "Pão de queijo brasileiro"),
    desc: L(
      "Brazilian pão de queijo — cheese bread, when the bakery case is stocked.",
      "Pão de queijo brasileño — pan de queso, cuando hay en la vitrina.",
      "Pão de queijo brasileiro — quando houver na vitrine da padaria.",
    ),
  },
];

export const GALLERY: Photo[] = [...GALLERY_AISLES, ...GALLERY_CLOSEUPS];
