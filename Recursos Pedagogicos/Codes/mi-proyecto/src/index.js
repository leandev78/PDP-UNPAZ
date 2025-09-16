console.log("Index OK");

/**
 * **********************************************************
 * Lo visto en clase 10/09
 * ********************************************************** 
 * 
 * src/index.js (Operador spread - Composición de objetos)
 * 
 * _test_ , dataStore, libs (Trabajamos con Test)
 *
 * **********************************************************  
 */

const arr1 = [];

// Relleno el "arr1" con n cantidad de elementos aleatorios.
const rango = (n) => [...Array(n).keys()];

const maxElement = 10;

rango(maxElement).forEach((elememt) => {
    let value = Math.floor(Math.random() * maxElement);
    arr1.push(value);
});

console.log(arr1);


const arr2 = [-1, -2, -3, -4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const maximo = Math.max(...arr3);
const minimo = Math.min(...arr3);

console.log(`el maximo es: ${maximo} y el minimo es ${minimo}`);

// Sumar todos los elementos usando reduce

const sumarElementos = (...args) => {
    return args.reduce((acc, e) => (acc = acc + e), 0);
}

console.log("La suma de los elementos con reduce es: " + sumarElementos(...arr3));

// Separar los positivos de los negativos.

const separados = arr3.reduce(
    (acc, n) => {
        (n < 0 ? acc.negativos : acc.positivos).push(n);
        return acc;
    }, { negativos: [], positivos: [] }
);

console.log("Números negativos: " + separados.negativos.sort((a, b) => a - b));
console.log("Números positivos: " + separados.positivos.sort());