/*
            |----- Funciones Puras.
            |----- Función lambda
            |----- Composición de Funciones.
            |----- Funciones Recursivas.
            |----- Funciones de orden superior.
*/

// -------------------------------------------------------------------------
// Ejercicio 1            ** FUNCIONES PURAS **
// -------------------------------------------------------------------------
/* 
function suma(a,b){
     return a + b;
}
console.log("Resultado: " + suma(3,5));
*/

// -------------------------------------------------------------------------
// Ejercicio 2            ** FUNCIONES ANONIMAS **
// -------------------------------------------------------------------------
/*
const valor = (p)=>{
                    return "Bienvenidos!!!" + p;
                }
console.log( valor("Estudiantes") );

const saludo = () => "HOLA A TODOS/AS";
console.log( saludo() );

// reducir a su minima expresión (opción 1)
const resultado = (a, b) => {return a + b};
console.log("Resultado: " + resultado(2, 5));

// reducir a su minima expresión (opción 2)
const resultado = (a,b) => a + b;
console.log("Resultado: " + resultado(2, 5)); 
*/

// -------------------------------------------------------------------------
// Ejercicio 3            ** COMPOSICIÓN DE FUNCIONES **
// -------------------------------------------------------------------------
/*
const alCuadrado = (x) => x*x;
console.log(alCuadrado(2));

const sumaDeCuadrados = (a,b) => alCuadrado(a) + alCuadrado(b);
console.log(sumaDeCuadrados(2,3));

const cuadradoEntreN = (x) => {
    return alCuadrado(x-1) + alCuadrado(x+1);
}
console.log( cuadradoEntreN(3) );
*/


// -------------------------------------------------------------------------
// Ejercicio N            ** FUNCIONES DE ORDEN SUPERIOR **
// -------------------------------------------------------------------------
/*
// Recibe como parametro una funcion y un número y retorna una función...
const aplicar = (fn, x) => fn(x);   // recibe una función y un valor
const r = aplicar(n => n * 2, 5);   // 10
console.log(r);

const multiplicar = (a) => (b) => a*b;
console.log(multiplicar(3)(2));

const multiplicarPor5 = multiplicar(5);
const multiplicarPor3 = multiplicar(3);
const multiplicarPor10 = multiplicar(10);

console.log(multiplicarPor5(10));
console.log(multiplicarPor3(20));
console.log(multiplicarPor10(4));

// Validar cadena y número ....
const validarCadena = (n) => (s) => typeof s === "string" && s.length <= n;
const validarNumero = (n1) => (n2) => typeof n1 === "number" && n1 >= n2;
console.log(validarCadena(3)("leo"));
console.log(validarNumero(25)(30));


//Configurar una vez (tarifas, impuestos, descuentos) ....
const aplicarIVA = (tasa) => (precio) => Math.random(precio * (1+tasa) );
const iva21 = aplicarIVA(0,21);
const iva105 = aplicarIVA(0,105);

const valor1 = iva21(100);
const valor2 = iva105(100);
console.log("Aplicando iva 21: " + valor1.toPrecision(2));
console.log("Aplicando iva 105: " + valor2.toPrecision(2));


// Otro ejercicion donde se combina Composición y F. orden superior ...
const componer = (f, g) => x => f(g(x));

const cuadrado = (x) => x * x;
const doble = x => x * 2;

const dobleLuegoCuadrado = componer(cuadrado, doble);
console.log(dobleLuegoCuadrado(3)); // 36

*/

// -------------------------------------------------------------------------
// Ejercicio 5            -- FUNCIONES RECURSIVAS
// -------------------------------------------------------------------------





// -------------------------------------------------------------------------
// Ejercicio 6            -- ESTRUCTURAS DE DATOS
// -------------------------------------------------------------------------
/*
// . some()   ................ devuelve boulean
// . every()  ................ devuelve boulean
// . map()    ................ devuelve estructura nueva
// . filter() ................ devuelve estructura filtrada
// . reduce() ................ devuelve estructura reducida
*/
const list1 = [2,3,1,4,5,6,7,8,5,9,0];
const list2 = [2, 4, 6, 8];
const empleados = [
  { nombre: "Ana", edad: 18, pais: "Argentina", sexo: "F", profesion: "Arquitectura" },
  { nombre: "Luis", edad: 30, pais: "Perú", sexo: "M", profesion: "Medicina" },
  { nombre: "Fernanada", edad: 25, pais: "Argentina", sexo: "F", profesion: "Docente" },
  { nombre: "Laura", edad: 15, pais: "Chile", sexo: "F", profesion: "Arquitectura" },
  { nombre: "Veronica", edad: 22, pais: "Chile", sexo: "F", profesion: "Mecanica" },
  { nombre: "Miguel", edad: 22, pais: "Chile", sexo: "M", profesion: "Electronica" },
];

// Some: verdadero si se cumple al menos una vez...
const almenosUnCinco = list1.some( (n) => n===5 );
console.log(almenosUnCinco);

const mayorQueDiez = list1.some((n) => n > 10);
console.log(mayorQueDiez);

const hayEmpleadoPeruano = empleados.some ( e => e.pais === 'Perú');
console.log(`¿Se encontraron empleados Peruanos? ${hayEmpleadoPeruano}`);

// Every: verdadero si se cumple todas las veces...
const sonTodosPares = list2.every( n => n%2===0 );
console.log(sonTodosPares);

const sonTodosArquitectos = empleados.every(
  (e) => e.profesion === "Arquitectura"
);
console.log(`¿Son todos Arquitectos? ${sonTodosArquitectos}`);

const sonTodasMujeres = empleados.every((e) => e.sexo === "F");
console.log(`¿Son todas mujeres? ${sonTodasMujeres}`);

// Filter: produce una estructura nueva.
const listEmpleadosArq = empleados.filter(
        (e)=>{
            return e.profesion === "Arquitectura"
        }
);

console.log(listEmpleadosArq);