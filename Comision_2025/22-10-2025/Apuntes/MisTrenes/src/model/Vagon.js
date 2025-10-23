//=== CLASE VAGON BASE === 

class Vagon {

    constructor() {
        if (new.target === Vagon) {
            throw new Error('Vagon es abstracta. No se puede instanciar.');
        }
    }

    cantidadPasajeros() { }
    
    cargaMaxima() { }
    
    pesoMaximo() { }
    
    conBanio() { }
    
    recibirMantenimiento() { }

}

module.exports = Vagon;