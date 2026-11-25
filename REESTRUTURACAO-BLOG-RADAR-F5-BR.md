# Reestruturação — Radar F5 BR

> Histórico. As seções com numeração de "Etapa" abaixo vêm de uma fase anterior do projeto e são mantidas apenas como registro. O estado atual do código está descrito nos demais documentos e na seção final.

- Domínio canônico e sitemap: https://blog.radarf5.com.br
- Categorias: Reviews, Comparativos e Recomendações.
- Cinco artigos anteriores removidos de `src/content/articles` conforme autorização.
- Artigo pilar Hostinger criado como **rascunho não publicado**: faltam pesquisa atualizada, imagem real e link de afiliado fornecido pelo proprietário.
- CTA contextual reutilizável é exibida automaticamente em outros artigos **somente depois que o guia for publicado**.
- Preservados: Astro, Vercel, layout, páginas institucionais, contato, publicidade e histórico Git.
- Revisar antes da publicação: informações institucionais e legais, variáveis de ambiente do formulário, configurações da Vercel, links de afiliados e imagem do guia.
- As URLs dos cinco artigos excluídos deixarão de ser geradas; se publicadas anteriormente, retornarão 404 após o deploy. Avaliar 410 ou redirecionamento somente quando houver justificativa editorial.
- Nenhum preço, parceria ou teste de produto foi inventado.

**Atenção ao repositório:** o ZIP preserva `.git`, portanto versões históricas dos artigos continuam recuperáveis no histórico Git. `node_modules` e `dist` foram excluídos do pacote por serem artefatos gerados, mas estavam rastreados no repositório original. Recomenda-se ajustar o rastreamento desses diretórios em um commit posterior.

**Validação:** a tentativa de instalar dependências offline falhou por falta de pacote em cache; o build não pôde ser executado neste ambiente.

---

## Atualização — Etapa 1: limpeza técnica e padronização (Claude, 09/11/2026)

Escopo autorizado pelo proprietário. Nenhuma página legal, o artigo pilar
Hostinger, o layout, o framework e a configuração da Vercel foram alterados.

**Conferências em relação ao texto acima**

- O ZIP leve recebido **não contém `.git`** (nem `.gitignore`), ao contrário do
  que a nota sobre o repositório indica. O histórico depende do repositório
  original do proprietário.
- Build: o proprietário informou ter executado `npm install` e `npm run build`
  em 09/11/2026, com sucesso e sem alterar o código. A validação não foi feita
  pelo Claude.

**Alterações**

- Documentação reescrita para o novo posicionamento: `CONTENT-GUIDE.md`,
  `ADS-SETUP.md`, `README.md`; `SECURITY-NOTES.md` sem as rotas `/en/` e `/es/`.
- Frontmatter: `ctaType` agora é `afiliado` (padrão) ou `informativo` (antes
  `isca`, `produto`, `afiliado`); novo campo opcional `verifiedDate`
  (ainda não exibido no site). Tipagens ajustadas em `ArticleCTA.astro` e
  `ArticleLayout.astro`.
- Comentários antigos atualizados em `content.config.ts` e `styles.css`
  (somente comentários; nenhum estilo alterado).
- Removidos: `AffiliateCTA.astro` e `rehype-ad-slots.mjs` (sem uso),
  `index.html` da raiz (resto de teste), e as 7 imagens dos cinco artigos
  antigos. A pasta `public/images/` foi mantida com `.gitkeep`.

**Pendências**

- `dist/` e `node_modules/` estavam rastreados no repositório original:
  ajustar o rastreamento e criar `.gitignore` (depende de autorização).
- Páginas legais (Termos ainda cita Hotmart e Kiwify; datas de setembro) e
  Política de Cookies.
- Artigo pilar Hostinger: imagem `/images/hostinger-guia.webp` (e `.jpg`)
  inexistente, pesquisa, planos, link de afiliado.
- Exibir `verifiedDate`; aviso de afiliado no início do artigo;
  `rel="sponsored"` automático em links do texto; dados estruturados.

---

## Atualização — Etapa 2 (parcial): páginas legais (Claude, 09/11/2026)

Autorizada pelo proprietário. Somente textos de `politica-de-privacidade.astro`
e `termos-de-uso.astro`; layout, código, rotas e demais páginas não foram
alterados. Build não executado pelo Claude (ambiente sem rede).

**Política de Privacidade:** marca "Radar F5 BR"; data 09/11/2026; descrição do
uso temporário do IP em memória no formulário; menção a Vercel (hospedagem) e
Resend (e-mail do formulário) e à possível transferência internacional;
cookies reescritos (o site não usa análise nem publicidade hoje; cookies de
terceiros em links externos; atualização antes de ativar AdSense ou análise);
seção de afiliados com as plataformas atuais; seção 13 ajustada ao estado real.

**Termos de Uso:** marca "Radar F5 BR"; data 09/11/2026; fim das menções a
Hotmart e Kiwify; plataformas atuais; base das análises, preços com data e fonte,
marcas de terceiros, afiliados e cursos sem garantia de renda.

**Pendências:** revisão por profissional jurídico antes da publicação;
identificação do responsável (nome ou CNPJ), se desejada; confirmar Vercel e
Resend em produção. (Atualizado em 10/11/2026: remetente do formulário é
`contato@blog.radarf5.com.br`, o destinatário é `contato@radarf5.com.br`, e rodapé,
títulos e `og:site_name` usam "Radar F5 BR".)

---

## Atualização — 25/11/2026 (Claude)

Autorizada pelo proprietário. Build **não** executado pelo Claude (ambiente sem
rede); `npm install` e `npm run build` ficam com o proprietário, no VS Code.
Testados pelo Claude, isoladamente: `scripts/check-covers.mjs` (aprova com
apenas rascunhos; falha com artigo publicado sem capa) e o plugin
`rehype-external-links.mjs` (comportamento dos links).

**Situação confirmada no código**

- Aviso de afiliado no início do artigo, `rel="sponsored"` automático em links
  do texto, exibição de "Verificado em" (`verifiedDate`) e dados estruturados
  (`Article`, `BreadcrumbList`, `Organization`, `WebSite`) já estavam
  implementados. Os comentários que diziam o contrário foram corrigidos.
- `.gitignore` existe neste ZIP. Se `dist` e `node_modules` ainda estão
  rastreados no repositório do proprietário, só é possível confirmar no
  repositório original (`git ls-files`).

**Alterações**

- Identificação da empresa (`src/lib/company.ts`): rodapé, Sobre nós, Política
  de Privacidade e Termos de Uso. Endereço não exibido, por decisão do
  proprietário. Datas das páginas legais atualizadas para 25/11/2026.
- Nome padronizado como "Radar F5 BR" nas páginas legais e nos documentos;
  corrigido o erro "Radar F5 BR BR" na Política de Privacidade.
- Plugin de links: todo link externo continua `sponsored noopener`, exceto
  domínios da lista `nonCommercialHosts` (`astro.config.mjs`), que recebem só
  `noopener`.
- Formulário de contato: ausência de `RESEND_API_KEY` gera resposta de erro
  clara (503); limites de tamanho nos campos (servidor e formulário); quebras de
  linha removidas do nome usado no assunto do e-mail.
- Dados estruturados: autor "Redação Radar F5" passa a ser `Organization`.
- Âncora `#transparencia-afiliados` em Sobre nós, usada pelo aviso de afiliados.
- `.env.example` criado.
- `scripts/check-covers.mjs`, executado antes do build (`prebuild`).
- Documentação atualizada: `README.md`, `CONTENT-GUIDE.md`.

**Pendências**

- Revisão jurídica da Política de Privacidade e dos Termos de Uso.
- Confirmar o e-mail de privacidade exibido (`contato@radarf5.com.br`).
- Termos e Política citam Shopee, Mercado Livre, TikTok Shop e Amazon; avaliar
  citar também Hotmart e Kiwify, já previstos no objetivo do projeto.
- Artigo pilar Hostinger (criação e hospedagem de sites): pesquisa, planos,
  capa `.webp` e `.jpg` e link de afiliado.
- Validação do build pelo proprietário.
