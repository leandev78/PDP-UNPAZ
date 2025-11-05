const Vagon = require("./Vagon")

class VagonDormitorio extends Vagon {

    constructor(compartimentos, camas){
        super();
        this.compartimentos = compartimentos;
        this.camas = camas;
    }

    cargaMaxima(){
        return 1200;
    }

    cantidadDePasajeros(){
        return this.compartimentos * this.camas;
    }

    conBanio(){
        return true;
    }

    pesoMaximo(){
        return 4000 + (80 * this.cantidadDePasajeros() + this.cargaMaxima());
    }  

    recibirMantenimiento(){
        //Lo tengo que dejar escribo igual al método por el polimorfismo
    }    
}

module.exports = VagonDormitorio;