
//== FORMACIÓN - TREN ==

class Tren {
  
  constructor() {
    this.vagones = [];
    this.locomotoras = [];
  }

  agregarVagon(vagon) {
    this.vagones.push(vagon);
  }

  agregarLocomotora(locomotora) {
    this.locomotoras.push(locomotora);
  }

  // === Código que voy a usar para los requerimientos. ===

  pasajeros() {
    const pasajeros = this.vagones.reduce((acc, v) => {
      acc = acc + v.cantidadDePasajeros();
      return acc;
    }, 0);
    return pasajeros;
  }

  cantidadVagonesPopulares() {
    return this.vagones.filter((v) => v.cantidadDePasajeros() > 50).length;
  }

  esFormacionCarguera() {
    return this.vagones.every((v) => v.cargaMaxima() >= 1000);
  }

  dispersionPesos() {
    //peso max del vagon mas pesado.
    const maxPesado = this.vagones.reduce((max, v) => {
      //console.log(`p: ${v.pesoMaximo()}`)
      max = max > v.pesoMaximo() ? max : v.pesoMaximo();
      return max;
    }, 0);

    //peso max del vagon mas liviano. - (!)Math.min necesita argumentos no array...
    const maxLiviano = Math.min(...this.vagones.map((v) => v.pesoMaximo()));
    return maxPesado - maxLiviano;
  }

  cantidadBanios() {
    return this.vagones.filter((v) => v.conBanio()).length;
  }

  hacerMantenimiento() {
    this.vagones.forEach((vagon) => vagon.recibirMantenimiento());
  }

  estaEquilibrada() {
    const umbral = 20;

    const cantidades = this.vagones
      .map((v) => v.cantidadDePasajeros())
      .filter((n) => n > 0);

    //console.log(cantidades);

    if (cantidades.length <= 1) return true;

    const max = Math.max(...cantidades);
    const min = Math.min(...cantidades);

    //console.log(`max = ${max} min = ${min}`);

    const diferencia = max - min;

    return diferencia <= umbral;
  }

  //1. su velocidad máxima , que es el mínimo entre las velocidades máximas de las locomotoras.
  velocidadMaxima() {
    if (this.locomotoras.length === 0) return null;
    return Math.min(...this.locomotoras.map((l) => l.velocidadMaxima));
  }

  //2. Si es eficiente; o sea, si todas sus locomotoras lo son.
  esEficiente() {
    if (this.locomotoras.length === 0) return null;
    return this.locomotoras.every((l) => l.esEficiente());
  }

  // 3. Si puede moverse. Una formación puede moverse si la suma del arrastre de cada una de sus locomotoras, es mayor o igual al peso máximo de la formación, que es: peso de las locomotoras + peso máximo de los vagones.
  arrastreTotal() {
    return this.locomotoras.reduce(
      (acc, l) => (acc = acc + l.arrastreMaximo),
      0
    );
  }

  pesoMaximoFormacion() {
    const pesoMaxLoco = this.locomotoras.reduce(
      (acc, l) => (acc = acc + l.peso),
      0
    );

    const pesoMaxVagon = this.vagones.reduce(
      (acc, v) => (acc += v.pesoMaximo()),
      0
    );

    return pesoMaxLoco + pesoMaxVagon;
  }

  puedeMoverse() {
    return this.arrastreTotal() >= this.pesoMaximoFormacion();
  }

  // 4. Cuántos kilos de empuje le faltan para poder moverse, que es: 0 si ya se puede mover, y si no, el resultado de: peso máximo - suma de arrastre de cada locomotora.
  kilosDeEmpujeFaltantes(){
    return Math.max(0, this.pesoMaximoFormacion() - this.arrastreTotal());
  }

}

module.exports = Tren;