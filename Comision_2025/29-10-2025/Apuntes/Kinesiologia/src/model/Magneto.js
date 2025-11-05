const Aparato = require("./Aparato");

class Magneto extends Aparato {
  constructor() {
    super("Magneto");
  }

  puedeUsar(p) {
    return true;
  } // cualquier persona

  aplicarUso(p) {
    // Disminuye 10% el dolor
    p.dolor = Math.max(0, p.dolor * 0.9); // Math.max para no ir por debajo de 0
  }
}
module.exports = Magneto;
