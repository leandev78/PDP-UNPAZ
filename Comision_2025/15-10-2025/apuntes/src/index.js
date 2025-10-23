const Animal = require('./models/Animal');
const Perro  = require('./models/Perro');
const Cuenta = require('./models/Cuenta');


console.log("*** Repaso para el parcial de Paradigmas de programacion ***\n\n");


const cuenta = new Cuenta("Laura");
console.log(cuenta);


// Ejemplo 1: al acceder a un atributo PUBLICO definido en la clase.
console.log("@ Abributo Publico (iva): " + cuenta.iva);

// Ejemplo 2: al acceder a un atributo PRIVADO definido en la clase.
// Esto daría error porque oo se permiten identificadores privados 
// fuera de los cuerpos de clase
// console.log("@ : " + cuenta.#saldo);    // ERROR


// Ejemplo 3: como se deben acceder a los atributod Privados de la clase
// mediante sus métodos.
cuenta.depositar(2);
cuenta.depositar(3);
const r = cuenta.mostrar_saldo();
console.log(`@ Saldo actual: ${r}`);

// Ejemplo 4:
// ¿ Que pasa si intengo modificar el atributo "saldo" sin usar metodos de la clase?
// Esto crea una propiedad pública que NO afecta al #saldo real
cuenta.saldo=30;
console.log(`Se creó un atributo público ${cuenta.saldo}`);
const r2 = cuenta.mostrar_saldo();
console.log(`El valor de $saldo no se ve afectado.... : ${r2}`);

/*

ATRIBUTOS COMPARTIDOS (STATIC)....

*/

// Ejemplo 5: intentar acceder a un atributo static desde
// la instancia del objeto y no desde la clase...
// Esto dará como resultado undefined, ¿por que?
// Porque (las instancias no “heredan” miembros estáticos)
//console.log("Entiddad financiera: " + cuenta.banco)

// Para poder acceder de forma correcta hay que hacer "Cuenta.banco",
// es decir "CLASE + ATRIBUTO"
console.log("Entiddad financiera: " + Cuenta.banco)


// Creo 3 objetos para visualizar el comportamiento de los 
// contadores static.

const cta1 = new Cuenta("Lucia");
      console.log(Cuenta.contador);
const cta2 = new Cuenta("Carlos");
      console.log(Cuenta.contador);
const cta3 = new Cuenta("Maria");
      console.log(Cuenta.contador);

// ATRIBUTE STATIC PUBLIC  - si le agrega los 20 al contador compartido...
Cuenta.contador+=20;
console.log("a) Acceso al contador: " + Cuenta.contador);

// ATRIBUTE STATIC PROVATE - no va a cambiar el valor, ¿Por qué?
Cuenta.contador2+=100;     //<--- no cambia porque ahora cree un contador2 público que nada
                           // tiene que ver con #contador2
                           // con static ge le doy visibilidad pero n ose puede modificar, es solo lectura.
console.log("b) Acceso al contador: " + Cuenta.contador2);

// Entonces, Cómo hago?
// ¿Cómo podría hacer entonces para poder acceder al atributo privado y statico?
//
// se debe acceder mediante sus métodos staticos definidos en la clase
Cuenta.setContador2(500);    // si altera porque es un metodo de la clase.

console.log("c) Acceso al contador: " + Cuenta.getContador2());









