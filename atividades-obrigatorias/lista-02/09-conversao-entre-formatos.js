const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Converte array de pares para objeto
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

// Converte objeto para array de pares
function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

console.log("Digite 1 para converter pares → objeto");
console.log("Digite 2 para converter objeto → pares");

rl.question("Escolha a operação (1 ou 2): ", (opcao) => {
  if (opcao === "1") {
    rl.question("Digite um array de pares no formato JSON (ex: [[\"nome\", \"João\"], [\"idade\", 30]]):\n", (input) => {
      try {
        const pares = JSON.parse(input);
        if (!Array.isArray(pares)) {
          console.log("Entrada inválida: deve ser um array de pares.");
          rl.close();
          return;
        }
        const obj = paresParaObjeto(pares);
        console.log("Objeto resultante:", obj);
      } catch (error) {
        console.log("Erro ao processar entrada:", error.message);
      }
      rl.close();
    });
  } else if (opcao === "2") {
    rl.question("Digite um objeto no formato JSON (ex: {\"nome\":\"João\", \"idade\":30}):\n", (input) => {
      try {
        const obj = JSON.parse(input);
        if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
          console.log("Entrada inválida: deve ser um objeto.");
          rl.close();
          return;
        }
        const pares = objetoParaPares(obj);
        console.log("Array de pares resultante:", pares);
      } catch (error) {
        console.log("Erro ao processar entrada:", error.message);
      }
      rl.close();
    });
  } else {
    console.log("Opção inválida.");
    rl.close();
  }
});
