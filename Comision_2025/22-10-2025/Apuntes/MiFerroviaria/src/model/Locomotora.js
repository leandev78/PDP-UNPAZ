class Locomotora {

    constructor(peso, arrastreMaximo, velocidadMaxima) {
        this.peso = peso;                     // kg
        this.arrastreMaximo = arrastreMaximo; // kg
        this.velocidadMaxima = velocidadMaxima; // km/h 
    }

    esEficiente(){
        return this.arrastreMaximo >= (5 * this.peso);
    }

}

module.exports = Locomotora;