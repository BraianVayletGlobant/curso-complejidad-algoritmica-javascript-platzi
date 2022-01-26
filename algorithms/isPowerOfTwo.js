/**
 * Complejidad Temporal -> O(n + 7) ==> result: O(n)
 * Complejidad Espacial -> O(2) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(2) - O(1) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function isPowerOfTwo(n) { // Calculo Comp.Espacial O(1)
  if (n < 1) { // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  let numeroDividido = n; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  while (numeroDividido !== 1) { // Calculo Comp.Temporal O(n)
    if (numeroDividido % 2 !== 0) { // Calculo Comp.Temporal O(1)
      return false; // Calculo Comp.Temporal O(1)
    }
    numeroDividido = numeroDividido / 2; // Calculo Comp.Temporal O(1)
  }

  return true; // Calculo Comp.Temporal O(1)
}
