// ===== Elementos =====
class Elemento {
  constructor(altura) { this.altura = altura; }
  recibirAtaque(_potencia) { /* por defecto, sin efecto */ } // método de acción
  valor() { return 0; }                                      // método de consulta
  recibirTrabajo(_trabajador) { /* por defecto, sin efecto */ } // método de acción
}

// ===== Castillo =====
class Castillo extends Elemento {
  constructor() { super(20); this.defensa = 150; }
  recibirAtaque(potencia) { 
    this.defensa = Math.max(0, this.defensa - potencia);
  }
  valor() { return this.defensa / 5; }                       // método de consulta
  recibirTrabajo() {                                         // método de acción
    this.defensa = Math.min(200, this.defensa + 20);
  }
}

// ===== Vaca =====
class Vaca extends Elemento {
  constructor() { super(1); this.viva = true; }
  
  recibirAtaque(potencia) {                                  // método de acción
    if (potencia >= 10) this.viva = false;
  }
  valor() { return 15; }                                     // método de consulta
  // recibirTrabajo: no
}

// ===== Arbol =====
class Arbol extends Elemento {
  constructor(alturaInicial = 8) { super(alturaInicial); }
  // recibirAtaque: no
  valor() { return this.altura * 2; }                        // método de consulta
  recibirTrabajo() { this.altura += 1; }                     // método de acción
}



module.exports = {
  Castillo,
  Vaca,
  Arbol
}