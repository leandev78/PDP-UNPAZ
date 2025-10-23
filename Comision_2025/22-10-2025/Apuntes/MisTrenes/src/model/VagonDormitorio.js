//=== CLASE VAGON DORMITORIO === 

const Vagon = require("./Vagon")

class VagonDormitorio extends Vagon {

    constructor(compartimentos,camas){
        super();
        this.compartimentos =  compartimentos;
        this.camas = camas;
    }

    cantidadPasajeros() { 
        return this.compartimentos * this.camas;
    }
    
    cargaMaxima() { return 1200; }
    
    pesoMaximo() { 
        return 4000 + (80 * this.cantidadPasajeros() + this.cargaMaxima());
    }
    
    conBanio() { return true; }
    
    recibirMantenimiento() { /* Lo dejo igual por el polimorfismo */ }    

}

module.exports = VagonDormitorio;