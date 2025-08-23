/* 
    CLASE DE HOY FUNCIONES 
    ======================
    1. Las funciones de 1° orden o Ciudadanas. (Javascript son todas...)
    1.1. Funciones puras e impuras.
    1.2. Funciones lambda. (anonimas!)
    2. Composición de funciones
    3. Funciones recursivas
    4. Funciones de Orden Superior.
    5. Estructuras de datos.
        - some, every, map, filter, recude, splice
*/

/** Funciones Pura (no tienen efecto secundario)
function calcularRecta(x,b)
{
    return x + b;
}
console.log(calcularRecta(1,3));
*/

/** Tipos de variables en Javascript */

// let, var, const.

/** Funciones Impuras. 

const iva = 0.21;

function sumarIva(importe){
    return (importe * iva) + importe;
}

function restarIva(importe) {
  return ( importe - (importe * iva));
}

const resultado = sumarIva(100);
console.log(resultado);

const resultado2 = restarIva(600);
console.log(resultado2);

iva = 30;
console.log("El valor constante del Iva es: " + iva);

*/

/** Funciones Lambda / Anonimas 

function sumar(a,b){
    let s = a + b;
    return s;
}
console.log(sumar(2,5));


// Funcion anonima
const sum2 = (a, b) => a + b;
const sumarNumeros = sum2(6,4);

console.log(sumarNumeros);


// Funcion anonima: Calcula el doble de un número.
const calcularElDoble = (n) => { return n * n};
const doble = calcularElDoble(2);

console.log("Alguna operación programada...");
console.log("Alguna operación programada...");
console.log("Alguna operación programada...");
console.log("Alguna operación programada...");

const triple100 = (n) => {return  n * doble };

console.log(triple100(2));

*/

/**2. Composición de funciones

const f1 = (a,b) => a + b;
const f2 = (a,b) => a * b;
const f3 = (a) => a * 5;

const f = (a,b)=>{
    return f1(a,b) + f2(a,b) + f3(a);
}

console.log( f(6,2));


const alCuadrado = (n) => n*n;  // no es compuesta...
const sumaDeCuadrados = (a,b) => a + b;  // no es compuesta...
const rangoDeCuadrados = (n) => alCuadrado(n-1) + alCuadrado(n+1); // si es compuesta.
 */

/** Funciones de Orden Superior 

// 1. Que reciba como parametro otras función
// 2. Devuelva como resultado una función.

// function multiplicar(x){
//     return ( n )=> x * n; 
// }
// const duplicar = multiplicar(5);
// const resultado = duplicar(3);
// console.log(resultado);

// const resultado2 = multiplicar(5)(3);
// console.log(resultado2);


// Representar la funcion lineal matemática   y= mX + b;  m(pendiente)=1; b=(ordenada al origen)=5;
// y = x + 5;

const funcionLineal = ( fn , x ) => fn(x);      // funcion de orden superior... 

const t1 = funcionLineal( (n)=>n*5 , 2 );
console.log("Funcion testing F(2) = " + t1);

const t2 = funcionLineal((n) => n - 2, 4);
const t3 = funcionLineal((n) => n + 250 , 6);
console.log("Funcion testing F(4) = " + t2);
console.log("Funcion testing F(6) = " + t3);

*/

/** ESTRUCTURAS DE DATOS ( OPERACIONES CON ARRAYS ) 
 * 
 * - some: da verdadero si por lo menos encuentra un elemento que cumpla con la condición
 * - every
 * - map
 * - splice
 * - reduce
*/

const arr = [2,1,5,8,7,9,9,3];

// aplicar el método - some
const r1 = arr.some( (e)=> e === 9 );
console.log (r1);

// aplicar el método - every
const e2 = arr.every( (e)=> e<=3);
console.log(e2);


console.log(
        arr.map( (p) => p*2 )
);


// Reduce ...
const list3 = [1, 2, 3, 4];
const sumaReduce = list3.reduce((acc, item) => acc + item, 0);
console.log(sumaReduce);