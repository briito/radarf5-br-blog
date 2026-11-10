# Blog Radar F5 BR

Blog brasileiro de reviews, comparativos e recomendações de produtos físicos
e digitais, com monetização transparente por marketing de afiliados.

- Domínio oficial: https://blog.radarf5.com.br
- Stack: Astro 7, TypeScript, implantação prevista na Vercel, npm.
- Requisito: Node.js 22.12 ou superior.

## Comandos

```
npm install       # instala dependências
npm run dev       # servidor local
npm run build     # compila o site
npm run preview   # pré-visualiza a compilação
```

## Estrutura

- `src/content/articles/` — artigos em Markdown (frontmatter em `src/content.config.ts`).
- `src/lib/categories.ts` — categorias oficiais: Reviews, Comparativos, Recomendações.
- `src/pages/` — páginas, listagens, categorias, institucionais e `api/contact.ts`.
- `src/components/` e `src/layouts/` — componentes e layouts.
- `public/` — favicon, `robots.txt` e `images/` (capas dos artigos).

## Variáveis de ambiente

- `RESEND_API_KEY` — envio do formulário de contato.
- `ADS_ENABLED`, `ADSENSE_CLIENT_ID`, `ADSENSE_SLOT_TOP` — AdSense (ver `ADS-SETUP.md`).

## Documentação

- `CONTENT-GUIDE.md` — como escrever e publicar artigos.
- `ADS-SETUP.md` — AdSense e CTA de afiliado.
- `SECURITY-NOTES.md` — notas de segurança conhecidas.
- `REESTRUTURACAO-BLOG-RADAR-F5-BR.md` — histórico da reestruturação.
