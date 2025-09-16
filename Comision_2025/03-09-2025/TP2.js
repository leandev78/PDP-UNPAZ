/* 
**************************************************************************************************

TRABAJOP PRACTIVO 2 ******************************************************************************

**************************************************************************************************
*/


const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10]; 

// 1)  Calcular la suma de todos los elementos de la lista usando únicamente reduce.

const sumaNum = nums.reduce((acc, n) => {
  acc = acc + n;
  return acc;
});
console.log(`suma de todos los números ${sumaNum}`);


//2)  Calcular la suma de los cuadrados de los números impares. 

const sumaCuadradosImpares = nums
.filter( (n)=> (n%2!==0) ) // [ 1, 5, 7, 9 ]
.map( (n)=> n*n )          // [ 1, 25, 49, 81 ]
.reduce(
    (acc, n)=>{
        acc=acc+n
        return acc;
    }
);
console.log(`suma de los cuadrados de los números impares ${sumaCuadradosImpares}`);


//3)  Teniendo en cuenta la siguiente lista de frases, deberás encontrar la frase más larga. 

const frases = [ 
  "La tecnología cambia el mundo", 
  "Programar es crear soluciones", 
  "Aprender haciendo es aprender mejor", 
  "JavaScript es flexible y poderoso" 
];

const fraseMasLarga = frases.reduce(
    (acc, s)=>{
        if (s.length > acc.length) acc = s;        
        return acc;
    }
);

console.log(`La frase mas larga encontrada es: ${fraseMasLarga}`);


// 4) Obtener del array “nums“, el mínimo y máximo de la lista en una sola pasada , retornando un objeto {min, max} 

const resultado = nums.reduce(
  (acc, n) => {
    if (n < acc.min) acc.min = n;
    if (n > acc.max) acc.max = n;
    return acc;
  },
  { min: Infinity, max: -Infinity }
);
console.log(resultado);


// 5) Dada una lista de notas {curso, nota}, devolvé {curso: promedio} sin recorrer dos veces 
// (acumulá sumas y conteos en el mismo reduce).

const Lista = [ 
    {c:"A",n:8}, 
    {c:"B",n:6}, 
    {c:"A",n:10} 
]; 

const notas = Lista.reduce((acc, { c, n }) => {

  if (!acc[c]) acc[c] = { sum: 0, count: 0, promedio: 0 };

  acc[c].sum += n;
  acc[c].count += 1;
  acc[c].promedio = acc[c].sum / acc[c].count;
  
  return acc;
}, {});

console.log(notas);


// 6) Dada el número de DNI de una persona, se pide calcular la suma de de sus números.
//    dni = '20385978'; Salida esperada: 42

const dni = "20385978";
const sumaDigitos = [...dni].reduce(
    (acc, n) =>{
        acc= Number(acc) + Number(n);
        return acc;
    }
);
console.log(sumaDigitos);


// 7)  Dado el siguiente texto const texto = "En la educación, el docente propone un proyecto breve: con 
// tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía 
// la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto 
// se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente 
// acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación"; 
// Se pide contar palabras  que aparezcan texto.

const cadena =
  "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

const palabras = cadena.split(/\s+/);
const totalPalabras = palabras.reduce((acc, s) => {
  acc[s] = (acc[s] || 0) + 1;
  return acc;
}, {});
console.log(totalPalabras);