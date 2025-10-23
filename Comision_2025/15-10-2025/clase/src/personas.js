class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    sosMayor(){
        return this.edad >= 18
    }

    cumplirAnios(){
        this.edad++;
    }

    getEdad(){
        return this.edad;
    }
}

module.exports = {Persona}