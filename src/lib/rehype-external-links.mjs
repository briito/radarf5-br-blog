// Plugin rehype para links EXTERNOS (http/https para outro domínio) do corpo
// dos artigos em Markdown.
//
// Regra (à prova de esquecimento): todo link externo recebe
// rel="sponsored noopener", pois links de afiliado costumam usar domínios
// encurtados ou de redirecionamento. Domínios listados em `nonCommercialHosts`
// (fontes oficiais e de referência, sem comissão) recebem apenas rel="noopener".
// A lista fica em astro.config.mjs; um domínio cobre também seus subdomínios.
//
// Links internos, âncoras, mailto: e tel: não são alterados.
// Sem dependências externas.

export default function rehypeExternalLinks(options = {}) {
  const siteHost = (options.siteHost ?? "").toLowerCase();
  const nonCommercial = (options.nonCommercialHosts ?? []).map((h) => h.toLowerCase());

  function hostOf(href) {
    if (typeof href !== "string" || !/^https?:\/\//i.test(href)) return null;
    try {
      return new URL(href).hostname.toLowerCase();
    } catch {
      return null;
    }
  }

  function isNonCommercial(host) {
    return nonCommercial.some((d) => host === d || host.endsWith("." + d));
  }

  function walk(node) {
    if (node.type === "element" && node.tagName === "a") {
      const host = hostOf(node.properties?.href);
      if (host && host !== siteHost) {
        const current = node.properties.rel;
        const list = Array.isArray(current)
          ? current
          : typeof current === "string"
            ? current.split(/\s+/)
            : [];
        const rel = new Set(list.filter(Boolean));
        if (!isNonCommercial(host)) rel.add("sponsored");
        rel.add("noopener");
        node.properties.rel = [...rel];
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }

  return (tree) => walk(tree);
}
