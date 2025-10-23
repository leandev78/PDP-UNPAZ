const libros = [
    { idLibro: 101, titulo: "La Isla de Hierro", genero: "Aventura", paginas: 320 },
    { idLibro: 102, titulo: "Algoritmos Cotidianos", genero: "Divulgacion", paginas: 210 },
    { idLibro: 103, titulo: "Nudos y Redes", genero: "Tecnologia", paginas: 180 },
    { idLibro: 104, titulo: "Historias del Sur", genero: "Ficcion", paginas: 250 },
];

const prestamos = [
    { libroId: 104, lector: "Sofía", dias: 7, retraso: 0 },
    { libroId: 101, lector: "Marco", dias: 5, retraso: 2 },
    { libroId: 103, lector: "Lucía", dias: 10, retraso: 0 },
    { libroId: 102, lector: "Iván", dias: 3, retraso: 0 },
    { libroId: 101, lector: "Ana", dias: 4, retraso: 1 },
];


/*
  1. ¿Existe ALGÚN préstamo con retraso mayor a 0? 
*/

const existenRetrasos = prestamos.some((p) => p.retraso > 0);
console.log(existenRetrasos);

/*
  2. ¿Cuales? 
*/

const retrasos = prestamos.filter(p => p.retraso > 0);
console.log(retrasos);

/* 
  3. ¿Todos los libros poseen menos de 100 páginas?
*/

const menosDe100 = libros.every(l => l.paginas < 100);
console.log(`Todos los libros poseen menos de 100 páginas: ${menosDe100}`);

/*
  4. Escriba una función que retorne la información combinada de prestamos y libros, 
    con la siguiente estructura:

[
  {
    libroId: 104,
    lector: 'Sofía',
    dias: 7,
    retraso: 0,
    libro: { titulo: 'La Isla de Hierro', genero: 'Aventura', paginas: 250  }
  },
  {....}
]

*/

const prestamosLibros = () => {
    return prestamos.map(
        (p) => {
            const libro = libros.find(l => l.idLibro === p.libroId);
            return {...p, libro: { titulo: libro.titulo, genero: libro.genero, paginas: libro.paginas } }
        }
    );
}

// ejecuto la función.
const detalle = prestamosLibros();

console.log(detalle);

/* 
  5. A partir de detalle, obtené un arreglo llamado seleccion con los préstamos de libros 
     cuyo género sea 'Aventura' o 'Ficcion' y cuyo préstamo sea de 5 días o más (dias ≥ 5).
*/

const seleccion = detalle.filter(
    (e) => {
        return (e.libro.genero === "Aventura" || e.libro.genero === "Finccion") && e.dias >= 5;
    }
);
console.log(seleccion);

/*
 6. Calculá el TOTAL de páginas prestadas (contando un libro cada vez que se prestó). 
*/

const totalPaginas = detalle.reduce(
    (acc, e) => {
        acc = acc + e.libro.paginas;
        return acc;
    }, 0
);

console.log(`Total de paginas prestadas: ${totalPaginas}`);

/* 
  7. Hallá el MÍNIMO de días de préstamo registrado. 
*/

const minimoDias = prestamos.reduce(
    (acc, e) => {
        acc = (e.dias < acc) ? e.dias : acc;
        return acc;
    }, Infinity
);

console.log(`Mínimo de días préstamo: ${minimoDias}`);


/*
  8. Obten la cantida de ocurrencias de titulos que fueron prestados.
*/

const cantOcurrencias = detalle.reduce(
    (acc, e) => {
        acc[e.libro.titulo] = (acc[e.libro.titulo] || 0) + 1;
        return acc;
    }, {}
);

console.log(cantOcurrencias);