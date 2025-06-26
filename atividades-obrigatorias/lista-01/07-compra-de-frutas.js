// Importa o módulo "readline" para entrada de dados.
const readline = require("readline");

// Cria a interface de leitura no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o número de maçãs que o usuário deseja.
rl.question("Digite o número de maçãs que deseja comprar: ", function(input) {
  // Converte a entrada para número inteiro.
  const quantidade = parseInt(input);

  // Verifica se o número de maçãs não é um número ou se é menor ou igual a zero; caso seja, considera a entrada inválida e solicita um número válido e maior que zero.
  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, digite um número válido e maior que zero.");
  } else {
    let precoPorMaca;

    // Define o preço por maçã baseado na quantidade.
    if (quantidade < 12) {
      precoPorMaca = 0.30;
    } else {
      precoPorMaca = 0.25;
    }

    // Calcula o valor total.
    const total = quantidade * precoPorMaca;

    // Exibe o resultado com duas casas decimais.
    console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);
  }

  // Fecha a interface de leitura.
  rl.close();
});
