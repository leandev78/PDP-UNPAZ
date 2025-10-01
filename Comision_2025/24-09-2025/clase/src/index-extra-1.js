// ===== Datos base =====
const jugadores = [
    { id: 1, nombre: "Luciana", genero: "F", comision: "C1" },
    { id: 2, nombre: "Alonso", genero: "M", comision: "C1" },
    { id: 3, nombre: "Yamila", genero: "F", comision: "C2" },
    { id: 4, nombre: "Mauricio", genero: "M", comision: "C2" },
    { id: 5, nombre: "Camila", genero: "F", comision: "C1" },
];

// Array principal: goles por partido (podrían ser varios partidos/fechas)
const anotaciones = [
    { jugadorId: 1, goles: 2, fecha: "2025-09-01" },
    { jugadorId: 2, goles: 1, fecha: "2025-09-01" },
    { jugadorId: 3, goles: 3, fecha: "2025-09-02" },
    { jugadorId: 4, goles: 1, fecha: "2025-09-02" },
    { jugadorId: 1, goles: 1, fecha: "2025-09-03" },
    { jugadorId: 5, goles: 2, fecha: "2025-09-03" },
    { jugadorId: 2, goles: 2, fecha: "2025-09-04" },
];

// ===== 1) Relacionar cada anotación con su jugador (find vs filter) =====
// Usamos find porque esperamos UN único jugador por id (clave única). 
// Con filter obtendrías un array; acá no lo necesitamos.
const anotacionesEnriquecidas = anotaciones.map(
    (a) => {
        const jugador = jugadores.find(j => j.id === a.jugadorId);
        return {...a, jugador };
    });


//console.log(anotacionesEnriquecidas);

// ===== 2) Acumular goles totales por jugador (reduce) =====
// Resultado: { 1: 3, 2: 3, 3: 3, 4: 1, 5: 2 }  (por ejemplo)
const golesPorJugador = anotaciones.reduce((acc, a) => {
    acc[a.jugadorId] = (acc[a.jugadorId] || 0) + a.goles;
    return acc;
}, {});

//console.log(golesPorJugador);

// Convertimos a array para poder ordenar/filtrar cómodamente
const ranking = Object.entries(golesPorJugador).map(([jugadorId, goles]) => {
    const jugador = jugadores.find(j => j.id === Number(jugadorId));
    return { "jugador": jugador, "goles": goles };
});

//console.log(ranking);


// ===== 3) Máximo goleador (reduce) =====
const maxGoleador = ranking.reduce(
    (max, x) => (x.goles > max.goles ? x : max), { jugador: null, goles: -Infinity }
);

//console.log("\n3) Máximo goleador:");
//console.log(maxGoleador); // { jugador: {...}, goles: n }

// ===== 4) Filtrar por género (filter) =====
const hombres = ranking.filter(r => r.jugador.genero === "M");
const mujeres = ranking.filter(r => r.jugador.genero === "F");

//console.log("\n4) Hombres (ranking):");
//console.log(hombres);

//console.log("\n4) Mujeres (ranking):");
//console.log(mujeres);