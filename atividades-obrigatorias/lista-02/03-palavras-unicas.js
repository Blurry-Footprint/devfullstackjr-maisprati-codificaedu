const readline = require('readline');

// Cria interface para entrada no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que extrai palavras únicas com for e if/else
function extrairPalavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let jaExiste = false;

    for (let j = 0; j < unicas.length; j++) {
      if (palavraAtual === unicas[j]) {
        jaExiste = true;
        break;
      }
    }

    if (!jaExiste) {
      unicas.push(palavraAtual);
    }
  }

  return unicas;
}

// Entrada do usuário
rl.question("Digite uma frase: ", (entrada) => {
  const resultado = extrairPalavrasUnicas(entrada);
  console.log(resultado); // Mostra o array final com palavras únicas
  rl.close();
});
