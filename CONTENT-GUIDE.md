# Guia de conteúdo — Blog Radar F5 BR

Blog brasileiro de **reviews, comparativos e recomendações** de produtos
físicos e digitais (marketplaces, softwares, ferramentas, serviços e cursos).
Domínio oficial: `https://blog.radarf5.com.br`.
Monetização principal: marketing de afiliados, com transparência sobre os
vínculos comerciais. A prioridade é a utilidade para quem vai decidir uma compra.

Este guia descreve como o código funciona hoje. Decisões editoriais e
estratégicas ficam nos documentos oficiais do projeto (01, 02 e 03).

## Categorias (definidas em `src/lib/categories.ts`)

O campo `category` do frontmatter precisa ser exatamente um destes nomes
(o build falha se for diferente). Não criar outras sem autorização.

- **Reviews** — análises individuais de produtos físicos e digitais.
- **Comparativos** — comparações entre produtos, ferramentas e serviços.
- **Recomendações** — seleções, alternativas e guias de compra.

Cada categoria tem uma página própria em `/categorias/<slug>/`.

## Frontmatter de um artigo (`src/content/articles/*.md`)

```yaml
title: ""
slug: "palavras-chave-do-artigo"     # curto e estável; URL publicada não muda
description: ""                      # até ~160 caracteres
pubDate: "AAAA-MM-DD"                # define a ordem de listagem
updatedDate: "AAAA-MM-DD"            # opcional; exibido como "Atualizado em"
verifiedDate: "AAAA-MM-DD"           # opcional; data da conferência de preços/condições
category: "Reviews"                  # Reviews | Comparativos | Recomendações
image: "/images/slug-1200x675.webp"  # 1200x675, .webp, em public/images/
imageAlt: ""
draft: false                         # true = não é publicado nem listado
related: ["outro-slug"]              # links internos; se vazio, usa a mesma categoria
# CTA e link de afiliado (opcionais): ver ADS-SETUP.md
```

Observações:

- **Prévia social:** para cada capa `slug-1200x675.webp` crie também
  `slug-1200x675.jpg` na mesma pasta. O `BaseLayout` usa o `.jpg` em
  `og:image` (Facebook e WhatsApp lidam mal com WebP). Sem o `.jpg`, a prévia
  fica sem imagem.
- **`verifiedDate`:** quando preenchido, o artigo exibe "Verificado em <data>"
  na linha de informações. Preencha-o nos artigos que citam dados que mudam
  (preço, plano, disponibilidade, especificação).
- **`draft: true`:** o artigo não gera página, não aparece em listagens nem no
  sitemap.

## Estrutura recomendada do artigo

Título claro → introdução (a decisão de compra) → **resposta direta**
(quem deve escolher o quê) → características e benefícios → **limitações** →
alternativas → para quem é indicado → perguntas frequentes → próximo passo.
Em comparativos, deixe os critérios da comparação explícitos.

## Regras editoriais essenciais

- Responder à intenção de busca com conteúdo útil, claro e original.
- **Nunca alegar teste próprio que não foi realizado.** Distinguir
  especificações, pesquisa documental, avaliações de consumidores e
  experiência prática.
- Não inventar preços, disponibilidade, avaliações, notas, depoimentos,
  descontos, parcerias, links de afiliados nem resultados.
- Identificar claramente os vínculos comerciais.
- Dados estruturados e avaliações apenas quando forem verdadeiros; nunca
  avaliações fictícias nem marcação enganosa.

## Artigo pilar e chamada para a Hostinger

- O guia `como-criar-site-blog-hostinger` está em **rascunho** (`draft: true`)
  e não deve ser publicado antes de: pesquisa atualizada, comparação
  verificada de planos, imagem apropriada, link real de afiliado fornecido
  pelo proprietário e revisão editorial.
- O componente `HostingerGuideCTA.astro` aparece automaticamente no fim dos
  demais artigos **somente depois que o guia for publicado**, e nunca dentro
  do próprio guia.

## Checklist antes de publicar

- Ajuda o leitor a decidir uma compra e responde à intenção de busca?
- Informações que mudam (preço, plano, regra) têm fonte e data de conferência?
- Distingue fato, especificação, avaliação de terceiros e experiência prática?
- Apresenta limitações e alternativas, não só vantagens?
- Os vínculos comerciais estão identificados e os links de afiliado usam
  `rel="sponsored"` (aplicado automaticamente aos links externos do texto)?
- Tem `description`, `imageAlt`, capa `.webp` + `.jpg` e links internos (`related`)?
- `draft` está como deseja e o build local passa (`npm run build`)?
