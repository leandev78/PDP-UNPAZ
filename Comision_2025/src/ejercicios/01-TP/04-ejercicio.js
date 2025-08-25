// ejercicios/01-arrays/01-pares.js
export default {
  title:"Calcular el cuadrado de cada número. Salida esperada: [16, 1, 4, 16, 25, 64, 49, 36, 81, 100, 9].",
  run() {
    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

    const esPrimeraAparicion = (n, i, arr) =>  !arr.some((m, j) => m === n && j < i);
    const esMenorQue10 = (n) => n <= 10;
    const cuadrado = (n) => n * n;

    const sinDupl = lista.filter(esPrimeraAparicion);
    const menoresQue10 = sinDupl.filter(esMenorQue10);
    const cuadrados = menoresQue10.map(cuadrado);

    return cuadrados; // [ 16, 1, 4, 16, 25, 64, 49, 36, 81, 100, 9 ]
  },
};

