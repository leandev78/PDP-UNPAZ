// ============================================================
//                  PARADIGMAS DE PROGRAMACIÓN 
//                  << Prof. Alvarez Leandro >>
//
// Funciones y Métodos de Arreglo en JavaScript
// Ejecución: node clase_funciones_online.js
// ============================================================

// --- Utilitarios simples de demo ---------------------------------
const H = (t) =>
  console.log("\n" + "-".repeat(70) + `\n### ${t}\n` + "-".repeat(70));
const assertEq = (got, expected, label = "") => {
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console[ok ? "log" : "error"](
    `${ok ? "\u2705" : "\u274C"} ${label} => got: ${JSON.stringify(
      got
    )} | expected: ${JSON.stringify(expected)}`
  );
};

// ============================================================
// 1) FUNCIONES PURAS
// ============================================================
H("1) Funciones puras");
function suma(a, b) {
  return a + b;
}
console.log("suma(3,5) =", suma(3, 5));
assertEq(suma(3, 5), 8, "suma 3+5");

// Ejemplo impuro (comentado): depende de estado externo
// let x = 0;
// const impura = (n) => (x += n); // efecto colateral
// impura(2); impura(2);



// ============================================================
// 2) FUNCIONES ANÓNIMAS Y FLECHA (lambda)
// ============================================================
H("2) Funciones anónimas y flecha");
const mensaje = (p) => "Bienvenidos!!! " + p;
console.log(mensaje("Estudiantes"));
const saludo = () => "HOLA A TODOS/AS";
console.log(saludo());

// Refactor flecha: mínima expresión
const calc = (a, b) => {
  return a + b;
};
const calc2 = (a, b) => a + b;
assertEq(calc(2, 5), 7, "calc 2+5");
assertEq(calc2(2, 5), 7, "calc2 2+5");



// ============================================================
// 3) COMPOSICIÓN DE FUNCIONES
// ============================================================
H("3) Composición de funciones");
const alCuadrado = (x) => x * x;
const sumaDeCuadrados = (a, b) => alCuadrado(a) + alCuadrado(b);
const cuadradoEntreN = (x) => alCuadrado(x - 1) + alCuadrado(x + 1);
console.log("alCuadrado(2) =", alCuadrado(2));
console.log("sumaDeCuadrados(2,3) =", sumaDeCuadrados(2, 3));
console.log("cuadradoEntreN(3) =", cuadradoEntreN(3));

// helpers de composición
const compose = (f, g) => (x) => f(g(x)); // derecha -> izquierda
const pipe = (f, g) => (x) => g(f(x)); // izquierda -> derecha
const doble = (x) => x * 2;
const dobleLuegoCuadrado = compose(alCuadrado, doble);
const cuadradoLuegoDoble = pipe(alCuadrado, doble);
console.log(dobleLuegoCuadrado(3));
console.log(cuadradoLuegoDoble(3));



// ============================================================
// 4) FUNCIONES DE ORDEN SUPERIOR + CURRIFICACIÓN
// ============================================================
H("4) Funciones de orden superior + currificación");
const aplicar = (fn, x) => fn(x);
console.log(
  "aplicar(n => n*2, 5) =",
  aplicar((n) => n * 2 , 5)
);


function crearMultiplicador(n) {
  return function(x) {
    return x * n;
  };
}
const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // 10


const multiplicar = (a) => (b) => a * b;
console.log("multiplicar(3)(2) =", multiplicar(3)(2));
const multiplicarPor5 = multiplicar(5);
const r3 = multiplicarPor5(10);
console.log(r3);


// Validadores configurables (corregidos)
const validarCadena = (maxLen) => (s) =>   typeof s === "string" && s.length <= maxLen;
const validarNumero = (min) => (value) =>  typeof value === "number" && value >= min;
const r1 = validarCadena(3)("leo");
const r2 = validarNumero(25)(30);
console.log(r1);
console.log(r2);


// Configurar una vez (tarifas, impuestos, descuentos)
const aplicarIVA = (tasa) => (precio) => precio * (1 + tasa);
const iva21 = aplicarIVA(0.21);
const iva105 = aplicarIVA(1.05); // 105% de incremento
console.log("Aplicando IVA 21% a 100:", iva21(100).toFixed(2));
console.log("Aplicando IVA 105% a 100:", iva105(100).toFixed(2));

// Otra: componer y usar
const componer = (f, g) => (x) => f(g(x));
const dobleLuegoCuadrado2 = componer(alCuadrado, doble);
assertEq(dobleLuegoCuadrado2(3), 36, "componer doble->cuadrado");


// ============================================================
// 5) FUNCIONES RECURSIVAS
// ============================================================
H("5) Funciones recursivas");
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console(factorial(5));    // el factorial de 5 es 120

// suma recursiva
const sumaRec = (arr) => (arr.length ? arr[0] + sumaRec(arr.slice(1)) : 0);
console.log( sumaRec([1, 2, 3]) );    // debe dar 6


// ============================================================
// 6) ESTRUCTURAS DE DATOS Y MÉTODOS (some/every/map/filter/reduce)
// ============================================================
H("6) Métodos de arreglos: some/every/map/filter/reduce");
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

// some
const almenosUnCinco = list1.some((n) => n === 5);
const mayorQueDiez = list1.some((n) => n > 10);
console.log("almenosUnCinco:", almenosUnCinco, "| mayorQueDiez:", mayorQueDiez);

// every
const sonTodosPares = list2.every((n) => n % 2 === 0);
console.log("sonTodosPares:", sonTodosPares);
const sonTodosArquitectos = empleados.every(
  (e) => e.profesion === "Arquitectura"
);
console.log("¿Son todos Arquitectos?", sonTodosArquitectos);
const sonTodasMujeres = empleados.every((e) => e.sexo === "F");
console.log("¿Son todas mujeres?", sonTodasMujeres);

// filter
const listEmpleadosArq = empleados.filter(
  (e) => e.profesion === "Arquitectura"
);
const filtroChile = empleados.filter((p) => p.pais === "Chile");
console.log(
  "Arquitectura:",
  listEmpleadosArq.length,
  "| En Chile:",
  filtroChile.length
);

const hayMasculinoEnChile = empleados.filter((p) => p.pais === "Chile").some((p) => p.sexo === "M");
console.log("¿Hay masculinos en Chile?", hayMasculinoEnChile);

const sonTodasMujeresEnChile = empleados.filter((p) => p.pais === "Chile").every((p) => p.sexo === "F");
console.log("¿Son todas mujeres en Chile?", sonTodasMujeresEnChile);

// map
const nombres = empleados.map((e) => e.nombre.toUpperCase());
console.log("Nombres (upper):", nombres);

// reduce
const list3 = [1, 2, 3, 4];
const sumaReduce = list3.reduce((acc, item) => acc + item, 0);
assertEq(sumaReduce, 10, "reduce suma [1..4]");

const bolsa = ["manzana", "pera", "mandarina", "uva", "banana"];
console.log("bolsa:", bolsa);

const texto = bolsa.reduce((acc, item) => acc + " " + item);
console.log("Texto con reduce:", texto);

const conteo = bolsa.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log("Conteo frutas:", conteo);

const contieneMa = bolsa.reduce((acc, fruta) => {
  if (fruta.includes("ma")) acc.push(fruta);
  return acc;
}, []);
console.log("Frutas con 'ma':", contieneMa);


const mayor = [7, 2, 9, 4].reduce((max, n) => (n > max ? n : max), -Infinity);
assertEq(mayor, 9, "max con -Infinity");

const arr = [7, 2, 9, 4];
const maxSlice = arr.slice(1).reduce((m, n) => (n > m ? n : m), arr[0]);
const maxDirect = arr.reduce((m, n) => (n > m ? n : m), arr[0]);
assertEq(maxSlice, 9, "max con slice(1)");
assertEq(maxDirect, 9, "max directo con init arr[0]");

// ============================================================
// 7) DESAFÍO INTEGRADOR
// ============================================================
H("7) Desafío integrador");
// Promedio de edad por país y profesión más frecuente en Chile
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
console.log("Promedio edad por país:", promedioPais);

const profesionFrecuenteChile = empleados
  .filter((e) => e.pais === "Chile")
  .reduce((acc, e) => {
    acc[e.profesion] = (acc[e.profesion] || 0) + 1;
    return acc;
  }, {});
const topChile = Object.entries(profesionFrecuenteChile).sort(
  (a, b) => b[1] - a[1]
)[0];
console.log(
  "Profesión más frecuente en Chile:",
  topChile ? { profesion: topChile[0], cantidad: topChile[1] } : null
);

// Fin
console.log("\nFin de la clase en vivo");
