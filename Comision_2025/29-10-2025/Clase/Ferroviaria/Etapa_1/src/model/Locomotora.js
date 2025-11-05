class Locomotora {

    constructor(peso, arrastreMaximo, velocidadMaxima ){
        this.peso = peso;
        this.arrastreMaximo = arrastreMaximo;
        this.velocidadMaxima = velocidadMaxima;
    }

    esEficiente(){ 
        return this.arrastreMaximo >=  (5 * this.peso);
    }

}

module.exports = Locomotora;