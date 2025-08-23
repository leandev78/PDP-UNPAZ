// ============================================================
// Clase en vivo (versión tests): Funciones y Arrays en JavaScript
// Ejecutar: node clase_funciones_tests.js
// Salida: listado de tests con ok / error y resumen final
// ============================================================

/* Pequeño framework de tests */
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++)
        if (!deepEqual(a[i], b[i])) return false;
      return true;
    }
    const ak = Object.keys(a),
      bk = Object.keys(b);
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (!deepEqual(a[k], b[k])) return false;
    return true;
  }
  return false;
};

let passed = 0,
  failed = 0;
function assertEq(got, expected, label = "") {
  const ok = deepEqual(got, expected);
  if (ok) {
    passed++;
    console.log(`✅ ${label}`);
  } else {
    failed++;
    console.error(
      `❌ ${label}\n   got:      ${JSON.stringify(
        got
      )}\n   expected: ${JSON.stringify(expected)}`
    );
  }
}

/* Funciones bajo prueba (las mismas del guion, organizadas) */

// 1) Funciones puras
function suma(a, b) {
  return a + b;
}

// 2) Anónimas / flecha
const mensaje = (p) => "Bienvenidos!!! " + p;
const saludo = () => "HOLA A TODOS/AS";
const calc = (a, b) => {
  return a + b;
};
const calc2 = (a, b) => a + b;

// 3) Composición
const alCuadrado = (x) => x * x;
const sumaDeCuadrados = (a, b) => alCuadrado(a) + alCuadrado(b);
const cuadradoEntreN = (x) => alCuadrado(x - 1) + alCuadrado(x + 1);
const compose = (f, g) => (x) => f(g(x)); // derecha -> izquierda
const pipe = (f, g) => (x) => g(f(x)); // izquierda -> derecha
const doble = (x) => x * 2;

// 4) Orden superior + currificación
const aplicar = (fn, x) => fn(x);
const multiplicar = (a) => (b) => a * b;
const validarCadena = (maxLen) => (s) =>
  typeof s === "string" && s.length <= maxLen;
const validarNumero = (min) => (value) =>
  typeof value === "number" && value >= min;
const aplicarIVA = (tasa) => (precio) => precio * (1 + tasa);
const componer = (f, g) => (x) => f(g(x));

// 5) Recursión
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const sumaRec = (arr) => (arr.length ? arr[0] + sumaRec(arr.slice(1)) : 0);

// 6) Datos para arrays
const list1 = [2, 3, 1, 4, 5, 6, 7, 8, 5, 9, 0];
const list2 = [2, 4, 6, 8];
const empleados = [
  {
    nombre: "Ana",
    edad: 18,
    pais: "Argentina",
    sexo: "F",
    profesion: "Arquitectura",
  },
  { nombre: "Luis", edad: 30, pais: "Perú", sexo: "M", profesion: "Medicina" },
  {
    nombre: "Fernanda",
    edad: 25,
    pais: "Argentina",
    sexo: "F",
    profesion: "Docente",
  },
  {
    nombre: "Laura",
    edad: 15,
    pais: "Chile",
    sexo: "F",
    profesion: "Arquitectura",
  },
  {
    nombre: "Veronica",
    edad: 22,
    pais: "Chile",
    sexo: "F",
    profesion: "Mecanica",
  },
  {
    nombre: "Miguel",
    edad: 22,
    pais: "Chile",
    sexo: "M",
    profesion: "Electronica",
  },
];
const bolsa = ["manzana", "pera", "mandarina", "uva", "banana"];

// 7) Helpers reduce usados en el guion
const sumaReduce = (arr) => arr.reduce((acc, n) => acc + n, 0);
const textoReduce = (arr) => arr.reduce((acc, item) => acc + " " + item);
const conteoFrutas = (arr) =>
  arr.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
  }, {});
const frutasConMa = (arr) =>
  arr.reduce((acc, fruta) => {
    if (fruta.includes("ma")) acc.push(fruta);
    return acc;
  }, []);
const maxNegInf = (arr) =>
  arr.reduce((max, n) => (n > max ? n : max), -Infinity);
const maxSlice1 = (arr) =>
  arr.slice(1).reduce((m, n) => (n > m ? n : m), arr[0]);
const maxDirect = (arr) => arr.reduce((m, n) => (n > m ? n : m), arr[0]);

/* IIFE: corre todos los tests */
(function runTests() {
  console.log("\n" + "=".repeat(24) + " RUN TESTS " + "=".repeat(24) + "\n");

  // 1) Funciones puras
  assertEq(suma(3, 5), 8, "suma(3,5) => 8");

  // 2) Anónimas/flecha
  assertEq(mensaje("Estudiantes"), "Bienvenidos!!! Estudiantes", "mensaje");
  assertEq(saludo(), "HOLA A TODOS/AS", "saludo()");
  assertEq(calc(2, 5), 7, "calc 2+5");
  assertEq(calc2(2, 5), 7, "calc2 2+5");

  // 3) Composición
  assertEq(alCuadrado(2), 4, "alCuadrado(2)");
  assertEq(sumaDeCuadrados(2, 3), 13, "sumaDeCuadrados(2,3)");
  assertEq(cuadradoEntreN(3), 20, "cuadradoEntreN(3) => (2^2 + 4^2) = 20");
  const dobleLuegoCuadrado = compose(alCuadrado, doble);
  const cuadradoLuegoDoble = pipe(alCuadrado, doble);
  assertEq(dobleLuegoCuadrado(3), 36, "compose doble->cuadrado (3)");
  assertEq(cuadradoLuegoDoble(3), 18, "pipe cuadrado->doble (3)");

  // 4) Orden superior + currificación
  assertEq(
    aplicar((n) => n * 2, 5),
    10,
    "aplicar(n=>n*2,5)"
  );
  assertEq(multiplicar(3)(2), 6, "multiplicar(3)(2)");
  const multiplicarPor5 = multiplicar(5);
  assertEq(multiplicarPor5(10), 50, "multiplicarPor5(10)");
  assertEq(validarCadena(3)("leo"), true, "validarCadena ok");
  assertEq(validarCadena(3)("leon"), false, "validarCadena límite");
  assertEq(validarNumero(25)(30), true, "validarNumero >= 25");
  assertEq(validarNumero(25)(24), false, "validarNumero < 25");
  assertEq(aplicarIVA(0.21)(100), 121, "aplicarIVA 21% de 100");
  assertEq(aplicarIVA(1.05)(100), 205, "aplicarIVA 105% de 100");
  const dobleLuegoCuadrado2 = componer(alCuadrado, doble);
  assertEq(dobleLuegoCuadrado2(3), 36, "componer doble->cuadrado");

  // 5) Recursión
  assertEq(factorial(5), 120, "factorial(5)");
  assertEq(sumaRec([1, 2, 3]), 6, "sumaRec [1,2,3]");

  // 6) some/every/map/filter/reduce
  // some
  assertEq(
    list1.some((n) => n === 5),
    true,
    "some: hay un 5"
  );
  assertEq(
    list1.some((n) => n > 10),
    false,
    "some: >10"
  );
  // every
  assertEq(
    list2.every((n) => n % 2 === 0),
    true,
    "every: todos pares"
  );
  assertEq(
    empleados.every((e) => e.profesion === "Arquitectura"),
    false,
    "every: todos arq?"
  );
  assertEq(
    empleados.every((e) => e.sexo === "F"),
    false,
    "every: todas mujeres?"
  );
  // filter
  const listEmpleadosArq = empleados.filter(
    (e) => e.profesion === "Arquitectura"
  );
  const filtroChile = empleados.filter((p) => p.pais === "Chile");
  assertEq(listEmpleadosArq.length, 2, "filter: Arquitectura == 2");
  assertEq(filtroChile.length, 3, "filter: Chile == 3");
  assertEq(
    empleados.filter((p) => p.pais === "Chile").some((p) => p.sexo === "M"),
    true,
    "Chile: hay M?"
  );
  assertEq(
    empleados.filter((p) => p.pais === "Chile").every((p) => p.sexo === "F"),
    false,
    "Chile: todas F?"
  );
  // map
  const nombresUpper = empleados.map((e) => e.nombre.toUpperCase());
  assertEq(
    nombresUpper,
    ["ANA", "LUIS", "FERNANDA", "LAURA", "VERONICA", "MIGUEL"],
    "map nombres upper"
  );

  // reduce básicos
  assertEq(sumaReduce([1, 2, 3, 4]), 10, "reduce suma [1..4]");
  assertEq(
    textoReduce(bolsa),
    "manzana pera mandarina uva banana",
    "reduce texto"
  );
  assertEq(
    conteoFrutas(bolsa),
    { manzana: 1, pera: 1, mandarina: 1, uva: 1, banana: 1 },
    "conteo frutas"
  );
  assertEq(frutasConMa(bolsa), ["manzana", "mandarina"], "frutas con 'ma'");

  // reduce: máximo
  assertEq(maxNegInf([7, 2, 9, 4]), 9, "max con -Infinity");
  const arr = [7, 2, 9, 4];
  assertEq(maxSlice1(arr), 9, "max con slice(1)");
  assertEq(maxDirect(arr), 9, "max directo con init arr[0]");

  // 7) Desafío integrador
  // Promedio de edad por país
  const promedioEdadPorPais = empleados.reduce((acc, e) => {
    const { pais, edad } = e;
    if (!acc[pais]) acc[pais] = { suma: 0, cant: 0 };
    acc[pais].suma += edad;
    acc[pais].cant += 1;
    return acc;
  }, {});
  const promedioPais = Object.fromEntries(
    Object.entries(promedioEdadPorPais).map(([pais, { suma, cant }]) => [
      pais,
      suma / cant,
    ])
  );
  // Validamos con tolerancia para Chile
  const approx = (a, b, eps = 1e-9) => Math.abs(a - b) < eps;
  assertEq(
    approx(promedioPais["Argentina"], 21.5),
    true,
    "promedio Argentina 21.5"
  );
  assertEq(approx(promedioPais["Perú"], 30), true, "promedio Perú 30");
  assertEq(
    approx(promedioPais["Chile"], (15 + 22 + 22) / 3),
    true,
    "promedio Chile 19.666..."
  );

  // Profesiones en Chile (conteo)
  const profesionFrecuenteChile = empleados
    .filter((e) => e.pais === "Chile")
    .reduce((acc, e) => {
      acc[e.profesion] = (acc[e.profesion] || 0) + 1;
      return acc;
    }, {});
  assertEq(
    profesionFrecuenteChile,
    { Arquitectura: 1, Mecanica: 1, Electronica: 1 },
    "conteo profesiones Chile"
  );

  // Resumen
  console.log(`\nResultados: ${passed} pasaron, ${failed} fallaron.`);
  if (failed > 0) process.exitCode = 1;
})();
