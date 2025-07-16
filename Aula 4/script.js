// 1. O que é um array em JavaScript? Cite três situações reais onde o uso de arrays é indicado.
// Resposta: Um array é uma estrutura que armazena uma coleção ordenada de elementos. Situações: lista de alunos, carrinho de compras, resultados de sensores.

// 2. Crie um array chamado cores contendo as cores "azul", "verde", "amarelo" e "vermelho". Exiba no console apenas o segundo item.
let cores = ["azul", "verde", "amarelo", "vermelho"];
console.log(cores[1]); // "verde"

// 3. Qual a diferença entre os métodos push() e unshift()? Escreva um exemplo de código para cada um.
// push() adiciona ao final, unshift() ao início.
let numeros1 = [1, 2, 3];
numeros1.push(4); // [1,2,3,4]
console.log(numeros1);
numeros1.unshift(0); // [0,1,2,3,4]
console.log(numeros1);

// 4. Dado o array: let numeros = [10, 20, 30, 40, 50];
// Utilize o método splice() para remover o número 30 e inserir o número 25 em seu lugar.
let numeros = [10, 20, 30, 40, 50];
numeros.splice(2, 1, 25); // remove 1 elemento na posição 2 e adiciona 25
console.log(numeros); // [10, 20, 25, 40, 50]

// 5. Crie um array chamado dadosMistos que contenha pelo menos um número, uma string, um valor booleano, um objeto e outro array.
let dadosMistos = [42, "texto", true, {nome: "João"}, [1,2,3]];
console.log(dadosMistos);

// 6. Explique o que o método includes() faz. Aplique esse método em um array chamado frutas para verificar se "maçã" está presente.
// includes() verifica se um valor está presente no array.
let frutas = ["banana", "maçã", "laranja"];
console.log(frutas.includes("maçã")); // true

// 7. Qual a diferença entre os métodos slice() e splice()? Quando utilizar cada um?
// slice() retorna uma cópia de parte do array, sem alterar o original. splice() altera o array original, removendo ou adicionando elementos.

// 8. Crie um array com os números de 1 a 10. Utilize o método filter() para criar um novo array contendo apenas os números pares.
let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let pares = numeros2.filter(n => n % 2 === 0);
console.log(pares); // [2,4,6,8,10]

// 9. Utilizando o array alunos = ["Ana", "Bruno", "Carlos"], escreva um código usando forEach() que exiba no console: "Aluno: Ana", etc.
let alunos = ["Ana", "Bruno", "Carlos"];
alunos.forEach(nome => {
    console.log("Aluno: " + nome);
});

// 10. Desenvolva um pequeno programa em JavaScript que:
// Solicite ao usuário 3 nomes via prompt(), armazene os nomes em um array e exiba todos os nomes usando um laço for.
let nomes = [];
for(let i=0; i<3; i++) {
    let nome = prompt(`Digite o nome ${i+1}:`);
    nomes.push(nome);
}
for(let i=0; i<nomes.length; i++) {
    console.log(nomes[i]);
}
