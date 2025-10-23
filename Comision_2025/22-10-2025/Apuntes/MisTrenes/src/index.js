console.log("\n\n=== INDEX ===\n");

// Importo mis archivos modelo.
const VagonPasajero = require("./model/VagonPasajero")
const VagonCarga = require("./model/VagonCarga")
const VagonDormitorio = require("./model/VagonDormitorio")
const Formacion = require("./model/Formacion");

// Creo los objetos vagones
const p1 = new VagonPasajero(10, 4, true, true);
const p2 = new VagonPasajero(7, 2, false, false);
const c1 = new VagonCarga(6800, 5);
const d1 = new VagonDormitorio(8, 3);

// Creo mi contendedor que representa a un tren
const formacion = new Formacion();

formacion.agregarVagones(p1);
formacion.agregarVagones(p2);
formacion.agregarVagones(c1);
formacion.agregarVagones(d1);

console.log("== Información en la estructura formación ==")
console.log(formacion);

console.log("== Resultados esperados para el tren, antes de hacer mantenimiento ==")
console.log(
    {
     "formacion.pasajeros()": formacion.pasajeros(),
     "formacion.cantidadVagonesPopulares()": formacion.cantidadVagonesPopulares(),
     "formacion.esFormacionCarguera()": formacion.esFormacionCarguera(),
     "formacion.dispersionPesos()": formacion.dispersionPesos(),
     "formacion.cantidadBanios()":formacion.cantidadBanios()
    }
);

// Aplicamo el mantenimiento el cual modificará todos los datos.
formacion.hacerMantenimiento(); 


console.log("== Resultados esperados para el tren, después de hacer mantenimiento ==")
console.log(
    {
     "formacion.pasajeros()": formacion.pasajeros(),
     "formacion.cantidadVagonesPopulares()": formacion.cantidadVagonesPopulares(),
     "formacion.esFormacionCarguera()": formacion.esFormacionCarguera(),
     "formacion.dispersionPesos()": formacion.dispersionPesos(),
     "formacion.cantidadBanios()":formacion.cantidadBanios()
    }
);


