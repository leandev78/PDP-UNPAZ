// ejercicios/01-arrays/01-pares.js
export default {
  title: "¿Todos los números son mayores que 0?",
  run() {


    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];
    const mayores = lista.every((n) => n > 0);
    return mayores;

    
  },
};

