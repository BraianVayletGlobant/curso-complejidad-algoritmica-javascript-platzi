/**
 * Complejidad Temporal -> O(n + 12) ==> result: O(n)
 * Complejidad Espacial -> O(2) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(2) - O(1) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function primalidadTest(numero) { // Calculo Comp.Espacial O(1)

  if (numero <= 3) { // Calculo Comp.Temporal O(1)
    return true; // Calculo Comp.Temporal O(1)
  }

  if (numero % 1 !== 0) { // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  if (numero <= 1) { // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  if (numero % 2 === 0) { // Calculo Comp.Temporal O(1)
    return false; // Calculo Comp.Temporal O(1)
  }

  const limiteDivisor = Math.sqrt(numero); // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    if (numero % divisor === 0) {  // Calculo Comp.Temporal O(1)
      return false; // Calculo Comp.Temporal O(1)
    }
  }

  return true; // Calculo Comp.Temporal O(1)
}
