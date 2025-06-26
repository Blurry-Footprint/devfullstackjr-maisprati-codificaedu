const readline = require('readline');

// Cria interface para entrada de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Gera número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Função que faz a pergunta em loop
function perguntarPalpite() {
  rl.question("Adivinhe o número (entre 1 e 100): ", (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite)) {
      console.log("Digite um número válido.");
      perguntarPalpite(); // repete
    } else if (palpite < numeroSecreto) {
      console.log("Mais alto!");
      perguntarPalpite(); // repete
    } else if (palpite > numeroSecreto) {
      console.log("Mais baixo!");
      perguntarPalpite(); // repete
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
      rl.close(); // encerra
    }
  });
}

// Inicia o jogo
perguntarPalpite();
