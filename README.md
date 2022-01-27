# 📝 Notas Curso Complejidad Algoritmica con JavaScript

## Mis Cursos en Platzi. [Certificados](https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL)

## Clases:

- Clase1: Intro
- Clase2: [Estructura de un algoritmo](#Estructura-de-un-algoritmo)
- Clase3: [¿Cómo elegir un buen algoritmo?](#¿Cómo-elegir-un-buen-algoritmo?)
- Clase4: [Introducción a complejidad algorítmica](#Introducción-a-complejidad-algorítmica)
- Clase5: [Complejidad temporal](#Complejidad-temporal)
- Clase6: [Complejidad temporal en práctica](#Complejidad-temporal-en-práctica)
- Clase7: [Complejidad espacial](#Complejidad-espacial)
- Clase8: [Complejidad espacial en práctica](#Complejidad-espacial-en-práctica)
- Clase9: [El estado de la complejidad](#El-estado-de-la-complejidad)
- Clase10: [Introducción a análisis asintótico](#Introducción-a-análisis-asintótico)
- Clase11: [Notación Big-O](#Notación-Big-O)
- Clase12: [Cálculo de la notación Big-O](#Cálculo-de-la-notación-Big-O)
- Clase13: [Evaluación de complejidad temporal con Big-O](#Evaluación-de-complejidad-temporal-con-Big-O)
- Clase14: [Evaluación de complejidad espacial con Big-O Avanzado](#Evaluación-de-complejidad-espacial-con-Big-O-Avanzado)
- Clase15: [Recomendaciones para la evaluación de algoritmos](#Recomendaciones-para-la-evaluación-de-algoritmos)
- Clase16: [Notas sobre algoritmos](#Notas-sobre-algoritmos)
- Clase17: [Determinando la complejidad un algoritmo avanzado](#Determinando-la-complejidad-un-algoritmo-avanzado)
- Extra: [Ejemplos de Clase](#Ejemplos-de-Clase)

# Estructura de un algoritmo

### Definicion de algoritmo

Un algoritmo es una serie de pasos de manera eficiente, limitada y precisa para realizar una actividad.

### Ejemplo de algoritmo

Una forma de ver un algoritmo es cuando vamos a cocinar y vemos una receta para hacer la comida, o cuando te levantas de la cama y realizas ciertas actividades antes de arrancar el dia

### Etapas de un algoritmo

Las etapas de un algoritmo son:

- **Entrada**: Los datos que recibe para ejecutar una accion.
- **Proceso**: Las actividades que realizas con los datos que recibiste en la entrada.
- **Salida**: Los datos que vas a mostrar cuando has terminado de procesar los datos. (No siempre vas a tener que mostrar un dato de salida)

# ¿Cómo elegir un buen algoritmo?

🔍 Para encontrar un buen algoritmo podemos ver qué tanto tarda en ejecutarse, o qué tanto espacio en la memoria ocupa.

- **Tiempo**: Lo que demora el algoritmo mientras se está ejecutando
- **Espacio**: Lo que ocupa dicho algoritmo en en memoria, séase en bytes, kilobytes, megabytes

⌚ El tiempo y el espacio va a depender del lenguaje, en particular en JavaScript es más relevante apuntar al tiempo, que al espacio. Porque en el código JavaScript usualmente no corre en dispositivos con memoria muy limitada (como en dispositivos embebidos).

⚡ Esto no significa que no haya casos particulares, o que el espacio siempre sea menos importante que el tiempo, sólo es el ambiente del software con JavaScript.

# Introducción a complejidad algorítmica

🚗 Ok, ¿Cómo sabemos cuando un coche es más rápido que otro? Bueno, si los ponemos en un tramo igual, y tomamos nuestros relojes para medir cuánto tardan, podremos ver que uno llega más rápido que otro a la meta 🏁. Que un coche tarda menos que otro. Tal vez unos 10, o 20, o 30 minutos.

Entonces, medir es clave para determinar el mejor. Pero la Complejidad en sí no trata de si un coche llega 10, o 20 o 30 minutos más rápido a la meta. Si no del ritmo con el que aumenta. Esto lo veremos en todo el módulo de Complejidad Algorítmica.

La teoría de la complejidad estudia el consumo de recursos (tiempo, espacio) que un algoritmo ocupa. la complejidad algorítmica no se fija en el tiempo de ejecución del algoritmo (segundos, minutos, horas, etc), se fija en el ritmo y que tan eficiente puede ser un algoritmo en base al problema que está resolviendo.

# Complejidad temporal

- **Complejidad temporal**: cuanto se demora un algoritmo en terminar. Se puede definir como **_la relación de crecimiento entre datos de entrada y tiempo de ejecución_**
- **Complejidad espacial**: cuanta memoria operativa (RAM usualmente) es requerida por el algoritmo.

La medida del **_tiempo_** tiene que ser independiente:

- de la máquina
- del lenguaje de programación
- del compilador
- de cualquier otro elemento hardware o software que influya en el análisis.

# Complejidad temporal en práctica

> Links:
>
> - [Performance measurement APIs | Node.js v17.0.1 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now)
> - [High Resolution Time](https://w3c.github.io/hr-time/#dom-performance-now)
> - [Visualizacion de Complejidad Temporal](https://radiant-anchorage-11930.herokuapp.com/)

# Complejidad espacial

La complejidad espacial, se encarga de calcular **_cuanto espacio en memoria puede ocupar un algoritmo,_** a parte del espacio ocupado por los datos de entrada, existe el **_espacio auxiliar_**, el cual es el espacio creado por el mismo algoritmo para hacer otro procesos, por ejemplo: filtrar un array, hacer un sort de números, etc. El espacio auxiliar incluso puede llegar a hacer mucho más grande que el espacio de los datos de entrada, y está relacionado al algoritmo mas que a los datos recibos.

#### Memoria

Cuando trabajamos con grandes cantidades de datos tendremos que almacenar información en otras partes.

#### Espacio auxiliar

La complejidad espacial incluye el espacio auxiliar y el espacio ocupado por los datos de entrada.

El espacio auxiliar es el espacio total - espacio datos de entrada

Los pasos realizados dentro del algoritmo, pueden ser operaciones que creen más espacio (como crear una lista donde ir dejando los resultados de un algoritmo de ordenamiento).

El espacio auxiliar es más importante que los datos de entrada.

# Complejidad espacial en práctica

### ¿Cómo medimos un recurso?

⌚ En **Complejidad Temporal** podemos usar funciones como **performance.now** y **console.time** para medir el tiempo en que se ejecuta un algoritmo.

En **Complejidad Espacial** es diferente. Cada compilador asigna un espacio distinto de memoria para almacenar números o palabras.

La diversidad de tamaños y formas con las que el compilador almacena información es interesante, pero para el propósito que tenemos, podemos simplificarlo a contar cuántas variables se definen para almacenar arreglos, números o cadenas.

# El estado de la complejidad

♾ Los recursos que se analizan en Ciencias de la Computación van más allá del tiempo y del espacio. No hay límite.

🌀 ¿Necesitas que un algoritmo ejecute pocas funciones? Nueva complejidad. ¿Necesitas que un algoritmo no realice muchos arreglos? Nueva complejidad. ¿Necesitas un algoritmo que utilice la menor cantidad de otros algoritmos? Nueva complejidad.

### Otras complejidades existentes

- Accesos a memoria.
- Procesos paralelos.
- Comparaciones.
- Entre otras más.

### Complejidad en el futuro

Si decubrimos interesante optimizar el uso de un recurso en computación, allí tendremos un nuevo campo de estudio de complejidad.

# Introducción a análisis asintótico

📕 Las mediciones tienden a tener números muy inexactos. Casi nunca se trata con 10, 20, 30 o 40. Sino con 14.143, 25.951, 32.457 hasta 41.245.

➕ Súmale que además si vuelves a medir cuánto tarda un algoritmo en ejecutarse una y otra vez, tendrás resultados que varían mucho.

¿Recuerdas Pi (π)? Bien, con Pi tenemos 3.141592.... Pero sólo necesitamos una parte para trabajar con Pi. Y encontramos que3.14 es similar a π.

Lo mismo sucede aquí. El Análisis Asintótico es la forma con la que encontramos una función matemática similar a la medición de la complejidad.

> Links:
>
> [Complejidad Temporal](https://radiant-anchorage-11930.herokuapp.com/) > [GeoGebra](https://www.geogebra.org/calculator)

# Notación Big-O

Lo que hace a Big-O tan importante es que se destaca en concentrarse en el caso peor de tu algoritmo.

En el tope superior de nuestras mediciones. Si nuestro algoritmo empezó con unas mediciones muy buenas, pero de pronto creció mucho en el consumo de un recurso. Big-O tomará en cuenta esto último para determinar qué crecimiento le pertenece.
Resultado de esto:

¿Crecimiento constante? Mejor que sea crecimiento lineal.

Big-O no contará tanto con las mediciones pequeñas, sino con las mediciones grandes.

#### ¿Porque necesitamos una notación?

La queremos usar para poder simplificar el análisis de la complejidad computacional

buscamos poder simplificar la representación de la complejidad

#### ¿Qué buscamos con Big-O?

Buscamos descubrir una función (constante, lineal, polinomial, logarítmica o exponencial) que sea mayor o igual que la complejidad de un algoritmo.

**Clases de Big-O**

| Clase    | Crecimiento | Formula     | Emoji |
| -------- | ----------- | ----------- | ----- |
| O(1)     | Constante   | $f(x) = 1   | 😊    |
| O(n)     | Lineal      | $f(x) = x   | 😶    |
| O($n^2$) | Cuadrático  | $f(x) = x^2 | 🙁    |
| O($2^n$) | Exponencial | $f(x) = 2^x | 😢    |
| O(n!)    | Factorial   | $f(x) = x!  | 😭    |

# Cálculo de la notación Big-O

```javascript
let bar = 'test'	// O(1)
if() {}		// O(1)
for() {}		// O(n)
while() {}	// O(n)
for() { for() {} }// O(n^2)
```

# Evaluación de complejidad temporal con Big-O

### Buble Sort

- 1 + n( n(1 + 1 + 1 + 1) ) + 1
- n(4n) + 2
- 4n^2 + 2
- O(n^2) // Solo se toma el exponente mas grande

### Selection Sort

- 1 + n( 1 + n(1 + 1) + 1 + 1 + 1 + 1 ) + 1
- n( 2n + 5 ) + 2
- 2n^2 + 5n + 2
- O(n^2) // Solo se toma el exponente mas grande

### ... Ver ejemplos

- lineal
- bubbleSort
- selecionSort

# Evaluación de complejidad espacial con Big-O Avanzado

### ... Ver ejemplos

- lineal
- bubbleSort
- selecionSort

# Recomendaciones para la evaluación de algoritmos

Hey, hasta ahora sabes que un algoritmo con O(1) es mejor que uno con O(n). ¡Genial! Pero, ¿Y si ese algoritmo con O(1) se ejecuta en 1000 horas?

💚 La complejidad algorítmica es importante, pero dónde se ejecuta tu algoritmo determina qué tan importante es.

📉 Cuando la Complejidad Algorítmica deja de ser relevante, es donde debemos mejorar nuestro algoritmo para alcanzar nuestro objetivo de eficiencia.

🚀 Tal vez tengamos el mejor algoritmo jamás visto, pero si lo ejecutamos en una computadora de hace 20 años con Intel Celeron, pues no podemos esperar mucha rapidez.

📖 Simplificar la complejidad ayuda a tener una visión de la eficiencia de los algoritmos independientemente de dónde se ejecute. Esto es genial porque un O(1) será el mismo, así tengamos una computadora de hace 20 años o una actual. La desventaja es que podemos descartar información importante al simplificar.

✅ Entonces, sí es correcto que: «no simplificar la complejidad puede ayudar a mejorar la decisión»:

Digamos que buscamos el algoritmo más rápido, uno tiene O(n+5) y el otro O(n+50). Efectivamente, O(n+5) es el que debemos elegir. Pero si buscamos poco espacio, y uno tiene O(6) y el otro de O(20). Pues nos quedamos con O(6).

Y de repente, si llega un tercer algoritmo con O(n^2) en tiempo y espacio, lo podemos descartar enseguida.

# Notas sobre algoritmos

⏲ Cuando esperas a que cargue una aplicación web o cuando una pestaña de un navegador ocupa mucho espacio, estamos consumiendo recursos como tiempo o espacio.

📈 Los algoritmos que se ejecutan al realizar acciones pueden ser medibles en la notación Big-O.

👩‍💻 Para calcular la notación Big-O aplicamos una serie de reglas a través de nuestro código.

## 📏 Reglas para estructuras

### Las reglas para Big-O en tiempo son:

| codigo                       | Big-O  |
| ---------------------------- | ------ |
| let a = true                 | O(1)   |
| for() {}                     | O(n)   |
| for() { for() {} }           | O(n^2) |
| for() { for() { for() {} } } | O(n^3) |

### Las reglas para Big-O en espacio son:

| codigo                    | Big-O  |
| ------------------------- | ------ |
| let a = true              | O(1)   |
| let b = [1, 2, 3, ..., n] | O(n)   |
| let c = [[1, 2], [3, 4]]  | O(n^2) |

Y siempre debemos simplificar la notación:

- O(100000 + 50) ==> O(1)
- O(n + 50) ==> O(n)
- O(n + n) ==> O(n)
- O(n^2 + n) ==> O(n^2)

### ¿Por qué necesitamos Big-O? ¿Por qué una notación?

Un algoritmo o un programa podrían ejecutarse en cinco o diez horas, incluso si hablamos de una o varias computadoras. Big-O viene a poner orden todo eso, dándonos una forma fácil de leer en la que podemos determinar la eficiencia de un algoritmo.

### ¿Por qué asignamos Big-O a cada estructura?

Big-O medirá el recurso generado respecto a la entrada del algoritmo. Y las estructuras son un aspecto sencillo de convertir en medición de recursos.

Por ejemplo:

- Con los bucles es sencillo, los bucles repiten instrucciones, y al repetir toman más tiempo en la computadora.
- Con los arreglos es igual, repiten una serie de elementos, y al repetir esos elementos toman más espacio de la computadora.

### ¿Por qué nos quedamos con el grado mayor al simplificar Big-O?

En Big-O queremos comprender qué tanto recurso (como tiempo o espacio) nos gasta un algoritmo cuándo aumentamos los datos. Y cada grado aumenta a un ritmo totalmente distinto.

### ¿Solo hay Big-O para espacio y tiempo?

No, la complejidad es el estudio de los recursos que utilizan los algoritmos. Estos recursos pueden ser cualquier concepto de hardware y software. Como acceso a la memoria, comparaciones de condiciones, o lo que se necesite limitar.

La buena noticia de esto, es que no se requiere inventar nuevas notaciones. Big-O es suficiente para que personas como tú, desarrolladores/as de software o científicos/as de computación trabajen sobre esto.

# Determinando la complejidad un algoritmo avanzado

💭 Hasta ahora hemos visto algoritmos que realizan tareas como buscar índices u ordenar elementos. Sin embargo, JavaScript ya cuenta con funciones nativas para esos propósitos.

🤔 Entonces, ¿Qué tal si determinamos la complejidad de un algoritmo más avanzado?
Un algoritmo que no esté incorporado en JavaScript, que reciba datos de una API y que tenga una estructura compleja.

### 🚀 Verificando un payload de SpaceX

Entonces, imagina que tú con tus amigos/as están en un reto donde desarrollan algoritmos capaces de verificar si existe un payload (una carga útil) dentro de una lista de los lanzamientos de SpaceX.

En otras palabras, este algoritmo debe recibir la lista de lanzamientos, más el ID del payload, y te devolverá true o false dependiendo si existe o no.

Cada uno de ustedes desarrolla un algoritmo diferente: Alfa, Beta y Delta, todos trabajan sobre la misma API y funcionan súper bien.

Sin embargo, cada mes se hacen muchos más lanzamientos, con más payloads, lo que significa que los datos que extraeremos de esta API empezarán a crecer. Si antes teníamos 70 payloads, el siguiente mes podríamos tener 120, y luego 200, y así.

Por ello buscamos ese algoritmo que gestione mejor el tiempo de búsqueda. 🔍

⌚ ¿Puedes encontrar cuál es? 💻

#### Datos importantes

Si deseas probar los algoritmos, aquí está la API que debes declarar:

```javascript
const SPACEX_API = "https://api.spacexdata.com/v3/launches";
```

Pero recuerda que en el estudio de la complejidad temporal solo hacemos un análisis de línea por línea del código…

Y si deseas probar los algoritmos:

```javascript
algoritmoBeta("FalconSAT-2", SPACEX_API); // true
algoritmoBeta("FalconSAT-3", SPACEX_API); // false
```

Estos son los algoritmos a evaluar:

### Algoritmo Alfa

```javascript
async function algoritmoAlfa(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  for (let i = 0; i < data.length; i++) {
    let payloads = data[i].rocket.second_stage["payloads"];
    for (let j = 0; j < payloads.length; j++) {
      if (payloadId == payloads[j].payload_id) {
        return true;
      }
    }
  }
  return false;
}
```

### Algoritmo Beta

```javascript
async function algoritmoBeta(payloadId, payloadAPI) {
  let arreglosCoinciden = (arreglo1, arreglo2) => {
    if (arreglo1.length != arreglo2.length) {
      return false;
    }
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] != arreglo2[i]) {
        return false;
      }
    }
    return true;
  };
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  let payloadIdArray = payloadId.split("");
  for (let i = 0; i < data.length; i++) {
    let payloads = data[i].rocket.second_stage.payloads;
    for (let j = 0; j < payloads.length; j++) {
      if (arreglosCoinciden(payloadIdArray, payloads[j].payload_id.split(""))) {
        return true;
      }
    }
  }
  return false;
}
```

### Algoritmo Delta

```javascript
async function algoritmoDelta(payloadId, payloadAPI) {
  let respuesta = await fetch(payloadAPI);
  let data = await respuesta.json();
  let listaDePayloads = [];
  let longitudData = data.length;

  for (let i = 0; i < longitudData; i++) {
    let payloads = data[i].rocket;
    listaDePayloads.push(...payloads.second_stage["payloads"]);
  }

  for (let i = 0; i < listaDePayloads.length; i++) {
    let localPayloadId = listaDePayloads[i].payload_id;
    if (localPayloadId == payloadId) {
      return true;
    } else {
      return false;
    }
  }
}
```

### Observaciones

❓ Interesante. Tenemos muchos ciclos for. ¿Es eso un problema?

¡Genial! Has notado que tenemos ciclos for recorriendo la lista de payloads, esto implica que la lista de payloads (representada con payloadsAPI) tiene más participación en todo el algoritmo que el otro parámetro payloadId. Por lo tanto, enfócate en qué estructuras usa payloadsAPI.

❓ Usamos async/await porque estamos manejando APIs, y APIs toman un tiempo X en cargar los datos. ¿Esto es más complejidad temporal?

Sí. Utilizar una API es la forma más común en la que el tiempo se escapa de nuestras manos (dada la estructura de JavaScript), y por ello usamos async/await. Siempre cuéntalas en tu análisis.

# Ejemplos de Clase

## Factorial

```javascript
/**
 * Complejidad Temporal -> O(n + 3) ==> result: O(n)
 * Complejidad Espacial -> O(3) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(3) - O(1) ==> O(2) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function factorial(numero) {
  // Calculo Comp.Espacial O(1)
  let resultado = 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  for (let i = 2; i <= numero; i += 1) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    resultado *= i; // Calculo Comp.Temporal O(1)
  }

  return resultado; // Calculo Comp.Temporal O(1)
}
```

## Fibonacci

```javascript
/**
 * Complejidad Temporal -> O(n + 10) ==> result: O(n)
 * Complejidad Espacial -> O(6) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(6) - O(1) ==> O(5) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function fibonacci(numero) {
  // Calculo Comp.Espacial O(1)
  const secuenciaFibonacci = [1]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  let valorPrevio = 0; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  let valorActual = 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  if (numero === 1) {
    // Calculo Comp.Temporal O(1)
    return secuenciaFibonacci; // Calculo Comp.Temporal O(1)
  }

  let i = numero - 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  while (i) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    valorActual += valorPrevio; // Calculo Comp.Temporal O(1)
    valorPrevio = valorActual - valorPrevio; // Calculo Comp.Temporal O(1)
    secuenciaFibonacci.push(valorActual); // Calculo Comp.Temporal O(1)
    i -= 1; // Calculo Comp.Temporal O(1)
  }

  return secuenciaFibonacci; // Calculo Comp.Temporal O(1)
}
```

## IsPowerOfTwo

```javascript
/**
 * Complejidad Temporal -> O(n + 7) ==> result: O(n)
 * Complejidad Espacial -> O(2) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(2) - O(1) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function isPowerOfTwo(n) {
  // Calculo Comp.Espacial O(1)
  if (n < 1) {
    // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  let numeroDividido = n; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  while (numeroDividido !== 1) {
    // Calculo Comp.Temporal O(n)
    if (numeroDividido % 2 !== 0) {
      // Calculo Comp.Temporal O(1)
      return false; // Calculo Comp.Temporal O(1)
    }
    numeroDividido = numeroDividido / 2; // Calculo Comp.Temporal O(1)
  }

  return true; // Calculo Comp.Temporal O(1)
}
```

## primalidadTest

```javascript
/**
 * Complejidad Temporal -> O(n + 12) ==> result: O(n)
 * Complejidad Espacial -> O(2) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(2) - O(1) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function primalidadTest(numero) {
  // Calculo Comp.Espacial O(1)

  if (numero <= 3) {
    // Calculo Comp.Temporal O(1)
    return true; // Calculo Comp.Temporal O(1)
  }

  if (numero % 1 !== 0) {
    // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  if (numero <= 1) {
    // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  if (numero % 2 === 0) {
    // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  const limiteDivisor = Math.sqrt(numero); // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    if (numero % divisor === 0) {
      // Calculo Comp.Temporal O(1)
      return false; // Calculo Comp.Temporal O(1)
    }
  }

  return true; // Calculo Comp.Temporal O(1)
}
```

## linearSearch

```javascript
/**
 * CALCULAMOS COMPLEJIDAD:
 * Complejidad Temporal -> O(n + 3) ==> result: O(n) (lo dejamos asi ya que n es mucho mayor que 3, SIEMPRE SIMPLIFICAMOS)
 * Complejidad Espacial -> O(n + 1) ==> result: O(n)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(n + 1) - O(n) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(n)
// EA: O(1)

function linearSearch(arreglo, clave) {
  // Calculo Comp.Espacial O(n)
  for (let indice = 0; indice < arreglo.length; indice++) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    if (arreglo[indice] === clave) {
      // Calculo Comp.Temporal O(1)
      return indice; // Calculo Comp.Temporal O(1)
    }
  }
  return -1; // Calculo Comp.Temporal O(1)
}
```

## bubbleSort

```javascript
/**
 * CALCULAMOS COMPLEJIDAD:
 * Complejidad Temporal -> O(n^2 + 6) ==> result: O(n^2)
 * Complejidad Espacial -> O(n + 4) ==> result: O(n)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(n + 4) - O(n) ==> O(4) ==> result: O(1)
 */

// resultados:
// CT: O(n^2)
// CE: O(n)
// EA: O(1)

function bubbleSort(arreglo) {
  // Calculo Comp.Espacial O(n)
  let longitud = arreglo.length; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  for (let i = 0; i < longitud; i++) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    for (let j = 0; j < longitud; j++) {
      // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
      if (arreglo[j] > arreglo[j + 1]) {
        // Calculo Comp.Temporal O(1)
        let temporal = arreglo[j]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
        arreglo[j] = arreglo[j + 1]; // Calculo Comp.Temporal O(1)
        arreglo[j + 1] = temporal; // Calculo Comp.Temporal O(1)
      }
    }
  }
  return arreglo; // Calculo Comp.Temporal O(1)
}
```

## SelectionSort

```javascript
/**
 * CALCULAMOS COMPLEJIDAD:
 * Complejidad Temporal -> O(n^2 + 9) ==> result: O(n^2)
 * Complejidad Espacial -> O(n + 5) ==> result: O(n)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada)  -> O(n + 5) - O(n) ==> O(5) ==> result: O(1)
 */

// resultados:
// CT: O(n^2)
// CE: O(n)
// EA: O(1)

function selectionSort(arreglo) {
  // Calculo Comp.Espacial O(n)
  let longitud = arreglo.length; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  for (let i = 0; i < longitud; i++) {
    // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    let minimo = i; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
    for (let j = i + 1; j < longitud; j++) {
      // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
      if (arreglo[j] < arreglo[minimo]) {
        // Calculo Comp.Temporal O(1)
        minimo = j; // Calculo Comp.Temporal O(1)
      }
    }
    if (minimo != i) {
      // Calculo Comp.Temporal O(1)
      let temporal = arreglo[i]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
      arreglo[i] = arreglo[minimo]; // Calculo Comp.Temporal O(1)
      arreglo[minimo] = temporal; // Calculo Comp.Temporal O(1)
    }
  }
  return arreglo; // Calculo Comp.Temporal O(1)
}
```
