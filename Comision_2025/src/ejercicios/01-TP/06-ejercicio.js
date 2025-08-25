// ejercicios/01-arrays/01-pares.js
export default {
  title: "Genera un array de textos “par”/“impar” según cada número",
  run() {
    /*
      Elimina del array (sobre una copia) todos los números mayores que 6.
      Genera un array de textos “par”/“impar” según cada número. 
      Para ello deberás usar un  map con un condicional. 
      Salida esperada: ["par","impar","par","par","impar","par","impar","par","impar","par"].
     */

    const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

    const buscarMayoresQue6 = (n) => n > 6;
    const esPar = (n) => n % 2 === 0;
    const parImpar = (n) => (esPar(n) ? "par" : "impar");

    const texto = lista
    .filter(buscarMayoresQue6)
    .map(parImpar);

    return texto; // ["par","impar","par","par","impar","par","impar","par","impar","par"]
  },
};

