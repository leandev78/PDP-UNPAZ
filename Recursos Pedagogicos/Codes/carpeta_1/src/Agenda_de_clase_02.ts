
// Agenda de la clase

// ======================================================================
// Valores falsy y truthy · Expresiones Lógicas (Tabla de verdad)
// ======================================================================

// OR (||) - Conjución
const v0 = "mis mejores" || "amigos"; // mis mejores
const v1 = undefined || "Julian";     // Julian
const v2 = "hola" || undefined;       // hola
const v3 = undefined || undefined;    // undefined
const v4 = 0 || 0; // 0
console.log(v0, v1, v2, v3, v4);    

// AND (&&) - Disyunción
const w0 = "mis mejores" && "amigos";   // "amigos"
const w1 = undefined && "Julian";   // undefined
const w2 = "hola" && undefined; // undefined
const w3 = undefined && undefined;         // undefined
const w4 = 0 && 0;  //  0
console.log(w0, w1, w2, w3, w4);

// ======================================================================
// Operadores ternarios
// ======================================================================

/**Un operador ternario es un atajo de if/else que evalúa una condición y 
devuelve un valor según sea verdadera o falsa.**/

// function minimo(a,b){
//     if( a<b ){
//         return a;
//     }else{
//         return b;
//     }
// }

const minimo = (a, b) => (a < b ? a : b);
console.log(minimo(10, 20));

const edad = 17;
const acceso = edad >= 18 ? "Adulto" : "Menor";
console.log(acceso);

const notas = [3, 4, 5].map((n) => (n > 4 ? "aprobado" : "desaprobado"));
console.log(notas);

// ======================================================================
// Repaso de funciones anónimas y de orden superior
// ======================================================================


// COMPOSICION DE FUNCIONES

const and = (p, q) => (x) => p(x) && q(x);
const or = (p, q) => (x) => p(x) || q(x);
const not = (p) => (x) => !p(x);

const esPar = (n) => n % 2 === 0;
const esMenor10 = (n) => n < 10;

const parYMenor10 = and(esPar, esMenor10);

console.log([4, 1, 8, 12, 15].filter(parYMenor10)); // [4,8]

// FUNCIONES DE ORDEN SUPERIOR


// creo una funcion base
const operar = (n, f) => {
      return (x) => f(n) + x;
}

// creo dos funciones que voy a pasar como parametro
const moverDer = (x)=> x * 2;
const moverIzq = (x)=> x * 3;

console.log(  operar(2, moverDer(3)) );  // Ojo Anónima! ?? porque ya esta resuelta !!!
console.log(  operar(2, moverDer)(2)  ); // OK
console.log(  operar(2, moverIzq)(6)  ); // OK

const mX = operar(2, (x) => x * 2 )(3); // OK console.log(mX);     // 7
const mY = operar(2, (x) => x * x ); // OK   console.log( mY(3) ); // 7

// ** Caso 1: Recibe como parametro una funcion

// una funcion de primer orden porque la puedo asignar a una variable
const f2 = (n)=> n + 1;

// una funcion de orden superior porque recibe otra funcion como parametro
const f1 = (x,y,f)=> {
    let r = x + y + f(x);
    return r;
}
console.log( f1(1,2,f2) );


// ** Caso 2 (funciones que retornan funciones) - orden superior
const f3 = (n)=> {
    return (x) => n + x;
}
console.log( f3(5) ); // [Function (anonymous)]
console.log( f3(5)(10) ); // 15

// Caso 3
const sumar = (x) => x + 1;
const duplicar = (f) => (x) => f(f(x));     //Ojo que la funcion retornada es
                                            // (x) => f(f(x))  porque 
                                            // f(f(x)) es un valor ya resuelto!
console.log( duplicar(sumar)(10) ); // 12

// Caso 4
const fns = (f, g) => (x) => f(g(x));
console.log( fns(sumar, sumar)(4) ); //6

// Caso 5
const fns2 = (f, g) => (x) => f(g(x));
console.log( fns2(sumar, (n)=> n*2 )(4) ); //9


// ======================================================================
// Método reduce aplicado a arrays
// ======================================================================

/*
El metodo reduce() ejecuta una función reductora sobre cada elemento de un array,
resultando en un único valor de salida.

arr.reduce(callback, initialValue);
Donde el callback tiene hasta 4 parámetros posibles:
      - callback(accumulator, currentValue, currentIndex, array)
              --> accumulator: el valor acumulado hasta el momento. <--
              --> currentValue: el valor del elemento actual que se está procesando. <--
                  currentIndex (opcional): índice del elemento actual.
                  array (opcional): referencia al array original.
      - initialValue (opcional)
*/

//----------------------------------------------------------------

// Ejercicio 1: sumar los numero que estan en el array

const array = [1, 2, 3, 4];
                              //callback//          
const redu = array.reduce((acc, curr, i, arr) => {
  console.log({ i, acc, curr, arr });
  return acc + curr;
}, 0);  //<-- initialValue

console.log(redu); // 10


// Ejercicio 2: sumar los numero que estan en el array
//const array = [1, 2, 3, 4];
const initValue = 0;
const suma = array.reduce(
       (accumValue, currentValue)=>  accumValue + currentValue , initValue
      );
console.log( suma );

//----------------------------------------------------------------

//Ejercicio 2: unir cada frase con un guión medio.

const value = ["hola","mundo","js"].reduce((acc, w, i) => (i ? acc + "-" + w : w), "");
console.log(value);

//----------------------------------------------------------------

//Ejercicio 3: Elminar repetidos de la lista.

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = items.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item);
  }
  return accumulator;
}, []);


//----------------------------------------------------------------
// Ejericio 4: Contar la cantidad de ocurrencias de cada fruta!

const arr = ["pera","manzana","pera","uva"];

const contar = arr.reduce(
      (acc,currentValue) =>{
            acc[currentValue] = (acc[currentValue] || 0 ) + 1;
            return acc;
      }
      ,{});
console.log(contar);


/**
 * ***********************************************
 * ***********************************************
 *                      OBJETOS
 * ***********************************************
 * ***********************************************
 */

/*
      --- Explicación ---

      const obj1 = { a: 1, b: 2 };

      const persona = {
          nombre: "Juan",
          edad: 30,
          ciudad: "Madrid",
          profesion: "Desarrollador",
          hobbies: ["leer", "viajar", "programar"],
          genero: "masculino",
          casado: false,
          antiguedad: 5,
      };

      console.log(persona);

      persona.nombre = "Pedro";  // ¿Por qué no da error si se supone que use CONST?

      //persona = {};  // Da error, ¿por qué?

      console.log(persona);
*/

/* Objetos con métodos

const ejemplo = { nombre: 'saludar',  fn: () => console.log("hola")}
console.log(ejemplo);

ejemplo.fn();         // si hago console.log(ejemplo.fn()) ¿que pasa?

*/

//----------------------------------------------------------------
// Ejercicion 1: Calcular el promedio de notas de todas las cominisiones 

const notas = [{c:"A",n:8},{c:"B",n:6},{c:"A",n:10},{c:"C",n:4}];

const valorInicial = 0;

      // forma compacta!
      // const acumulador = (acc,v)=> acc + v.n;
      // const promedio = notas.reduce(acumulador, valorInicial);

const promedio = notas.reduce(
      (acc, v)=> acc + v.n
      , valorInicial);

console.log("Promedio de notas obtenidas: " + promedio);

//----------------------------------------------------------------
// Ejercicio 2: dada una cadena determinar si los existe la misma candida
// de parentecis ( que ).

const balanceados = s => {
  const fin = [...s].reduce((acc, ch) => {
    if (acc < 0) return acc;
    if (ch === "(") return acc + 1;
    if (ch === ")") return acc - 1;
    return acc;
  }, 0);
  return fin === 0;
};

const resul = balanceados("())()()(()");
console.log("La cadena contiene la misma cantidad de parentesis? " + resul);

//----------------------------------------------------------------
// Ejercicion 3: Dada una lista de numeros particionar por un lado 
//                los Pares y por otro los Impares. 


const particionar = nums =>
  
  nums.reduce((acc, n) => {
    (n % 2 === 0 ? acc.pares : acc.impares).push(n);
    return acc;
  }, { pares: [], impares: [] });

  console.log(particionar([1,2,3,4,5]));

const partpar = particionar([1,2,3,4,5]);  
console.log(partpar.impares);



//----------------------------------------------------------------
// Ejercicio 4: obtener los totales por categoría.

const items = [
  { c: "libros", p: 100 },
  { c: "Juguetes", p: 200 },
  { c: "libros", p: 50 },
];

const resul = items.reduce((acc, e) => {
  acc[e.c] = (acc[e.c] || 0) + e.p;
  return acc;
}, {});

console.log(resul);


//----------------------------------------------------------------
// Ejercicio 5: OBJETOS CON METOROS !!! - Continuar en Objetos.js

const ejemplo = { nombre: 'saludar',  fn: () => console.log("hola")}
console.log(ejemplo);

ejemplo.fn();         // si hago console.log(ejemplo.fn()) ¿que pasa?


