const Aparato = require("./Aparato");

class Bicicleta extends Aparato {
  constructor() {
    super("Bicicleta");
  }

  puedeUsar(p) {
    return p.edad > 8;
  } // solo mayores a 8

  aplicarUso(p) {
    // -4 dolor, +3 fortaleza
    p.dolor = Math.max(0, p.dolor - 4);
    p.fortaleza = p.fortaleza + 3;
  }
}
module.exports = Bicicleta;
