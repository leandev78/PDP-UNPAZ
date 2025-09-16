// INDICES CON JAVASCRIPT

const usuarios = [];
const productos = [];
const maxElem = 90000;

const range = (n) => [...Array(n).keys()];

// Creo mi array de objetos Usuarios
range(maxElem).forEach((i) =>
    usuarios.push({
        id: i,
        nombre: `nombre ${i}`,
    })
);

// Creo mi array de objetos Productos
range(maxElem).forEach((i) =>
    productos.push({
        id: i,
        nombre: `proucto ${ i }`,
        user_id: Math.floor(Math.random() * maxElem),
    })
);

// Creo mi funcion para indexar
const indexBy = (arr, key) =>
    arr.reduce((acc, el) => {
        acc[el[key]] = el;
        return acc;
    }, {});

// Creo mi indice usuarios    
const indexado = indexBy(usuarios, "id");

console.log("Probando sin indexar...");
console.time(1);
const pconUsuario = productos.map((p) => {
    return {...p, usuario: usuarios.find((u) => u.id === p.user_id) };
});
console.timeEnd(1);

console.log("Probando con indexación...");
console.time(1);
const pconUsuarioIdx = productos.map((p) => {
    return {...p, usuario: indexado[p.user_id] };
});
console.timeEnd(1);

console.log(pconUsuario[0]);
console.log(pconUsuarioIdx[0]);