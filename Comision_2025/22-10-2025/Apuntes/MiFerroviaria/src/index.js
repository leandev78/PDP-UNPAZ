/*
    Formación (tren)
    ================

    # VAGONES DE PASAJEROS  [largo, ancho, tieneBanios, estaOrdenado] 
                            
        cargaMaxima()
        cantidadDePasajeros()
        conBanio()
        pesoMaximo()
        recibirMantenimiento()

    # VAGONES DE CARGA [cargaMaximaIdeal, maderasSueltas]      # VAGONES DORMITORIO [compartimentos, camas]
          
        cargaMaxima()                                           cargaMaxima()
        cantidadDePasajeros()                                   cantidadDePasajeros()
        conBanio()                                              conBanio()
        pesoMaximo()                                            pesoMaximo()
        recibirMantenimiento()                                  recibirMantenimiento()

*/

console.log("\n\n************************ INIDEX ************************\n\n");

const VagonPasajero = require("./model/VagonPasajero")
const VagonCarga = require("./model/VagonCarga")
const VagonDormitorio = require("./model/VagonDormitorio")
const Tren = require("./model/Tren")


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


// Muesto el contenido de mi tren
console.log("== TREN ==");
//console.log(tren1);

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


// == Muestro el punto extra ==

console.log("== PUNTO EXTRA ==");

const equilibrados = tren1.estaEquilibrada();

console.log(`La formación (Tren) esta equilibrada en pasajeros ?: ${equilibrados} \n`);


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