const { fsuma, cuadrado, sumarElementos } = require("../libs/func")

// Crear mis test básicos

describe("Testear mis funciones básicas...", () => {

    test("Pruebo la función de suma con dos números positivos", () => {
        expect(fsuma(2, 3)).toBe(5);
    });


    test("Pruebo la función de suma con dos números negativos", () => {
        expect(fsuma(-5, -3)).toBe(-8);
    });

    test("Testeo la funcion cuadrado con un solo elemento", () => {
        const valores = [2];
        expect(cuadrado(valores)).toEqual([4]);
    });

});