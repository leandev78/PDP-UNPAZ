// recusividad explicando el algoritmo de relleno por inundacion (flood fill)


const TAM_COL = 4;
const TAM_ROW = 3;

const matrix = [
    [1, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
];

matrix.forEach((row) => console.log(row));

const floodFill = (x, y, newValue) => {
    if (y < 0 || y >= TAM_ROW || x < 0 || x >= TAM_COL || matrix[y][x] !== 1)
        return;
    matrix[y][x] = newValue;
    floodFill(x - 1, y, newValue); // izquierda
    floodFill(x + 1, y, newValue); // derecha
    floodFill(x, y - 1, newValue); // arriba
    floodFill(x, y + 1, newValue); // abajo
};

floodFill(0, 0, 2);


console.log("---------------------------------------")
matrix.forEach((row) => console.log(row));

console.log("");