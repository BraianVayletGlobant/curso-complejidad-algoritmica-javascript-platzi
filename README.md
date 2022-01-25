# 📝 Notas Curso Complejidad Algoritmica con JavaScript

- Clase1: Intro
- Clase2: [Estructura de un algoritmo](#Estructura-de-un-algoritmo)
- Clase3: [¿Cómo elegir un buen algoritmo?](#¿Cómo-elegir-un-buen-algoritmo?)
- Clase4: [Introducción a complejidad algorítmica](#Introducción-a-complejidad-algorítmica)
- Clase5: [Complejidad temporal](#Complejidad-temporal)
- Clase6: [Complejidad temporal en práctica](#Complejidad-temporal-en-práctica)
- Clase7: [Complejidad espacial](#Complejidad-espacial)
- Clase8: [Complejidad espacial en práctica](#Complejidad-espacial-en-práctica)
- Clase9: [El estado de la complejidad](#El-estado-de-la-complejidad)

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
