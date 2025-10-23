const Vagon = require("./Vagon")

class VagonPasajero extends Vagon {

    constructor(largo, ancho, tieneBanios,estaOrdenado){
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBanios = tieneBanios;
        this.estaOrdenado = estaOrdenado;
    }

    cargaMaxima(){
        return this.tieneBanios ? 300 : 800;
    }

    cantidadDePasajeros(){
        let pasajeros = this.ancho <= 3 ? (8 * this.largo) : (10 * this.largo);
        if (!this.estaOrdenado) pasajeros = pasajeros - 15;
        return pasajeros;
    }

    conBanio(){ 
        return this.tieneBanios; 
    }

    pesoMaximo(){
        return 2000 + (80 * this.cantidadDePasajeros()) + this.cargaMaxima();   
    }   
    
    recibirMantenimiento(){
        this.estaOrdenado = true;
    }

}

module.exports = VagonPasajero;