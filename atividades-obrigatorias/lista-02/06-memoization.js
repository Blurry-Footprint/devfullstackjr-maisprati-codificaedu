const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função memoize que funciona para múltiplos argumentos
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

// Fatorial recursivo simples
function fatorial(n) {
  if (n < 0) throw new Error("Número negativo não tem fatorial.");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// Memoiza o fatorial
const fatorialMemoizado = memoize(fatorial);

// Entrada do usuário
rl.question("Digite um número inteiro para calcular o fatorial memoizado: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n)) {
    console.log("Por favor, digite um número válido.");
    rl.close();
    return;
  }

  try {
    const resultado = fatorialMemoizado(n);
    console.log(`Fatorial de ${n} é ${resultado}`);
  } catch (error) {
    console.log("Erro:", error.message);
  }

  rl.close();
});
