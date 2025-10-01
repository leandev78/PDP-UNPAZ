/*
Ejercicio 1 — Librería (ventas por libro y autor)

# Enunciado:
Disponés de tres arrays: autores, libros y ventas (principal).
# Se pide:
1. Relacioná cada registro de ventas con el libro y su autor usando find.
2. Filtrá solo las ventas cuyos libros tengan stock disponible.
3. Verificá con some si hay libros sin stock y con every si todas las ventas tienen unidades > 0 (ventas positivas).
4. Calculá el total facturado por autor con reduce.
5. Obtener las unidades vendidas por id de libro.
6. Obtené el libro más vendido (por unidades) y el menos vendido.

 */

const autores = [
    { id: 1, nombre: "Isaac Asimov" },
    { id: 2, nombre: "Ursula K. Le Guin" },
    { id: 3, nombre: "Alejandra Pizarnik" },
];

const libros = [
    { id: 10, titulo: "Fundación", autorId: 1, precio: 12000, stock: 5, genero: "Sci-Fi" },
    { id: 11, titulo: "Los desposeídos", autorId: 2, precio: 9000, stock: 8, genero: "Sci-Fi" },
    { id: 12, titulo: "Yo, Robot", autorId: 1, precio: 10000, stock: 0, genero: "Sci-Fi" },
    { id: 13, titulo: "Poemas", autorId: 3, precio: 7000, stock: 3, genero: "Poesía" },
];

const ventas = [ // principal
    { libroId: 10, unidades: 2, fecha: "2025-08-01" },
    { libroId: 11, unidades: 1, fecha: "2025-08-03" },
    { libroId: 12, unidades: 4, fecha: "2025-08-05" },
    { libroId: 13, unidades: 3, fecha: "2025-08-08" },
    { libroId: 10, unidades: 1, fecha: "2025-08-10" },
];

// RESULUCION DE PUNTOS

// 1) Relación de ventas
const relacionVentas = ventas.map(v => {
    const libro = libros.find(l => l.id === v.libroId);
    const autor = autores.find(a => a.id === libro.autorId);
    return {
        ...v,
        libro,
        autor,
        importe: v.unidades * libro.precio,
    };
});
//console.log(relacionVentas);


// 2) Filtrar ventas con stock disponible
const ventasConStock = relacionVentas.filter(v => v.libro.stock > 0);
//console.log(ventasConStock);

// 3) some / ¿hay productos sin stock?
//    every/ ¿Todas las ventas son positivas?

const haySinStock = libros.some(l => l.stock === 0);
const todasVentasPositivas = ventas.every(v => v.unidades > 0);
//console.log({ haySinStock, todasVentasPositivas });


// 4) Total facturado por autor
const totalPorAutor = ventasConStock.reduce((acc, v) => {
    const nombre = v.autor.nombre;
    acc[nombre] = (acc[nombre] || 0) + v.importe;
    return acc;
}, {});
//console.log(totalPorAutor);


// 5) Obtener las unidades vendidas por id de libro.
const unidadesPorLibro = ventas.reduce((acc, v) => {
    acc[v.libroId] = (acc[v.libroId] || 0) + v.unidades;
    return acc;
}, {});

//console.log(unidadesPorLibro);

// 6A) Obtener un listado de las unidades vendidas por id de libro y además 
//    cúal es la cantidad máxima y minina de ejemplares vendidos.
const reporte = ventas.reduce((acc, v) => {
    acc[v.libroId] = (acc[v.libroId] || 0) + v.unidades;
    acc.mayor = acc[v.libroId] > acc.mayor ? acc[v.libroId] : acc.mayor;
    acc.menor = acc[v.libroId] < acc.menor ? acc[v.libroId] : acc.menor;
    return acc;
}, { mayor: -Infinity, menor: Infinity });

//console.log(reporte);

// 6B) Libro más y menos vendido (por unidades)
// Object.entries(obj) devuelve un array de pares [clave, valor] con las propiedades propias y enumerables de obj.
// Se usa para convertir un objeto en algo iterable con map, filter, reduce, sort, etc.


const resumenLibros = Object.entries(unidadesPorLibro).map(([libroId, unidades]) => ({
    libro: libros.find(l => l.id === Number(libroId)),
    unidades
}));
const masVendido = resumenLibros.reduce((max, x) => x.unidades > max.unidades ? x : max);
const menosVendido = resumenLibros.reduce((min, x) => x.unidades < min.unidades ? x : min);
console.log({ masVendido, menosVendido });