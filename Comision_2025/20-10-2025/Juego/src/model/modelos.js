// OOP Juego — Implementacion base (ES6+)
// Convencion en comentarios: [Q]=Consulta (no cambia estado), [A]=Accion (cambia estado)

// ===== Armas =====
class Arma {
  potencia() { throw new Error('Abstract method'); }     // [Q]
  estaCargada() { throw new Error('Abstract method'); }   // [Q]
  usar() { throw new Error('Abstract method'); }          // [A]
}

class Ballesta extends Arma {
  constructor() { super(); this.flechas = 10; }
  potencia() { return 4; }                                // [Q]
  estaCargada() { return this.flechas > 0; }              // [Q]
  usar() { if (this.estaCargada()) this.flechas -= 1; }   // [A]
}

class Jabalina extends Arma {
  constructor() { super(); this.cargada = true; }
  potencia() { return 30; }                               // [Q]
  estaCargada() { return this.cargada; }                  // [Q]
  usar() { this.cargada = false; }                        // [A]
}

// ===== Elementos =====
class Elemento {
  constructor(altura) { this.altura = altura; }
  recibirAtaque(_potencia) { /* por defecto, sin efecto */ } // [A]
  valor() { return 0; }                                      // [Q]
  recibirTrabajo(_trabajador) { /* por defecto, sin efecto */ } // [A]
}

class Castillo extends Elemento {
  constructor() { super(20); this.defensa = 150; }
  recibirAtaque(potencia) {                                  // [A]
    this.defensa = Math.max(0, this.defensa - potencia);
  }
  valor() { return this.defensa / 5; }                       // [Q]
  recibirTrabajo() {                                         // [A]
    this.defensa = Math.min(200, this.defensa + 20);
  }
}

class Vaca extends Elemento {
  constructor() { super(1); this.viva = true; }
  recibirAtaque(potencia) {                                  // [A]
    if (potencia >= 10) this.viva = false;
  }
  valor() { return 15; }                                     // [Q]
  // recibirTrabajo: no-op
}

class Arbol extends Elemento {
  constructor(alturaInicial = 8) { super(alturaInicial); }
  // recibirAtaque: no-op
  valor() { return this.altura * 2; }                        // [Q]
  recibirTrabajo() { this.altura += 1; }                     // [A]
}

// ===== Personajes =====
class Personaje {
  encontrar(_elemento) { throw new Error('Abstract method'); } // [A]
}

class Guerrero extends Personaje {
  constructor(arma) { super(); this.arma = arma; }
  encontrar(elemento) {                                      // [A]
    if (this.arma.estaCargada()) {
      elemento.recibirAtaque(this.arma.potencia());
      this.arma.usar();
    }
  }
}

class Trabajador extends Personaje {
  constructor() { super(); this.recolectado = 0; this.ultimoElemento = null; }
  esFeliz() {                                                // [Q]
    return this.recolectado >= 50 || (this.ultimoElemento && this.ultimoElemento.altura >= 10);
  }
  encontrar(elemento) {                                      // [A]
    this.recolectado += elemento.valor();
    elemento.recibirTrabajo(this);
    this.ultimoElemento = elemento; // linea necesaria para evaluar felicidad por altura
  }
}

// ===== Jugadora =====
class Jugadora {
  constructor(nombre) { this.nombre = nombre; this.personajeActivo = null; }
  asignarPersonajeActivo(personaje) { this.personajeActivo = personaje; } // [A]
  aparece(elemento) {                                                     // [A]
    if (!this.personajeActivo) throw new Error('No hay personaje activo');
    this.personajeActivo.encontrar(elemento);
  }
}

// ===== Escena de ejemplo =====
function demo() {
  const luisa = new Jugadora('Luisa');
  const floki = new Guerrero(new Jabalina()); // proba tambien: new Ballesta()
  const mario = new Trabajador();

  const castillo = new Castillo();
  const aurora = new Vaca();
  const tipa = new Arbol();

  luisa.asignarPersonajeActivo(floki);
  luisa.aparece(castillo);
  luisa.aparece(aurora);

  luisa.asignarPersonajeActivo(mario);
  luisa.aparece(castillo);
  luisa.aparece(tipa);

  return {
    defensaCastillo: castillo.defensa,
    auroraViva: aurora.viva,
    alturaTipa: tipa.altura,
    recolectadoMario: mario.recolectado,
    marioFeliz: mario.esFeliz()
  };
}

// Export para usar en Node o en browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Arma, Ballesta, Jabalina,
    Elemento, Castillo, Vaca, Arbol,
    Personaje, Guerrero, Trabajador,
    Jugadora, demo
  };
}
