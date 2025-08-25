// ejercicios/01-arrays/01-pares.js
export default {
  title: "Obtener los > 3 y luego verifica si son todos pares.",
  run() {
    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

    const matoresQue3 = (n) => n > 3;
    const esPar = (n) => n % 2 === 0;
    
    const mayores = lista.filter(matoresQue3);
    const todosPares = mayores.every(esPar);

    return todosPares; // false
  },
};

