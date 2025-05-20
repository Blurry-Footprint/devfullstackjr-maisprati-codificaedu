// Importa o módulo "readline" para entrada de dados pelo terminal.
const readline = require("readline");

// Cria uma interface para leitura e escrita no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array para armazenar os números digitados.
let numeros = [];
let soma = 0;
let contador = 0;

// Função que pergunta os números de forma recursiva
function perguntarNumero() {
  if (contador < 5) {
    rl.question(`Digite o ${contador + 1}º número: `, function(input) {
      const numero = parseFloat(input);
      // Verifica se o valor digitado é realmente um número.
      if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        perguntarNumero(); // Solicita novamente um número devido a invalidade identificada.
      } else {
        numeros.push(numero); // Guarda o número no array
        soma += numero; // Soma ao total
        contador++;
        perguntarNumero(); // Vai para o próximo número
      }
    });
  } else {
    // Quando 5 números forem digitados, exibe os resultados.
    console.log(`\nNúmeros digitados: ${numeros.join(", ")}`); // Mostra todos os números separados por vírgula.
    console.log(`Soma total: ${soma}`); // Mostra a soma total.
    rl.close(); // Encerra a interface de entrada de dados.
  }
}

console.log("Vamos somar 5 números!"); // Exibe uma mensagem inicial.
perguntarNumero(); // Inicia o processo de solicitação dos números.
