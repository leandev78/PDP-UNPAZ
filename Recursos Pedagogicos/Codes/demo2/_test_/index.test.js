const {
    pelisDisponibles,
    sonTodasPosteriorAl,
    listarTitulos,
    recaudacionTotal,
    incluyeFrase,
    incluyeEtiqueta
} = require("../libs/func")


describe("Grupo de test sobre DataSet Películas", () => {

    test("Test ¿hay alguna película disponible?", () => {
        expect(pelisDisponibles).toBe(true);
    });

    test("Test ¿todas son posteriores a 2010?", () => {
        expect(sonTodasPosteriorAl(2010)).toBe(false);
    });

    test('Test devuelve la lista de títulos exacta', () => {

        const esperado = [
            'Horizonte Austral', 'La Última Parrilla',
            'Vector Cero', 'Nieves del Tiempo',
            'Circuito Fantasma', 'Aula 404',
            'Río de Acero', 'Pixel y Papel',
            'Umbral', 'Callejón 13',
            'Bitácora de un Asado', 'Bajo Latencia',
            'Viento Norte', 'Nodo',
            'Cobalto', 'Bit Rate',
            'Laberinto de Sal', '404 Not Found',
            'Puentes', 'Delta'
        ];

        expect(listarTitulos).toEqual(esperado);
    });

    test("Test ¿Cuanto es la recaudación total de las peliculas?", () => {
        expect(recaudacionTotal).toBe(872400000);
    });


    test("Test Peliculas que contengan la palabla [Norte] en el título.", () => {
        const esperado = [{
            id: "MV013",
            titulo: "Viento Norte",
            genero: "Drama",
            anio: 2014,
            duracionMin: 124,
            rating: 7.5,
            presupuestoUSD: 5000000,
            recaudacionUSD: 21000000,
            pais: "Uruguay",
            estudio: "La Rambla",
            etiquetas: ["paternidad", "campo", "crecer"],
            disponible: true
        }];

        expect(incluyeFrase).toEqual(esperado);
    });

    test("Test Peliculas que incluya en sus etiquetas a [Mapa] en las etiquetas.", () => {
        // aca filtro para no tener toda la estructura del objeto. Solo me quedo con el titulo y lo comparo.
        const buscarMapa = incluyeEtiqueta.map(p => p.titulo);
        expect(buscarMapa).toEqual(['Laberinto de Sal']);
    });

});