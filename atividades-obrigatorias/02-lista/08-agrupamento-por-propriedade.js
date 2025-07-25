const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a lista de vendas no formato JSON (ex: [{\"cliente\":\"João\",\"total\":100}, {\"cliente\":\"Maria\",\"total\":150}, {\"cliente\":\"João\",\"total\":50}]):\n", (input) => {
  try {
    const vendas = JSON.parse(input);

    if (!Array.isArray(vendas)) {
      console.log("Entrada inválida: deve ser um array.");
      rl.close();
      return;
    }

    // Agrupa por cliente e soma os totais
    const agrupado = vendas.reduce((acc, venda) => {
      if (acc[venda.cliente]) {
        acc[venda.cliente] += venda.total;
      } else {
        acc[venda.cliente] = venda.total;
      }
      return acc;
    }, {});

    console.log("Vendas agrupadas por cliente:", agrupado);

  } catch (error) {
    console.log("Erro ao processar entrada:", error.message);
  }

  rl.close();
});
