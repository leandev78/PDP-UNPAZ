// Treabajamos con objetos.

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
        cliente: clientes.find((c) => c.id == v.cliente),
        producto: produtos.find((p) => p.id_producto == v.producto),
    };
});
console.log(r);