// ejercicios/01-arrays/01-pares.js
export default {
  title:"Buscar solo con los números pares donde se espera que la salida sea: [4, 2, 8, 6, 10]",
  run() {
    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];
    
    const pares = lista.filter( n => !(n%2));

    const paresSinRep = pares.filter( (n,i,arr) => !arr.some( (m,j) => m===n && j<i ) );
    
    return paresSinRep;  // [ 4, 2, 8, 6, 10]
  },
};

