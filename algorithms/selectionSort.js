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

function selectionSort(arreglo) { // Calculo Comp.Espacial O(n)
  let longitud = arreglo.length; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  for (let i = 0; i < longitud; i++) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    let minimo = i; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
    for (let j = i + 1; j < longitud; j++) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
      if (arreglo[j] < arreglo[minimo]) { // Calculo Comp.Temporal O(1)
        minimo = j; // Calculo Comp.Temporal O(1)
      }
    }
    if (minimo != i) { // Calculo Comp.Temporal O(1)
      let temporal = arreglo[i]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
      arreglo[i] = arreglo[minimo]; // Calculo Comp.Temporal O(1)
      arreglo[minimo] = temporal; // Calculo Comp.Temporal O(1)
    }
  }
  return arreglo; // Calculo Comp.Temporal O(1)
}
