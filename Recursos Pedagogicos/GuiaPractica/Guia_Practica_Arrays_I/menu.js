import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { loadExercises } from '../lib/loadExercises.js';
import { runExercise } from '../lib/runExercise.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXER_DIR = path.join(__dirname, 'ejercicios');

const rl = readline.createInterface({ input, output });

function printHeader(title = 'Runner de Ejercicios (Node.js)') {
  console.clear();
  console.log('='.repeat(60));
  console.log(title);
  console.log('='.repeat(60));
}

function formatTags(tags) {
  return (tags || []).join(', ');
}

async function main() {
  let all = await loadExercises(EXER_DIR);
  let filtered = all;

  while (true) {
    printHeader();
    if (filtered.length === 0) {
      console.log('No hay ejercicios (ajustá el filtro o agrega archivos).');
    } else {
      console.log('N°  │ Módulo                  │ Título                       │ Tags');
      console.log('----┼--------------------------┼------------------------------┼---------------------------');
      filtered.forEach((ex, idx) => {
        const n = String(idx + 1).padStart(2, ' ');
        console.log(
          `${n}  │ ${ex.moduleId.padEnd(24)} │ ${ex.title.padEnd(28)} │ ${formatTags(ex.tags)}`
        );
      });
    }

    console.log('\nComandos:');
    console.log('- número → ejecutar ese ejercicio');
    console.log("- a      → ejecutar TODOS (uno por vez)");
    console.log("- /texto → filtrar por texto (en id, título o tags)");
    console.log("- c      → limpiar filtro");
    console.log("- q      → salir\n");

    const ans = (await rl.question('Elegí una opción: ')).trim();

    if (ans.toLowerCase() === 'q') break;

    if (ans.toLowerCase() === 'c') {
      filtered = all;
      continue;
    }

    if (ans.toLowerCase() === 'a') {
      for (const ex of filtered) {
        printHeader(`Ejecutando: ${ex.title}`);
        await runExercise(ex);
        await rl.question('\n[Enter] para continuar...');
      }
      continue;
    }

    if (ans.startsWith('/')) {
      const q = ans.slice(1).toLowerCase();
      filtered = all.filter(ex =>
        ex.title.toLowerCase().includes(q) ||
        ex.moduleId.toLowerCase().includes(q) ||
        formatTags(ex.tags).toLowerCase().includes(q)
      );
      continue;
    }

    const num = Number(ans);
    if (!Number.isInteger(num) || num < 1 || num > filtered.length) {
      console.log('Opción inválida.'); 
      await rl.question('[Enter] para continuar...');
      continue;
    }

    const ex = filtered[num - 1];
    printHeader(`Ejecutando: ${ex.title}`);
    await runExercise(ex);
    await rl.question('\n[Enter] para continuar...');
  }

  await rl.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
