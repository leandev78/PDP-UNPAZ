const VagonPasajero = require("./model/VagonPasajero")
const VagonCarga = require("./model/VagonCarga")
const VagonDormitorio = require("./model/VagonDormitorio")
const Tren = require("./model/Tren")
const Locomotora = require("./model/Locomotora")
const Deposito = require("./model/Deposito")

/*
    ===========================
    Infraestructura ferroviaria
    ===========================
*/

//== ETAPA 1:

const etapa1 = ()=> {

    console.log("\n\n======== ETAPA 1 - locomotoras (Actividad) ========\n\n");


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


// Para poder recorrer lo que tiene cada vagón de trens antes de pasar a los test...
console.log(
    tren1.vagones.map((v,i)=>{         
        return {
            "Vagón": i+1,
            "Cant. Pasajeros": v.cantidadDePasajeros(),
            "Peso máximo": v.pesoMaximo(),
            "Carga máxima": v.cargaMaxima(),
            "Tiene Baño": v.conBanio()
        }; 
    })
)


// == Muestro los requerimientos ==

console.log("== REQUERIMIENTOS ==");
const resul = {
    "pasajeros" : tren1.pasajeros(), //1.
    "cantidadVagonesPopulares": tren1.cantidadVagonesPopulares(), //2. 
    "esFormacionCarguera": tren1.esFormacionCarguera(), //3. 
    "dispersionPesos": tren1.dispersionPesos(), //4. 
    "cantidadBanios": tren1.cantidadBanios(), //5
};

console.log(resul);


// == Aplico el Mantenimiento ==

console.log("== MANTENIMIENTO ==");
tren1.hacerMantenimiento();
const resul2 = {
    "pasajeros" : tren1.pasajeros(), //1.
    "cantidadVagonesPopulares": tren1.cantidadVagonesPopulares(), //2. 
    "esFormacionCarguera": tren1.esFormacionCarguera(), //3. 
    "dispersionPesos": tren1.dispersionPesos(), //4. 
    "cantidadBanios": tren1.cantidadBanios(), //5
};
console.log(resul2);


// == Muestro el punto extra ==

console.log("== PUNTO EXTRA ==");

const equilibrados = tren1.estaEquilibrada();

console.log(`La formación (Tren) esta equilibrada en pasajeros ?: ${equilibrados} \n`);


}

const etapa2 = ()=> {

//== ETAPA 2: ========================================================================================================

console.log("\n\n======== ETAPA 2 - locomotoras (Actividad) ========\n\n");

// Prueba A:
const loc1 = new Locomotora(1000, 7000, 50);
const loc2 = new Locomotora(1000, 3000, 70);
const loc3 = new Locomotora(1000, 2000, 60);

const tren2 = new Tren();
tren2.agregarLocomotora(loc1);
tren2.agregarLocomotora(loc2);
tren2.agregarLocomotora(loc3);

console.log(
    {
        "velocidadMaxima" : tren2.valocidadMaxima(),
        "esEficientes" : tren2.esEficientes(),
        "puedeMoverse" : tren2.puedeMoverse(),
        "kilosDeEmpujeFaltantes": tren2.kilosDeEmpujeFaltantes()
    }
);

// Prueba B:
const loc = new Locomotora(1000, 30000, 50);
const vc1 = new VagonCarga(6800, 5);
const vc2 = new VagonCarga(6800, 5);
const vc3 = new VagonCarga(6800, 5);
const vc4 = new VagonCarga(6800, 5);

const tren3 = new Tren();
tren3.agregarLocomotora(loc);
tren3.agregarVagon(vc1);
tren3.agregarVagon(vc2);
tren3.agregarVagon(vc3);
tren3.agregarVagon(vc4);

tren3.agregarVagon(vc3);
tren3.agregarVagon(vc4);

// console.log(
//     {
//         "velocidadMaxima" : tren3.valocidadMaxima(),
//         "esEficientes" : tren3.esEficientes(),
//         "puedeMoverse" : tren3.puedeMoverse(),
//         "kilosDeEmpujeFaltantes": tren3.kilosDeEmpujeFaltantes()
//     }
// );


// Prueba C:  TEST - segun lo indicado en los test

const v1 = new VagonPasajero(10, 4, true, true);
const v2 = new VagonPasajero(7, 2, false, false);
const v3 = new VagonCarga(6800, 5);
const v4 = new VagonDormitorio(8, 3);

const tren4 = new Tren();

tren4.agregarVagon(v1);
tren4.agregarVagon(v2);
tren4.agregarVagon(v3);
tren4.agregarVagon(v4);

const l1 = new Locomotora(3000 , 20000  , 50);     //Una locomotora de peso 3000 kg y arrastre 20000 kg.
const l2 = new Locomotora(5000 , 22000  , 50);   //Una locomotora de peso 5000 kg y arrastre 22000 kg.

// ** Si a la formación le agregamos la locomotora 1, entonces, es eficiente, no puede moverse, y le faltan 12800 kg de empuje.
tren4.agregarLocomotora(l1);
console.log(
    {
        "velocidadMaxima" : tren4.valocidadMaxima(),
        "esEficientes" : tren4.esEficientes(),
        "puedeMoverse" : tren4.puedeMoverse(),
        "kilosDeEmpujeFaltantes": tren4.kilosDeEmpujeFaltantes()
    }
);        

//** Si a la misma formación le agregamos también la locomotora 2, entonces no es eficiente, sí puede moverse, y le faltan 0 kilos de empuje.
tren4.agregarLocomotora(l2);
console.log(
    {
        "velocidadMaxima" : tren4.valocidadMaxima(),
        "esEficientes" : tren4.esEficientes(),
        "puedeMoverse" : tren4.puedeMoverse(),
        "kilosDeEmpujeFaltantes": tren4.kilosDeEmpujeFaltantes()
    }
);      

}

//== ETAPA 3: ========================================================================================================

const etapa3 = ()=> {

console.log("\n\n======== ETAPA 3 - locomotoras (Actividad) ========\n\n");

// Creo la formacion 1
const t1 = new Tren();
t1.agregarLocomotora(new Locomotora(1000, 30000, 50));
t1.agregarVagon(new VagonPasajero(10, 4, true, true));
t1.agregarVagon(new VagonPasajero(17, 2, false, false));
t1.agregarVagon(new VagonCarga(6800, 5));
t1.agregarVagon(new VagonDormitorio(8, 3));

// Creo la formacion 2
const t2 = new Tren();
t2.agregarLocomotora(new Locomotora(5000 , 22000 , 50));
t2.agregarVagon(new VagonPasajero(10, 4, true, true));
t2.agregarVagon(new VagonPasajero(7, 2, false, false));
t2.agregarVagon(new VagonCarga(8000, 5));
t2.agregarVagon(new VagonDormitorio(8, 3));

// Agrego a mi deposito las dos formaciones creadas.
const deposito = new Deposito();
deposito.agregarTren(t1);
deposito.agregarTren(t2);

// Agrego a mi deposito 3 locomotoras sueltas
deposito.agregarLocomotoraSuelta(new Locomotora(2000, 8000, 50));
deposito.agregarLocomotoraSuelta(new Locomotora(3000, 1000, 50));
deposito.agregarLocomotoraSuelta(new Locomotora(4000, 10000, 50));


console.log(
    {
        "vagonesMasPesadosPorFormacion" : deposito.vagonesMasPesadosPorFormacion(),
        "esFormacionCompleja 1" : deposito.esFormacionCompleja(t1),
        "esFormacionCompleja 2" : deposito.esFormacionCompleja(t2),
        "necesitaConductorExperimentado" : deposito.necesitaConductorExperimentado(),
    }
);

// Agrego locomotoras para que se mueva el tren 1
console.log(`Locomotora 1 puede moverse? .... ${t1.puedeMoverse()}`);
deposito.agregarLocomotoraParaQueSeMueva(t1);
deposito.agregarLocomotoraParaQueSeMueva(t1);
deposito.agregarLocomotoraParaQueSeMueva(t1);
console.log(`Locomotora 1 puede moverse? .... ${t1.puedeMoverse()}`);

}


// etapa1();
// etapa2();
etapa3();
