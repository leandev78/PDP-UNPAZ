// lib/runExercise.js
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export async function runExercise(ex) {
  if (ex.prompt) {
    console.log("💡 Enunciado:");
    console.log(ex.prompt);
    console.log("-".repeat(60));
  }

  if (typeof ex.run !== "function") {
    console.log("⚠️  Este ejercicio no exporta una función run().");
    return;
  }

  const result = await ex.run();
  console.log("\n🖨️  Salida:");
  console.log(result);

  if (typeof ex.expected !== "undefined") {
    const ok = deepEqual(result, ex.expected);
    console.log(`\n✅ Test: ${ok ? "OK" : "FALLÓ"}`);
    if (!ok) {
      console.log("Esperado:", ex.expected);
    }
  }
}
