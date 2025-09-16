/**
 * 
 * Ejercicios básicos de uso de metodos some, every, map, filter y reduce sobre objetos.
 * 
 */


const {
    pelisDisponibles,
    sonTodasPosteriorAl,
    listarTitulos,
    recaudacionTotal,
    incluyeFrase,
    incluyeEtiqueta
} = require("../libs/func")



console.log("//1) ¿hay alguna película disponible?");
console.log(`Peliculas disponibles: ${pelisDisponibles}`);

console.log("//2) ¿todas son posteriores a 2010?");
const mayoresAl2010 = sonTodasPosteriorAl('2010');
console.log(`Son todas posteriores al 2010: ${mayoresAl2010}`);

console.log("//3) Generar un listados solo de los títulos.");
console.log(listarTitulos);

console.log("//4) ¿Cuanto es la recaudación total de las peliculas?.");
console.log(`Recaudación total obtenida: ${recaudacionTotal} dóles`);

console.log("//5) Peliculas que contengan la palabla [Norte] en el título.");
console.log(incluyeFrase);

console.log("//5) Peliculas que incluya en sus etiquetas a [Mapa] en las etiquetas.");
console.log(incluyeEtiqueta);