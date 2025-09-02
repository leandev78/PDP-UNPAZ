// Método Reduce

// reduce(callback, initialValue);
// Donde el callback tiene hasta 4 parámetros posibles:
//       - callback(accumulator, currentValue, currentIndex, array)
//               --> accumulator: el valor acumulado hasta el momento. <--
//               --> currentValue: el valor del elemento actual que se está procesando. <--
//                   currentIndex (opcional): índice del elemento actual.
//                   array (opcional): referencia al array original.
//       - initialValue (opcional)

// const array = [1, 2, 3, 4];

// const redu = array.reduce((acc, curr, i, arr) => {
//     console.log({ acc, curr, i, arr });
//     return acc + curr;
// }, 5);

// console.log(redu);


// const array = [1, 2, 3, 4];

// const initValue = 50;

// const suma = array.reduce(
//     (acc, curr) => acc + curr,
//     initValue
// );
// console.log(suma); // 10

// Ejemplo: unir cada frase con un guión medio
// const value = ["hola","mundo","javaScript"].reduce(
//     //            0     1         2
//     (acc, w, i)=> (i ? acc + "-" + w : w)
// );

// console.log(value); // "hola-mundo-javaScript"

// Utilizar el método reduce para eliminar elementos de una lista.

// const items = [1,2,3,1,2,3,4,8,7];

// const noDupl = items.reduce(

//     (acc, item)=>{
//         if(!acc.includes(item)){
//             acc.push(item);
//         }
//         return acc;
//     }, []

// ) ;
// console.log(items);
// console.log(noDupl);

// Contar la cantidad de ocurrencias que hay en una lista frutas.

// const arr = ["pera", "manzana", "pera", "uva"];

// const contar = arr.reduce(

//     (acc, currentValue)=>{
//         acc[currentValue] = ( acc[currentValue] || 0 ) + 1
//         return acc;
//     }, {}
// );

// console.log(contar);

// const persona = {
//     nombre: "Juan",
//     edad: 30,
//     ciudad: "Tigre",
//     profesion: "Desarrollador",
//     genero: "masculino",
//     casado: false,
//     antiguedad: 5
// };


// console.log(persona);
// // persona.nombre = "Lucia";
// // console.log(persona);

// persona = {};

// console.log(persona.nombre);
// console.log(
//     "Edad de " + persona.nombre + " es de : " + persona.edad);



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

// const result = fns.map( ( {name, fn}  )=>{
//     return { 
//         nombre: name,
//         apellido: name + "algo"
//     }
// } );

// console.log(result);




// se pide: Clonar con map (p. ej., const copia = lista.map(x => x)), luego del clon, mostrar los
// números que son menores o iguales a 10 y remplaza a los > de 10 por una “X”. Una ayudita!, te
// debería dar como salida :
// [1, 2, 3, 3, 1, 5,
//  6, 'X', 4, 'X', 'X', 'X',
// 'X', 7, 1]

//!Ejercicio 8
const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];

const copia = Numbers.map(

    e => e <= 10 ? e : "X"

);
console.log(copia);