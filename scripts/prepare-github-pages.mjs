import { copyFile, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const repositoryName = "romi-design-portfolio";
const basePath = `/${repositoryName}`;
const publicDirectory = resolve("public");
const outputDirectory = resolve(".pages-dist");
const textExtensions = new Set([".css", ".html", ".js", ".json", ".svg", ".txt", ".webmanifest", ".xml"]);

// GitHub Pages размещает проект не в корне домена, а в /romi-design-portfolio/.
// Поэтому копируем статические файлы и добавляем этот префикс только к корневым путям.
function addPagesBasePath(source) {
  return source
    .replace(/(["'`])\/(?!\/|romi-design-portfolio\/)(?=[A-Za-z0-9_.-])/g, `$1${basePath}/`)
    .replace(/url\(\/(?!\/|romi-design-portfolio\/)(?=[A-Za-z0-9_.-])/g, `url(${basePath}/`);
}

async function rewriteTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewriteTextFiles(filePath);
      return;
    }
    if (!textExtensions.has(extname(entry.name).toLowerCase())) return;

    const source = await readFile(filePath, "utf8");
    const prepared = addPagesBasePath(source);
    if (prepared !== source) await writeFile(filePath, prepared, "utf8");
  }));
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(publicDirectory, outputDirectory, { recursive: true });

// Корневая ссылка GitHub Pages сразу открывает портфолио.
await copyFile(join(publicDirectory, "portfolio.html"), join(outputDirectory, "index.html"));
await rewriteTextFiles(outputDirectory);
await writeFile(join(outputDirectory, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages files prepared in ${outputDirectory}`);
