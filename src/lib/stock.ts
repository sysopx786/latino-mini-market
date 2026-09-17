import type { Lang } from "./language";

const L = (en: string, es: string, pt: string): Record<Lang, string> => ({ en, es, pt });

export type StockGroup = {
  heading: Record<Lang, string>;
  items: Record<Lang, string>[];
};

export type StockCategory = {
  id: string;
  title: Record<Lang, string>;
  groups: StockGroup[];
};

export const STOCK_INTRO = {
  title: L("What we carry", "Lo que tenemos", "O que temos"),
  lede: L(
    "Available in store. Every flavor is its own chip. No prices, no cart — come by the shop.",
    "En la tienda. Cada sabor es su propia etiqueta. Sin precios ni carrito — pasa por el local.",
    "Na loja. Cada sabor é o seu próprio chip. Sem preços nem carrinho — venha à loja.",
  ),
};

export const SERVICES = [
  L("Money remittances", "Envíos de dinero", "Transferências de dinheiro"),
  L("Custom butcher cuts", "Cortes de carnicería a pedido", "Cortes de talho por encomenda"),
  L("Panadería when available", "Panadería cuando hay", "Padaria quando houver"),
];

export const STOCK: StockCategory[] = [
  {
    id: "produce",
    title: L("Fresh produce", "Productos frescos", "Hortifrúti"),
    groups: [
      {
        heading: L("Citrus & staples", "Cítricos y lo de siempre", "Cítricos e o de sempre"),
        items: [
          L("Limes", "Limones", "Limões"),
          L("Key limes", "Limones criollos", "Limões-galegos"),
          L("Garlic", "Ajo", "Alho"),
          L("Tomatillos", "Tomatillos", "Tomatillos"),
          L("Chayote", "Chayote", "Chuchu"),
          L("Roma tomatoes", "Tomate Roma", "Tomate Roma"),
          L("White onions", "Cebolla blanca", "Cebola branca"),
          L("Yellow onions", "Cebolla amarilla", "Cebola amarela"),
        ],
      },
      {
        heading: L("Roots, cactus & herbs", "Raíces, nopal y hierbas", "Raízes, nopal e ervas"),
        items: [
          L("Cilantro", "Cilantro", "Coentro"),
          L("Epazote", "Epazote", "Epazote"),
          L("Hoja santa", "Hoja santa", "Hoja santa"),
          L("Mexican oregano", "Orégano mexicano", "Orégão mexicano"),
          L("Jicama", "Jícama", "Jicama"),
          L("Yuca", "Yuca", "Mandioca"),
          L("Nopales", "Nopales", "Nopal"),
          L("Yautía", "Yautía", "Yautía"),
          L("Ñame", "Ñame", "Inhame"),
          L("Malanga", "Malanga", "Malanga"),
        ],
      },
      {
        heading: L("Tropical fruit", "Fruta tropical", "Fruta tropical"),
        items: [
          L("Mangoes", "Mango", "Manga"),
          L("Green plantains", "Plátano verde", "Banana-da-terra verde"),
          L("Ripe plantains", "Plátano maduro", "Banana-da-terra madura"),
          L("Guavas", "Guayaba", "Goiaba"),
          L("Avocados", "Aguacate", "Abacate"),
          L("Papayas", "Papaya", "Papaia"),
        ],
      },
      {
        heading: L("Fresh chiles", "Chiles frescos", "Pimentas frescas"),
        items: [
          L("Jalapeños", "Jalapeños", "Jalapeños"),
          L("Serranos", "Serranos", "Serranos"),
          L("Habaneros", "Habaneros", "Habaneros"),
          L("Poblanos", "Poblanos", "Poblanos"),
        ],
      },
    ],
  },
  {
    id: "meats",
    title: L("Carnicería & cremería", "Carnicería y cremería", "Talho e laticínios"),
    groups: [
      {
        heading: L("Cuts & marinades", "Cortes y adobos", "Cortes e adobos"),
        items: [
          L("Carne asada (skirt / flap)", "Carne asada (arrachera / falda)", "Carne asada (fraldinha / vazio)"),
          L("Al pastor pork", "Puerco al pastor", "Porco al pastor"),
          L("Pernil", "Pernil", "Pernil"),
          L("Beef neck bones", "Huesos de pescuezo de res", "Ossos de pescoço de vaca"),
          L("Beef tripe", "Mondongo / tripas de res", "Dobrada de vaca"),
          L("Pig trotters", "Patas de cerdo", "Pés de porco"),
        ],
      },
      {
        heading: L("Sausages", "Embutidos", "Enchidos"),
        items: [
          L("Mexican fresh chorizo", "Chorizo mexicano fresco", "Chouriço mexicano fresco"),
          L("Mexican cured chorizo", "Chorizo mexicano curado", "Chouriço mexicano curado"),
          L("Salvadoran longaniza", "Longaniza salvadoreña", "Longaniza salvadorenha"),
          L("Linguica calabresa", "Linguica calabresa", "Linguiça calabresa"),
          L("Caribbean blood sausage", "Morcilla caribeña", "Morcela caribenha"),
        ],
      },
      {
        heading: L("Cheeses & creams", "Quesos y cremas", "Queijos e cremes"),
        items: [
          L("Queso fresco", "Queso fresco", "Queijo fresco"),
          L("Cacique Crema Mexicana", "Cacique Crema Mexicana", "Cacique Crema Mexicana"),
          L("Cotija", "Cotija", "Cotija"),
          L("Queso blanco", "Queso blanco", "Queijo branco"),
          L("Queso Oaxaca", "Queso Oaxaca", "Queijo Oaxaca"),
          L("Panela (cheese)", "Panela (queso)", "Panela (queijo)"),
          L("Central American crema / crema salvadoreña", "Crema centroamericana / crema salvadoreña", "Creme centro-americano / crema salvadorenha"),
          L("Queso duro blando", "Queso duro blando", "Queijo duro blando"),
        ],
      },
      {
        heading: L("Fats", "Grasas", "Gorduras"),
        items: [L("Manteca (pork lard)", "Manteca de cerdo", "Banha de porco")],
      },
    ],
  },
  {
    id: "pantry",
    title: L("Pantry, spices & baking", "Abarrotes, especias y hornear", "Mercearia, especiarias e farinhas"),
    groups: [
      {
        heading: L("Dried chiles", "Chiles secos", "Pimentas secas"),
        items: [
          L("Guajillo", "Guajillo", "Guajillo"),
          L("Ancho", "Ancho", "Ancho"),
          L("Pasilla", "Pasilla", "Pasilla"),
          L("Chile de árbol", "Chile de árbol", "Chile de árbol"),
          L("Embasa chipotles in adobo", "Chipotles Embasa en adobo", "Chipotles Embasa em adobo"),
        ],
      },
      {
        heading: L("Rice & beans", "Arroz y frijoles", "Arroz e feijão"),
        items: [
          L("Pinto beans", "Frijol pinto", "Feijão pinto"),
          L("Black beans", "Frijol negro", "Feijão preto"),
          L("Red beans", "Frijol rojo", "Feijão vermelho"),
          L("Goya small white beans", "Habichuelas blancas Goya", "Feijão branco Goya"),
          L("Refried beans", "Frijoles refritos", "Feijão refrito"),
          L("Ducal refried red", "Ducal frijoles rojos volteados", "Ducal feijão vermelho refrito"),
          L("Ducal refried black", "Ducal frijoles negros volteados", "Ducal feijão preto refrito"),
          L("Mayocoba / Peruano beans", "Frijol mayocoba / peruano", "Feijão mayocoba / peruano"),
          L("Long-grain white rice", "Arroz blanco de grano largo", "Arroz branco de grão longo"),
          L("Yellow rice", "Arroz amarillo", "Arroz amarelo"),
        ],
      },
      {
        heading: L("Flours & grains", "Harinas y granos", "Farinhas e grãos"),
        items: [
          L("Masa harina / Maseca", "Masa harina / Maseca", "Masa harina / Maseca"),
          L("Maseca para pupusas", "Maseca para pupusas", "Maseca para pupusas"),
          L("Maíz pozolero (hominy)", "Maíz pozolero", "Milho pozolero"),
          L("Tapioca flour", "Harina de tapioca", "Farinha de tapioca"),
          L("Corn husks for tamales", "Hojas de maíz para tamales", "Palhas de milho para tamales"),
          L("Frozen banana leaves", "Hojas de plátano congeladas", "Folhas de bananeira congeladas"),
          L("Frozen loroco", "Loroco congelado", "Loroco congelado"),
          L("Goya fidelini / fideo", "Fideo Goya / fidelini", "Fideo Goya / fidelini"),
        ],
      },
      {
        heading: L("Spices & sweeteners", "Especias y dulce", "Especiarias e açúcar"),
        items: [
          L("Canela", "Canela", "Canela"),
          L("La Perla achiote", "Achiote La Perla", "Urucum La Perla"),
          L("Del Maya achiote", "Achiote Del Maya", "Urucum Del Maya"),
          L("Cumin seed", "Comino en grano", "Cominhos em grão"),
          L("Piloncillo", "Piloncillo", "Rapadura / piloncillo"),
          L("Tajín", "Tajín", "Tajín"),
        ],
      },
      {
        heading: L("Packaged pantry", "Abarrotes empaquetados", "Mercearia embalada"),
        items: [
          L("Goya Naranja Agria", "Goya Naranja Agria", "Goya Naranja Agria"),
          L("Goya guava paste", "Pasta de guayaba Goya", "Pasta de goiaba Goya"),
          L("Herdez salsa verde", "Herdez salsa verde", "Herdez salsa verde"),
          L("Goya fancy pimientos", "Pimientos Goya", "Pimentos Goya"),
          L("Nestlé La Lechera dulce de leche", "Nestlé La Lechera dulce de leche", "Nestlé La Lechera doce de leite"),
          L("Goya sofrito", "Sofrito Goya", "Sofrito Goya"),
          L("Goya recaíto", "Recaíto Goya", "Recaíto Goya"),
          L("Sazón Goya", "Sazón Goya", "Sazón Goya"),
          L("Coco López", "Coco López", "Coco López"),
          L("Export Soda crackers", "Galletas Export Soda", "Bolachas Export Soda"),
          L("Cameo cookies", "Galletas Cameo", "Bolachas Cameo"),
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: L("Drinks & snacks", "Bebidas y botanas", "Bebidas e snacks"),
    groups: [
      {
        heading: L("Sodas", "Refrescos", "Refrigerantes"),
        items: [
          L("Mexican Coca-Cola", "Coca-Cola mexicana", "Coca-Cola mexicana"),
          L("Jarritos mandarin", "Jarritos mandarina", "Jarritos tangerina"),
          L("Jarritos tamarind", "Jarritos tamarindo", "Jarritos tamarindo"),
          L("Jarritos lime", "Jarritos limón", "Jarritos limão"),
          L("Jarritos pineapple", "Jarritos piña", "Jarritos abacaxi"),
          L("Jarritos guava", "Jarritos guayaba", "Jarritos goiaba"),
          L("Jarritos strawberry", "Jarritos fresa", "Jarritos morango"),
          L("Jarritos grapefruit", "Jarritos toronja", "Jarritos toranja"),
          L("Jarritos watermelon", "Jarritos sandía", "Jarritos melancia"),
          L("Jarritos mango", "Jarritos mango", "Jarritos manga"),
          L("Jarritos fruit punch / tutti frutti", "Jarritos punch de frutas / tutti frutti", "Jarritos punch de frutas / tutti frutti"),
          L("Jarritos Mexican cola", "Jarritos cola mexicana", "Jarritos cola mexicana"),
          L("Jarritos jamaica", "Jarritos jamaica", "Jarritos jamaica"),
          L("Jarritos passion fruit", "Jarritos maracuyá", "Jarritos maracujá"),
          L("Jarritos apple", "Jarritos manzana", "Jarritos maçã"),
          L("Jarritos grape", "Jarritos uva", "Jarritos uva"),
          L("Postobón manzana", "Postobón manzana", "Postobón maçã"),
          L("Postobón naranja", "Postobón naranja", "Postobón laranja"),
          L("Postobón uva", "Postobón uva", "Postobón uva"),
          L("Postobón piña", "Postobón piña", "Postobón abacaxi"),
          L("Postobón tamarindo", "Postobón tamarindo", "Postobón tamarindo"),
          L("Postobón kola", "Postobón kola", "Postobón kola"),
          L("Postobón Colombiana", "Postobón Colombiana", "Postobón Colombiana"),
          L("Postobón limonada", "Postobón limonada", "Postobón limonada"),
          L("Inca Kola", "Inca Kola", "Inca Kola"),
          L("Malta Goya", "Malta Goya", "Malta Goya"),
          L("Malta India", "Malta India", "Malta India"),
        ],
      },
      {
        heading: L("Juices & aguas", "Jugos y aguas", "Sumos e águas"),
        items: [
          L("Jumex guava", "Jumex guayaba", "Jumex goiaba"),
          L("Jumex mango", "Jumex mango", "Jumex manga"),
          L("Jumex peach", "Jumex durazno", "Jumex pêssego"),
          L("Jumex pear", "Jumex pera", "Jumex pera"),
          L("Jumex apple", "Jumex manzana", "Jumex maçã"),
          L("Jumex apricot", "Jumex chabacano", "Jumex damasco"),
          L("Jumex pineapple", "Jumex piña", "Jumex abacaxi"),
          L("Jumex pineapple-coconut", "Jumex piña-coco", "Jumex abacaxi-coco"),
          L("Jumex strawberry", "Jumex fresa", "Jumex morango"),
          L("Jumex strawberry-banana", "Jumex fresa-plátano", "Jumex morango-banana"),
          L("Jumex guanábana", "Jumex guanábana", "Jumex graviola"),
          L("Jumex grape", "Jumex uva", "Jumex uva"),
          L("Passion fruit pulp", "Pulpa de maracuyá", "Polpa de maracujá"),
          L("Mamey pulp", "Pulpa de mamey", "Polpa de mamey"),
          L("Guanábana / soursop pulp", "Pulpa de guanábana", "Polpa de graviola"),
          L("Flor de Jamaica", "Flor de Jamaica", "Flor de Jamaica"),
          L("Tamarind pods", "Vainas de tamarindo", "Vagens de tamarindo"),
          L("Klass horchata", "Klass horchata", "Klass horchata"),
          L("Klass jamaica", "Klass jamaica", "Klass jamaica"),
          L("Klass tamarindo", "Klass tamarindo", "Klass tamarindo"),
          L("Klass mango", "Klass mango", "Klass manga"),
          L("Klass pineapple", "Klass piña", "Klass abacaxi"),
          L("Klass lime", "Klass limón", "Klass limão"),
          L("Klass orange", "Klass naranja", "Klass laranja"),
          L("Klass grape", "Klass uva", "Klass uva"),
          L("Klass fruit punch", "Klass punch de frutas", "Klass punch de frutas"),
          L("Klass peach", "Klass durazno", "Klass pêssego"),
          L("Klass cantaloupe", "Klass melón", "Klass melão"),
          L("Klass watermelon", "Klass sandía", "Klass melancia"),
          L("Klass cucumber-limeade", "Klass pepino-limón", "Klass pepino-limão"),
          L("Zuko horchata", "Zuko horchata", "Zuko horchata"),
          L("Zuko jamaica", "Zuko jamaica", "Zuko jamaica"),
          L("Zuko tamarindo", "Zuko tamarindo", "Zuko tamarindo"),
          L("Zuko mango", "Zuko mango", "Zuko manga"),
          L("Zuko pineapple", "Zuko piña", "Zuko abacaxi"),
          L("Zuko lime", "Zuko limón", "Zuko limão"),
          L("Zuko orange", "Zuko naranja", "Zuko laranja"),
          L("Zuko grape", "Zuko uva", "Zuko uva"),
          L("Zuko fruit punch", "Zuko punch de frutas", "Zuko punch de frutas"),
          L("Zuko peach", "Zuko durazno", "Zuko pêssego"),
          L("Zuko cantaloupe", "Zuko melón", "Zuko melão"),
          L("Zuko watermelon", "Zuko sandía", "Zuko melancia"),
          L("Zuko cucumber-limeade", "Zuko pepino-limón", "Zuko pepino-limão"),
        ],
      },
      {
        heading: L("Candy & botanas", "Dulces y botanas", "Doces e botanas"),
        items: [
          L("Pulparindo", "Pulparindo", "Pulparindo"),
          L("Pelon Pelo Rico", "Pelon Pelo Rico", "Pelon Pelo Rico"),
          L("Lucas chili lollipops", "Paletas Lucas de chile", "Chupa-chupas Lucas de chili"),
          L("Vero chili lollipops", "Paletas Vero de chile", "Chupa-chupas Vero de chili"),
          L("Chili mango lollipops", "Paletas de mango con chile", "Chupa-chupas de manga com chili"),
          L("Tamarind candy", "Dulce de tamarindo", "Doce de tamarindo"),
          L("Bon Bon Bum", "Bon Bon Bum", "Bon Bon Bum"),
          L("Duros", "Duros", "Duros"),
          L("Lime & chili chips", "Papas de limón y chile", "Batatas de limão e chili"),
          L("Takis Fuego", "Takis Fuego", "Takis Fuego"),
          L("Sabritas Crujitos", "Sabritas Crujitos", "Sabritas Crujitos"),
          L("Sabritas Paketaxo", "Sabritas Paketaxo", "Sabritas Paketaxo"),
          L("Sabritas Paketaxo Mezcladito", "Sabritas Paketaxo Mezcladito", "Sabritas Paketaxo Mezcladito"),
          L("Sabritas Paketaxo Botanero", "Sabritas Paketaxo Botanero", "Sabritas Paketaxo Botanero"),
          L("Sabritas Paketaxo Quexo", "Sabritas Paketaxo Quexo", "Sabritas Paketaxo Quexo"),
          L("Sabritas Adobadas", "Sabritas Adobadas", "Sabritas Adobadas"),
          L("Sabritas Habanero", "Sabritas Habanero", "Sabritas Habanero"),
          L("Sabritas Moradas", "Sabritas Moradas", "Sabritas Moradas"),
          L("Sabritas De Limón", "Sabritas De Limón", "Sabritas De Limón"),
          L("Sabritas Rancheritos", "Sabritas Rancheritos", "Sabritas Rancheritos"),
          L("Sabritas Churrumais", "Sabritas Churrumais", "Sabritas Churrumais"),
          L("Sabritas Sabritones", "Sabritas Sabritones", "Sabritas Sabritones"),
          L("Sabritas Flamin' Hot", "Sabritas Flamin' Hot", "Sabritas Flamin' Hot"),
          L("Doritos Incógnita", "Doritos Incógnita", "Doritos Incógnita"),
          L("De La Rosa Mazapán", "De La Rosa Mazapán", "De La Rosa Mazapán"),
          L("Diana Yummies", "Diana Yummies", "Diana Yummies"),
          L("Diana Zambos original", "Diana Zambos original", "Diana Zambos original"),
          L("Diana Zambos picositas", "Diana Zambos picositas", "Diana Zambos picositas"),
          L("Diana Zambos ceviche", "Diana Zambos ceviche", "Diana Zambos ceviche"),
          L("Diana Zambos chicharrón", "Diana Zambos chicharrón", "Diana Zambos chicharrón"),
          L("Diana Churritos", "Diana Churritos", "Diana Churritos"),
          L("Diana Churritos queso", "Diana Churritos queso", "Diana Churritos queijo"),
          L("Diana Jalapeños", "Diana Jalapeños", "Diana Jalapeños"),
          L("Diana Palitos chilimón", "Diana Palitos chilimón", "Diana Palitos chilimón"),
          L("Diana Toztecas", "Diana Toztecas", "Diana Toztecas"),
          L("Diana Elotitos", "Diana Elotitos", "Diana Elotitos"),
          L("Diana Nachos", "Diana Nachos", "Diana Nachos"),
          L("Abuelita chocolate", "Chocolate Abuelita", "Chocolate Abuelita"),
          L("Ibarra chocolate", "Chocolate Ibarra", "Chocolate Ibarra"),
          L("Goya snacks", "Botanas Goya", "Snacks Goya"),
          L("Havanna alfajores", "Alfajores Havanna", "Alfajores Havanna"),
        ],
      },
      {
        heading: L("Coffee", "Café", "Café"),
        items: [
          L("Café Bustelo", "Café Bustelo", "Café Bustelo"),
          L("Café Rico", "Café Rico", "Café Rico"),
        ],
      },
    ],
  },
  {
    id: "tortillas",
    title: L("Tortillas, bakery & kitchen", "Tortillas, panadería y cocina", "Tortilhas, padaria e cozinha"),
    groups: [
      {
        heading: L("Tortillas", "Tortillas", "Tortilhas"),
        items: [
          L("Corn tortillas", "Tortillas de maíz", "Tortilhas de milho"),
          L("Flour tortillas", "Tortillas de harina", "Tortilhas de farinha"),
        ],
      },
      {
        heading: L("Pan dulce", "Pan dulce", "Pão doce"),
        items: [
          L("Conchas", "Conchas", "Conchas"),
          L("Bolillos", "Bolillos", "Bolillos"),
          L("Tres leches", "Tres leches", "Tres leches"),
          L("Empanadas", "Empanadas", "Empadas"),
          L("Shecas / Guatemalan pan dulce", "Shecas / pan dulce guatemalteco", "Shecas / pão doce da Guatemala"),
        ],
      },
      {
        heading: L("Hot food", "Comida caliente", "Comida quente"),
        items: [
          L("Tamales", "Tamales", "Tamales"),
          L("Pupusas", "Pupusas", "Pupusas"),
          L("Tacos", "Tacos", "Tacos"),
        ],
      },
      {
        heading: L("Kitchenware", "Utensilios", "Utensílios"),
        items: [
          L("Cazuelas", "Cazuelas", "Cazuelas"),
          L("Comal", "Comal", "Comal"),
          L("Molcajete", "Molcajete", "Molcajete"),
          L("Devotional candles", "Veladoras", "Velas devocionais"),
          L("Imported herbs", "Hierbas importadas", "Ervas importadas"),
          L("Specialty cleaners", "Limpiadores especializados", "Detergentes especializados"),
        ],
      },
    ],
  },
  {
    id: "brazil",
    title: L("From Brazil", "De Brasil", "Do Brasil"),
    groups: [
      {
        heading: L("", "", ""),
        items: [
          L("Tio João long-grain rice", "Arroz Tio João de grano largo", "Arroz Tio João de grão longo"),
          L("Amafil tapioca flour", "Harina de tapioca Amafil", "Farinha de tapioca Amafil"),
          L("Amafil peanuts", "Cacahuates Amafil", "Amendoim Amafil"),
          L("Aurora linguica calabresa", "Linguica calabresa Aurora", "Linguiça calabresa Aurora"),
        ],
      },
    ],
  },
];
