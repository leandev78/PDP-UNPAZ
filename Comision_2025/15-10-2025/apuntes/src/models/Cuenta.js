class Cuenta {

  iva=0.21;                   // campo privado
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

  // Blindaje 
  // Sirve para exponer en solo-lectura un campo privado estático al exterior
  //get saldo(){return this.#saldo} //<-- obliga a que sea de solo lectura.

  // Blindaje 
  // Sirve para exponer en solo-lectura un campo privado estático al exterior
  //static get contador2() { return this.#contador2; }
  
  
  static setContador2(n){
    Cuenta.#contador2 += n;
  }

  static getContador2(){
    return Cuenta.#contador2;
  }

  
}



module.exports = Cuenta;