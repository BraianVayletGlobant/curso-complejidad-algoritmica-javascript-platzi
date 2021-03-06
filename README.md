# 馃摑 Notas Curso Complejidad Algoritmica con JavaScript

## Mis Cursos en Platzi 馃憠 [Certificados](https://drive.google.com/drive/folders/1SNu_BcXoBeMUwQuw-CO2qc6QWhHWv_cL)

## Clases:

- Clase1: Intro
- Clase2: [Estructura de un algoritmo](#Estructura-de-un-algoritmo)
- Clase3: [驴C贸mo elegir un buen algoritmo?](#驴C贸mo-elegir-un-buen-algoritmo?)
- Clase4: [Introducci贸n a complejidad algor铆tmica](#Introducci贸n-a-complejidad-algor铆tmica)
- Clase5: [Complejidad temporal](#Complejidad-temporal)
- Clase6: [Complejidad temporal en pr谩ctica](#Complejidad-temporal-en-pr谩ctica)
- Clase7: [Complejidad espacial](#Complejidad-espacial)
- Clase8: [Complejidad espacial en pr谩ctica](#Complejidad-espacial-en-pr谩ctica)
- Clase9: [El estado de la complejidad](#El-estado-de-la-complejidad)
- Clase10: [Introducci贸n a an谩lisis asint贸tico](#Introducci贸n-a-an谩lisis-asint贸tico)
- Clase11: [Notaci贸n Big-O](#Notaci贸n-Big-O)
- Clase12: [C谩lculo de la notaci贸n Big-O](#C谩lculo-de-la-notaci贸n-Big-O)
- Clase13: [Evaluaci贸n de complejidad temporal con Big-O](#Evaluaci贸n-de-complejidad-temporal-con-Big-O)
- Clase14: [Evaluaci贸n de complejidad espacial con Big-O Avanzado](#Evaluaci贸n-de-complejidad-espacial-con-Big-O-Avanzado)
- Clase15: [Recomendaciones para la evaluaci贸n de algoritmos](#Recomendaciones-para-la-evaluaci贸n-de-algoritmos)
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

# 驴C贸mo elegir un buen algoritmo?

馃攳 Para encontrar un buen algoritmo podemos ver qu茅 tanto tarda en ejecutarse, o qu茅 tanto espacio en la memoria ocupa.

- **Tiempo**: Lo que demora el algoritmo mientras se est谩 ejecutando
- **Espacio**: Lo que ocupa dicho algoritmo en en memoria, s茅ase en bytes, kilobytes, megabytes

鈱? El tiempo y el espacio va a depender del lenguaje, en particular en JavaScript es m谩s relevante apuntar al tiempo, que al espacio. Porque en el c贸digo JavaScript usualmente no corre en dispositivos con memoria muy limitada (como en dispositivos embebidos).

鈿? Esto no significa que no haya casos particulares, o que el espacio siempre sea menos importante que el tiempo, s贸lo es el ambiente del software con JavaScript.

# Introducci贸n a complejidad algor铆tmica

馃殫 Ok, 驴C贸mo sabemos cuando un coche es m谩s r谩pido que otro? Bueno, si los ponemos en un tramo igual, y tomamos nuestros relojes para medir cu谩nto tardan, podremos ver que uno llega m谩s r谩pido que otro a la meta 馃弫. Que un coche tarda menos que otro. Tal vez unos 10, o 20, o 30 minutos.

Entonces, medir es clave para determinar el mejor. Pero la Complejidad en s铆 no trata de si un coche llega 10, o 20 o 30 minutos m谩s r谩pido a la meta. Si no del ritmo con el que aumenta. Esto lo veremos en todo el m贸dulo de Complejidad Algor铆tmica.

La teor铆a de la complejidad estudia el consumo de recursos (tiempo, espacio) que un algoritmo ocupa. la complejidad algor铆tmica no se fija en el tiempo de ejecuci贸n del algoritmo (segundos, minutos, horas, etc), se fija en el ritmo y que tan eficiente puede ser un algoritmo en base al problema que est谩 resolviendo.

# Complejidad temporal

- **Complejidad temporal**: cuanto se demora un algoritmo en terminar. Se puede definir como **_la relaci贸n de crecimiento entre datos de entrada y tiempo de ejecuci贸n_**
- **Complejidad espacial**: cuanta memoria operativa (RAM usualmente) es requerida por el algoritmo.

La medida del **_tiempo_** tiene que ser independiente:

- de la m谩quina
- del lenguaje de programaci贸n
- del compilador
- de cualquier otro elemento hardware o software que influya en el an谩lisis.

# Complejidad temporal en pr谩ctica

> Links:
>
> - [Performance measurement APIs | Node.js v17.0.1 Documentation](https://nodejs.org/api/perf_hooks.html#perf_hooks_performance_now)
> - [High Resolution Time](https://w3c.github.io/hr-time/#dom-performance-now)
> - [Visualizacion de Complejidad Temporal](https://radiant-anchorage-11930.herokuapp.com/)

# Complejidad espacial

La complejidad espacial, se encarga de calcular **_cuanto espacio en memoria puede ocupar un algoritmo,_** a parte del espacio ocupado por los datos de entrada, existe el **_espacio auxiliar_**, el cual es el espacio creado por el mismo algoritmo para hacer otro procesos, por ejemplo: filtrar un array, hacer un sort de n煤meros, etc. El espacio auxiliar incluso puede llegar a hacer mucho m谩s grande que el espacio de los datos de entrada, y est谩 relacionado al algoritmo mas que a los datos recibos.

#### Memoria

Cuando trabajamos con grandes cantidades de datos tendremos que almacenar informaci贸n en otras partes.

#### Espacio auxiliar

La complejidad espacial incluye el espacio auxiliar y el espacio ocupado por los datos de entrada.

El espacio auxiliar es el espacio total - espacio datos de entrada

Los pasos realizados dentro del algoritmo, pueden ser operaciones que creen m谩s espacio (como crear una lista donde ir dejando los resultados de un algoritmo de ordenamiento).

El espacio auxiliar es m谩s importante que los datos de entrada.

# Complejidad espacial en pr谩ctica

### 驴C贸mo medimos un recurso?

鈱? En **Complejidad Temporal** podemos usar funciones como **performance.now** y **console.time** para medir el tiempo en que se ejecuta un algoritmo.

En **Complejidad Espacial** es diferente. Cada compilador asigna un espacio distinto de memoria para almacenar n煤meros o palabras.

La diversidad de tama帽os y formas con las que el compilador almacena informaci贸n es interesante, pero para el prop贸sito que tenemos, podemos simplificarlo a contar cu谩ntas variables se definen para almacenar arreglos, n煤meros o cadenas.

# El estado de la complejidad

鈾? Los recursos que se analizan en Ciencias de la Computaci贸n van m谩s all谩 del tiempo y del espacio. No hay l铆mite.

馃寑 驴Necesitas que un algoritmo ejecute pocas funciones? Nueva complejidad. 驴Necesitas que un algoritmo no realice muchos arreglos? Nueva complejidad. 驴Necesitas un algoritmo que utilice la menor cantidad de otros algoritmos? Nueva complejidad.

### Otras complejidades existentes

- Accesos a memoria.
- Procesos paralelos.
- Comparaciones.
- Entre otras m谩s.

### Complejidad en el futuro

Si decubrimos interesante optimizar el uso de un recurso en computaci贸n, all铆 tendremos un nuevo campo de estudio de complejidad.

# Introducci贸n a an谩lisis asint贸tico

馃摃 Las mediciones tienden a tener n煤meros muy inexactos. Casi nunca se trata con 10, 20, 30 o 40. Sino con 14.143, 25.951, 32.457 hasta 41.245.

鉃? S煤male que adem谩s si vuelves a medir cu谩nto tarda un algoritmo en ejecutarse una y otra vez, tendr谩s resultados que var铆an mucho.

驴Recuerdas Pi (蟺)? Bien, con Pi tenemos 3.141592.... Pero s贸lo necesitamos una parte para trabajar con Pi. Y encontramos que3.14 es similar a 蟺.

Lo mismo sucede aqu铆. El An谩lisis Asint贸tico es la forma con la que encontramos una funci贸n matem谩tica similar a la medici贸n de la complejidad.

> Links:
>
> [Complejidad Temporal](https://radiant-anchorage-11930.herokuapp.com/) > [GeoGebra](https://www.geogebra.org/calculator)

# Notaci贸n Big-O

Lo que hace a Big-O tan importante es que se destaca en concentrarse en el caso peor de tu algoritmo.

En el tope superior de nuestras mediciones. Si nuestro algoritmo empez贸 con unas mediciones muy buenas, pero de pronto creci贸 mucho en el consumo de un recurso. Big-O tomar谩 en cuenta esto 煤ltimo para determinar qu茅 crecimiento le pertenece.
Resultado de esto:

驴Crecimiento constante? Mejor que sea crecimiento lineal.

Big-O no contar谩 tanto con las mediciones peque帽as, sino con las mediciones grandes.

#### 驴Porque necesitamos una notaci贸n?

La queremos usar para poder simplificar el an谩lisis de la complejidad computacional

buscamos poder simplificar la representaci贸n de la complejidad

#### 驴Qu茅 buscamos con Big-O?

Buscamos descubrir una funci贸n (constante, lineal, polinomial, logar铆tmica o exponencial) que sea mayor o igual que la complejidad de un algoritmo.

**Clases de Big-O**

| Clase    | Crecimiento | Formula     | Emoji |
| -------- | ----------- | ----------- | ----- |
| O(1)     | Constante   | $f(x) = 1   | 馃槉    |
| O(n)     | Lineal      | $f(x) = x   | 馃樁    |
| O($n^2$) | Cuadr谩tico  | $f(x) = x^2 | 馃檨    |
| O($2^n$) | Exponencial | $f(x) = 2^x | 馃槩    |
| O(n!)    | Factorial   | $f(x) = x!  | 馃槶    |

# C谩lculo de la notaci贸n Big-O

```javascript
let bar = 'test'	// O(1)
if() {}		// O(1)
for() {}		// O(n)
while() {}	// O(n)
for() { for() {} }// O(n^2)
```

# Evaluaci贸n de complejidad temporal con Big-O

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

# Evaluaci贸n de complejidad espacial con Big-O Avanzado

### ... Ver ejemplos

- lineal
- bubbleSort
- selecionSort

# Recomendaciones para la evaluaci贸n de algoritmos

Hey, hasta ahora sabes que un algoritmo con O(1) es mejor que uno con O(n). 隆Genial! Pero, 驴Y si ese algoritmo con O(1) se ejecuta en 1000 horas?

馃挌 La complejidad algor铆tmica es importante, pero d贸nde se ejecuta tu algoritmo determina qu茅 tan importante es.

馃搲 Cuando la Complejidad Algor铆tmica deja de ser relevante, es donde debemos mejorar nuestro algoritmo para alcanzar nuestro objetivo de eficiencia.

馃殌 Tal vez tengamos el mejor algoritmo jam谩s visto, pero si lo ejecutamos en una computadora de hace 20 a帽os con Intel Celeron, pues no podemos esperar mucha rapidez.

馃摉 Simplificar la complejidad ayuda a tener una visi贸n de la eficiencia de los algoritmos independientemente de d贸nde se ejecute. Esto es genial porque un O(1) ser谩 el mismo, as铆 tengamos una computadora de hace 20 a帽os o una actual. La desventaja es que podemos descartar informaci贸n importante al simplificar.

鉁? Entonces, s铆 es correcto que: 芦no simplificar la complejidad puede ayudar a mejorar la decisi贸n禄:

Digamos que buscamos el algoritmo m谩s r谩pido, uno tiene O(n+5) y el otro O(n+50). Efectivamente, O(n+5) es el que debemos elegir. Pero si buscamos poco espacio, y uno tiene O(6) y el otro de O(20). Pues nos quedamos con O(6).

Y de repente, si llega un tercer algoritmo con O(n^2) en tiempo y espacio, lo podemos descartar enseguida.

# Notas sobre algoritmos

鈴? Cuando esperas a que cargue una aplicaci贸n web o cuando una pesta帽a de un navegador ocupa mucho espacio, estamos consumiendo recursos como tiempo o espacio.

馃搱 Los algoritmos que se ejecutan al realizar acciones pueden ser medibles en la notaci贸n Big-O.

馃懇鈥嶐煉? Para calcular la notaci贸n Big-O aplicamos una serie de reglas a trav茅s de nuestro c贸digo.

## 馃搹 Reglas para estructuras

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

Y siempre debemos simplificar la notaci贸n:

- O(100000 + 50) ==> O(1)
- O(n + 50) ==> O(n)
- O(n + n) ==> O(n)
- O(n^2 + n) ==> O(n^2)

### 驴Por qu茅 necesitamos Big-O? 驴Por qu茅 una notaci贸n?

Un algoritmo o un programa podr铆an ejecutarse en cinco o diez horas, incluso si hablamos de una o varias computadoras. Big-O viene a poner orden todo eso, d谩ndonos una forma f谩cil de leer en la que podemos determinar la eficiencia de un algoritmo.

### 驴Por qu茅 asignamos Big-O a cada estructura?

Big-O medir谩 el recurso generado respecto a la entrada del algoritmo. Y las estructuras son un aspecto sencillo de convertir en medici贸n de recursos.

Por ejemplo:

- Con los bucles es sencillo, los bucles repiten instrucciones, y al repetir toman m谩s tiempo en la computadora.
- Con los arreglos es igual, repiten una serie de elementos, y al repetir esos elementos toman m谩s espacio de la computadora.

### 驴Por qu茅 nos quedamos con el grado mayor al simplificar Big-O?

En Big-O queremos comprender qu茅 tanto recurso (como tiempo o espacio) nos gasta un algoritmo cu谩ndo aumentamos los datos. Y cada grado aumenta a un ritmo totalmente distinto.

### 驴Solo hay Big-O para espacio y tiempo?

No, la complejidad es el estudio de los recursos que utilizan los algoritmos. Estos recursos pueden ser cualquier concepto de hardware y software. Como acceso a la memoria, comparaciones de condiciones, o lo que se necesite limitar.

La buena noticia de esto, es que no se requiere inventar nuevas notaciones. Big-O es suficiente para que personas como t煤, desarrolladores/as de software o cient铆ficos/as de computaci贸n trabajen sobre esto.

# Determinando la complejidad un algoritmo avanzado

馃挱 Hasta ahora hemos visto algoritmos que realizan tareas como buscar 铆ndices u ordenar elementos. Sin embargo, JavaScript ya cuenta con funciones nativas para esos prop贸sitos.

馃 Entonces, 驴Qu茅 tal si determinamos la complejidad de un algoritmo m谩s avanzado?
Un algoritmo que no est茅 incorporado en JavaScript, que reciba datos de una API y que tenga una estructura compleja.

### 馃殌 Verificando un payload de SpaceX

Entonces, imagina que t煤 con tus amigos/as est谩n en un reto donde desarrollan algoritmos capaces de verificar si existe un payload (una carga 煤til) dentro de una lista de los lanzamientos de SpaceX.

En otras palabras, este algoritmo debe recibir la lista de lanzamientos, m谩s el ID del payload, y te devolver谩 true o false dependiendo si existe o no.

Cada uno de ustedes desarrolla un algoritmo diferente: Alfa, Beta y Delta, todos trabajan sobre la misma API y funcionan s煤per bien.

Sin embargo, cada mes se hacen muchos m谩s lanzamientos, con m谩s payloads, lo que significa que los datos que extraeremos de esta API empezar谩n a crecer. Si antes ten铆amos 70 payloads, el siguiente mes podr铆amos tener 120, y luego 200, y as铆.

Por ello buscamos ese algoritmo que gestione mejor el tiempo de b煤squeda. 馃攳

鈱? 驴Puedes encontrar cu谩l es? 馃捇

#### Datos importantes

Si deseas probar los algoritmos, aqu铆 est谩 la API que debes declarar:

```javascript
const SPACEX_API = "https://api.spacexdata.com/v3/launches";
```

Pero recuerda que en el estudio de la complejidad temporal solo hacemos un an谩lisis de l铆nea por l铆nea del c贸digo鈥?

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

鉂? Interesante. Tenemos muchos ciclos for. 驴Es eso un problema?

隆Genial! Has notado que tenemos ciclos for recorriendo la lista de payloads, esto implica que la lista de payloads (representada con payloadsAPI) tiene m谩s participaci贸n en todo el algoritmo que el otro par谩metro payloadId. Por lo tanto, enf贸cate en qu茅 estructuras usa payloadsAPI.

鉂? Usamos async/await porque estamos manejando APIs, y APIs toman un tiempo X en cargar los datos. 驴Esto es m谩s complejidad temporal?

S铆. Utilizar una API es la forma m谩s com煤n en la que el tiempo se escapa de nuestras manos (dada la estructura de JavaScript), y por ello usamos async/await. Siempre cu茅ntalas en tu an谩lisis.

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
