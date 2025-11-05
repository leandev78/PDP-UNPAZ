const Paciente = require("../model/Paciente");
const Magneto = require("../model/Magneto");
const Bicicleta = require("../model/Bicicleta");
const Minitramp = require("../model/Minitramp");

/*
// algo que esta bueno explicarlo el parametro "this" como argumento de funcion:
// Le estás pasando al aparato la referencia del paciente que lo está usando.
    const leo = new Paciente("Leonardo", 40, 10, 20);
    leo.usar(magneto);   ----> magneto.aplicarUso(leo); es por eso que se usa this desde Paciente.js
    en aparato.aplicarUso(this);
*/


describe("Parte 1 — Aparatos y pacientes", () => {
  test("1) Leonardo puede usar los tres aparatos; Milena solo Magneto", () => {
    const leonardo = new Paciente("Leonardo", 40, 10, 20);
    const milena = new Paciente("Milena", 3, 30, 50);

    const magneto = new Magneto();
    const bicicleta = new Bicicleta();
    const minitramp = new Minitramp();

    const todos = [magneto, bicicleta, minitramp];

    // Leonardo puede usar todos
    const leoPuedeTodos = todos.every((a) => leonardo.puedeUsar(a));
    expect(leoPuedeTodos).toBe(true);

    // Milena solo Magneto
    const milenaPermitidos = todos.filter((a) => milena.puedeUsar(a));
    const nombresMilena = milenaPermitidos.map((a) => a.nombre);
    expect(nombresMilena.length).toBe(1);
    expect(nombresMilena[0]).toBe("Magneto");
  });

  test("2) Leonardo + Magneto una vez → dolor 9", () => {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Magneto());
    expect(L.getDolor()).toBeCloseTo(9.0, 9);
  });

  test("3) Milena + Magneto una vez → dolor 27", () => {
    const M = new Paciente("Milena", 3, 30, 50);
    M.usar(new Magneto());
    expect(M.getDolor()).toBeCloseTo(27.0, 9);
  });

  test("4) Leonardo + Bicicleta una vez → dolor 6, fortaleza 23", () => {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Bicicleta());
    expect(L.getDolor()).toBe(6);
    expect(L.getFortaleza()).toBe(23);
  });

  test("5) Leonardo + Minitramp una vez → fortaleza 24", () => {
    const L = new Paciente("Leonardo", 40, 10, 20);
    L.usar(new Minitramp());
    expect(L.getFortaleza()).toBe(24);
  });

//   test("Ejemplo .some: existe un aparato con restricción por edad (Bicicleta)", () => {
//     const magneto = new Magneto();
//     const bicicleta = new Bicicleta();
//     const minitramp = new Minitramp();
//     const todos = [magneto, bicicleta, minitramp];

//     const algunoRestringeEdad = todos.some((a) => a.nombre === "Bicicleta");
//     expect(algunoRestringeEdad).toBe(true);
//   });
});

/*

    ==========
    2. RUTINAS 
    ==========

*/

describe("Parte 2 — Rutinas y sesión completa", () => {
  test("Leonardo puede hacer su rutina; tras sesión dolor 1.8 y fortaleza 30", () => {
    const leonardo = new Paciente("Leonardo", 40, 10, 20);
    const bici = new Bicicleta();
    const mini = new Minitramp();
    const mag = new Magneto();

    // Rutina: bicicleta, minitramp, misma bicicleta de nuevo, magneto
    leonardo.setRutina([bici, mini, bici, mag]);

    expect(leonardo.puedeHacerRutina()).toBe(true);
    expect(leonardo.realizarSesion()).toBe(true);

    expect(leonardo.getDolor()).toBeCloseTo(1.8, 9); // toBeCloseTo(valorEsperado, precision)

    expect(leonardo.getFortaleza()).toBe(30);
  });

  test("Milena no puede hacer la rutina (magneto, bicicleta)", () => {
    const milena = new Paciente("Milena", 3, 30, 50);

    // Rutina: magneto, bicicleta
    milena.setRutina([new Magneto(), new Bicicleta()]);

    expect(milena.puedeHacerRutina()).toBe(false);   // da falso porque tiene 3 años
    
    // Al no poder hacerla, la sesión no se ejecuta
    // expect(milena.realizarSesion()).toBe(false);

    // // (Opcional) el estado no cambia
    // expect(milena.getDolor()).toBe(30);
    // expect(milena.getFortaleza()).toBe(50);
  });
});