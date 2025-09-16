const peliculas = require("../dataset/peliculas.json")


const pelisDisponibles = peliculas.some((p) => p.disponible);

const sonTodasPosteriorAl = (value) => peliculas.every((p) => p.anio > value);

const listarTitulos = peliculas.map(p => p.titulo);

const recaudacionTotal = peliculas.reduce(
    (acc, a) => acc += a.recaudacionUSD, 0
);

const incluyeFrase = peliculas.filter((p) => p.titulo.includes('Norte'));

const incluyeEtiqueta = peliculas.filter((p) => Array.isArray(p.etiquetas) && p.etiquetas.includes('mapa'));


module.exports = {
    pelisDisponibles,
    sonTodasPosteriorAl,
    listarTitulos,
    recaudacionTotal,
    incluyeFrase,
    incluyeEtiqueta
}