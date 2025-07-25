const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function debounce(fn, delay) {
  let timerId;

  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Função para ser executada com debounce
function mostrarMensagem(texto) {
  console.log("Mensagem processada:", texto);
}

const debouncedMostrarMensagem = debounce(mostrarMensagem, 2000);

console.log("Digite algo. Digite 'sair' para encerrar.");

// Lê repetidamente o que usuário digita
function perguntar() {
  rl.question(">", (input) => {
    if (input.toLowerCase() === "sair") {
      rl.close();
      return;
    }
    // Chama a função com debounce
    debouncedMostrarMensagem(input);
    perguntar();
  });
}

perguntar();
