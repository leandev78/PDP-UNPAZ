const productos = [{
        "id": 1,
        "nombre": "Café",
        "precio": 800,
        "categoria_id": 2
    },
    {
        "id": 2,
        "nombre": "Notebook",
        "precio": 350000,
        "categoria_id": 1
    },
    {
        "id": 3,
        "nombre": "Auriculares",
        "precio": 15000,
        "categoria_id": 1
    }
]

const categorias = [{
        "id": 1,
        "descripcion": "Electrónica",
        "esImportada": true
    },
    {
        "id": 2,
        "descripcion": "Alimentos",
        "esImportada": false
    }
]


// 1. Escriba una función que reciba por parámetro un nombre y retorne el producto que 
//    coincida exactamente con ese nombre utilizando. 

const buscarPorNombre = (nombre) => {
    return productos.find((p) => p.nombre === nombre);
};

console.log(buscarPorNombre("Notebook"));


// 2. Escriba una función que no reciba parámetros y retorne un booleano indicando si todos
//    los productos tienen precio mayor a 0

const todosPreciosPositivos = () => {
    return productos.every((p) => p.precio >= 0);
};

console.log(`Todos los productos son positivos? ...  ${todosPreciosPositivos()}`);

// 3. Escriba una función que retorne el producto más caro, utilizando 
//    obligatoriamente el método .reduce(). 

const productoMasCaro = () => {
    return productos.reduce(
        (acc, e) => {
            acc = e.precio > acc.precio ? e : acc;
            return acc;
        }
    );
};

console.log(productoMasCaro());

/*
// 4. Escriba una función que retorne la información combinada de producto y categoría, 
//    con la siguiente estructura:
[
    {
        "nombre": String,
        "precio": Number,
        "categoria": {
            "descripcion": String,
            "esImportada": Boolean
        }
    },
    { ... }
]
*/

const productosCategorias = () => {

    return productos.map(
        (p) => {
            const categoria = categorias.find((c) => c.id === p.categoria_id);
            return { nombre: p.nombre, precio: p.precio, categoria: { descripcion: categoria.descripcion, esImportada: categoria.esImportada } };
            //return { nombre: p.nombre, precio: p.precio, categoria: {...categoria } };
        }
    );

};

console.log(productosCategorias());


// 5. Escriba una función que retorne el precio promedio de todos los productos

const precioPromedioProductos = () => {
    const total = productos.reduce((acc, a) => acc += a.precio, 0);
    return (total / productos.length).toFixed(2);
};

console.log(`Precio promedio de todos los productos: ${precioPromedioProductos()}`);