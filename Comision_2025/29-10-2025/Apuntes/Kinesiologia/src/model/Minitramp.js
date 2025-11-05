const Aparato = require("./Aparato");

class Minitramp extends Aparato {
  constructor() {
    super("Minitramp");
  }

  puedeUsar(p) {
    return p.dolor < 20;
  } // dolor inferior a 20

  aplicarUso(p) {
    // +10% de la edad a la fortaleza
    p.fortaleza = p.fortaleza + p.edad * 0.1;
  }
}
module.exports = Minitramp;
