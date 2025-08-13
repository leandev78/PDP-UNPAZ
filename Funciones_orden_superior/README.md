## Enunciado: Selector de personajes por reglas declarativas
Tema: funciones de primera clase, funciones de orden superior, predicados, clausuras, require de JSON en Node.js.

## Contexto
Vas a construir un motor de filtrado declarativo: los datos (personajes) y las reglas (condiciones de filtrado) vienen en JSON; la lógica que aplica esas reglas está en JavaScript usando funciones de primera clase y orden superior.

## 📚 Objetivos de aprendizaje
Tratar funciones como valores (primera clase): guardarlas en objetos, pasarlas y devolverlas.

Escribir y usar funciones de orden superior (que reciben/devuelven funciones).

Comprender el rol de los predicados en filter y el uso de every (AND lógico).


## Archivos provistos
dataset/personajes.json: array de personajes (objetos con nombre, rol, nivel, habilidades, etc.).

dataset/reglasDeFiltro.json (antes filtrosUsuarios.json): array de reglas con { operator, attribute, value }.

fabricaDePredicados.js (antes filtros.js): expone construirPredicado(...).

index.js: carga datos y reglas, aplica filtros y muestra el resultado.



<img width="1536" height="1024" alt="DiagramaEjercicio" src="https://github.com/user-attachments/assets/21d8de7d-d086-4b9c-ab01-1cf67dea21c1" />

## Tarea (paso a paso)
Lectura del código
a) Abrí fabricaDePredicados.js y explicá qué hace el objeto comparadores (diccionario de funciones).
b) Mostrá cómo construirPredicado(operator, attribute, value) devuelve una función que toma un personaje y responde true/false (predicado).
c) En index.js, identificá: filter (necesita predicado) y every (AND de reglas).

Ejecución básica
a) Ejecutá con node index.js.
b) Cambiá los valores de reglasDeFiltro.json, predecí qué debería salir y comprobá.
c) Ejemplo sugerido:

    [
        { "operator": ">=", "attribute": "nivel", "value": 20 },
        { "operator": "includes", "attribute": "habilidades", "value": "dash" }
    ]

## Agregá en comparadores el operador:


startsWith: (a, b) => typeof a === "string" && a.startsWith(b)
Probalo con:


{ "operator": "startsWith", "attribute": "nombre", "value": "Ti" }
Manejo de errores
Si llega un operator desconocido, lanzá un error claro desde construirPredicado:


if (!comparadores[operator]) throw new Error(`Operador no soportado: ${operator}`);
Normalización de tipos (numéricos)
En los comparadores numéricos, asegurá conversión a número (p.ej., Number(a) >= Number(b)).

Desafío OR (opcional pero recomendado)
Permití reglas con grupos “cualquiera”:


[
  { "operator": ">=", "attribute": "nivel", "value": 20 },
  { "any": [
      { "operator": "==", "attribute": "rol", "value": "Soporte" },
      { "operator": "includes", "attribute": "habilidades", "value": "dash" }
    ]
  }
]


