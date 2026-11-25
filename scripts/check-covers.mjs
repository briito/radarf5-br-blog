// Verifica, antes do build, se os artigos publicados (draft: false) têm capa
// em .webp e .jpg dentro de public/. Falha o build se faltar algum arquivo,
// para evitar og:image e dados estruturados apontando para uma imagem inexistente.
// Não valida dimensões (1200x675): conferir manualmente.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ARTICLES_DIR = "src/content/articles";
const problems = [];

function field(front, name) {
  const m = front.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, "m"));
  return m ? m[1].replace(/^["']|["']$/g, "") : undefined;
}

for (const file of readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"))) {
  const text = readFileSync(join(ARTICLES_DIR, file), "utf-8");
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) {
    problems.push(`${file}: frontmatter não encontrado.`);
    continue;
  }
  if (field(fm[1], "draft") === "true") continue; // rascunhos não são publicados

  const image = field(fm[1], "image");
  if (!image) {
    problems.push(`${file}: campo "image" ausente.`);
    continue;
  }
  if (!image.endsWith(".webp")) {
    problems.push(`${file}: a capa deve ser .webp (encontrado: ${image}).`);
    continue;
  }
  for (const path of [image, image.replace(/\.webp$/, ".jpg")]) {
    if (!existsSync(join("public", path))) {
      problems.push(`${file}: arquivo de capa não encontrado em public${path}.`);
    }
  }
}

if (problems.length) {
  console.error("\nVerificação de capas falhou:\n- " + problems.join("\n- ") + "\n");
  process.exit(1);
}
console.log("Verificação de capas: OK.");
