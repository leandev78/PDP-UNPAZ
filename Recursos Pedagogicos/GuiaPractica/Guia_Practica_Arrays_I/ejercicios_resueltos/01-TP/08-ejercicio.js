// ejercicios/01-arrays/01-pares.js
export default {
  title: "Genera un array de textos “par”/“impar” según cada número",
  run() {
    /*
      Dado la estructura de datos:
      const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1]; 
      se pide: Clonar con map (p. ej., const copia = lista.map(x => x)), luego del clon, 
      mostrar los números que son menores o iguales a 10 y remplaza a los > de 10 por una “X”. 
      Una ayudita!, te debería dar como salida : 
      [1,   2,   3, 3,   1,   5, 6,   'X', 4, 'X', 'X', 'X', 'X', 7,   1]
     */

    const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];

    const clonArr = Numbers.map((x) => x);
    const menoresOIgualA10 = clonArr.map((n) => (n <= 10 ? n : "X"));

    return menoresOIgualA10; // [ 1,   2,   3, 3,   1,   5,  6, "X", 4, "X", "X", "X", "X", 7, 1];
  },
};

