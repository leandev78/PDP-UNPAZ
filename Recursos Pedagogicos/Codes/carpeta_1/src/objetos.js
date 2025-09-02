// OBJETOS CON METODOS
// ==========================================================================

// -------------------------------------------------------------------------
// Ejercicio 1

const fns = [{
        name: "Doble",
        fn: (x) => x * 2,
    },
    {
        name: "Cuadrado",
        fn: (x) => x * x,
    },
    {
        name: "Suma5",
        fn: (x) => x + 5,
    },
];

/*      solo para entender al nombre
        const result = fns.map(({ name, fn }) => {
          return {  name: name  }}
        );
*/

const values = [3, 4, 5, 6];

const r = values.map((v) => {
    return fns.map(({ name, fn }) => {
        return { name, valor: v, result: fn(v) };
    });
});

console.log(r);

// -------------------------------------------------------------------------
// Ejercicio 2

const fns = [{
        name: "Doble",
        fn: (x) => x * 2,
    },
    {
        name: "Cuadrado",
        fn: (x) => x * x,
    },
    {
        name: "Suma5",
        fn: (x) => x + 5,
    },
];

const values = [3, 1, 2, 6];

const r = values
    .map((v) => {
        const f = fns.reduce((a, b) => (a.fn(v) > b.fn(v) ? a : b));
        return { name: f.name, value: v, result: f.fn(v) };
    })
    .reduce((a, b) => (a.result <= b.result ? a : b));

console.log(r);

// -------------------------------------------------------------------------
// Ejercicio 3

const fns = [{
        name: "Long Minima de 8",
        fn: (pwd) => pwd.length >= 8,
    },
    {
        name: "Sin Blancos",
        fn: (pwd) => !pwd.includes(" "),
    },
    {
        name: "Con Caractes especiales",
        fn: (pwd) => ["#", "&", "$", "!"].some((c) => pwd.includes(c)),
    },
];

fns.push({
    name: "Con Digitos",
    fn: (pwd) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((d) => pwd.includes(d)),
});

const values = "gn3 sfd";

console.log(
    fns.map((f) => {
        return { name: f.name, value: f.fn(values) };
    })
    .filter((f) => !f.value)
);