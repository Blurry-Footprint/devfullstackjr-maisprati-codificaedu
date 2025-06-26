// Importa o módulo "readline" para ler dados do terminal.
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Exibe o menu de opções.
console.log("=== MENU INTERATIVO ===");
console.log("1 - Dizer Olá");
console.log("2 - Mostrar a data atual");
console.log("3 - Sair");

// Faz uma pergunta ao usuário e armazena a resposta na variável "opcão".
rl.question("Escolha uma opção (1, 2 ou 3): ", function(opcao) {

  // Estrutura switch para decidir o que fazer com base na opção digitada.
  switch(opcao) {
    case "1":
      // Se o usuário digitar 1, mostra uma saudação
      console.log("Olá, usuário!");
      break;

    case "2":
       // Se o usuário digitar 2, mostra a data e hora atual.
      const dataAtual = new Date();
      console.log("Data atual: " + dataAtual.toLocaleString());
      break;

    case "3":
       // Se o usuário digitar 3, mostra mensagem de saída.
      console.log("Saindo do programa. Até logo!");
      break;

    default:
      // Se digitar algo diferente de 1, 2 ou 3, avisa que a opção é inválida.
      console.log("Opção inválida. Tente novamente.");
  }

  // Fecha a interface de leitura.
  rl.close();
});
