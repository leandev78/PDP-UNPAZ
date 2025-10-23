// ===== Jugador =====
class Jugador {
  constructor(nombre) { this.nombre = nombre; this.personajeActivo = null; }
  asignarPersonajeActivo(personaje) { this.personajeActivo = personaje; } 
  aparece(elemento) {                                                     
    if (!this.personajeActivo) throw new Error('No hay personaje activo');
    this.personajeActivo.encontrar(elemento);
  }
}


// ===== Personajes =====
class Personaje {
  encontrar(_elemento) { throw new Error('Abstract method'); } 
}


// ===== Guerrero =====
class Guerrero extends Personaje {
 
  constructor(arma) { super(); this.arma = arma; }

  encontrar(elemento) {                                      
    if (this.arma.estaCargada()) {
      elemento.recibirAtaque(this.arma.potencia());
      this.arma.usar();
    }
  }

  atacar() {
    if (this.puedoAtacar()) {
      this.arma.usar();
    }
  }

  cambiarDeArma(unArma) {
    this.arma = unArma;
  }

  puedoAtacar() {
    return this.arma.estaCargada();
  }  

}

// ===== Trabajador =====
class Trabajador extends Personaje {
  constructor() { super(); this.recolectado = 0; this.ultimoElemento = null; }
  esFeliz() {                                                
    return this.recolectado >= 50 || (this.ultimoElemento && this.ultimoElemento.altura >= 10);
  }
  encontrar(elemento) {                   
    this.recolectado += elemento.valor();
    elemento.recibirTrabajo(this);
    this.ultimoElemento = elemento; // linea necesaria para evaluar felicidad por altura
  }
}

module.exports = {
  Jugador,
  Guerrero,
  Trabajador
}
