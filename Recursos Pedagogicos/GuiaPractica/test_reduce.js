// ===================== Helpers de test =====================
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a && b && typeof a === "object") {
    // Arrays
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
      return true;
    }
    // Objetos
    const ak = Object.keys(a), bk = Object.keys(b);
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (!deepEqual(a[k], b[k])) return false;
    return true;
  }
  return false;
};

let passed = 0, failed = 0;
function test(nombre, got, expected) {
  const ok = deepEqual(got, expected);
  if (ok) { passed++; console.log(`✅ ${nombre}`); }
  else {
    failed++;
    console.error(`❌ ${nombre}\n   got:      ${JSON.stringify(got)}\n   expected: ${JSON.stringify(expected)}`);
  }
}

// ===================== 1) Suma total =====================
const suma = nums => nums.reduce((acc, n) => acc + n, 0);

// ===================== 2) Producto total =====================
const producto = nums => nums.reduce((acc, n) => acc * n, 1);

// ===================== 3) Join con "-" =====================
const joinGuion = palabras =>
  palabras.reduce((acc, w, i) => (i ? acc + "-" + w : w), "");

// ===================== 4) Conteo de ocurrencias =====================
const contar = arr =>
  arr.reduce((acc, x) => { acc[x] = (acc[x] || 0) + 1; return acc; }, {});

// ===================== 5) Eliminar duplicados (mantener orden) =====================
const unicos = arr =>
  arr.reduce((acc, x) => (acc.includes(x) ? acc : [...acc, x]), []);

// ===================== 6) Aplanar un nivel =====================
const aplanar1 = arrs => arrs.reduce((acc, sub) => acc.concat(sub), []);

// ===================== 7) Índice por id =====================
const indexarPorId = arr =>
  arr.reduce((acc, obj) => (acc[obj.id] = obj, acc), {});

// ===================== 8) Máximo por propiedad =====================
const mayorSalario = empleados =>
  empleados.slice(1).reduce((m, e) => e.s > m.s ? e : m, empleados[0]);
const mayorSalarioSafe = empleados =>
  empleados.length ? mayorSalario(empleados) : null;

// ===================== 9) Particionar pares/impares =====================
const particionar = nums =>
  nums.reduce((acc, n) => {
    (n % 2 === 0 ? acc.pares : acc.impares).push(n);
    return acc;
  }, { pares: [], impares: [] });

// ===================== 10) Histograma de letras =====================
const histo = str =>
  str.toLowerCase().replace(/\s+/g, "").split("")
     .reduce((acc, ch) => (acc[ch] = (acc[ch] || 0) + 1, acc), {});

// ===================== 11) Totales por categoría =====================
const totalPorCategoria = items =>
  items.reduce((acc, it) => { acc[it.c] = (acc[it.c] || 0) + it.p; return acc; }, {});

// ===================== 12) Promedios por grupo =====================
const promedios = notas => {
  const tmp = notas.reduce((acc, {c, n}) => {
    (acc[c] ??= { suma: 0, cuenta: 0 });
    acc[c].suma += n;
    acc[c].cuenta += 1;
    return acc;
  }, {});
  return Object.fromEntries(
    Object.entries(tmp).map(([c, {suma, cuenta}]) => [c, suma / cuenta])
  );
};

// ===================== 13) Pipeline de funciones =====================
const aplicarPipeline = (fns, valor) => fns.reduce((acc, f) => f(acc), valor);

// ===================== 14) Paréntesis balanceados =====================
const balanceados = s => {
  const fin = [...s].reduce((acc, ch) => {
    if (acc < 0) return acc;
    if (ch === "(") return acc + 1;
    if (ch === ")") return acc - 1;
    return acc;
  }, 0);
  return fin === 0;
};

// ===================== 15) Suma acumulada =====================
const prefixSum = arr =>
  arr.reduce((acc, n, i) => {
    acc.push(i === 0 ? n : acc[i - 1] + n);
    return acc;
  }, []);

// ===================== Tests =====================
(function runTests() {
  // 1
  test("suma [2,3,5] -> 10", suma([2,3,5]), 10);
  test("suma [] -> 0", suma([]), 0);

  // 2
  test("producto [2,3,4] -> 24", producto([2,3,4]), 24);
  test("producto [] -> 1 (neutro)", producto([]), 1);

  // 3
  test('joinGuion ["hola","mundo","js"] -> "hola-mundo-js"',
       joinGuion(["hola","mundo","js"]), "hola-mundo-js");
  test('joinGuion [] -> ""', joinGuion([]), "");

  // 4
  test('contar ["pera","manzana","pera","uva"]',
       contar(["pera","manzana","pera","uva"]), { pera:2, manzana:1, uva:1 });
  test("contar [] -> {}", contar([]), {});

  // 5
  test("unicos [3,3,1,2,1] -> [3,1,2]",
       unicos([3,3,1,2,1]), [3,1,2]);
  test('unicos ["a","a","b"] -> ["a","b"]',
       unicos(["a","a","b"]), ["a","b"]);

  // 6
  test("aplanar1 [[1,2],[3],[4,5]] -> [1,2,3,4,5]",
       aplanar1([[1,2],[3],[4,5]]), [1,2,3,4,5]);
  test("aplanar1 [] -> []", aplanar1([]), []);

  // 7
  const idxIn = [{id:1,n:"A"},{id:2,n:"B"}];
  const idxOut = {1:{id:1,n:"A"}, 2:{id:2,n:"B"}};
  test("indexarPorId básico", indexarPorId(idxIn), idxOut);
  test("indexarPorId vacío -> {}", indexarPorId([]), {});

  // 8
  const empleados = [{n:"Ana",s:50},{n:"Luis",s:80},{n:"Sol",s:70}];
  test("mayorSalarioSafe -> Luis", mayorSalarioSafe(empleados), {n:"Luis", s:80});
  test("mayorSalarioSafe [] -> null", mayorSalarioSafe([]), null);

  // 9
  test("particionar [1,2,3,4,5]",
       particionar([1,2,3,4,5]), { pares:[2,4], impares:[1,3,5] });
  test("particionar []", particionar([]), { pares:[], impares:[] });

  // 10
  test('histo "Hola Hola" -> {h:2,o:2,l:2,a:2}',
       histo("Hola Hola"), { h:2, o:2, l:2, a:2 });
  test('histo "" -> {}', histo(""), {});

  // 11
  const items = [{c:"libros",p:100},{c:"tech",p:200},{c:"libros",p:50}];
  test("totalPorCategoria", totalPorCategoria(items), { libros:150, tech:200 });

  // 12
  const notas = [{c:"A",n:8},{c:"B",n:6},{c:"A",n:10}];
  test("promedios {A:9,B:6}", promedios(notas), {A:9, B:6});
  test("promedios [] -> {}", promedios([]), {});

  // 13
  test("aplicarPipeline ([+1,*2],3) -> 8",
       aplicarPipeline([x=>x+1, x=>x*2], 3), 8);
  test("aplicarPipeline ([], 5) -> 5",
       aplicarPipeline([], 5), 5);

  // 14
  test('balanceados "(()())" -> true', balanceados("(()())"), true);
  test('balanceados "())(" -> false', balanceados("())("), false);
  test('balanceados "a(b)c" -> true (ignora letras)', balanceados("a(b)c"), true);

  // 15
  test("prefixSum [3,1,4,2] -> [3,4,8,10]",
       prefixSum([3,1,4,2]), [3,4,8,10]);
  test("prefixSum [] -> []", prefixSum([]), []);

  console.log(`\nResultados: ${passed} pasaron, ${failed} fallaron.`);
})();
