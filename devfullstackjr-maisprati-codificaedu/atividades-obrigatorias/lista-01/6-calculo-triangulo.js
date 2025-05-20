// Importa o módulo "readline" para entrada de dados.
const readline = require("readline");

// Cria a interface de leitura no terminal.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o valor do lado A.
rl.question("Digite o valor do lado A: ", function(aInput) {
  // Solicita o valor do lado B.
  rl.question("Digite o valor do lado B: ", function(bInput) {
    // Solicita o valor do lado C.
    rl.question("Digite o valor do lado C: ", function(cInput) {
      
      // Converte as entradas para números.
      const A = parseFloat(aInput);
      const B = parseFloat(bInput);
      const C = parseFloat(cInput);

      // Verifica se alguma das variáveis A, B ou C não é número (NaN) ou se algum valor é menor ou igual a zero; caso as verificações sejam verdadeiras, indica que os dados são inválidos, e retorna uma mensagem solicitando valores positivos e válidos.
// 
      if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
        console.log("Por favor, digite apenas valores positivos e válidos.");
      } else {
        // Verifica se os valores formam um triângulo.
        if (A < B + C && B < A + C && C < A + B) {
          console.log("Os lados formam um triângulo.");

          // Verifica o tipo de triângulo.
          if (A === B && B === C) {
            console.log("Tipo: Triângulo Equilátero (todos os lados iguais)");
          } else if (A === B || A === C || B === C) {
            console.log("Tipo: Triângulo Isósceles (dois lados iguais)");
          } else {
            console.log("Tipo: Triângulo Escaleno (todos os lados diferentes)");
          }
        } else {
          console.log("Os lados NÃO formam um triângulo.");
        }
      }

      // Fecha a interface de leitura.
      rl.close();
    });
  });
});
