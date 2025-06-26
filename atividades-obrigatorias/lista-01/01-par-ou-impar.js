// Importa o módulo 'readline' para ler dados do terminal.
const readline = require("readline");

// Cria a interface de leitura.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita um número ao usuário.
rl.question("Digite um número inteiro: ", function (numero) {
  // Converte a entrada para número inteiro.
  const numeroInteiro = parseInt(numero);

  // Verifica se o número é realmente um número.
  if (isNaN(numeroInteiro)) {
    console.log("Por favor, digite um número inteiro válido.");
  } else {
    // Verifica se o número é par ou ímpar.
    if (numeroInteiro % 2 === 0) {
      console.log("O número é par.");
    } else {
      console.log("O número é ímpar.");
    }
  }
  // Fecha a interface de leitura.
  rl.close();
});

