const listaDePersonajes = require("../dataset/personajes.json");
const reglasDeFiltro = require("../dataset/reglasDeFiltro.json");
const construirPredicado = require("./fabricaDePredicados");


// función con nombre booleano si coinciden todas las reglas.
const pasaTodasLasReglas = (personaje, reglas) =>
  reglas.every((regla) =>
    construirPredicado(regla.operator, regla.attribute, regla.value)(personaje)
  );

// Busco aquellos personajes que cumplan con todas mis reglas establecidas.
const result = listaDePersonajes.filter((p) => pasaTodasLasReglas(p, reglasDeFiltro));
console.log(result);

