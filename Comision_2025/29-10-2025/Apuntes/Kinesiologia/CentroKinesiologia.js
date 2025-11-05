// index.js
// ================================================
// Centro de Kinesiología — Modelo + Tests simples
// ================================================
// Objetivo: resolver el enunciado con código claro
// y pedagógico, usando reduce, map, filter, find, 
// every, some y Math.max.
// Ejecutar:  node index.js
// -----------------------------------------------

// ========= Clases de dominio =========

class Paciente {
  constructor(nombre, edad, dolor, fortaleza) {
    this.nombre = nombre;
    this.edad = edad;
    this.dolor = dolor;         // número (puede tener decimales)
    this.fortaleza = fortaleza; // número
    this.rutina = [];           // array de aparatos
  }

  getDolor() { return this.dolor; }
  getFortaleza() { return this.fortaleza; }

  setRutina(aparatos) {
    // Guardamos una copia superficial del array (las instancias se comparten a propósito)
    this.rutina = [...aparatos];
  }

  puedeUsar(aparato) {
    return aparato.puedeUsar(this);
  }

  usar(aparato) {
    if (this.puedeUsar(aparato)) {
      aparato.aplicar(this);
      return true;
    }
    return false;
  }

  // ¿Puede hacer la rutina asignada? (se verifica al inicio, sin modificar estado)
  puedeHacerRutina() {
    // every: debe poder usar TODOS al inicio
    return this.rutina.every(a => a.puedeUsar(this));
  }

  // Diagnóstico: primer aparato que no puede usar (si existiera)
  primerBloqueo() {
    // find: primera restricción
    return this.rutina.find(a => !a.puedeUsar(this)) || null;
  }

  // Ejecuta la sesión completa si la puede hacer (usa reduce para iterar ordenadamente)
  realizarSesion() {
    if (!this.puedeHacerRutina()) return false;

    // reduce: aplicamos cada aparato en orden
    this.rutina.reduce((pac, aparato) => {
      aparato.aplicar(pac);
      return pac;
    }, this);

    return true;
  }
}

// Aparatos (cada tipo en su propia clase)
// ---------------------------------------

class Magneto {
  constructor() { this.nombre = "Magneto"; }
  puedeUsar(_paciente) { return true; } // cualquier persona
  aplicar(p) {
    // Disminuye 10% el dolor
    p.dolor = Math.max(0, p.dolor * 0.90); // Math.max para no ir por debajo de 0
  }
}

class Bicicleta {
  constructor() { this.nombre = "Bicicleta"; }
  puedeUsar(p) { return p.edad > 8; } // solo mayores a 8
  aplicar(p) {
    // -4 dolor, +3 fortaleza
    p.dolor = Math.max(0, p.dolor - 4);
    p.fortaleza = p.fortaleza + 3;
  }
}

class Minitramp {
  constructor() { this.nombre = "Minitramp"; }
  puedeUsar(p) { return p.dolor < 20; } // dolor inferior a 20
  aplicar(p) {
    // +10% de la edad a la fortaleza
    p.fortaleza = p.fortaleza + (p.edad * 0.10);
  }
}

// ========= Utilidades de test (mini framework) =========

function assertEq(actual, esperado, msg) {
  const ok = Object.is(actual, esperado);
  if (!ok) {
    console.error(`❌  ${msg}\n   → Esperado: ${esperado}\n   → Actual:   ${actual}`);
  } else {
    console.log(`✅  ${msg}`);
  }
  return ok;
}

function assertAlmostEq(actual, esperado, tol, msg) {
  const ok = Math.abs(actual - esperado) <= tol;
  if (!ok) {
    console.error(`❌  ${msg}\n   → Esperado: ${esperado} ±${tol}\n   → Actual:   ${actual}`);
  } else {
    console.log(`✅  ${msg}`);
  }
  return ok;
}

function header(txt) {
  console.log("\n" + "=".repeat(60));
  console.log(txt);
  console.log("=".repeat(60));
}

// ========= Tests Parte 1 =========
function testsParte1() {
  header("Tests Parte 1");

  // Personas
  const leonardo = new Paciente("Leonardo", 40, 10, 20);
  const milena   = new Paciente("Milena", 3, 30, 50);

  // Un aparato de cada tipo
  const magneto    = new Magneto();
  const bicicleta  = new Bicicleta();
  const minitramp  = new Minitramp();

  // --- Verificación de acceso a aparatos ---
  // Leonardo puede usar todos
  const leoPuedeTodos = [magneto, bicicleta, minitramp].every(a => leonardo.puedeUsar(a));
  assertEq(leoPuedeTodos, true, "Leonardo puede usar los tres aparatos");

  // Milena solo el magneto
  const milenaPermitidos = [magneto, bicicleta, minitramp].filter(a => milena.puedeUsar(a));
  const nombresMilena = milenaPermitidos.map(a => a.nombre); // map
  assertEq(nombresMilena.length, 1, "Milena solo puede usar un aparato");
  assertEq(nombresMilena[0], "Magneto", "Milena puede usar el Magneto");

  // --- Tests independientes ---
  // 1) Leonardo + Magneto una vez → dolor 9
  {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Magneto());
    assertAlmostEq(L.getDolor(), 9.0, 1e-9, "Leonardo tras Magneto → dolor 9");
  }

  // 2) Milena + Magneto una vez → dolor 27
  {
    const M = new Paciente("Milena", 3, 30, 50);
    M.usar(new Magneto());
    assertAlmostEq(M.getDolor(), 27.0, 1e-9, "Milena tras Magneto → dolor 27");
  }

  // 3) Leonardo + Bicicleta una vez → dolor 6, fortaleza 23
  {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Bicicleta());
    assertEq(L.getDolor(), 6, "Leonardo tras Bicicleta → dolor 6");
    assertEq(L.getFortaleza(), 23, "Leonardo tras Bicicleta → fortaleza 23");
  }

  // 4) Leonardo + Minitramp una vez → fortaleza 24
  {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Minitramp());
    assertEq(L.getFortaleza(), 24, "Leonardo tras Minitramp → fortaleza 24");
  }

  // (Uso de .some para mostrar ejemplo: ¿alguno restringe por edad?)
  const algunoRestringeEdad = [magneto, bicicleta, minitramp].some(a => a.nombre === "Bicicleta");
  assertEq(algunoRestringeEdad, true, "Ejemplo .some: existe un aparato con restricción por edad (Bicicleta)");
}

// ========= Tests Parte 2 =========
function testsParte2() {
  header("Tests Parte 2");

  // Personas base
  const leonardo = new Paciente("Leonardo", 40, 10, 20);
  const milena   = new Paciente("Milena", 3, 30, 50);

  // Rutina de Leonardo: bicicleta, minitramp, misma bicicleta de nuevo, magneto
  const biciL   = new Bicicleta();
  const miniL   = new Minitramp();
  const magL    = new Magneto();
  leonardo.setRutina([biciL, miniL, biciL, magL]); // la misma bici 2 veces

  // Rutina de Milena: magneto, bicicleta
  const magM  = new Magneto();
  const biciM = new Bicicleta();
  milena.setRutina([magM, biciM]);

  // Verificaciones
  assertEq(leonardo.puedeHacerRutina(), true, "Leonardo puede hacer su rutina");
  // Ejecuta la sesión
  const okLeo = leonardo.realizarSesion();
  assertEq(okLeo, true, "Leonardo realiza la sesión completa");
  assertAlmostEq(leonardo.getDolor(), 1.8, 1e-9, "Leonardo tras sesión → dolor 1.8");
  assertEq(leonardo.getFortaleza(), 30, "Leonardo tras sesión → fortaleza 30");

  // Milena NO puede hacer su rutina (por la bicicleta)
  assertEq(milena.puedeHacerRutina(), false, "Milena NO puede hacer su rutina");
  const primerBloqueo = milena.primerBloqueo();
  if (primerBloqueo) {
    console.log(`(Diagnóstico) Primer bloqueo de Milena: ${primerBloqueo.nombre}`);
  }

  // Ejemplo extra con reduce/map para reporte de nombres de rutina de Leonardo
  const nombresLeo = leonardo.rutina.map(a => a.nombre).reduce((acc, nom, i) => {
    // Construimos un string "Paso1:Bicicleta -> Paso2:Minitramp -> ..."
    const paso = `Paso${i + 1}:${nom}`;
    return acc.length === 0 ? paso : `${acc} -> ${paso}`;
  }, "");
  console.log("Rutina de Leonardo:", nombresLeo);
}

// ========= Ejecutar tests =========
testsParte1();
testsParte2();
