/*
Ejercicio 1 — Librería (ventas por libro y autor)

Enunciado.
Disponés de tres arrays: autores, libros y ventas (principal).

Enriquecé cada registro de ventas con el libro y su autor usando find.

Filtrá solo las ventas cuyos libros tengan stock disponible.

Calculá el total facturado por autor con reduce.

Obtené el libro más vendido (por unidades) y el menos vendido.

Verificá con some si hay libros sin stock y con every si todas las ventas tienen unidades > 0.  
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

// 1) Enriquecimiento
const ventasEnriquecidas = ventas.map(v => {
    const libro = libros.find(l => l.id === v.libroId);
    const autor = autores.find(a => a.id === libro.autorId);
    return {
        ...v,
        libro,
        autor,
        importe: v.unidades * libro.precio,
    };
});

// 2) Filtrar ventas con stock disponible
const ventasConStock = ventasEnriquecidas.filter(v => v.libro.stock > 0);

// 3) Total facturado por autor
const totalPorAutor = ventasConStock.reduce((acc, v) => {
    const nombre = v.autor.nombre;
    acc[nombre] = (acc[nombre] || 0) + v.importe;
    return acc;
}, {});

// 4) Libro más y menos vendido (por unidades)
const unidadesPorLibro = ventas.reduce((acc, v) => {
    acc[v.libroId] = (acc[v.libroId] || 0) + v.unidades;
    return acc;
}, {});
const resumenLibros = Object.entries(unidadesPorLibro).map(([libroId, unidades]) => ({
    libro: libros.find(l => l.id === Number(libroId)),
    unidades
}));
const masVendido = resumenLibros.reduce((max, x) => x.unidades > max.unidades ? x : max);
const menosVendido = resumenLibros.reduce((min, x) => x.unidades < min.unidades ? x : min);

// 5) some / every
const haySinStock = libros.some(l => l.stock === 0);
const todasVentasPositivas = ventas.every(v => v.unidades > 0);

console.log({ ventasEnriquecidas, ventasConStock, totalPorAutor, masVendido, menosVendido, haySinStock, todasVentasPositivas });


/*
Ejercicio 2 — Universidad (finales por alumno y materia)

Enunciado.
Tenés alumnos, materias y finales (principal).

Enriquecé cada final con el alumno y la materia.

Filtrá los aprobados (nota ≥ 6) de “Programación I”.

Calculá el promedio por alumno y obtené el mejor promedio.

Usá some para saber si hay ausentes (nota null) y every para validar que todas las notas numéricas estén entre 0 y 10.
*/

const alumnos = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Sol" },
];

const materias = [
    { id: 100, nombre: "Programación I" },
    { id: 101, nombre: "Algoritmos" },
];

const finales = [ // principal
    { alumnoId: 1, materiaId: 100, nota: 8 },
    { alumnoId: 1, materiaId: 101, nota: 7 },
    { alumnoId: 2, materiaId: 100, nota: null }, // ausente
    { alumnoId: 2, materiaId: 101, nota: 5 },
    { alumnoId: 3, materiaId: 100, nota: 9 },
];

const finalesEnriquecidos = finales.map(f => ({
    ...f,
    alumno: alumnos.find(a => a.id === f.alumnoId),
    materia: materias.find(m => m.id === f.materiaId),
}));

// 2) Aprobados de Programación I
const aprobadosProg1 = finalesEnriquecidos
    .filter(f => f.materia.nombre === "Programación I" && typeof f.nota === "number" && f.nota >= 6);

// 3) Promedio por alumno
const sumasConteos = finalesEnriquecidos.reduce((acc, f) => {
    if (typeof f.nota !== "number") return acc; // ignora ausentes
    const key = f.alumno.id;
    acc[key] = acc[key] || { alumno: f.alumno, suma: 0, cant: 0 };
    acc[key].suma += f.nota;
    acc[key].cant += 1;
    return acc;
}, {});
const promedioPorAlumno = Object.values(sumasConteos).map(x => ({
    alumno: x.alumno,
    promedio: x.suma / x.cant
}));
const mejorPromedio = promedioPorAlumno.reduce((max, x) => x.promedio > max.promedio ? x : max);

// 4) some / every
const hayAusentes = finalesEnriquecidos.some(f => f.nota === null);
const notasValidas = finalesEnriquecidos
    .filter(f => typeof f.nota === "number")
    .every(f => f.nota >= 0 && f.nota <= 10);

console.log({ finalesEnriquecidos, aprobadosProg1, promedioPorAlumno, mejorPromedio, hayAusentes, notasValidas });

/*
Ejercicio 3 — E-commerce (items por pedido, totales por cliente)

Enunciado.
Contás con clientes, productos e itemsPedido (principal).

Enriquecé cada ítem con su cliente y producto.

Filtrá los ítems de la categoría "Electrónica".

Calculá el total facturado por cliente con reduce.

Determiná el producto más vendido (por cantidad total) y el menos vendido.

Usá some para chequear si algún ítem tiene cantidad > 5 y every para confirmar que todos los precios unitarios son > 0.
*/

const clientes = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ludmila" },
];

const productos = [
    { id: 200, descripcion: "Teclado", categoria: "Electrónica", precio: 15000 },
    { id: 201, descripcion: "Zapatillas", categoria: "Indumentaria", precio: 45000 },
    { id: 202, descripcion: "Auriculares", categoria: "Electrónica", precio: 22000 },
];

const itemsPedido = [ // principal
    { pedidoId: 500, clienteId: 1, productoId: 201, cantidad: 1 },
    { pedidoId: 501, clienteId: 1, productoId: 200, cantidad: 2 },
    { pedidoId: 502, clienteId: 2, productoId: 202, cantidad: 3 },
    { pedidoId: 503, clienteId: 2, productoId: 200, cantidad: 1 },
];

const itemsEnriquecidos = itemsPedido.map(it => {
    const producto = productos.find(p => p.id === it.productoId);
    const cliente = clientes.find(c => c.id === it.clienteId);
    return {...it, producto, cliente, subtotal: producto.precio * it.cantidad };
});

// 2) Filtrar por categoría
const itemsElectronica = itemsEnriquecidos.filter(it => it.producto.categoria === "Electrónica");

// 3) Total por cliente
const totalPorCliente = itemsEnriquecidos.reduce((acc, it) => {
    const nombre = it.cliente.nombre;
    acc[nombre] = (acc[nombre] || 0) + it.subtotal;
    return acc;
}, {});

// 4) Producto más/menos vendido (por cantidad)
const cantidadPorProducto = itemsPedido.reduce((acc, it) => {
    acc[it.productoId] = (acc[it.productoId] || 0) + it.cantidad;
    return acc;
}, {});
const rankingProductos = Object.entries(cantidadPorProducto).map(([prodId, cant]) => ({
    producto: productos.find(p => p.id === Number(prodId)),
    cantidad: cant
}));
const prodMasVendido = rankingProductos.reduce((max, x) => x.cantidad > max.cantidad ? x : max);
const prodMenosVendido = rankingProductos.reduce((min, x) => x.cantidad < min.cantidad ? x : min);

// 5) some / every
const hayCantidadesAltas = itemsPedido.some(it => it.cantidad > 5);
const preciosValidos = productos.every(p => p.precio > 0);

console.log({ itemsEnriquecidos, itemsElectronica, totalPorCliente, prodMasVendido, prodMenosVendido, hayCantidadesAltas, preciosValidos });

/*
Ejercicio 4 — Proyectos (tareas por empleado y proyecto)

Enunciado.
Tenés proyectos, empleados y tareas (principal).

Enriquecé cada tarea con su proyecto y empleado.

Filtrá las tareas pendientes (estado !== "done").

Calculá las horas totales por proyecto.

Hallá el empleado con más horas (máximo) y la tarea más corta (mínimo de horas).

Usá some para detectar si hay tareas de alta prioridad (prioridad > 8) y every para validar que todas las tareas tengan horas > 0.
*/

const proyectos = [
    { id: 900, nombre: "App Móvil" },
    { id: 901, nombre: "API Backend" },
];

const empleados = [
    { id: 300, nombre: "Carla" },
    { id: 301, nombre: "Diego" },
    { id: 302, nombre: "Emi" },
];

const tareas = [ // principal
    { id: 1, proyectoId: 900, empleadoId: 300, horas: 6, estado: "done", prioridad: 5 },
    { id: 2, proyectoId: 900, empleadoId: 301, horas: 3, estado: "in-progress", prioridad: 9 },
    { id: 3, proyectoId: 901, empleadoId: 301, horas: 5, estado: "todo", prioridad: 4 },
    { id: 4, proyectoId: 901, empleadoId: 302, horas: 2, estado: "done", prioridad: 7 },
    { id: 5, proyectoId: 900, empleadoId: 302, horas: 4, estado: "in-progress", prioridad: 10 },
];

const tareasEnriquecidas = tareas.map(t => ({
    ...t,
    proyecto: proyectos.find(p => p.id === t.proyectoId),
    empleado: empleados.find(e => e.id === t.empleadoId),
}));

// 2) Tareas pendientes
const tareasPendientes = tareasEnriquecidas.filter(t => t.estado !== "done");

// 3) Horas totales por proyecto
const horasPorProyecto = tareasEnriquecidas.reduce((acc, t) => {
    const nombre = t.proyecto.nombre;
    acc[nombre] = (acc[nombre] || 0) + t.horas;
    return acc;
}, {});

// 4) Empleado con más horas y tarea más corta
const horasPorEmpleado = tareasEnriquecidas.reduce((acc, t) => {
    const nombre = t.empleado.nombre;
    acc[nombre] = (acc[nombre] || 0) + t.horas;
    return acc;
}, {});
const empleadoMasHoras = Object.entries(horasPorEmpleado).reduce(
    (max, [nombre, horas]) => horas > max.horas ? { nombre, horas } : max, { nombre: null, horas: -Infinity }
);

const tareaMasCorta = tareasEnriquecidas.reduce((min, t) => t.horas < min.horas ? t : min);

// 5) some / every
const hayAltaPrioridad = tareasEnriquecidas.some(t => t.prioridad > 8);
const horasValidas = tareasEnriquecidas.every(t => t.horas > 0);

console.log({ tareasEnriquecidas, tareasPendientes, horasPorProyecto, empleadoMasHoras, tareaMasCorta, hayAltaPrioridad, horasValidas });