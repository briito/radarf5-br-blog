export const CATEGORIES = [
  { slug: "reviews", name: "Reviews", description: "Análises individuais de produtos físicos e digitais, com vantagens, limitações e indicação de uso." },
  { slug: "comparativos", name: "Comparativos", description: "Comparações claras entre produtos, ferramentas e serviços para ajudar na escolha." },
  { slug: "recomendacoes", name: "Recomendações", description: "Seleções, alternativas e guias de compra para diferentes necessidades e orçamentos." },
] as const;
export type CategoryName = (typeof CATEGORIES)[number]["name"];
export const CATEGORY_NAMES = CATEGORIES.map((c) => c.name) as [CategoryName, ...CategoryName[]];
export function getCategoryByName(name: string) { return CATEGORIES.find((c) => c.name === name); }
export function categoryHref(name: string) { const category = getCategoryByName(name); return category ? `/categorias/${category.slug}/` : "/artigos/"; }
