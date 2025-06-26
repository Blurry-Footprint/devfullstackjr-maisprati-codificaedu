// Importa o módulo "readline" para entrada de dados.
const readline = require("readline");

// Cria a interface de leitura no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário um número.
rl.question("Digite um número inteiro: ", function(input) {
  // Converte a entrada em número inteiro.
  const numero = parseInt(input);

  // Verifica se o valor é um número válido, caso não seja, uma mensagem solicitando um número inteiro válido é exibida.
  if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
  } else {
    console.log(`\nExibindo o número ${numero} 10 vezes:\n`);

    // Usa um loop for para repetir 10 vezes.
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}ª vez: ${numero}`);
    }
  }

  // Fecha a interface de leitura.
  rl.close();
});
