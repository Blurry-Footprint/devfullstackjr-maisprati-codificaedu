// Importa o módulo "readline" para ler dados do terminal.
const readline = require("readline");

// Cria a interface de leitura.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita a idade do usuário.
rl.question("Digite a nota (0 a 10): ", function(input) {
  // Converte a entrada para número inteiro.
  const nota = parseFloat(input);

  // Valida se a nota é um número entre 0 e 10; caso não seja, é exibida uma mensagem solicitando uma nota válida.
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, digite uma nota válida entre 0 e 10.");
  } else {
    if (nota >= 7) {
      console.log("Aprovado");
    } else if (nota >= 4) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }

  //Fecha a interface de leitura.
  rl.close();
});
