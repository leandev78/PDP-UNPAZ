/*

Lista de ejercicios a resolver: 
const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9,100, 8, 99]; 
1. ¿Hay algún número mayor que 8?. 
2. ¿Todos los números son mayores que 0?. 
3. Buscar solo con los números pares donde se espera que la salida sea: [4, 2, 4, 8, 6, 10]. 
4. Calcular el cuadrado de cada número. Salida esperada: [16, 1, 4, 16, 25, 64, 49, 36, 81, 100]. 
5. Obtener los > 3 y luego verifica si son todos pares. 
6. Elimina del array (sobre una copia) todos los números mayores que 6. 
Genera un array de textos “par”/“impar” según cada número. Para ello deberás usar un map con un 
condicional. Salida esperada:
["par","impar","par","par","impar","par","impar","par","impar","par"]. 
7. Dada la estructura de datos const arr = [3,6,6,7,12,10,4,13,1]; se pide solo utilizar el método filter: Crear 
una función flecha “anónima” que filtre los números mayores o iguales a 10. 
Luego pasar esta función al método filter y luego aplicar otro filtro para obtener solo los pares. 

*/

// Datos base
const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

// Helpers
const esPar = n => n % 2 === 0;
const cuadrado = n => n * n;

// 1) ¿Hay algún número mayor que 8?
const r1 = lista.some(n => n > 8);
console.log('1) ¿Hay algún número > 8?:', r1); // true

// 2) ¿Todos los números son mayores que 0?
const r2 = lista.every(n => n > 0);
console.log('2) ¿Todos > 0?:', r2); // true

// 3) Solo los números pares (orden original)
const r3 = lista.filter(esPar);
console.log('3) Pares:', r3);

// 4) Cuadrado de cada número
const r4 = lista.map(cuadrado);
console.log('4) Cuadrados:', r4);

// 5) Obtener los > 3 y luego verificar si TODOS son pares
const mayoresQue3 = lista.filter(n => n > 3);
const r5 = mayoresQue3.every(esPar);
console.log('5) Mayores que 3:', mayoresQue3);
console.log('5) ¿Todos pares?:', r5); // false

// 6) Eliminar (sobre una copia) todos los números > 6
//const copia = lista.slice(); // copia superficial - pero para este ejercicio evitarla.
//const copia = lista.filter(() => true); // filter deja todo
const copia = lista.map(x => x);          // copiamos con map
//const r6 = copia.filter(n => n <= 6);
const r6 = copia.filter((n) => n <= 6).sort( (a,b) => a-b);
console.log('6) Sin mayores que 6:', r6);

//    Además: generar array "par"/"impar" según cada número (usando map + condicional)
const r6b = lista.map(n => (esPar(n) ? 'par' : 'impar'));
console.log('6b) par/impar:', r6b);


// 7) Usando SOLO filter:
//    - Función flecha "anónima" (expresión) que deja n >= 10
//    - Luego filtrar otra vez para quedarnos con los pares
const arr = [3, 6, 6, 7, 12, 10, 4, 13, 1];
const ge10 = n => n >= 10;               // flecha anónima asignada a una constante
const r7 = arr.filter(ge10).filter(esPar);
console.log('7) >=10 y pares (solo filter):', r7); // [12, 10]
