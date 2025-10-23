console.log("\n***Clase 20-10-2025 - Paradigmas de programación ***\n");

const { Jugador, Guerrero, Trabajador} = require("./model/Personaje")
const { Ballesta, Jabalina } = require("./model/Arma")
const {Castillo, Vaca, Arbol } = require("./model/Elemento")

// Jugadora
const luisa = new Jugador('Luisa');

//== Armas
const arma1 = new Jabalina(); // potencia 30 - cantidad 1
const arma2 = new Ballesta(); // potencia 4 - cantidad inicial 10 flechas

//== Personajes ==
const floki = new Guerrero( arma1 );
const mario = new Trabajador();

//== Elementos
const castillo = new Castillo();
const aurora = new Vaca();
const tipa = new Arbol();

luisa.asignarPersonajeActivo(floki);
luisa.aparece(castillo);
luisa.aparece(aurora);

console.log( {
    armaCargada: floki.arma.estaCargada(),
    defensaCastillo: castillo.defensa,
    auroraViva: aurora.viva,
    alturaTipa: tipa.altura,
    recolectadoMario: mario.recolectado,
    marioFeliz: mario.esFeliz()
});


luisa.asignarPersonajeActivo(mario);
luisa.aparece(castillo);
luisa.aparece(tipa);

console.log( {
    armaCargada: floki.arma.estaCargada(),
    defensaCastillo: castillo.defensa,
    auroraViva: aurora.viva,
    alturaTipa: tipa.altura,
    recolectadoMario: mario.recolectado,
    marioFeliz: mario.esFeliz()
});

