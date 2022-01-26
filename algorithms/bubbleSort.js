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

function bubbleSort(arreglo) { // Calculo Comp.Espacial O(n)
  let longitud = arreglo.length; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  for (let i = 0; i < longitud; i++) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    for (let j = 0; j < longitud; j++) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
      if (arreglo[j] > arreglo[j + 1]) { // Calculo Comp.Temporal O(1)
        let temporal = arreglo[j]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
        arreglo[j] = arreglo[j + 1]; // Calculo Comp.Temporal O(1)
        arreglo[j + 1] = temporal; // Calculo Comp.Temporal O(1)
      }
    }
  }
  return arreglo; // Calculo Comp.Temporal O(1)
}
