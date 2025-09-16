const series = require("../dataStore/series.json")

const { seriesDisponibles } = require("../libs/func")

describe("Pruebas de funciones para Series...", () => {

    test("Series Disponibles", () => {
        expect(seriesDisponibles(series)).toHaveLength(2);
    });
})