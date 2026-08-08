export type Product = {
  slug: string;
  name: string; // sub-brand line on pack, e.g. "Lily Puffs"
  flavor: string; // e.g. "Classic Ghee Roast Makhana"
  collection: "Rituals" | "Daily Crunch" | "Origins";
  tagline: string;
  price: number;
  netWeight: string;
  accent: "ghee" | "cheesy" | "imli" | "seoul";
  frontImage: string;
  backImage: string;
  description: string;
  badges: string[];
  benefits: string[];
  ingredients: string;
  allergen: string;
  storage: string;
  fssai: string;
  advisory?: string;
  nutrition: {
    per8g: Record<string, string>;
    per100g: Record<string, string>;
    rda: Record<string, string>;
  };
};

const nutritionRows = [
  "Energy (kcal)",
  "Protein (g)",
  "Carbohydrates (g)",
  "of which Sugars (g)",
  "Total Fat (g)",
  "Saturated Fat (g)",
  "Trans Fat (g)",
  "Dietary Fiber (g)",
  "Cholesterol (mg)",
  "Calcium (mg)",
  "Iron (mg)",
  "Magnesium (mg)",
  "Potassium (mg)",
  "Phosphorus (mg)",
] as const;

function buildNutrition(
  per8g: string[],
  rda: string[],
  per100g: string[]
) {
  const per8gObj: Record<string, string> = {};
  const rdaObj: Record<string, string> = {};
  const per100gObj: Record<string, string> = {};
  nutritionRows.forEach((label, i) => {
    per8gObj[label] = per8g[i] ?? "-";
    rdaObj[label] = rda[i] ?? "-";
    per100gObj[label] = per100g[i] ?? "-";
  });
  return { per8g: per8gObj, rda: rdaObj, per100g: per100gObj };
}

export const products: Product[] = [
  {
    slug: "classic-ghee-roast-makhana",
    name: "Lily Puffs",
    flavor: "Classic Ghee Roast Makhana",
    collection: "Rituals",
    tagline: "Slow-roasted in pure ghee for a rich, timeless flavour",
    price: 15,
    netWeight: "8g",
    accent: "ghee",
    frontImage: "/images/ghee-roast-front.webp",
    backImage: "/images/ghee-roast-back.webp",
    description:
      "Light yet nourishing makhana slow-roasted in pure ghee. A timeless fasting food that keeps you full, easy on digestion, and rooted in generations of mindful eating.",
    badges: ["Gluten-Free", "Clean Label", "Protein-Rich", "No Added Salt", "100% Ghee"],
    benefits: ["Light Crispy Munch", "Rich in Magnesium"],
    ingredients: "Makhana 75%, Ghee 25%",
    allergen: "Contains Milk (from Ghee)",
    storage: "Store in a dry place. Consume immediately after opening. This pack may contain Makhana shell pieces.",
    fssai: "20425002000754",
    nutrition: buildNutrition(
      ["39", "0.6", "4.6", "0", "2", "1.3", "0.06", "0.5", "5", "4", "0.08", "4", "30", "21"],
      ["24%", "15%", "19%", "-", "38%", "73%", "<2%", "20%", "21%", "4%", "5%", "12%", "8%", "37%"],
      ["485", "7.3", "57.7", "0", "25.3", "16", "0.75", "5.7", "64", "45", "1.05", "50", "375", "262"]
    ),
  },
  {
    slug: "cheesy-garlic-burst",
    name: "Lily Puffs",
    flavor: "Cheesy Garlic Burst",
    collection: "Daily Crunch",
    tagline: "A creamy, garlicky explosion of flavour in every crunchy bite",
    price: 15,
    netWeight: "8g",
    accent: "cheesy",
    frontImage: "/images/cheesy-garlic-front.webp",
    backImage: "/images/cheesy-garlic-back.webp",
    description:
      "Bold cheesy creaminess with a garlicky punch, packed into a guilt-free crunch.",
    badges: ["Gluten-Free", "Clean Label", "Protein-Rich", "100% Natural"],
    benefits: ["Light Crispy Munch", "Rich in Magnesium"],
    ingredients:
      "Makhana, Cold pressed sunflower oil, Cheese Powder, Salt, Sugar, Blended Spices, Hydrolysed Vegetable Protein, Acidity Regulator, Anticaking Agent (E-552)",
    allergen: "Contains Milk & Milk Products (from cheese powder, hydrolysed vegetable protein)",
    storage: "Store in a dry place. Consume immediately after opening. This pack may contain Makhana shell pieces.",
    fssai: "20425002000754",
    nutrition: buildNutrition(
      ["39", "0.6", "4.6", "0", "2", "1.3", "0.06", "0.5", "5", "4", "0.08", "4", "30", "21"],
      ["24%", "15%", "19%", "-", "38%", "73%", "<2%", "20%", "21%", "4%", "5%", "12%", "8%", "37%"],
      ["485", "7.3", "57.7", "0", "25.3", "16", "0.75", "5.7", "64", "45", "1.05", "50", "375", "262"]
    ),
  },
  {
    slug: "banarasi-imli-pop",
    name: "Lily Puffs",
    flavor: "Banarasi Imli Pop",
    collection: "Origins",
    tagline: "Tangy tamarind magic inspired by the streets of Banaras",
    price: 15,
    netWeight: "8g",
    accent: "imli",
    frontImage: "/images/banarasi-imli-front.webp",
    backImage: "/images/banarasi-imli-back.webp",
    description: "Tangy tamarind magic inspired by the streets of Banaras.",
    badges: ["Gluten-Free", "Clean Label", "Protein-Rich", "100% Natural"],
    benefits: ["Light Crispy Munch", "Rich in Magnesium"],
    ingredients:
      "Makhana, Imli Puree, Cold Pressed Groundnut Oil, Black Salt, Jeera Powder, Dry Ginger Powder, Dry Mango Powder",
    allergen: "Contains Groundnut oil (Peanuts). May contain: Traces of milk, soy, or nuts (depending on facility)",
    storage: "Store in a dry place. Consume immediately after opening. This pack may contain Makhana shell pieces.",
    fssai: "20425002000754",
    nutrition: buildNutrition(
      ["28", "0.5", "4.7", "1.2", "0.9", "0.2", "-", "0.6", "0", "4", "0.1", "5", "44", "14"],
      ["18%", "13%", "20%", "-", "17%", "13%", "-", "25%", "0%", "5%", "9%", "14%", "12%", "25%"],
      ["354", "6.5", "59", "15", "10.8", "2.5", "-", "7", "0", "48", "1.7", "60", "550", "175"]
    ),
  },
  {
    slug: "seoul-spice-glaze",
    name: "Lily Puffs",
    flavor: "Seoul Spice Glaze",
    collection: "Origins",
    tagline: "Sweet-heat Korean glaze with a bold Gochujang kick",
    price: 15,
    netWeight: "8g",
    accent: "seoul",
    frontImage: "/images/seoul-spice-front.webp",
    backImage: "/images/seoul-spice-back.webp",
    description:
      "A first-of-its-kind Korean gochujang-inspired flavour in Indian snacking. Sweet, spicy, and bold in every crunch.",
    badges: ["Gluten-Free", "Clean Label", "Protein-Rich", "100% Natural"],
    benefits: ["Light Crispy Munch", "Rich in Magnesium"],
    ingredients:
      "Makhana, (Imported Gochujang Paste, of which; Corn Starch Syrup, refined wheat flour, water, composite seasoning (Hot Pepper Powder, Refined Salt, Garlic, Onion), Wheat, Monosodium L-Glutamate, Potassium Sorbate (Preservative), Barley malt), and cold pressed chilli sesame oil, vinegar, brown sugar, tapioca starch, garlic powder, onion powder.",
    allergen: "Wheat, Barley, Sesame, Soy (from MSG). May contain traces of Milk or Nuts depending on facility.",
    storage: "Store in a dry place. Consume immediately after opening. This pack may contain Makhana shell pieces.",
    fssai: "20425002000754",
    advisory:
      "For sensitive consumers: highlights high sodium and presence of gluten & sesame. Contains Monosodium L-Glutamate. Not recommended for infants below 12 months and pregnant women.",
    nutrition: buildNutrition(
      ["31.6", "0.6", "5.5", "1.0", "0.8", "0.09", "0.0", "0.35", "0", "2.8", "0.07", "3.1", "24", "15.6"],
      ["20%", "16%", "23%", "-", "16%", "6%", "-", "16%", "0%", "4%", "5%", "9%", "6%", "28%"],
      ["395", "7.9", "68.4", "13.0", "10.1", "1.1", "0.0", "4.4", "0", "35", "0.90", "38.5", "300", "195"]
    ),
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const brand = {
  name: "SVADURA",
  legalName: "Svadura Wellness Foods",
  category: "Premium Wellness Foods",
  primaryProduct: "Premium Makhana",
  address: "Prabha Niketan, East Ram Krishna Nagar, Near Bypass, Patna, Bihar 800027",
  phone: "+91 9147728715",
  whatsapp: "https://wa.me/919147728715",
  email: "admin@svadura.com",
  whatsappMessage: "Hello SVADURA, I would like to know more about your products.",
};
