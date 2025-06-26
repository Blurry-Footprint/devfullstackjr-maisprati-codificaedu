const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fatorial(n) {
  if (n < 0) {
    throw new Error("Número negativo não tem fatorial.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

rl.question("Digite um número inteiro para calcular o fatorial: ", (input) => {
  const n = parseInt(input);
  
  if (isNaN(n)) {
    console.log("Por favor, digite um número válido.");
    rl.close();
    return;
  }

  try {
    const resultado = fatorial(n);
    console.log(`Fatorial de ${n} é ${resultado}`);
  } catch (error) {
    console.log("Erro:", error.message);
  }
  
  rl.close();
});
