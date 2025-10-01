// RESOLUCION DE PRACTICA DEL CAMPUS---

// Ejercicio 1: Máximo por propiedad
//              Dada una lista de empleados, obtené el empleado con mayor salario.

const salarios = [{ n: "Ana", s: 50 }, { n: "Luis", s: 80 }, { n: "Sol", s: 70 }];

const respuesta =
    salarios.reduce(
        (acc, e) => {
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

// Ejercicio 3:
// Una tienda registra sus clientes, productos y ventas por identificadores numéricos.
// Disponés de tres arreglos:
// productos: lista de objetos con id_producto y descripcion.
// clientes: lista de objetos con id y nombre.
// ventas: lista de objetos donde cada elemento indica una venta con las claves cliente (id del cliente) y producto (id del producto).
// Se pide:
// Construir un nuevo arreglo llamado r que contenga, para cada venta, un objeto con la información completa del cliente y del producto asociados. La estructura de cada elemento debe ser:
// {
//   cliente: { id: <number>, nombre: <string> },
//   producto: { id_producto: <number>, descripcion: <string> }
// }
// Usa métodos de arreglos (por ejemplo, map y find) para relacionar los ids de ventas con los objetos de clientes y productos.
// Mantene el mismo orden que en el arreglo ventas.
// No modifiques los arreglos originales.


const produtos = [
    { id_producto: 1, descripcion: "Monopatin" },
    { id_producto: 2, descripcion: "Ropa" },
];
const clientes = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ludmila" },
    { id: 3, nombre: "maria" },
];

const ventas = [
    { cliente: 1, producto: 2 },
    { cliente: 2, producto: 1 },
    { cliente: 1, producto: 2 },
    { cliente: 3, producto: 1 },
];

const r = ventas.map((v) => {
    return {
        cliente: clientes.find((c) => c.id == v.cliente), //¿porque find y no filter?
        producto: produtos.find((p) => p.id_producto == v.producto),
    };
});
console.log(r);



// Si lo quiero ordenado por id de cliente.
// console.log(
//     r.sort((a, b) => a.cliente.id - b.cliente.id)
// );

/*
                < 0 si a va antes que b

                > 0 si a va después que b

                0 si son “equivalentes” para el orden
*/

/*
    Si quiero quedarme con el ID de cliente maximo y el ID de cliente minimo:
    const mym = r.reduce(
        (acc, e) => {
            acc.max = e.cliente.id > acc.max ? e.cliente.id : acc.max;
            acc.min = e.cliente.id < acc.min ? e.cliente.id : acc.min;
            return acc;
        }, { max: -Infinity, min: Infinity }
    );
    console.log(mym);    
 */


// Ejercicio 4: Validar contraseñas con una lista de funciones de validación. Mostrar cuáles reglas no se cumplen para el valor dado.

const fns = [{
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

console.log("# Verifico todas las reglas:");
const verificar = fns.map((f) => {
    return { name: f.name, value: f.fn(password) };
});
console.log(verificar);



// Ejercicio 5: Para cada valor, determinar cuál función de fns produce el mayor resultado.
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
    .map((v) => {
        const f = myfns.reduce(
            (a, b) => {
                return a.fn(v) > b.fn(v) ? a : b;
            });
        return { name: f.name, value: v, result: f.fn(v) }
    });

console.log(comparar);

const menorDeMaximos = comparar.reduce(
    (a, b) => {
        return a.result < b.result ? a : b;
    }
);
console.log(menorDeMaximos);





/**
 * 
 * EJERCIO INTEGRADOR -----------------------------------------------------------------------------------
 * 
 */
// Ejercicio 6:
// Dada la colección personajes (objetos con atributos como nombre, rol, nivel, habilidades, etc.) 
// y el diccionario de operadores predicados (claves: "===", "!==", ">=", "<=", ">", "<", "and", "or", "include"), 
// implementá y utilizá un motor de filtrado declarativo que, a partir de una lista de reglas 
// de la forma { operador, atributo, valor }, devuelva únicamente los personajes que cumplan todas 
// las reglas.
// ** Este ejercicio lo puedo dar separandolo y usando module.exports = {} **

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




console.log("-----------------------------------------------------");

const persona = {

    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    genero: 'masculino',
    estadoCivil: 'soltero',
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield',
        pais: 'USA'
    },
    hobbies: ['futbol', 'programacion', 'leer'],
    fn: (s) => console.log(`Hola, mi nombre es ${s}`),
};


console.log(persona['nombre']);
console.log(persona.nombre);
console.log(persona.hobbies[0]);
persona.fn();