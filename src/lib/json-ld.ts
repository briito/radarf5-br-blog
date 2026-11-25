// Serializa dados estruturados (JSON-LD) de forma segura para uso em <script>.
// O caractere "<" é escapado para evitar o fechamento acidental da tag.
export function jsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const SITE_NAME = "Radar F5 BR";

// Autores que representam a própria redação (declarados como Organization,
// não como Person, nos dados estruturados). Inclui o autor padrão do schema.
export const ORGANIZATION_AUTHORS: string[] = [SITE_NAME, "Redação Radar F5"];
