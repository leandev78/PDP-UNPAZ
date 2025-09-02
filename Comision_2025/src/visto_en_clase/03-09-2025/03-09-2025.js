/**
 *  PARADIGMAS DE PROGRAMACIÓN
 *  AGENDA DE CLASE - 03/09/2025
 *  PROF. Alvarez Leandro
 * 
 */

/* 
**************************************************************************************************

REPASO - MÉTODO REDUCE ***************************************************************************

**************************************************************************************************
*/

/** Ejercicio 1: Eliminar repetidos de la lista */
const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];
const sinRep = items.reduce( 
    (acum,n)=>{
        if (! acum.includes(n)) acum.push(n);
        return acum; 
    }, [] 
);
console.log(sinRep);


/** Ejercicio 2: Contar la cantidad de ocurrencias que hay en una lista frutas. */
const arr = ["pera", "manzana", "pera", "uva"];
const ocurrencias = arr.reduce(
    (acc,v)=>{
        acc[v] = (acc[v] || 0) + 1;
        return acc;
    }, {}
);
console.log(ocurrencias);


/** Ejercicio 3: Obtener el máx y min con Semilla sentinelas Infinity / -Infinity: */
const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
const resMaxMin = nums.reduce(
    (acc,n)=>{
        if (n>acc.max) acc.max = n;
        if (n<acc.min) acc.min = n;
        return acc ;
    }, {max:-Infinity,min:Infinity}
);
console.log(resMaxMin);


/** Ejercicio 4: Dada un lista de números separar por un lado los pares y por el otros los impares. */
const listNums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const sepNums = listNums.reduce(
    (acc, n)=>{
        !(n%2) ? acc.pares.push(n) : acc.impares.push(n);
        //(n % 2 === 0 ? acc.pares : acc.impares).push(n);   //forma abreviada!
        return acc;
    }, {pares:[], impares:[]}
);
console.log(sepNums);


/** Ejercicio 5: Dado un número DNI calcular la suma de cada uno de sus dígitos. */
const dni = "14091978";
const sumaDni = [...dni].reduce(
    (acc, d)=>{
        acc = acc + Number(d);      // Number(acc) + Number(d)
        return acc ;
    },0                             // sin 0.
);
console.log(sumaDni);


/** Ejercicio 6: Contar la cantidad de palabras que tiene el texto ... */
const cadena =
  "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

const palabras = cadena.split(/\s+/);
const totalPalabras = palabras.reduce((acc, s) => {
  acc[s] = (acc[s] || 0) + 1;
  return acc;
}, {});
console.log(totalPalabras);


/** Ejercicio 7: Contar la cantidad discriminado por caracteres que tiene el texto ... */

const texto = "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
const coutWord = [...texto].reduce(

    (acc, s) => {
        acc[s] = (acc[s] || 0) + 1;
        return acc;
    }, {}

);
console.log(coutWord);



/* 
**************************************************************************************************

OBJETOS ******************************************************************************************

**************************************************************************************************
*/

// Ejercicio 1: Máximo por propiedad
//              Dada una lista de empleados, obtené el empleado con mayor salario.

const salarios =  [{n:"Ana",s:50},{n:"Luis",s:80},{n:"Sol",s:70}];

const respuesta =  
    salarios.reduce( 
        (acc,e)=> {
            acc = (e.s > acc.s) ? e : acc;
            return acc;
        }
    )
console.log(respuesta);


// Ejercicio 2: obtener los totales por categoría.

const productos = [
  { c: "libros", p: 100 },
  { c: "Juguetes", p: 200 },
  { c: "libros", p: 50 },
];

const resul = productos.reduce(
    (acc, e) => {
        acc[e.c] = (acc[e.c] || 0) + e.p;
        return acc;
    }, {});

console.log(resul);


// Ejercicio 3: Validar contraseñas con una lista de funciones de validación. Mostrar cuáles reglas no se cumplen para el valor dado.

const fns = [
  {
    name: "Longitud Minima de 8",
    fn: (pwd) => pwd.length >= 8,
  },
  {
    name: "Sin Blancos",
    fn: (pwd) => !pwd.includes(" "),
  },
  {
    name: "Con Caractes especiales",
    fn: (pwd) => ["#", "&", "$", "!"].some((c) => pwd.includes(c)),
  },
];

fns.push({
  name: "Con Digitos",
  fn: (pwd) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((d) => pwd.includes(d)),
});

const password = "gn3 sfd";

const verificar = fns.map((f) => {
                        return { name: f.name, value: f.fn(password) };
                    })
                    .filter((f) => !f.value);

console.log(verificar);



// Ejercicio 4: Para cada valor, determinar cuál función de fns produce el mayor resultado.
//              Luego, entre todos, quedarse con el menor de esos máximos.

const myfns = [{
        name: "Doble",
        fn: (x) => x * 2,
    },
    {
        name: "Cuadrado",
        fn: (x) => x * x,
    },
    {
        name: "Suma5",
        fn: (x) => x + 5,
    },
];

const values = [3, 1, 2, 6];

const comparar = values
.map((v)=>{
        const f = myfns.reduce(
            (a, b) => {
                return a.fn(v) > b.fn(v) ? a : b;
            });
        return {name: f.name, value: v, result:  f.fn(v)}
    }
);

console.log(comparar);

const menorDeMaximos = comparar.reduce(
    (a, b) => {
        return a.result < b.result ? a : b;
    }
);
console.log(menorDeMaximos);


/* 
**************************************************************************************************

OBJETOS INTEGRADOR *******************************************************************************

**************************************************************************************************
*/

// Dada la colección personajes (objetos con atributos como nombre, rol, nivel, habilidades, etc.) 
// y el diccionario de operadores predicados (claves: "===", "!==", ">=", "<=", ">", "<", "and", "or", "include"), 
// implementá y utilizá un motor de filtrado declarativo que, a partir de una lista de reglas 
// de la forma { operador, atributo, valor }, devuelva únicamente los personajes que cumplan todas 
// las reglas.

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

// Funcion personalizada para comprobar si se cumplen todas las reglas.
const cumpleTodas = (personaje, reglas) => {
    return reglas.every(
        ({ operador, atributo, valor }) => {
            return predicados[operador](personaje[atributo], valor)
        }
    )
};

const resutado = personajes.filter(p => cumpleTodas(p, reglas));
console.log(resutado);


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

