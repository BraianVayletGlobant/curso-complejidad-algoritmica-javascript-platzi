/**
 * Complejidad Temporal -> O(n + 10) ==> result: O(n)
 * Complejidad Espacial -> O(6) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(6) - O(1) ==> O(5) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function fibonacci(numero) { // Calculo Comp.Espacial O(1)
  const secuenciaFibonacci = [1]; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  let valorPrevio = 0; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)
  let valorActual = 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  if (numero === 1) { // Calculo Comp.Temporal O(1)
    return secuenciaFibonacci; // Calculo Comp.Temporal O(1)
  }

  let i = numero - 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  while (i) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    valorActual += valorPrevio; // Calculo Comp.Temporal O(1)
    valorPrevio = valorActual - valorPrevio; // Calculo Comp.Temporal O(1)
    secuenciaFibonacci.push(valorActual); // Calculo Comp.Temporal O(1)
    i -= 1; // Calculo Comp.Temporal O(1)
  }

  return secuenciaFibonacci; // Calculo Comp.Temporal O(1)
}
