const fsuma = (a, b) => a + b;

const elevarAlCuadrado = (arr) => {
    return arr.map((e) => e * e);
};

const sumarElementos = (lista) => {
    return lista.reduce((acc, n) => acc = acc + n);
};

const esEnteroNoNegativo = (v) => {
    return typeof v === "number" && Number.isInteger(v) && v >= 0;
};


// Funciones para trabajar con mi data store series.json

const seriesDisponibles = (series) => {
    return series.filter((s) => s.disponible);
};



module.exports = {
    fsuma,
    cuadrado: elevarAlCuadrado,
    sumarElementos: sumarElementos,
    esEnteroNoNegativo: esEnteroNoNegativo,
    seriesDisponibles
}