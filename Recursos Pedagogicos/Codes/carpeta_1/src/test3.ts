/*
      =========================
      PARADIGMA DE PROGRAMACION 
      FECHA: 27-08-2025
      PROFESOR: ALVAREZ LEANDRO
      =========================
*/

//const Lista = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];

// Buscar los números pares
// const isPar = (n) => n % 2 === 0;
// const isImpar = (n) => n % 2 !== 0;

// const operar = (x, f)=> {
//    return f(x)
// }

// console.log(operar(4, isPar));
// console.log(operar(5, isImpar));
// console.log(operar(6, (n) => n > 5));

// Ejemplo de funciones de orden superior

// const calcular = (numero, myfunc) => {
//    return (otronumero) => myfunc(otronumero, numero)
// };1

// console.log(calcular( 4, (x,y)=> x*y )(3));
// console.log(calcular(4, (x, y) => x + y)(3));
// console.log(calcular(4, (x, y) => x - y)(3));
// console.log(calcular(4, (x, y) => x / y)(3));

// Otro ejemplo

// const aplicarCoefienteA = (n) => {return " aplicando funcion A: " + (n * 1.21); }
// const aplicarCoefienteB = (n) => {return " aplicando funcion B: " + (n * 1.105); }
// const coeficiente = (p) => p > 100 ? aplicarCoefienteA(p) : aplicarCoefienteB(p);
// const calcularPrecioFinal = (precio, miFuncion) => {
//    return miFuncion(precio);
// }
// console.log(calcularPrecioFinal(150, coeficiente));
// console.log(calcularPrecioFinal(25, coeficiente));
// console.log(calcularPrecioFinal(100, coeficiente));
// console.log(calcularPrecioFinal(256, coeficiente));

// const f = (x) => (y) => y + x;
// console.log( f(5)(2)  );
// console.log("-------------------");

// const incrementar = (numero, myFunc) => {
//    return (otroNumero) => myFunc(numero, otroNumero);
// };
// const suma = incrementar(5,(a,b)=>a+b)(2);
// console.log(suma);

// const operar = (x, f) => {
//    return (n)=> f(n) + x;
// };
// console.log(operar(2, n => n *3)(4));

/* 

***************************************
Ejercicios/ funciones de orden superior
***************************************

*/

//1) Recibir una función: aplicarDosVeces
// recibe una función "fn" y un valor "x"
const aplicarDosVeces = (fn, x) => fn(fn(x));

// Funciones simples para probar
const sumar1 = (n) => n + 1;
const alCuadrado = (n) => n * n;

console.log(aplicarDosVeces(sumar1, 5)); // 7  (5+1=6, 6+1=7)
console.log(aplicarDosVeces(alCuadrado, 2)); // 16 (2^2=4, 4^2=16)

//2) Devolver una función: “fábrica” de saludos

// HOF: devuelve otra función (closure)
const crearSaludo = (idioma) => (nombre) => {
  if (idioma === "es") return `Hola, ${nombre}!`;
  if (idioma === "en") return `Hello, ${nombre}!`;
  return `${nombre}`;
};

const saludarES = crearSaludo("es");
const saludarEN = crearSaludo("en");

console.log(saludarES("Ana")); // "Hola, Ana!"
console.log(saludarEN("Ana")); // "Hello, Ana!"

// 3) Fábrica de validadores simples (muy útil en práctica)

// Crea un validador de longitud máxima
const maxLen = (n) => (s) => typeof s === "string" && s.length <= n;

// Crea un validador de pertenencia (ej: solo ciertos roles)
const oneOf = (lista) => (x) => lista.includes(x);

const esCorta = maxLen(5);
const esRolValido = oneOf(["admin", "user", "guest"]);

console.log(esCorta("hola")); // true
console.log(esCorta("largaaa")); // false
console.log(esRolValido("user")); // true
console.log(esRolValido("root")); // false

// 7) Pipelines: pipe para encadenar funciones
// HOF: compone funciones de izquierda a derecha
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const soloPares = (arr) => arr.filter((n) => n % 2 === 0);
const alCuadrado2 = (arr) => arr.map((n) => n * n);
const menoresIgual100 = (arr) => arr.filter((n) => n <= 100);

const procesar = pipe(soloPares, alCuadrado2, menoresIgual100);

console.log(procesar([4, 1, 2, 4, 5, 8, 7, 6, 9, 10]));
// pares → cuadrados → <=100  ⇒ [16,4,16,64,36,100]

//9) Composición de predicados (armás reglas combinando funciones)
const and = (p, q) => (x) => p(x) && q(x);
const or = (p, q) => (x) => p(x) || q(x);
const not = (p) => (x) => !p(x);

const esPar = (n) => n % 2 === 0;
const esMenor10 = (n) => n < 10;

const parYMenor10 = and(esPar, esMenor10);

console.log([4, 1, 8, 12, 15].filter(parYMenor10)); // [4,8]

console.log(parYMenor10(8)); // true
console.log(parYMenor10(12)); // false

console.log("--------------------------------------------------");

const sum = (a, b) => a + b;
const duo = (a, b) => a * b;
const calc = (x, y, f) => f(x, y);

console.log(calc(2, 3, sum)); // 5
console.log(calc(2, 3, duo)); // 6

console.log("--------------------------------------------------");

const arr = [1, 2, 3, 2, 4, 5, 6, 4, 7, 4, 8, , 8, 9, 10];

const soloPar = (n) => !(n % 2);
const sinDuplicador = (n, i, arr) => !arr.some((m, j) => m === n && j < i);

console.log(arr.filter(soloPar).filter(sinDuplicador)); // [2,4,6,8,10]
