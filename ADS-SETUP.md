# Espaço de anúncio (AdSense) e CTA de afiliado

## AdSense

O site reserva **um único espaço de anúncio por artigo**, logo abaixo do
breadcrumb (Home > Artigos > Categoria) e acima do título. Enquanto o
AdSense não estiver ativo, esse espaço não renderiza nada (sem caixa vazia).

Para ativar, defina estas variáveis de ambiente (por exemplo, na Vercel):

- `ADS_ENABLED=true`
- `ADSENSE_CLIENT_ID` — ID do cliente do AdSense
- `ADSENSE_SLOT_TOP` — ID do bloco de anúncio do topo

Sem as três, nada é carregado nem exibido. O script do AdSense é incluído no
`<head>` apenas quando `ADS_ENABLED=true` e `ADSENSE_CLIENT_ID` existe.

**Antes de ativar:** a Política de Privacidade (revisada em 09/11/2026)
afirma que o site ainda não exibe anúncios nem usa ferramentas de análise.
Antes de ativar o AdSense, atualizar as seções 5 e 13 dessa política e
conferir a necessidade de aviso e consentimento de cookies, conforme o que
for realmente carregado.

## CTA no final do artigo

No final do artigo pode aparecer uma chamada com botão. Ela só aparece se o
artigo tiver `ctaUrl` **e** `ctaText`; não existe texto padrão genérico.

Frontmatter (topo do arquivo `.md`):

```yaml
ctaType: "afiliado"          # "afiliado" (padrão) | "informativo"
ctaUrl: "https://..."
ctaText: "Texto do convite, em 1 ou 2 parágrafos (separe com uma linha em branco)."
ctaButtonLabel: "Ver oferta"   # opcional (padrão: "Acessar")
```

- `afiliado`: mostra "Link de afiliado — podemos ganhar uma comissão." e usa
  `rel="sponsored noopener"`.
- `informativo`: link sem comissão (página oficial, outro conteúdo). Sem aviso
  e com `rel="noopener"`.

Use somente links de afiliado reais, fornecidos pelo proprietário. Nunca
invente links, preços ou condições.

## Link de afiliado na imagem de capa

O campo opcional `imageLink` transforma a capa em link de afiliado
(`rel="sponsored noopener"`) e exibe abaixo dela o aviso de comissão.

## Links de afiliado dentro do texto

Links colocados no corpo do artigo (Markdown) **não recebem `rel` automático**.
Ao inserir um link de afiliado no texto, use HTML com
`rel="sponsored noopener"` até existir uma solução automatizada (pendência).
