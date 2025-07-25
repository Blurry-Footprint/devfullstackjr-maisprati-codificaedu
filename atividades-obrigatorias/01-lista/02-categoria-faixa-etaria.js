// Importa o módulo "readline" para ler dados do terminal.
const readline = require("readline");

// Cria a interface de leitura.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita a idade do usuário.
rl.question("Digite a idade da pessoa: ", function(input) {
  // Converte a string digitada para número inteiro.
  const idade = parseInt(input);

  // Verifica se a idade é um número menor que zero; se ambas as condições forem verdadeiras, imprime uma mensagem na tela solicitando uma idade válida.
  if (isNaN(idade) || idade < 0) {
    console.log("Por favor, digite uma idade válida (número inteiro não negativo).");
  } 
  // Verifica a idade digitada pelo usuário e retorna a categoria da faixa etária correspondente, com base nessa idade.
  else {
    if (idade <= 12) {
      console.log("Categoria: Criança");
    } else if (idade <= 17) {
      console.log("Categoria: Adolescente");
    } else if (idade <= 59) {
      console.log("Categoria: Adulto");
    } else {
      console.log("Categoria: Idoso");
    }
  }

  // Fecha a interface de leitura.
  rl.close();
});
