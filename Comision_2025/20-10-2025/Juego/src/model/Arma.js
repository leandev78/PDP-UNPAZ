class Arma {
  potencia() { throw new Error('Abstract method'); }     // método de consulta
  estaCargada() { throw new Error('Abstract method'); }   // método de consulta
  usar() { throw new Error('Abstract method'); }          // método de acción
}

class Ballesta extends Arma {
  constructor() { super(); this.flechas = 10; }
  potencia() { return 4; }                                // método de consulta
  estaCargada() { return this.flechas > 0; }              // método de consulta
  usar() { if (this.estaCargada()) this.flechas -= 1; }   // método de acción
}

class Jabalina extends Arma {
  constructor() { super(); this.cargada = true; }
  potencia() { return 30; }                               // método de consulta
  estaCargada() { return this.cargada; }                  // método de consulta
  usar() { this.cargada = false; }                        // método de acción
}

module.exports = {
  Ballesta,
  Jabalina
}