// Importa o módulo "readline" para entrada de dados pelo terminal.
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita um número inteiro ao usuário.
rl.question("Digite um número inteiro para calcular o fatorial: ", function(input) {
  const num = parseInt(input);

  // Verifica se o valor é um número inteiro válido e não negativo.
  if (isNaN(num) || num < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
  } else {
    let fatorial = 1; // Inicializa fatorial com 1 (base da multiplicação).

    // Loop que multiplica fatorial pelos números de 1 até o número que o usuário digitou.
    for (let i = 1; i <= num; i++) {
      fatorial *= i; // fatorial = fatorial * i.
    }

    // Exibi o resultado.
    console.log(`O fatorial de ${num} é ${fatorial}`);
  }

  // Fecha a interface de leitura.
  rl.close();
});
