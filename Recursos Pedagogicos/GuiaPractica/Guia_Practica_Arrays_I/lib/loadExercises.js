// lib/loadExercises.js
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    if (e.isFile() && e.name.endsWith(".js")) return [full];
    return [];
  });
}

export async function loadExercises(rootDir) {
  const files = walk(rootDir).sort();
  const loaded = [];
  for (const f of files) {
    const mod = await import(pathToFileURL(f).href);
    const ex = mod.default || mod; // soporta export default o module.exports
    // Normalizamos metadatos
    loaded.push({
      file: f,
      moduleId: path
        .relative(rootDir, f)
        .replace(/\\/g, "/")
        .replace(/\.js$/, ""),
      title: ex.title || path.basename(f, ".js"),
      tags: ex.tags || [],
      prompt: ex.prompt || "",
      expected: ex.expected,
      run: ex.run,
    });
  }
  return loaded;
}
