/*
********************************************
Temas vistos en clase Presencial: 20/08/2025
********************************************

TEMA OPERADORES
    |
    |-- Operadores y Expresiones
    |-- Condicionales ternarios
TEMA FUNCIONES                                              
            |
            |----- Funciones Puras.
            |----- Función lambda
            |----- Composición de Funciones.
            |----- Funciones Recursivas.
            |----- Funciones de orden superior.

TEMA ESTRUCTURA DE DATOS   
        |    
        |----- Arrays: some, every, map, filter, reduce


*/

// Operadores

/*
    a === b
    a !== b
    a >= b
    a <=b
    && equivale a AND 
    || equivale a OR
*/

// Ejemplo:
//const r = (3 > 4 || 3 <= 9);     // da true porque una de las condiciones si se cumple.
//console.log(r);

// Funciones Puras
// function suma(a,b){
//     console.log(valor);
//     return a+b;
// }
// console.log(valor);
// const s = suma(2,5);


//const resultado = (a , b) => { return a+b };
//const resultado = (a,b) => a+b;
//console.log(resultado(4,6));

// const valor = (a) => a + 3;
// console.log(valor(5));

// const doble = (n) => n * n;
// const calcular = (n) => {
//   return (x) => {
//     return n * x;
//   };
// };

const calcular = (n) => (x) => n * x;
const res = calcular(2)(3);
console.log(res);

// ------------------------------------------------------


// const funcionLineal = (fn, x) => fn(x); // funcion de orden superior...


// const t1 = funcionLineal((n) => n * 5, 2);
// const t2 = funcionLineal((n) => n + 30, 5);
// const t3 = funcionLineal((n) => n - 2, 12);

// console.log("Funcion testing T(1) = " + t1);
// console.log("Funcion testing T(2) = " + t2);
// console.log("Funcion testing T(3) = " + t3);

// ESTRUCTURAS - ARRAYS
/* 
    - some() 
    - evary
    - map
    - filter
    - reduce
*/

const arr = [3, 1, 5, 6, 8, 9, 9, 2];

// const res1 = arr.some( (e)=> e === 9 );
// console.log(arr);
// console.log(res1);

// const res2 = arr.some( e => e < -1);
// console.log(res2);

// ------------------------------------
// evary: Este método devuelve true/false si se cumplen en todos los elementos la condición-

// const todosSon5 = arr.every( (e)=> e === 5);
// console.log(todosSon5);


/*
const list3 = [1, 2, 3, 4];
const sumaReduce = list3.reduce((acc, item) => acc + item, 0);
assertEq(sumaReduce, 10, "reduce suma [1..4]");

const bolsa = ["manzana", "pera", "mandarina", "uva", "banana"];
console.log("bolsa:", bolsa);

const texto = bolsa.reduce((acc, item) => acc + " " + item);
console.log("Texto con reduce:", texto);

*/


// filter
// const newarr = arr.filter((e)=> e===9);
// console.log(newarr);

// map
console.log("Array original...");
console.log(arr);

console.log("Array modificado...");
const newarr2 = arr.map((e) => {
    return e * 2;
});
console.log(newarr2);


console.log("Clonar estructura...");
const ar = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
const clon = ar.map(
    (x) => {
        return (x <= 10) ? x : "X";
    }
);
console.log(clon);

