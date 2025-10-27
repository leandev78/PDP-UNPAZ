const Tren = require("./Tren")

class Deposito {

    constructor(){
        this.trenes = [];
        this.locomotorasSueltas = [];
    }

    agregarTren(tren){
        this.trenes.push(tren)
    }

    agregarLocomotoraSuelta(loc) { 
        this.locomotorasSueltas.push(loc); 
    }

    vagonesMasPesadosPorFormacion(){
        return this.trenes.map(
            (tren)=>{
                return tren.vagones.reduce(
                    (max,v)=> v.pesoMaximo() > max.pesoMaximo() ? v : max
                );
            }
        );
    }

    esFormacionCompleja(tren){
        const cantLocomotoras = tren.vagones.length + tren.locomotoras.length;
        return cantLocomotoras > 8 || tren.pesoMaximoFormacion() > 80000;
    }

    necesitaConductorExperimentado(){
        return this.trenes.some(f => this.esFormacionCompleja(f));
    }

    agregarLocomotoraParaQueSeMueva(tren){

        //console.log(this.locomotorasSueltas);

        if ( !tren.puedeMoverse() && this.locomotorasSueltas.length ) {
            const locSuelta = this.locomotorasSueltas.shift();
            if(locSuelta.arrastreMaximo >= tren.kilosDeEmpujeFaltantes() ){
                tren.agregarLocomotora(locSuelta);
            }
        }
    }




}

module.exports = Deposito;