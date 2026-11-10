// src/content.config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORY_NAMES } from "./lib/categories";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    author: z.string().default("Redação Radar F5"),
    pubDate: z.coerce.date(),
    // Data da última revisão relevante (exibida como "Atualizado em").
    updatedDate: z.coerce.date().optional(),
    // Precisa ser uma das categorias definidas em src/lib/categories.ts
    category: z.enum(CATEGORY_NAMES),
    image: z.string(),
    imageAlt: z.string().default("Imagem ilustrativa"),
    // Link de afiliado opcional aplicado à imagem de capa (exibe aviso de comissão).
    imageLink: z.string().url().optional(),
    draft: z.boolean().optional().default(false),

    // Data em que preços, condições e especificações citados foram conferidos
    // na fonte oficial. Aceito pelo schema, mas AINDA NÃO é exibido no site
    // (a exibição depende de aprovação). Informe sempre que o artigo citar
    // dados que mudam com o tempo.
    verifiedDate: z.coerce.date().optional(),

    // Slugs de artigos relacionados (links internos / cluster).
    // Se vazio, o site sugere outros artigos da mesma categoria.
    related: z.array(z.string()).default([]),

    // Chamada (CTA) no fim do artigo. Só aparece se ctaUrl E ctaText existirem.
    // ctaType: "afiliado" (padrão: exibe aviso de comissão e usa rel="sponsored")
    // ou "informativo" (link sem comissão, como página oficial ou outro
    // conteúdo: sem aviso, rel="noopener").
    ctaUrl: z.string().url().optional(),
    ctaText: z.string().optional(),
    ctaButtonLabel: z.string().optional().default("Acessar"),
    ctaType: z.enum(["afiliado", "informativo"]).default("afiliado"),
  }),
});

export const collections = { articles };
