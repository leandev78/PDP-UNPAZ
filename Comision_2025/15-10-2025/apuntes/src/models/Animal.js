class Animal {

    nombre;
    #raza = "cualunque";

    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() { return "Silencio!" }
}

module.exports = Animal;