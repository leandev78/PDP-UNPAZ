// Datos base
const paquetes = [
    { id: 1, nombre: "City Break Madrid", precio: 450000, destino_id: 1 },
    { id: 2, nombre: "Nieve en Bariloche", precio: 380000, destino_id: 2 },
    { id: 3, nombre: "Iguazú Exprés", precio: 220000, destino_id: 3 }
];

const destinos = [
    { id: 1, ciudad: "Madrid", pais: "España", esInternacional: true },
    { id: 2, ciudad: "San Carlos de Bariloche", pais: "Argentina", esInternacional: false },
    { id: 3, ciudad: "Puerto Iguazú", pais: "Argentina", esInternacional: false }
];




// Información combinada (NO modificar para las actividades; pueden usarla tal cual)
const paquetesDetallados = paquetes.map(p => {
    const d = destinos.find(x => x.id === p.destino_id);
    return {
        nombre: p.nombre,
        precio: p.precio,
        destino: {
            ciudad: d.ciudad,
            pais: d.pais,
            esInternacional: d.esInternacional
        }
    };
});

// 7. Calcule y retorne un objeto resumen a partir de paquetesDetallados con la siguiente forma:

const resumenPrecios = () => {
    const totales = paquetesDetallados.reduce((a, p) => {
        a.totalPaquetes += 1;
        a.totalPrecio += p.precio;

        if (p.destino.esInternacional) {
            a.totalInternacionales += 1;
            a.sumInt += p.precio;
        } else {
            a.totalNacionales += 1;
            a.sumNac += p.precio;
        }
        return a;
    }, {
        totalPaquetes: 0,
        totalPrecio: 0,
        totalInternacionales: 0,
        totalNacionales: 0,
        sumInt: 0,
        sumNac: 0
    });

    return {
        totalPaquetes: totales.totalPaquetes,
        totalPrecio: totales.totalPrecio,
        promedioPrecio: totales.totalPaquetes ? totales.totalPrecio / totales.totalPaquetes : 0,
        totalInternacionales: totales.totalInternacionales,
        totalNacionales: totales.totalNacionales,
        promedioInternacionales: totales.totalInternacionales ? totales.sumInt / totales.totalInternacionales : 0,
        promedioNacionales: totales.totalNacionales ? totales.sumNac / totales.totalNacionales : 0
    };
}


console.log(resumenPrecios());