// Serializa dados estruturados (JSON-LD) de forma segura para uso em <script>.
// O caractere "<" é escapado para evitar o fechamento acidental da tag.
export function jsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const SITE_NAME = "Radar F5 BR";
