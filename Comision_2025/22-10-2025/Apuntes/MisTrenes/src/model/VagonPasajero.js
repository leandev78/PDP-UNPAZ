//=== CLASE VAGON DE PASAJEROS === 

const Vagon = require("./Vagon")

class VagonPasajero extends Vagon {


    constructor(largo, ancho, tieneBanio, estaOrdenado){


        super();    // Importante que pasa si no lo pongo a super() => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
                    //super() → llama al constructor del padre (obligatorio antes de this en subclases).
                    //super.metodo() → llama a un método del padre (para extender/complementar comportamiento).        
        
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBanio = tieneBanio;
        this.estaOrdenado = estaOrdenado;
    }

    cantidadPasajeros() { 
        let pasajeros = this.ancho <= 3 ? (8 * this.largo) : (10 * this.largo);
        if(!this.estaOrdenado) pasajeros = pasajeros - 15;
        return pasajeros;
    }
    
    cargaMaxima() {
        return this.tieneBanio ? 300 : 800;
    }
        
    pesoMaximo() { 
        return 2000 + (80 * this.cantidadPasajeros()) + this.cargaMaxima(); 
    }
    
    conBanio() { 
        return this.tieneBanio;
    }
    
    recibirMantenimiento() { 
        this.estaOrdenado = true;
     }    
}

module.exports = VagonPasajero;