// Importa o módulo "readline" para entrada de dados.
const readline = require("readline");

// Cria a interface de leitura no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário o primeiro número.
rl.question("Digite o primeiro número: ", function(valor1) {
  // Solicita ao usuário o segundo número.
  rl.question("Digite o segundo número (diferente do primeiro): ", function(valor2) {
    // Converte as entradas para número decimal, mas o programa também lerá número(s) inteiro(s)caso o usuário digite.
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    // Verifica se os valores são válidos.
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, digite números válidos.");
    } else if (num1 === num2) {
      console.log("Os números devem ser diferentes.");
    } else {
      // Exibi os números em ordem crescente.
      if (num1 < num2) {
        console.log(`Ordem crescente: ${num1}, ${num2}`);
      } else {
        console.log(`Ordem crescente: ${num2}, ${num1}`);
      }
    }

    // Fecha a interface de leitura.
    rl.close();
  });
});
