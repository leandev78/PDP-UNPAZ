/*
      =========================
      PARADIGMA DE PROGRAMACION 
      FECHA: 27-08-2025
      PROFESOR: ALVAREZ LEANDRO
      =========================

      GUÍA DE EJERCICIOS   --- PLAN DE CLASE 03-09

      =========================
*/

console.log("*************** NUEVA EJECUCION *****************");


//Ejercicio 1: Elminar repetidos de la lista.

// const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

// const noDuplicateItems = items.reduce((accumulator, item) => {
//   if (!accumulator.includes(item)) {
//     accumulator.push(item);
//   }
//   return accumulator;
// }, []);


// Contar la cantidad de ocurrencias que hay en una lista frutas.

// const arr = ["pera", "manzana", "pera", "uva"];

// const contar = arr.reduce(

//     (acc, currentValue)=>{
//         acc[currentValue] = ( acc[currentValue] || 0 ) + 1
//         return acc;
//     }, {}
// );


// Ejercicio 2

// const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
// const mym = nums.reduce(
//     (acc, n) => {
//         if (n < acc.min) acc.min = n;
//         if (n > acc.max) acc.max = n;
//         return acc;
//     }, { min: Infinity, max: -Infinity }
// );

// console.log(`El minimo de la lista es ${mym.min} y el maximo es ${mym.max}`);



// Ejercicion 3: Dada una lista de numeros particionar por un lado 
//                los Pares y por otro los Impares. 

// const particionar = nums =>
  
//   nums.reduce((acc, n) => {
//     (n % 2 === 0 ? acc.pares : acc.impares).push(n);
//     return acc;
//   }, { pares: [], impares: [] });

//   console.log(particionar([1,2,3,4,5]));

// const partpar = particionar([1,2,3,4,5]);  
// console.log(partpar.impares);



// Ejercicio 4

// const dni = '14091978';
// const suma = [...dni].reduce(
//     (acc, d) => {
//         console.log(d);
//         return acc + Number(d)
//     }, 0
// );

// console.log(suma);

// Ejercicio 5

// const texto = "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
// const coutWord = [...texto].reduce(

//     (acc, s) => {
//         acc[s] = (acc[s] || 0) + 1;
//         return acc;
//     }, {}

// );
// console.log(coutWord);


// Ejercicio Objetos


// *****************************************************************************************************
//  OBJETOS ********************************************************************************************
// *****************************************************************************************************


// Máximo por propiedad
// Dada una lista de empleados, obtené el empleado con mayor salario.
// const salarios =  [{n:"Ana",s:50},{n:"Luis",s:80},{n:"Sol",s:70}];

// const respuesta =  
//     salarios.reduce( 
//         (acc,p)=> {
//             acc = (p.s > acc.s) ? p : acc;
//             return acc;
//         }
//     )
// console.log(respuesta);

//Salida esperada: {n:"Luis",s:80}


// Ejercicio 4: obtener los totales por categoría.

// const items = [
//   { c: "libros", p: 100 },
//   { c: "Juguetes", p: 200 },
//   { c: "libros", p: 50 },
// ];

// const resul = items.reduce((acc, e) => {
//   acc[e.c] = (acc[e.c] || 0) + e.p;
//   return acc;
// }, {});

// console.log(resul);



// Con funciones 

// const ejemplo = {
//     nombre: "saludar",
//     fn: ()=> console.log("Hola")
// }

// ejemplo.fn();

// const fns = [
//   {
//     name: "Doble",
//     fn: (x) => x * 2,
//   },
//   {
//     name: "Cuadrado",
//     fn: (x) => x * x,
//   },
//   {
//     name: "Suma5",
//     fn: (x) => x + 5,
//   },
// ];

// const values = [3, 1, 2, 6];

// const r = values
//   .map((v) => {
//     const f = fns.reduce((a, b) => (a.fn(v) > b.fn(v) ? a : b));
//     return { name: f.name, value: v, result: f.fn(v) };
//   })
//   .reduce((a, b) => (a.result <= b.result ? a : b));

// console.log(r);


// Enunciado: Para cada valor, determinar cuál función de fns produce el mayor resultado y, entre todos, quedarse con el menor de esos máximos.

// const fns = [{
//         name: "Doble",
//         fn: (x) => x * 2,
//     },
//     {
//         name: "Cuadrado",
//         fn: (x) => x * x,
//     },
//     {
//         name: "Suma5",
//         fn: (x) => x + 5,
//     },
// ];

// const values = [3, 1, 2, 6];

// const r = values
//     .map((v) => {
//         const f = fns.reduce((a, b) => (a.fn(v) > b.fn(v) ? a : b));
//         return { name: f.name, value: v, result: f.fn(v) };
//     })
//     .reduce((a, b) => (a.result <= b.result ? a : b));

// console.log(r);



// Enunciado: Validar contraseñas con una lista de funciones de validación. Mostrar cuáles reglas no se cumplen para el valor dado.

// const fns = [{
// name: "Long Minima de 8",
// fn: (pwd) => pwd.length >= 8,
// },
// {
// name: "Sin Blancos",
// fn: (pwd) => !pwd.includes(" "),
// },
// {
// name: "Con Caractes especiales",
// fn: (pwd) => ["#", "&", "$", "!"].some((c) => pwd.includes(c)),
// },
// ];

// fns.push({
// name: "Con Digitos",
// fn: (pwd) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((d) => pwd.includes(d)),
// });

// const values = "gn3 sfd";

// console.log(
// fns.map((f) => {
// return { name: f.name, value: f.fn(values) };
// })
// .filter((f) => !f.value)
// );






// DataSet

const personajes = [{
        nombre: "Spectra",
        rol: "Francotirador",
        nivel: 13,
        salud: 889,
        dano: 70,
        velocidad: 3.4,
        habilidades: ["crítico", "cura", "dash"],
        faccion: "Sombra",
        activo: false
    },
    {
        nombre: "Titan",
        rol: "Soporte",
        nivel: 22,
        salud: 1760,
        dano: 165,
        velocidad: 3.1,
        habilidades: ["cura", "dash", "teletransporte"],
        faccion: "Centinelas",
        activo: false
    },
    {
        nombre: "Volt",
        rol: "Explorador",
        nivel: 33,
        salud: 3247,
        dano: 113,
        velocidad: 2.6,
        habilidades: ["misil", "regeneración", "barrera"],
        faccion: "Aegis",
        activo: false
    },
    {
        nombre: "Shadow",
        rol: "Francotirador",
        nivel: 38,
        salud: 2954,
        dano: 188,
        velocidad: 2.7,
        habilidades: ["escudo", "campo eléctrico", "invisibilidad", "barrera"],
        faccion: "Aegis",
        activo: false
    },
];

const predicados = {
    "===": (a, b) => (a === b) ? true : false,
    "!==": (a, b) => (a !== b) ? true : false,
    ">=": (a, b) => (a >= b) ? true : false,
    "<=": (a, b) => (a <= b) ? true : false,
    ">": (a, b) => (a > b) ? true : false,
    "<": (a, b) => (a < b) ? true : false,
    "and": (a, b) => Boolean(a && b),
    "or": (a, b) => Boolean(a || b),
    "include": (a, b) => Array.isArray(a) && a.includes(b)
}

// Reglas de busquedas...

const reglas = [{
        "operador": "===",
        "atributo": "rol",
        "valor": "Francotirador",
    },
    {
        "operador": "<=", 
        "atributo": "nivel",
        "valor": "30",
    },
    {
        "operador": "include",
        "atributo": "habilidades",
        "valor": "cura"
    }
]


// const cumpleTodas = (personaje, reglas) => {
//     return reglas.every(
//         ({ operador, atributo, valor }) => {
//             return predicados[operador](personaje[atributo], valor)
//         }
//     )
// };
// const resutado = personajes.filter(p => cumpleTodas(p, reglas));
// console.log(resutado);


// Versión Pedagógica.
// const cumpleTodas = (personaje, reglas) => {
//     return reglas.every(
//         ({ operador, atributo, valor }) => {
//             const fn = predicados[operador];
//             const a = personaje[atributo];
//             const b = valor;
//             return fn(a, b);
//             return predicados[operador](personaje[atributo], valor)
//         }
//     )
// };
// const resutado = personajes.filter(p => cumpleTodas(p, reglas));
// console.log(resutado);



// -----------------------------------------------------------------------------------


const productos = [
  { c: "libros", p: 100 },
  { c: "Juguetes", p: 200 },
  { c: "libros", p: 50 },
];

const resul = productos.reduce((acc, e) => {
  acc[e.c] = (acc[e.c] || 0) + e.p;
  return acc;
}, {});

console.log(resul);
