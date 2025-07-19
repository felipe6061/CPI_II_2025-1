// 1. O que é array?
// É uma lista que guarda várias coisas juntas, como uma lista de compras

// 2. Criando array de cores
let cores = ["azul", "verde", "amarelo"];
console.log(cores[1]); 

// 3. Adicionar itens no final ou começo
let lista = [1, 2];
lista.push(3); 
lista.unshift(0); // Vira [0, 1, 2, 3]

// 4. Trocar um item
let numeros = [10, 20, 30];
numeros.splice(1, 1, 25); 

// 5. Array com tipos diferentes
let misto = [1, "texto", true];

// 6. Ver se tem um item
let frutas = ["banana", "maçã"];
console.log(frutas.includes("maçã")); 

// 7. Diferença entre slice e splice
// slice: copia pedaço do array
// splice: altera o array

// 8. Filtrar números pares
let nums = [1, 2, 3, 4];
let pares = nums.filter(num => num % 2 === 0); 

// 9. Mostrar cada aluno
let alunos = ["Ana", "João"];
alunos.forEach(aluno => {
  console.log("Aluno: " + aluno);
});

// 10. Pedir 3 nomes
let nomes = [];
nomes.push(prompt("Digite o 1º nome:"));
nomes.push(prompt("Digite o 2º nome:"));
nomes.push(prompt("Digite o 3º nome:"));

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}