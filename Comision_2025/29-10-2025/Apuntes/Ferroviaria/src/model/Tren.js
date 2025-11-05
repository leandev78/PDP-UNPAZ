// const VagonPasajero = require("./VagonPasajero")
// const VagonCarga = require("./VagonCarga")
// const VagonDormitorio = require("./VagonDormitorio")

//== Este es mi tren ==

class Tren {

    constructor() {
        this.vagones = [];
        this.locomotoras = [];
    }

    agregarVagon(vagon) {
        this.vagones.push(vagon);
    }

    agregarLocomotora(locomotora) {
        this.locomotoras.push(locomotora);
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


    // == Métodos para punto Extra Etapa 1 ==

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


    // == ETAPA 2 - Métodos para Locomotoras ==

    //1) su velocidad máxima , que es el mínimo entre las velocidades máximas de las locomotoras.
    valocidadMaxima(){
        if (this.locomotoras.length === 0) return null;
        return Math.min(...this.locomotoras.map(l => l.velocidadMaxima));

        // Si lo hago con reduce ?
        // const locomotora = this.locomotoras.reduce(
        //     (min, loc)=>{
        //         min = (min.velocidadMaxima < loc.velocidadMaxima) ? min : loc;
        //         return min;
        //     }
        // );
        // return locomotora.velocidadMaxima;
    }


    //2) Si es eficiente; o sea, si todas sus locomotoras lo son.
    esEficientes(){
        if (this.locomotoras.length === 0) return null;
        return this.locomotoras.every(l => l.esEficiente());
    }
    
    //3) Si puede moverse. Una formación puede moverse si la suma del arrastre de cada una de sus locomotoras, 
    // es mayor o igual al peso máximo de la formación, que es: peso de las locomotoras + peso máximo de los vagones.
    arrastreTotal(){
        return this.locomotoras.reduce((acc,l)=> acc = acc + l.arrastreMaximo , 0);
    }
    
    pesoMaximoFormacion(){
        const pesoMaxLoco = this.locomotoras.reduce( (acc,l) => acc+=l.peso , 0)
        const pesoMaxVagon = this.vagones.reduce( (acc,v) => acc+=v.pesoMaximo(), 0);
        return pesoMaxLoco + pesoMaxVagon;
    }

    puedeMoverse(){
        if (this.locomotoras.length === 0) return null;
        // console.log(`Arrastre total locomotoras ${this.arrastreTotal()} y peso máximo formación ${this.pesoMaximoFormacion()}`);
        return this.arrastreTotal() >= this.pesoMaximoFormacion();
    }
    
    //4) Cuántos kilos de empuje le faltan para poder moverse, que es: 0 si ya se puede mover, 
    // y si no, el resultado de: peso máximo - suma de arrastre de cada locomotora.    
    kilosDeEmpujeFaltantes(){

        // let faltante = this.pesoMaximoFormacion() - this.arrastreTotal();
        // faltante = (faltante>0) ? faltante : 0;

        return Math.max(0,this.pesoMaximoFormacion() - this.arrastreTotal());
    }

}

module.exports = Tren;