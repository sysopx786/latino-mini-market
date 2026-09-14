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
  title: L("On the shelves", "En el estante", "Nas prateleiras"),
  lede: L(
    "A neighborhood grocery and a cultural hub — authentic ingredients, pantry staples, and goods from Mexico, Central America, South America, the Caribbean, and Brazil.",
    "Un mercado del barrio y un punto de encuentro — ingredientes de verdad, abarrotes y productos de México, Centroamérica, Sudamérica, el Caraíbas y Brasil.",
    "Uma mercearia do bairro e um ponto de encontro — ingredientes autênticos, produtos básicos e mercadorias do México, da América Central, da América do Sul, das Caraíbas e do Brasil.",
  ),
};

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
          L("Tomatillos", "Tomatillos", "Tomatillos"),
          L("Chayote", "Chayote", "Chuchu"),
          L("Roma tomatoes", "Tomate Roma", "Tomate Roma"),
          L("White & yellow onions", "Cebolla blanca y amarilla", "Cebola branca e amarela"),
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
        ],
      },
      {
        heading: L("Tropical fruit", "Fruta tropical", "Fruta tropical"),
        items: [
          L("Mangoes", "Mango", "Manga"),
          L("Plantains", "Plátanos", "Bananas-da-terra"),
          L("Guavas", "Guayaba", "Goiaba"),
          L("Avocados", "Aguacate", "Abacate"),
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
          L("Carne asada (skirt / flank)", "Carne asada (arrachera / falda)", "Carne asada (fraldinha / vazio)"),
          L("Al pastor pork", "Puerco al pastor", "Porco al pastor"),
          L("Pernil", "Pernil", "Pernil"),
        ],
      },
      {
        heading: L("Sausages", "Embutidos", "Enchidos"),
        items: [
          L("Mexican chorizo", "Chorizo mexicano", "Chouriço mexicano"),
          L("Salvadoran longaniza", "Longaniza salvadoreña", "Longaniza salvadorenha"),
          L("Linguica calabresa", "Linguica calabresa", "Linguiça calabresa"),
          L("Caribbean blood sausage", "Morcilla caribeña", "Morcela caribenha"),
        ],
      },
      {
        heading: L("Cheeses & creams", "Quesos y cremas", "Queijos e cremes"),
        items: [
          L("Queso fresco", "Queso fresco", "Queijo fresco"),
          L("Cotija", "Cotija", "Cotija"),
          L("Queso blanco", "Queso blanco", "Queijo branco"),
          L("Queso Oaxaca", "Queso Oaxaca", "Queijo Oaxaca"),
          L("Panela", "Panela", "Panela"),
          L("Crema Mexicana", "Crema mexicana", "Creme mexicano"),
          L("Central American crema", "Crema centroamericana", "Creme centro-americano"),
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
          L("Chipotle", "Chipotle", "Chipotle"),
          L("Chipotles in adobo", "Chipotles en adobo", "Chipotles em adobo"),
        ],
      },
      {
        heading: L("Rice & beans", "Arroz y frijoles", "Arroz e feijão"),
        items: [
          L("Pinto beans", "Frijol pinto", "Feijão pinto"),
          L("Black beans", "Frijol negro", "Feijão preto"),
          L("Red beans", "Frijol rojo", "Feijão vermelho"),
          L("Refried beans", "Frijoles refritos", "Feijão refrito"),
          L("Long-grain white rice", "Arroz blanco de grano largo", "Arroz branco de grão longo"),
          L("Yellow rice", "Arroz amarillo", "Arroz amarelo"),
        ],
      },
      {
        heading: L("Flours & grains", "Harinas y granos", "Farinhas e grãos"),
        items: [
          L("Masa harina / Maseca", "Masa harina / Maseca", "Masa harina / Maseca"),
          L("Maíz pozolero (hominy)", "Maíz pozolero", "Milho pozolero"),
          L("Tapioca flour", "Harina de tapioca", "Farinha de tapioca"),
          L("Corn husks for tamales", "Hojas de maíz para tamales", "Palhas de milho para tamales"),
        ],
      },
      {
        heading: L("Spices & sweeteners", "Especias y dulce", "Especiarias e açúcar"),
        items: [
          L("Canela (Mexican cinnamon)", "Canela mexicana", "Canela mexicana"),
          L("Achiote paste", "Pasta de achiote", "Pasta de urucum"),
          L("Cumin seed", "Comino en grano", "Cominhos"),
          L("Whole cloves", "Clavo entero", "Cravinho"),
          L("Piloncillo / panela", "Piloncillo / panela", "Rapadura / panela"),
        ],
      },
      {
        heading: L("Salsas & hot sauce", "Salsas y picante", "Molhos e pimenta"),
        items: [
          L("Salsa", "Salsa", "Salsa"),
          L("Cholula", "Cholula", "Cholula"),
          L("Tapatío", "Tapatío", "Tapatío"),
          L("Valentina", "Valentina", "Valentina"),
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
          L("Jarritos", "Jarritos", "Jarritos"),
          L("Postobón", "Postobón", "Postobón"),
          L("Inca Kola", "Inca Kola", "Inca Kola"),
        ],
      },
      {
        heading: L("Juices & aguas frescas", "Jugos y aguas frescas", "Sumos e aguas frescas"),
        items: [
          L("Jumex nectars", "Néctares Jumex", "Néctares Jumex"),
          L("Passion fruit pulp", "Pulpa de maracuyá", "Polpa de maracujá"),
          L("Mamey pulp", "Pulpa de mamey", "Polpa de mamey"),
          L("Guanábana / soursop pulp", "Pulpa de guanábana", "Polpa de graviola"),
          L("Flor de Jamaica", "Flor de Jamaica", "Flor de Jamaica"),
          L("Tamarind pods", "Tamarindo", "Tamarindo"),
          L("Horchata mix", "Polvo de horchata", "Mistura de horchata"),
        ],
      },
      {
        heading: L("Candy & botanas", "Dulces y botanas", "Doces e botanas"),
        items: [
          L("Pulparindo", "Pulparindo", "Pulparindo"),
          L("Pelon Pelo Rico", "Pelon Pelo Rico", "Pelon Pelo Rico"),
          L("Chili mango lollipops", "Paletas de mango con chile", "Chupa-chupas de manga com chili"),
          L("Tamarind candy", "Dulce de tamarindo", "Doce de tamarindo"),
          L("Duros", "Duros", "Duros"),
          L("Lime & chili chips", "Papas de limón y chile", "Batatas de limão e chili"),
          L("Takis", "Takis", "Takis"),
          L("Goya snacks", "Botanas Goya", "Snacks Goya"),
          L("Abuelita / Ibarra chocolate", "Chocolate Abuelita / Ibarra", "Chocolate Abuelita / Ibarra"),
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
          L("Bolillos", "Bolillos", "Bolinhos"),
          L("Tres leches", "Tres leches", "Tres leches"),
          L("Empanadas", "Empanadas", "Empadas"),
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
    ],
  },
  {
    id: "brazil",
    title: L("From Brazil", "De Brasil", "Do Brasil"),
    groups: [
      {
        heading: L("On the floor this week", "Esta semana en la tienda", "Esta semana na loja"),
        items: [
          L("Tio João long-grain rice", "Arroz Tio João de grano largo", "Arroz Tio João de grão longo"),
          L("Amafil tapioca flour", "Harina de tapioca Amafil", "Massa para tapioca Amafil"),
          L("Amafil peanuts", "Cacahuates Amafil", "Amendoim Amafil"),
          L("Aurora linguica calabresa", "Linguica calabresa Aurora", "Linguiça calabresa Aurora"),
        ],
      },
    ],
  },
  {
    id: "home",
    title: L("Household", "Hogar", "Casa"),
    groups: [
      {
        heading: L("Kitchen & laundry", "Cocina y lavandería", "Cozinha e lavandaria"),
        items: [
          L("Molcajetes", "Molcajetes", "Molcajetes"),
          L("Suavitel", "Suavitel", "Suavitel"),
          L("Ariel", "Ariel", "Ariel"),
          L("Phebo soap", "Jabón Phebo", "Sabonete Phebo"),
          L("Moco de Gorila gel", "Gel Moco de Gorila", "Gel Moco de Gorila"),
        ],
      },
    ],
  },
];
