// Funciones para pruebas básicas

const fsuma = (a, b) => a + b;

const elevarAlCuadrado = (arr) => {
    return arr.map((e) => e * e);
}

const sumarElementos = (lista) => {
    return lista.reduce((acc, n) => acc += n);
}


// Funciones para probar mi dataStore series.json

const seriesDisponibles = (series) => {
    return series.filter((s) => s.disponible);
};


module.exports = {
    fsuma,
    "cuadrado": elevarAlCuadrado,
    sumarElementos,
    seriesDisponibles
}