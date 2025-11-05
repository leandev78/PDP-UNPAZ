/*
Dado un depósito, obtener el conjunto formado por el vagón más pesado de cada formación; se espera un conjunto de vagones.
1. Saber si un depósito necesita un conductor experimentado.
2. Un depósito necesita un conductor experimentado si alguna de sus formaciones es compleja. Una formación es compleja si: tiene más de 8 unidades (sumando locomotoras y vagones), o el peso máximo es de más de 80000 kg.
3. Que un depósito pueda agregar una locomotora a una formación determinada, de forma tal que la formación pueda moverse.
Si la formación ya puede moverse, entonces no se hace nada.
Si no, se le agrega una locomotora suelta del depósito cuyo arrastre sea mayor o igual a los kilos de empuje que le faltan a la formación. Si no hay ninguna locomotora suelta que cumpla esta condición, no se hace nada.
*/

class Deposito {

    constructor(){
        this.trenes = [];
        this.locomotorasSueltas = [];
    }

    agregarTrenes(tren){
        this.trenes.push(tren);
    }

    agregarLocomotorasSuelta(loc){
        this.locomotorasSueltas.push(loc);
    }

    vagonesMasPesadosPorFormacion(){
        return this.trenes.map(
            (tren)=>{
                return tren.vagones.reduce(
                  (max, v) => v.pesoMaximo() > max.pesoMaximo() ? v : max
                );
            }
        );
    }

    //1. Saber si un depósito necesita un conductor experimentado.
    // 2. Un depósito necesita un conductor experimentado si alguna de sus formaciones es compleja. Una formación es compleja si: tiene más de 8 unidades (sumando locomotoras y vagones), o el peso máximo es de más de 80000 kg.

    esFormacionCompleja(tren){
        const unidades = tren.vagones.length + tren.locomotoras.length; 
        return unidades > 8 || tren.pesoMaximoFormacion() > 80000;
    }

    necesitaConductorExperimentado(){
        return this.trenes.some( f => this.esFormacionCompleja(f));
    }

    // 3. Que un depósito pueda agregar una locomotora a una formación determinada, de forma tal que la formación pueda moverse.
    // Si la formación ya puede moverse, entonces no se hace nada.
    // Si no, se le agrega una locomotora suelta del depósito cuyo arrastre sea mayor o igual a los kilos de empuje que le faltan a la formación. Si no hay ninguna locomotora suelta que cumpla esta condición, no se hace nada.

    agregarLocomotoraParaQueSeMueva(tren){

        if (!tren.puedeMoverse() && this.locomotorasSueltas.length) {
            const locSuelta = this.locomotorasSueltas.shift();
            if(locSuelta.arrastreMaximo >= tren.kilosDeEmpujeFaltantes()){
                tren.agregarLocomotora(locSuelta);
            }
        }
    }

}

module.exports = Deposito;