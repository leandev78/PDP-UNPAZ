class Animal {

    nombre;
    #raza = "cualunque";

    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() { return "Silencio!" }
}

class Perro extends Animal {
    hablar() { return "Guau!" } // sobreescribo.
}


class Cuenta {

  #saldo = 0;                  // campo privado
  static banco = "Banco X";    // campo estático compartido
  static contador = 0;         // campo estático compartido
  static #contador2 = 0;        // campo estático compartido blindado privado

  constructor(titular) { 
    this.titular = titular; 
    Cuenta.contador++;          // forma de poder  estático compartido
    Cuenta.#contador2++;
 }
  depositar(m) { this.#saldo += m; }
  mostrar_saldo() { return this.#saldo; }

  //get saldo(){return this.#saldo} //<-- obliga a que sea de solo lectura.

  // Blindaje 
  static get contador2() { return this.#contador2; }
  static setContador2(){
    Cuenta.#contador2 += 1;
  }
}



module.exports = { Animal, Perro, Cuenta };