/**
 * Complejidad Temporal -> O(n + 3) ==> result: O(n)
 * Complejidad Espacial -> O(3) ==> result: O(1)
 * Espacio Auxiliar(Complejidad Espacial - Espacio de entrada) -> O(3) - O(1) ==> O(2) ==> result: O(1)
 */

// resultados:
// CT: O(n)
// CE: O(1)
// EA: O(1)

function factorial(numero) { // Calculo Comp.Espacial O(1)
  let resultado = 1; // Calculo Comp.Temporal O(1) | Calculo Comp.Espacial O(1)

  for (let i = 2; i <= numero; i += 1) { // Calculo Comp.Temporal O(n) | Calculo Comp.Espacial O(1)
    resultado *= i; // Calculo Comp.Temporal O(1) 
  }
  
  return resultado; // Calculo Comp.Temporal O(1)
}
