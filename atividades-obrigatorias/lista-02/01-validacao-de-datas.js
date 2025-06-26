const readline = require('readline');

// Cria interface para ler do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função principal
function ehDataValida(dia, mes, ano) {
  if (mes < 1 || mes > 12) return false;
  if (dia < 1) return false;

  let diasNoMes;

  switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      diasNoMes = 31;
      break;
    case 4: case 6: case 9: case 11:
      diasNoMes = 30;
      break;
    case 2:
      const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
      diasNoMes = bissexto ? 29 : 28;
      break;
    default:
      return false;
  }

  return dia <= diasNoMes;
}

// Entradas do usuário
rl.question("Digite o dia: ", (diaInput) => {
  rl.question("Digite o mês: ", (mesInput) => {
    rl.question("Digite o ano: ", (anoInput) => {
      const dia = parseInt(diaInput);
      const mes = parseInt(mesInput);
      const ano = parseInt(anoInput);

      // Apenas exibe o retorno da função: true ou false
      console.log(ehDataValida(dia, mes, ano));

      rl.close();
    });
  });
});
