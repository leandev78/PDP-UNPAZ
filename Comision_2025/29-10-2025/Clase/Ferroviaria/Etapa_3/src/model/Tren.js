
//== FORMACIÓN - TREN ==

class Tren {

  constructor() {
    this.vagones = [];
    this.locomotoras = [];
  }

  agregarVagon(vagon) {
    this.vagones.push(vagon);
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

  // === Seguir con lo faltante de la Etapa 1 ===

  /** Si está equilbrada en pasajeros, o sea: si considerando sólo los vagones que llevan pasajeros, la diferencia entre el que más lleva y el que menos no supera los 20 pasajeros. */

  estaEquilibrada(){
    const umbral = 20; // umbral de pasajeros.

    const capacidades = this.vagones
        .map((v) =>  v.cantidadDePasajeros())
        .filter(c => c > 0);

    //console.log(capacidades);

    const max = Math.max(...capacidades);
    const min = Math.min(...capacidades);

    return (max-min) < umbral;
    
  }


  // === Etapa 2





}

module.exports = Tren;