// Importa o módulo "readline" para entrada de dados no terminal.
const readline = require("readline");

// Cria uma interface para entrada e saída de dados no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o peso do usuário.
rl.question("Digite seu peso em kg (ex: 70): ", function(pesoInput) {
  // Solicita a altura após o peso ser digitado.
  rl.question("Digite sua altura em metros (ex: 1.75): ", function(alturaInput) {
    
    // Converte as entradas para números decimais.
    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    // Valida se os valores são numéricos e positivos.
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Por favor, insira valores válidos para peso e altura.");
    } else {
      // Calcula o IMC.
      const imc = peso / (altura * altura);

      // Exibe o valor calculado do IMC com duas casas decimais.
      console.log("Seu IMC é: " + imc.toFixed(2));

      // Define a categoria do IMC com base no valor calculado.
      if (imc < 18.5) {
        console.log("Classificação: Baixo peso");
      } else if (imc >= 18.5 && imc < 25) {
        console.log("Classificação: Peso normal");
      } else if (imc >= 25 && imc < 30) {
        console.log("Classificação: Sobrepeso");
      } else {
        console.log("Classificação: Obesidade");
      }
    }

    // Fecha a interface de leitura.
    rl.close();
  });
});
