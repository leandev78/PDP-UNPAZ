const Tren = require("../model/Tren")
const VagonCarga = require("../model/VagonCarga");
const VagonDormitorio = require("../model/VagonDormitorio");
const VagonPasajero = require("../model/VagonPasajero");

/*
Test de los requerimientos...
1) un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
2) un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
3) un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
4) un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
*/

describe("Test general de formaciones", () => {

    test("un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.", () => {
        
        const vp = new VagonPasajero(10, 4, true, true)
        expect(vp.cantidadDePasajeros()).toBe(100);

        expect(vp.pesoMaximo()).toBe(10300); // test extras...
        expect(vp.cargaMaxima()).toBe(300);
        expect(vp.conBanio()).toBe(true);
    })

    test("un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.", () => {
        const vp = new VagonPasajero(7, 2, false, false); //(8*7)=56  - 15 = 41
        expect(vp.cantidadDePasajeros()).toBe(41);

        expect(vp.pesoMaximo()).toBe(6080); // test extras...
        expect(vp.cargaMaxima()).toBe(800);
        expect(vp.conBanio()).toBe(false);
    })
    test("un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.", () => {
        const vc = new VagonCarga(6800, 5);
        expect(vc.cantidadDePasajeros()).toBe(0);

        expect(vc.pesoMaximo()).toBe(6300); // test extras...
        expect(vc.cargaMaxima()).toBe(4800);
        expect(vc.conBanio()).toBe(false);
    })
    test("un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.", () => {
        const vd = new VagonDormitorio(8, 3);
        expect(vd.cantidadDePasajeros()).toBe(24);

        expect(vd.pesoMaximo()).toBe(7120); // test extras...
        expect(vd.cargaMaxima()).toBe(1200);
        expect(vd.conBanio()).toBe(true);
    })

    /* TEST DE MANTENIMIENTO: Indicamos los resultados de valores después de hacer el mantenimiento */

    test("Test de una Formación de 4 vagones", () => {
        const p1 = new VagonPasajero(10, 4, true, true);
        const p2 = new VagonPasajero(7, 2, false, false);
        const c1 = new VagonCarga(6800, 5);
        const d1 = new VagonDormitorio(8, 3);
        const tren = new Tren();

        tren.agregarVagon(p1);
        tren.agregarVagon(p2);
        tren.agregarVagon(c1);
        tren.agregarVagon(d1);

        expect(tren.pasajeros()).toBe(165);
        expect(tren.cantidadVagonesPopulares()).toBe(1);
        expect(tren.esFormacionCarguera()).toBe(false);
        expect(tren.dispersionPesos()).toBe(4220);
        expect(tren.cantidadBanios()).toBe(2);

        tren.hacerMantenimiento(); // cambia todo 

        expect(tren.pasajeros()).toBe(180);
        expect(tren.cantidadVagonesPopulares()).toBe(2);
        expect(tren.esFormacionCarguera()).toBe(false);
        expect(tren.dispersionPesos()).toBe(3200);
        expect(tren.cantidadBanios()).toBe(2);

    })


})