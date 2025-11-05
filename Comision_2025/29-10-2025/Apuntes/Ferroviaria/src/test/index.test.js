const Tren = require("../model/Tren")
const VagonCarga = require("../model/VagonCarga");
const VagonDormitorio = require("../model/VagonDormitorio");
const VagonPasajero = require("../model/VagonPasajero");
const Locomotora = require("../model/Locomotora");
const Deposito = require("../model/Deposito");

describe("Correr todos los test", () => {


    /* 
        ==========================================================
        TEST - ETAPA 1:
        ==========================================================
    
    Test de los requerimientos...
    1) un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
    2) un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
    3) un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
    4) un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
    
    */

    describe("=== TEST ETAPA 1 ====", () => {

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

        /** FALTO DE LA CLASE ANTERIOR !!! */

        /* TEST CON MANTENIMIENTO: Indicamos los resultados de valores después de hacer el mantenimiento */
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

        test("Test para saber si la formación esta equilibrada", ()=>{
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

    })

    /* 
        ==========================================================
        TEST - ETAPA 2:
        ==========================================================
    */

    describe('=== TEST ETAPA 2 ====', () => {
        test("Test de formacion sin hacerles mantenimiento", () => {

            const p1 = new VagonPasajero(10, 4, true, true);
            const p2 = new VagonPasajero(7, 2, false, false);
            const c1 = new VagonCarga(6800, 5);
            const d1 = new VagonDormitorio(8, 3);
            const tren = new Tren();

            tren.agregarVagon(p1);
            tren.agregarVagon(p2);
            tren.agregarVagon(c1);
            tren.agregarVagon(d1);

            const loc1 = new Locomotora(3000, 20000, 50);
            tren.agregarLocomotora(loc1);

            expect(tren.esEficientes()).toBe(true);
            expect(tren.puedeMoverse()).toBe(false);
            expect(tren.kilosDeEmpujeFaltantes()).toBe(12800);

            const loc2 = new Locomotora(5000, 22000, 50);
            tren.agregarLocomotora(loc2);

            expect(tren.esEficientes()).toBe(false);
            expect(tren.puedeMoverse()).toBe(true);
            expect(tren.kilosDeEmpujeFaltantes()).toBe(0);

        })

        test("Test si una formación puede moverse", () => {

            // Creo un deposito
            const deposito = new Deposito();

            // En mi deposito hay 3 locomotoras sueltas
            deposito.agregarLocomotoraSuelta(new Locomotora(3000, 20000, 50));
            deposito.agregarLocomotoraSuelta(new Locomotora(4000, 40000, 50));
            deposito.agregarLocomotoraSuelta(new Locomotora(5000, 30000, 50));

            // Creo la formacion
            const t1 = new Tren();
            t1.agregarLocomotora(new Locomotora(5000, 22000, 50));
            t1.agregarVagon(new VagonPasajero(10, 4, true, true));
            t1.agregarVagon(new VagonPasajero(7, 2, false, false));
            t1.agregarVagon(new VagonCarga(8000, 5));
            t1.agregarVagon(new VagonDormitorio(8, 3));

            // Agrego mi tren al deposito.
            deposito.agregarTren(t1);

            // es falso porque el arrastre total de las locomotoras es de
            // 22.000kg mientras que el peso máximo de toda la formación es
            // de 36.000.
            expect(t1.puedeMoverse()).toBe(false);

            // al agregar la primera locomotora su arrastre máximo es de 20.000
            // y no alcanza para cubrir los 36.000 con lo cual no se agrega al t1.
            deposito.agregarLocomotoraParaQueSeMueva(t1);

            // es esta oportunidad como su arrastre máximo es de 40.000 si alcanza
            // para cubrir los 36.000 km con lo que si se agrega.
            deposito.agregarLocomotoraParaQueSeMueva(t1);

            expect(t1.puedeMoverse()).toBe(true);

        })
    });


    /* 
        ==========================================================
        TEST - ETAPA 3:
        ==========================================================
    */

    describe('=== TEST ETAPA 3 ====', () => {
        test('true si alguna formación tiene > 8 unidades (locomotoras + vagones)', () => {

            // true si alguna formación tiene > 8 unidades (locomotoras + vagones)

            const t1 = new Tren();
            t1.agregarLocomotora(new Locomotora(5000, 22000, 50));
            t1.agregarVagon(new VagonPasajero(10, 4, true, true));

            const t2 = new Tren();
            t2.agregarLocomotora(new Locomotora(5000, 22000, 50));
            t2.agregarLocomotora(new Locomotora(5000, 22000, 50));
            t2.agregarVagon(new VagonPasajero(10, 4, true, true));
            t2.agregarVagon(new VagonPasajero(7, 2, false, false));
            t2.agregarVagon(new VagonCarga(8000, 5));
            t2.agregarVagon(new VagonDormitorio(8, 3));
            t2.agregarVagon(new VagonDormitorio(8, 3));
            t2.agregarVagon(new VagonDormitorio(8, 3));
            t2.agregarVagon(new VagonDormitorio(8, 3));

            const depo = new Deposito();
            depo.agregarTren(t1);
            depo.agregarTren(t2);

            expect(depo.necesitaConductorExperimentado()).toBe(true);
        });

        test('true si alguna formación supera 80.000 kg de peso máximo', () => {

            const t1 = new Tren();
            t1.agregarVagon(new VagonPasajero(100, 4, true, true));
            expect(t1.pesoMaximoFormacion() > 80000).toBe(true);
            expect(t1.pesoMaximoFormacion()).toBe(82300);

            const t2 = new Tren();
            t2.agregarLocomotora(new Locomotora(75000, 22000, 50));
            expect(t2.pesoMaximoFormacion() > 80000).toBe(false);
            expect(t2.pesoMaximoFormacion()).toBe(75000);

        })

        //   test('false si ninguna formación es compleja', () => {
        //     expect(dep.necesitaConductorExperimentado()).toBe(false);
        //   });

    });

})
