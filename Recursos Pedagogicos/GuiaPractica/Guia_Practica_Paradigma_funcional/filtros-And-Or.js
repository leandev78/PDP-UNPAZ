const op = {
  "=": (a, b) => a == b,
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  includes: (a, b) => Array.isArray(a) && a.includes(b),
};

const makeFilter = (attribute, operator, value) => {
  if (!op[operator]) throw new Error("Operador no soportado");
  return (personaje) => op[operator](personaje[attribute], value);
};

const makeFiltroCompuesto = (filtro) => {
  if (filtro.type === "and" || filtro.type === "or") {
    const subFiltros = filtro.filters.map((f) => makeFiltroCompuesto(f));
    return (obj) =>
      filtro.type === "and"
        ? subFiltros.every((f) => f(obj))
        : subFiltros.some((f) => f(obj));
  }
  return makeFilter(filtro.attribute, filtro.operator, filtro.value);
};
module.exports = { makeFilter, makeFiltroCompuesto };