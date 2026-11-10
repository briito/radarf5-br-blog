// Plugin rehype: adiciona rel="sponsored noopener" aos links EXTERNOS
// (http/https para outro domínio) do corpo dos artigos em Markdown.
// Links internos, âncoras, mailto: e tel: não são alterados.
// Sem dependências externas.

export default function rehypeExternalLinks(options = {}) {
  const siteHost = (options.siteHost ?? "").toLowerCase();

  function isExternal(href) {
    if (typeof href !== "string" || !/^https?:\/\//i.test(href)) return false;
    try {
      const host = new URL(href).hostname.toLowerCase();
      return host !== siteHost;
    } catch {
      return false;
    }
  }

  function walk(node) {
    if (node.type === "element" && node.tagName === "a" && isExternal(node.properties?.href)) {
      const current = node.properties.rel;
      const list = Array.isArray(current)
        ? current
        : typeof current === "string"
          ? current.split(/\s+/)
          : [];
      const rel = new Set(list.filter(Boolean));
      rel.add("sponsored");
      rel.add("noopener");
      node.properties.rel = [...rel];
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }

  return (tree) => walk(tree);
}
