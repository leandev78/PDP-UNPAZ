// ejercicios/01-arrays/01-pares.js
export default {
  title: "¿Hay algún número mayor que 8?.",
  run() {


    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];
    const mayores = lista.filter((n) => n > 8);
    return mayores;

    
  },
};

