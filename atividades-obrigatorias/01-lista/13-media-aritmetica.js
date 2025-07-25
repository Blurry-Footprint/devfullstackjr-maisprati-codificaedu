// Importa o módulo "readline" para entrada de dados pelo terminal.
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;       // Soma acumulada dos números digitados.
let contador = 0;   // Quantidade de números digitados (exceto o 0).

// Função para perguntar números recursivamente
function perguntarNumero() {
  rl.question("Digite um número decimal (0 para sair): ", function(input) {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      perguntarNumero(); // Solicita de novo se não for um número.
    } else if (numero === 0) {
      // Se digitou zero, calcula e mostra a média.
      if (contador === 0) {
        console.log("Nenhum número válido foi digitado.");
      } else {
        const media = soma / contador;
        console.log(`Média dos números digitados: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      // Se o número for válido e diferente de zero, acumula a soma e contador.
      soma += numero;
      contador++;
      perguntarNumero(); // Solicita novamente.
    }
  });
}
// Exibe uma mensagem inicial para o usuário entender o que fazer.
console.log("Vamos calcular a média dos números digitados (0 para parar).");
// Inicia a execução da função que faz as solicitações recursivamente.
perguntarNumero();
