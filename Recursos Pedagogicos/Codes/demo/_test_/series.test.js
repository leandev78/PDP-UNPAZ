const { seriesDisponibles } = require("../libs/func")

const series = require("../dataStore/series.json")

describe("Grupo de test para series", () => {

    test("Series disponibles", () => {
        expect(seriesDisponibles(series)).toHaveLength(2);
    });
})