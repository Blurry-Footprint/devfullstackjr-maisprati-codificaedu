// Gera e imprime os 10 primeiros números da sequência de Fibonacci

let anterior = 0; // Primeiro número da sequência
let atual = 1;    // Segundo número da sequência

console.log("Os 10 primeiros números da sequência de Fibonacci:");
console.log(anterior); // Imprime o primeiro
console.log(atual);    // Imprime o segundo

// Loop que gera os próximos 8 números (já imprimimos os 2 primeiros)
for (let i = 3; i <= 10; i++) {
  const proximo = anterior + atual; // Próximo número é a soma dos dois anteriores
  console.log(proximo);             // Exibe o número

  // Atualiza os valores para a próxima iteração
  anterior = atual;
  atual = proximo;
}
