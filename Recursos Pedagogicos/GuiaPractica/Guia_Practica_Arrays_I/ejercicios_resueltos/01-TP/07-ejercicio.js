// ejercicios/01-arrays/01-pares.js
export default {
  title: "Genera un array de textos “par”/“impar” según cada número",
  run() {
    /*
      Dada la estructura de datos const arr = [3,6,6,7,12,10,4,13,1]; 
      se pide solo utilizar el método filter: 
      - Crear una función flecha “anónima” que filtre los números mayores o iguales a 10.
      - Luego pasar esta función al método filter y  aplicar otro filtro para obtener solo los pares
     */

    const lista = [3, 6, 6, 7, 12, 10, 4, 13, 1]; 

    const buscarMayorIgualA10 = (n) => n >= 10;

    const resultado = lista.filter(buscarMayorIgualA10)
    .filter(n => !(n%2));

    return resultado; // [ 12, 10 ]
    
  },
};

