class Formacion {

  constructor() {
    this.vagones = [];
  }

  agregarVagones(unVagon) {
    this.vagones.push(unVagon);
  }

  //hasta cuántos pasajeros puede llevar.
  pasajeros() {
    return this.vagones.reduce(
      (cantidad, vagon) => cantidad + vagon.cantidadPasajeros(),
      0
    );
  }

  //cuántos vagones populares tiene. Un vagón es popular si puede llevar más de 50 pasajeros.
  cantidadVagonesPopulares() {
    return this.vagones.filter((vagon) => vagon.cantidadPasajeros() > 50).length;
  }

  //si es una formación carguera, o sea, si todos los vagones pueden transportar al menos 1000 kilos de carga.
  esFormacionCarguera() {
    return this.vagones.every((vagon) => vagon.cargaMaxima() >= 1000);
  }

  //cuál es la dispersión de pesos, que es el resultado de esta cuenta: peso máximo del vagón más pesado - peso máximo del vagón más liviano. 
  // P.ej. si una formación tiene 4 vagones, cuyos pesos máximos son 9000, 12000, 3500 y 8000, 
  // entonces su dispersión de pesos es 12000 - 3500 = 8500.  
  dispersionPesos() {
    const pesoMax = this.vagones.reduce(
      (max, vagon) => (max > vagon.pesoMaximo() ? max : vagon.pesoMaximo()),
      0
    );
    const pesoMin = Math.min(
      ...this.vagones.map((vagon) => vagon.pesoMaximo())
    );
    return pesoMax - pesoMin;
  }

  cantidadBanios() {
    return this.vagones.filter((vagon) => vagon.conBanio()).length;
  }

  hacerMantenimiento() {
    this.vagones.forEach((vagon) => vagon.recibirMantenimiento());
  }

  estaEquilibrada() {
    const vagonesDePasajeros = this.vagones.filter(
      (v) => v.cantidadPasajeros() > 0
    );
    const cantidades = vagonesDePasajeros.map((v) => v.cantidadPasajeros());
    const calculo = Math.max(...cantidades) - Math.min(...cantidades);
    return calculo < 20;
  }
}

module.exports = Formacion;
