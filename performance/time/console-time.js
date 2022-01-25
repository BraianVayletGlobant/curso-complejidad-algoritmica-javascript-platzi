function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// Similar a performance.performance.now() pero menos preciso.
console.time("duracion-contar");
contar(5);
console.timeEnd("duracion-contar");
