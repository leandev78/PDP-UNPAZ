
// Agenda de la clase

// ======================================================================
// Repaso funciones orden superior
// ======================================================================


// ** Caso 1: Recibe como parametro una funcion

const f2 = (n)=> n + 1;

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
// Trabajamos con Objetos
// ======================================================================




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


