//=== CLASE VAGON DE CARGA === 

const Vagon = require("./Vagon")

class VagonCarga extends Vagon {

    constructor(valorCargaMaxima, maderasSueltas){
        super();
        this.valorCargaMaxima = valorCargaMaxima;
        this.maderasSueltas = maderasSueltas;
    }

    cantidadPasajeros() { 
        return 0;
    }
    
    cargaMaxima() { 
        return this.valorCargaMaxima - (400 * this.maderasSueltas);
    }
    
    pesoMaximo() { 
        return 1500 + this.cargaMaxima();
    }
    
    conBanio() { 
        return false; 
    }
    
    recibirMantenimiento() { 
        // cuando aplico mantenimiento ordeno dos maderas sueltas.
        return this.maderasSueltas = Math.max(0, this.maderasSueltas - 2);
    }    

}

module.exports = VagonCarga;