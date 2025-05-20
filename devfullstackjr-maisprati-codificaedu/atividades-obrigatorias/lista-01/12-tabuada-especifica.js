// Importa o módulo "readline" para entrada de dados pelo terminal.
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta o número para o usuário
rl.question("Digite um número para ver a tabuada: ", function(input) {
  const num = parseInt(input);

  // Verifica se o número é válido
  if (isNaN(num)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`Tabuada do ${num}:`);

    // Loop de 1 a 10 para mostrar a multiplicação
    for (let i = 1; i <= 10; i++) {
      const resultado = num * i;
      console.log(`${num} x ${i} = ${resultado}`);
    }
  }

  // Fecha a interface de leitura.
  rl.close();
});
