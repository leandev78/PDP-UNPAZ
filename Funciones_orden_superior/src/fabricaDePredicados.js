const comparadores = {
  "===": (a, b) => a === b,
  "!==": (a, b) => a !== b,
  ">": (a, b) => a > b,
  "<": (a, b) => a < b,
  ">=": (a, b) => a >= b,
  "<=": (a, b) => a <= b,
  "includes": (a, b) => Array.isArray(a) && a.includes(b),
};

const construirPredicado = (operador, atributo, value ) => {
  // es la una referencia a la funcion apuntada...
  const comparar = comparadores[operador];

  if (!comparar) throw new Error("Operador de comparación no soportado...");
  
  return (personaje) => {
    // Aca es donde se ejecuta la función.
    return comparar(personaje[atributo], value);
  };
};

module.exports = construirPredicado;
