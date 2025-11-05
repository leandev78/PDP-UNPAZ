const VagonPasajero = require("./model/VagonPasajero");
const VagonCarga = require("./model/VagonCarga");
const VagonDormitorio = require("./model/VagonDormitorio");
const Tren = require("./model/Tren");

/*
    ===========================
    Infraestructura ferroviaria
    ===========================
*/

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
    tren1.vagones.map((v, i) => {
      return {
        Vagón: i + 1,
        "Cant. Pasajeros": v.cantidadDePasajeros(),
        "Peso máximo": v.pesoMaximo(),
        "Carga máxima": v.cargaMaxima(),
        "Tiene Baño": v.conBanio(),
      };
    })
  );

// == Muestro los requerimientos ==

  console.log("== REQUERIMIENTOS ==");
  const resul = {
    pasajeros: tren1.pasajeros(), //1.
    cantidadVagonesPopulares: tren1.cantidadVagonesPopulares(), //2.
    esFormacionCarguera: tren1.esFormacionCarguera(), //3.
    dispersionPesos: tren1.dispersionPesos(), //4.
    cantidadBanios: tren1.cantidadBanios(), //5
  };

  console.log(resul);

// == Aplico el Mantenimiento ==
console.log("== APICAR MANTENIMIENTO ==");

tren1.hacerMantenimiento();

const resul2 = {
    pasajeros: tren1.pasajeros(), //1.
    cantidadVagonesPopulares: tren1.cantidadVagonesPopulares(), //2.
    esFormacionCarguera: tren1.esFormacionCarguera(), //3.
    dispersionPesos: tren1.dispersionPesos(), //4.
    cantidadBanios: tren1.cantidadBanios(), //5
  };

console.log(resul2);



// == Muestro el punto extra ==
console.log("== PUNTO EXTRA ==");

const equilibrada = tren1.estaEquilibrada();
console.log(equilibrada);



