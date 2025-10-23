// const VagonPasajero = require("./VagonPasajero")
// const VagonCarga = require("./VagonCarga")
// const VagonDormitorio = require("./VagonDormitorio")

//== Este es mi tren ==

class Tren {

    constructor() {
        this.vagones = [];
    }

    agregarVagon(vagon) {
        this.vagones.push(vagon);
    }

    // === Código que voy a usar para los requerimientos. ===

    pasajeros() {
        const pasajeros = this.vagones.reduce(
            (acc, v) => {
                acc = acc + v.cantidadDePasajeros();
                return acc;
            }, 0
        );
        return pasajeros;
    }

    cantidadVagonesPopulares(){
        return this.vagones.filter((v)=> v.cantidadDePasajeros() > 50).length;
    }

    esFormacionCarguera(){
        return this.vagones.every((v)=>v.cargaMaxima() >= 1000);
    }

    dispersionPesos(){
        //peso max del vagon mas pesado.
        const maxPesado = this.vagones.reduce(            
            (max, v)=>{
                //console.log(`p: ${v.pesoMaximo()}`)
                max = max > v.pesoMaximo() ? max : v.pesoMaximo();
                return max;
            },0
        );

        //peso max del vagon mas liviano. - (!)Math.min necesita argumentos no array...
        const maxLiviano = Math.min(...this.vagones.map(v => v.pesoMaximo()) );
        return (maxPesado - maxLiviano);
    }

    cantidadBanios(){
        return this.vagones.filter(v => v.conBanio()).length;
    }

    hacerMantenimiento(){
        this.vagones.forEach((vagon) => vagon.recibirMantenimiento());
    }

    estaEquilibrada(){

        const umbral = 20;

        const capacidades = this.vagones
            .map(v => v.cantidadDePasajeros())
            .filter(n => n > 0); // solo los que realmente llevan pasajeros

        //console.log(capacidades);

        if (capacidades.length <= 1) return true; // con 0 o 1 vagón, la dif es 0

        const max = Math.max(...capacidades);
        const min = Math.min(...capacidades);
        const diferencia = max - min;

        //console.log(`${max}  - ${min}`);

        return diferencia <= umbral; // “no supera los 20” → <= 20        
    }

}

module.exports = Tren;