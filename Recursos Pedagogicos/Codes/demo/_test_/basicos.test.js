const { fsuma, cuadrado, sumarElementos } = require("../libs/func");


// Agrupo todo mis test mediante el bloque "describe"...

describe("Test básicos de funciones", () => {

    test("Pruebo la función suma con números positivos", () => {

        expect(fsuma(2, 3)).toBe(5)

    });

    test("Pruebo la funci+on con números negativos", () => {
        expect(fsuma(-5, -3)).toBe(-8)
    })

    test("Testeo de la función Cuadrados", () => {
        const valores = [2];
        expect(cuadrado(valores)).toEqual([4]);
    })

});