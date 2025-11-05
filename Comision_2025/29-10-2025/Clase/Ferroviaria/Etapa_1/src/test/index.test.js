const Tren = require("../model/Tren");
const VagonCarga = require("../model/VagonCarga");
const VagonDormitorio = require("../model/VagonDormitorio");
const VagonPasajero = require("../model/VagonPasajero");

describe("# TESTING GLOBAL", () => {
  describe("=== TEST ETAPA 1 ====", () => {
    // 1) un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
    test("un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.", () => {
      const vp = new VagonPasajero(10, 4, true, true);
      expect(vp.cantidadDePasajeros()).toBe(100);

      expect(vp.pesoMaximo()).toBe(10300); // test extras...
      expect(vp.cargaMaxima()).toBe(300);
      expect(vp.conBanio()).toBe(true);
    });

    // 2) un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
    test("un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.", () => {
      const vp = new VagonPasajero(7, 2, false, false); //(8*7)=56  - 15 = 41
      expect(vp.cantidadDePasajeros()).toBe(41);

      expect(vp.pesoMaximo()).toBe(6080); // test extras...
      expect(vp.cargaMaxima()).toBe(800);
      expect(vp.conBanio()).toBe(false);
    }); 

    // 3) un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
    test("un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.", () => {
      const vc = new VagonCarga(6800, 5);
      expect(vc.cantidadDePasajeros()).toBe(0);

      expect(vc.pesoMaximo()).toBe(6300); // test extras...
      expect(vc.cargaMaxima()).toBe(4800);
      expect(vc.conBanio()).toBe(false);
    });

    // 4) un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
    test("un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.", () => {
      const vd = new VagonDormitorio(8, 3);
      expect(vd.cantidadDePasajeros()).toBe(24);

      expect(vd.pesoMaximo()).toBe(7120); // test extras...
      expect(vd.cargaMaxima()).toBe(1200);
      expect(vd.conBanio()).toBe(true);
    });

    test("Test para saber si un Formación (Tren) esta equilibrada", ()=>{
      // Creo mi formación
      const tren1 = new Tren();

      // Creo mis vagones
      const p1 = new VagonPasajero(10, 4, true, true);
      const p2 = new VagonPasajero(7, 2, false, false);
      const c1 = new VagonCarga(6800, 5);
      const d1 = new VagonDormitorio(8, 3);

      tren1.agregarVagon(p1);
      tren1.agregarVagon(p2);
      tren1.agregarVagon(c1);
      tren1.agregarVagon(d1);

      expect(tren1.estaEquilibrada()).toBe(false);

    });


  });
});
