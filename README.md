# PDP-UNPAZ
(6015) - Paradigmas de Programación - C2 - 2025/2


# Recursos de Prácticas – Algoritmos y Programación / Paradigmas

![status](https://img.shields.io/badge/estado-en%20desarrollo-informational)
![licencia](https://img.shields.io/badge/licencia-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A518.x-success)
![made-with-love](https://img.shields.io/badge/made%20with-teaching-ff69b4)

Repositorio oficial con **todos los recursos necesarios para llevar adelante las prácticas** de la materia: **código fuente, datasets de ejemplo, enunciados, soluciones propuestas, guías rápidas y material complementario**.

> Pensado para cursadas en modalidad presencial, virtual o híbrida. Ideal para trabajar en Windows y Linux sin requerir conexión permanente a internet.

---

## 📚 Objetivos

- Centralizar contenidos y ejemplos usados en clase.
- Proveer pasos reproducibles para instalar, ejecutar y evaluar las prácticas.
- Fomentar buenas prácticas de código, versionado y documentación.
- Facilitar la corrección y retroalimentación mediante *pull requests*.

---

## 🧭 Tabla de contenidos

- [Estructura del repositorio](#%EF%B8%8F-estructura-del-repositorio)
- [Requisitos](#-requisitos)
- [Instalación y primer uso](#-instalación-y-primer-uso)
- [Cómo trabajar las prácticas](#-cómo-trabajar-las-prácticas)
- [Convenciones y buenas prácticas](#-convenciones-y-buenas-prácticas)
- [Scripts útiles](#-scripts-útiles)
- [Entregas y evaluación](#-entregas-y-evaluación)
- [Preguntas frecuentes](#-preguntas-frecuentes)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🗂️ Estructura del repositorio

```
.
├─ docs/                    # Guías, enunciados y teoría de apoyo
│  ├─ 01_funciones_orden_superior.md
│  ├─ 02_arrays_y_colecciones.md
│  └─ ...
├─ datasets/                # Archivos de datos de ejemplo (CSV/JSON)
│  ├─ usuarios.json
│  └─ ventas.csv
├─ src/                     # Código fuente de las prácticas
│  ├─ 01-funciones-order/
│  │  ├─ enunciado.md
│  │  ├─ ejercicio.js
│  │  └─ solucion_propuesta.js
│  ├─ 02-arrays-colecciones/
│  └─ ...
├─ tests/                   # Pruebas automáticas (Jest u otra herramienta)
│  ├─ 01-funciones-order.test.js
│  └─ ...
├─ .vscode/                 # Configuraciones recomendadas para VS Code
│  └─ settings.json
├─ .editorconfig
├─ package.json
├─ README.md
└─ LICENSE
```

> **Nota:** los nombres son orientativos. Podés renombrar las carpetas/archivos para alinearlos con tu planificación (por ejemplo, *“Paradigmas_C2_2025”*).

---

## 🧩 Requisitos

- **Node.js 18+** (recomendado 20+)
- **Git** (para clonar y versionar)
- **Visual Studio Code** (opcional pero sugerido)
  - Extensiones sugeridas: `ESLint`, `Prettier`, `EditorConfig`, `Code Runner`.

> Si no tenés internet en el aula, descargá el ZIP del repo antes de la clase desde GitHub y trabajá localmente.

---

## ⚙️ Instalación y primer uso

```bash
# 1) Clonar el repositorio
git clone https://github.com/<tu-usuario>/<tu-repo>.git
cd <tu-repo>

# 2) Instalar dependencias (si las hay)
npm install

# 3) Probar que todo corre
npm run check
```

> Alternativa sin Git: **Code → Download ZIP** en GitHub, descomprimir y abrir con VS Code.

---

## 🧪 Cómo trabajar las prácticas

1. **Elegí la práctica** dentro de `src/` (por ejemplo `src/01-funciones-order/`).
2. Leé `enunciado.md` y revisá los ejemplos de `ejercicio.js`.
3. Escribí tu solución en el archivo indicado (o creá uno nuevo si el enunciado lo pide).
4. **Ejecutá**:
   ```bash
   node src/01-funciones-order/ejercicio.js
   # o con un script si está definido:
   npm run p:01
   ```
5. Si hay pruebas automáticas:
   ```bash
   npm test -- 01-funciones-order
   ```
6. **Documentá** (breve): decisiones, supuestos, complejidad, casos límite.
7. **Subí tu trabajo** según el esquema de entregas (ver abajo).

---

## 🧱 Convenciones y buenas prácticas

- **Nombres claros y pedagógicos**:
  - Funciones: **verbo + complemento** (ej. `filtrarUsuarios`, `calcularPromedio`).
  - Colecciones/arrays: **sustantivo plural** (ej. `usuarios`, `calificaciones`).
  - Constantes: `MAYUS_SNAKE_CASE`. Variables: `camelCase`.
- **Pureza y testabilidad**: preferí funciones puras y separá E/S (I/O) de la lógica.
- **Commits atómicos y descriptivos**:
  - `feat(practica-02): agrega funciones de mapeo`
  - `fix(practica-01): corrige borde en reduce`
- **Estilo**: `Prettier` + `ESLint` (reglas definidas en el repo).
- **Carpetas por práctica** con `enunciado.md`, `ejercicio.js` y (si aplica) `solucion_propuesta.js`.

---

## 🏃 Scripts útiles

En `package.json` podés encontrar y/o agregar:

```json
{
  "scripts": {
    "check": "node -v && npm -v",
    "p:01": "node src/01-funciones-order/ejercicio.js",
    "p:02": "node src/02-arrays-colecciones/ejercicio.js",
    "test": "jest --runInBand",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

> Ajustá los paths a tus carpetas reales. Si no usás Jest, cambiá `test` por tu runner preferido.

---

## 📝 Entregas y evaluación

**Opción A (recomendada): _Fork + Pull Request_**
1. Hacé **fork** del repo.
2. Creá una **rama por práctica**: `feat/practica-01-apellido`
3. Subí tus cambios y abrí un **PR** hacia este repositorio.
4. En el PR, **incluí**:
   - Capturas de ejecución y/o resultados de pruebas.
   - Explicación breve de la solución.

**Opción B: ZIP por plataforma**
- Exportá el proyecto con tu solución y subilo al aula virtual indicado.

**Criterios de evaluación (orientativos):**
- Correctitud y cobertura de casos.
- Claridad del código y nombres.
- Uso de funciones de orden superior cuando corresponda.
- Documentación mínima y pruebas (si aplica).

---

## ❓ Preguntas frecuentes

**¿Puedo usar `require` o `import`?**  
- En Node.js, `require` funciona en módulos CommonJS. `import` requiere configurar `"type": "module"` en `package.json` o usar archivos `.mjs`. Elegí **una** estrategia por práctica para evitar conflictos.

**¿Sin internet?**  
- Todo el material esencial está dentro del repo. Podés ejecutar localmente con Node sin depender de la red.

**¿Entorno recomendado?**  
- VS Code + extensiones sugeridas. Para depurar en Node, usá la pestaña **Run and Debug** o un `launch.json`.

---

## 🤝 Contribuir

¡Se agradecen sugerencias y mejoras!  
- Abrí un **Issue** para reportar errores o proponer nuevas prácticas.
- Enviá **PRs** siguiendo las convenciones de ramas y commits.

---

## 📄 Licencia

Este repositorio se distribuye bajo **MIT**. Ver [`LICENSE`](./LICENSE).

---

## 📬 Contacto

- **Docente responsable:** _[Tu Nombre]_  
- **Institución:** _Universidad Nacional de José C. Paz (UNPAZ)_  
- **Cursada:** _[Año] – [Cuatrimestre] – [Comisión]_  
- **Email:** _[tu-email@univ.edu]_  

> Si usás este repo en otra institución o curso, ¡contanos para sumarlo a “usos del repositorio”!

---

### 🧠 Sugerencia para iniciar la cursada

- Empezar por `docs/01_funciones_orden_superior.md` y `src/01-funciones-order/`.
- Continuar con `docs/02_arrays_y_colecciones.md` y `src/02-arrays-colecciones/`.
- Mantener siempre un **README** dentro de cada práctica con objetivos y criterios de logro.
