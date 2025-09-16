// INDICES CON JAVASCRIPT


/**
 * some: ¿hay alguna película disponible? → peliculas.some(p => p.disponible)
 * every: ¿todas son posteriores a 2010? → peliculas.every(p => p.anio > 2010)
 * map: lista de títulos → peliculas.map(p => p.titulo)
 * reduce: recaudación total → peliculas.reduce((acc,p) => acc + p.recaudacionUSD, 0)
 */

const peliculas = require("../dataset/peliculas.json")


// Construccion de un indice.

const indexBy = (arr, key) => {
    return arr.reduce((acc, el) => {
        const k = el[key];
        acc[k] = acc[k] || [];
        acc[k].push(el);
        // (acc[k] = acc[k] || []).push(el);  // forma reducida!
        return acc;
    }, {});
};

// Agrupo por Genero...
const indice = indexBy(peliculas, "genero");

// Busqueda
console.log("Busqueda por Indice...");

const encontrados = indice['Aventura'];

console.log(encontrados);

console.log("Total de coincidencias: " + encontrados.length);