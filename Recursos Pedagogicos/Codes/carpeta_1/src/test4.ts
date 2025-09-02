/*
      =========================
      PARADIGMA DE PROGRAMACION 
      FECHA: 27-08-2025
      PROFESOR: ALVAREZ LEANDRO
      =========================
*/

//    const lista = [1, 2, 3, 2, 3, 1, 5, 6, 8, 4, 8, 99, 6, 9, 6 , 55, 34, 7, 1];
//    const listarPares = (n)=> !(n%2);
//    const quitarDuplicados = (n,i,arr)=> ! arr.some( (m,j)=> m === n && j < i  );
//    const paresSinDupl = lista.filter(listarPares).filter(quitarDuplicados);
//    const paresSinDuplOrd = paresSinDupl.sort( (a,b) => a - b );
//    console.log( paresSinDuplOrd );

// Explicación lógica sobre el metodo de eliminación de duplicados...
/*
const dataset = [4,2,2,3,4];

const deldupl = (n,i,arr) => {
      
      const segmento = arr.filter((m,j) => j<i);
      
      console.log(`Parte N(${n}) I(${i}) : [${segmento}]`);

      return ! segmento.some( (m)=> m ===n );
}

console.log(dataset.filter(deldupl));
*/

// Tenemos grúa mecanica cuyo brazo se encarga de transportar paquedes de un
// lado a otro. Para ellos deberemos pasarles dos formulas que tienen configuraciones
// distintas para mover el brazo a la izquierda o derecha.

const moverDer = (x) => x * 2;
const moverIzq = (x) => x * 3;

const operar = (n, f) => {
  return (x) => f(n) + x;
};

/* Preguntar, ¿por qué me dice que es una función anónima?
   La respuesta es porque "operar" espera dos parametos, uno
   debe ser un número y el otro una función. A pesar que estamos pasando
   moverDer(3), si ejecutaramos moverDer(3) aparte veriamos que devuelve
   un valor y es ahí donde esta el problema, no deberia "operar()" recibir
   dos número. Entonces como hacemos... Lo que se debe hacer es pasarle 
   a operar el parametro, es decir "operar(#, f)(#)"       */

// console.log(  operar(2, moverDer(3)) );  // Anónima!
// console.log(  operar(2, moverDer)(2)  ); // OK
// console.log(  operar(2, moverDer)(1)  ); // OK
// console.log(  operar(2, moverDer)(5)  ); // OK
// console.log(  operar(2, moverIzq)(6)  ); // OK

/** Utilizar reduce */

/*
arr.reduce(callback, initialValue);
Donde el callback tiene hasta 4 parámetros posibles:
      - callback(accumulator, currentValue, currentIndex, array)
              --> accumulator: el valor acumulado hasta el momento. <--
                  currentValue: el valor del elemento actual que se está procesando.
                  currentIndex (opcional): índice del elemento actual.
                  array (opcional): referencia al array original.
      - initialValue (opcional)
*/

// // Ejercicio: sumar los numero que estan en el array
// const array1 = [1, 2, 3, 4];
// const initValue = 0;
// const suma = array1.reduce(
//        (accumValue, currentValue)=>  accumValue + currentValue , initValue
//       );
// console.log( suma );

//----------------------------------------------------------------

// //Ejercicio: unir cada frase con un guión medio.
//const value = ["hola","mundo","js"].reduce((acc, w, i) => (i ? acc + "-" + w : w), "");
//console.log(value);

// // Ejericio: Contar la cantidad de ocurrencias de cada fruta!
// const arr = ["pera","manzana","pera","uva"];

// const contar = arr.reduce(
//       (acc,currentValue) =>{
//             acc[currentValue] = (acc[currentValue] || 0 ) + 1;
//             return acc;
//       }
//       ,{});
// console.log(contar);

/*
// Ejercicio: Eliminar repetidos de la lista.
// Este ejercicio esta bueno porque [...acc, x] hace de push con la salvedad de que
// push modifica el array pero [...acc, x] crea una copia con los elementos que ya
// tiene acc agregando el nuevo elemento que vale x.

const myarr = [3,3,1,2,1];
const unicos = myarr =>
  arr.reduce((acc, x) => (acc.includes(x) ? acc : [...acc, x]), []);

Si x ya está en acc, devuelve acc sin cambios.
Si x no está, devuelve un nuevo array con x agregado.
De esta manera, el acumulador siempre va guardando solo los valores únicos.

*/

/*
 ¿Cómo eliminar repetidos con "reduce"


const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = items.reduce((accumulator, item) => {
  if (!accumulator.includes(item)) {
    accumulator.push(item);
  }
  return accumulator;
}, []);

console.log(noDuplicateItems);


 */

/* // Ejercicion: Calcular el promedio de notas 

const notas = [{c:"A",n:8},{c:"B",n:6},{c:"A",n:10}];

const valorInicial = 0;

      // forma compacta!
      // const acumulador = (acc,v)=> acc + v.n;
      // const promedio = notas.reduce(acumulador, valorInicial);

const promedio = notas.reduce(
      (acc, v)=> acc + v.n
      , valorInicial);

console.log("Promedio de notas obtenidas: " + promedio);

*/

/*
// Ejercicio: dada una cadena determinar si los existe la misma candida
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

*/

/* 
// Ejercicion: Dada una lista de numeros particionar por un lado los Pares y por otro los Impares. 


const particionar = nums =>
  nums.reduce((acc, n) => {
    (n % 2 === 0 ? acc.pares : acc.impares).push(n);
    return acc;
  }, { pares: [], impares: [] });

  console.log(particionar([1,2,3,4,5]));

const partpar = particionar([1,2,3,4,5]);  
console.log(partpar.impares);

*/

/*
Ejercicio: obtener los totales por categoría.
*/
const items = [
  { c: "libros", p: 100 },
  { c: "tech", p: 200 },
  { c: "libros", p: 50 },
];

const resul = items.reduce((acc, e) => {
  acc[e.c] = (acc[e.c] || 0) + e.p;
  return acc;
}, {});

console.log(resul);
