const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a lista de produtos no formato JSON (ex: [{\"nome\":\"camisa\",\"preco\":50}, {\"nome\":\"calça\",\"preco\":100}]):\n", (input) => {
  try {
    const produtos = JSON.parse(input);

    if (!Array.isArray(produtos)) {
      console.log("Entrada inválida: deve ser um array.");
      rl.close();
      return;
    }

    // Ordena os produtos pelo preço (crescente)
    produtos.sort((a, b) => a.preco - b.preco);

    // Mapeia apenas os nomes
    const nomesOrdenados = produtos.map(produto => produto.nome);

    console.log("Nomes ordenados por preço crescente:", nomesOrdenados);
  } catch (error) {
    console.log("Erro ao processar entrada:", error.message);
  }

  rl.close();
});
