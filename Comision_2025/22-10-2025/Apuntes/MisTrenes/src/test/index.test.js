const Formacion = require("../model/Formacion")
const Vagon = require("../model/Vagon");
const VagonCarga = require("../model/VagonCarga");
const VagonDormitorio = require("../model/VagonDormitorio");
const VagonPasajero = require("../model/VagonPasajero");

describe("Test general de formaciones", () => {

    test("Crear instancia de clase abstracta", () => {
        // new Vagon() debe lanzar un error
        expect(() => new Vagon()).toThrow(/abstracta/i);
    })

    // Test de los ejemplos....
    test("Test  cantidad de pasajeros que puede transportar un vagón si esta ordenado", () => {
        const p = new VagonPasajero(10, 2, true, true);
        expect(p.cantidadPasajeros()).toBe(80);
    })

    test("Test cantidad de pasajeros que puede transportar un vagón si no esta ordenado", () => {
        const p = new VagonPasajero(10, 2, true, false);
        expect(p.cantidadPasajeros()).toBe(65);
    })

    /* 
    Test de los requerimientos...
    un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
    un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
    un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
    un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
    */

    test("un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.", () => {
        const vp = new VagonPasajero(10, 4, true, true)
        expect(vp.cantidadPasajeros()).toBe(100);

        expect(vp.pesoMaximo()).toBe(10300); // test extras...
        expect(vp.cargaMaxima()).toBe(300);
        expect(vp.conBanio()).toBe(true);
    })

    test("un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.", () => {
        const vp = new VagonPasajero(7, 2, false, false); //(8*7)=56  - 15 = 41
        expect(vp.cantidadPasajeros()).toBe(41);

        expect(vp.pesoMaximo()).toBe(6080); // test extras...
        expect(vp.cargaMaxima()).toBe(800);
        expect(vp.conBanio()).toBe(false);
    })
    test("un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.", () => {
        const vc = new VagonCarga(6800, 5);
        expect(vc.cantidadPasajeros()).toBe(0);

        expect(vc.pesoMaximo()).toBe(6300); // test extras...
        expect(vc.cargaMaxima()).toBe(4800);
        expect(vc.conBanio()).toBe(false);
    })
    test("un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.", () => {
        const vd = new VagonDormitorio(8, 3);
        expect(vd.cantidadPasajeros()).toBe(24);

        expect(vd.pesoMaximo()).toBe(7120); // test extras...
        expect(vd.cargaMaxima()).toBe(1200);
        expect(vd.conBanio()).toBe(true);
    })



    test("Test de una Formación de 4 vagones", () => {
        const p1 = new VagonPasajero(10, 4, true, true);
        const p2 = new VagonPasajero(7, 2, false, false);
        const c1 = new VagonCarga(6800, 5);
        const d1 = new VagonDormitorio(8, 3);
        const formacion = new Formacion();

        formacion.agregarVagones(p1);
        formacion.agregarVagones(p2);
        formacion.agregarVagones(c1);
        formacion.agregarVagones(d1);

        expect(formacion.pasajeros()).toBe(165);
        expect(formacion.cantidadVagonesPopulares()).toBe(1);
        expect(formacion.esFormacionCarguera()).toBe(false);
        expect(formacion.dispersionPesos()).toBe(4220);
        expect(formacion.cantidadBanios()).toBe(2);

// console.log({
//     "XX": "Primera....",
//     "p1": p1.cantidadPasajeros(),
//     "p2": p2.cantidadPasajeros(),
//     "c1": c1.cantidadPasajeros(),
//     "d1": d1.cantidadPasajeros(),
//     "cantidadVagonesPopulares": formacion.cantidadVagonesPopulares(),
//     "esFormacionCarguera":formacion.esFormacionCarguera(),
//     "dispersionPesos": formacion.dispersionPesos(),
//     "cantidadBanios": formacion.cantidadBanios(),
// });

        formacion.hacerMantenimiento(); // cambia todo 

// console.log({
//     "XX": "Segunda....",
//     "p1": p1.cantidadPasajeros(),
//     "p2": p2.cantidadPasajeros(),
//     "c1": c1.cantidadPasajeros(),
//     "d1": d1.cantidadPasajeros(),
//     "cantidadVagonesPopulares": formacion.cantidadVagonesPopulares(),
//     "esFormacionCarguera":formacion.esFormacionCarguera(),
//     "dispersionPesos": formacion.dispersionPesos(),
//     "cantidadBanios": formacion.cantidadBanios()    
// });        
    
        expect(formacion.pasajeros()).toBe(180);
        expect(formacion.cantidadVagonesPopulares()).toBe(2);
        expect(formacion.esFormacionCarguera()).toBe(false);
        expect(formacion.dispersionPesos()).toBe(3200);
        expect(formacion.cantidadBanios()).toBe(2);

    })


})