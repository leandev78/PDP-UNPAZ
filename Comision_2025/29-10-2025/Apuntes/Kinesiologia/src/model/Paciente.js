class Paciente {
  constructor(nombre, edad, dolor, fortaleza) {
    this.nombre = nombre;
    this.edad = edad;
    this.dolor = dolor; // número (puede tener decimales)
    this.fortaleza = fortaleza; // número
    this.rutina = []; // array de aparatos
  }

  getDolor() {
    return this.dolor;
  }

  getFortaleza() {
    return this.fortaleza;
  }

  setRutina(aparatos) {
    // Guardamos una copia superficial del array (las instancias se comparten a propósito)
    this.rutina = [...aparatos];
  }

  puedeUsar(aparato) {
    return aparato.puedeUsar(this);
  }

  usar(aparato) {
    if (this.puedeUsar(aparato)) {
      aparato.aplicarUso(this);
      return true;
    }
    return false;
  }

  // *** 2. Rutinas. ****

  // 2. Rutina 1) ¿Puede hacer la rutina asignada? (se verifica al inicio, sin modificar estado)
  puedeHacerRutina() {
    // every: debe poder usar TODOS los APARATOS al inicio
    return this.rutina.every((a) => a.puedeUsar(this));
  }

  // 2. Rutina 2) Ejecuta la sesión completa si la puede hacer (usa reduce para iterar ordenadamente)
  realizarSesion() {
    if (!this.puedeHacerRutina()) return false;

    // reduce: aplicamos cada aparato en orden
    this.rutina.reduce((pac, aparato) => {
      aparato.aplicarUso(pac);
      return pac;
    }, this); // <-- guarda con esto: (Esto significa que el acumulador inicial es el propio paciente.)
    //     Entonde (pac) es el paciente y no el aparato.

    return true;
  }
}
module.exports = Paciente;
