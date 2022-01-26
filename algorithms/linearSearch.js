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

function linearSearch(arreglo, clave) { // Calculo Comp.Espacial O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    if (arreglo[indice] === clave) { // Calculo Comp.Temporal O(1) 
      return indice; // Calculo Comp.Temporal O(1)
    }
  }
  return -1; // Calculo Comp.Temporal O(1)
}

