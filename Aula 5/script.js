//Declaração de Função Tradicional
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));

// 2. Chamada e Reutilização de Função: Chame a função `somarDoisNumeros` que você criou no Exercício 1 três vezes, 
// com diferentes pares de números (ex: 5 e 3; 10 e 20; -1 e 7), e imprima o resultado de cada chamada no console. 
console.log(soma(10, 20)); 
console.log(soma(-1, 7));  

// 3. Parâmetros e Saudação: Desenvolva uma função tradicional chamada `gerarSaudacao` que receba um parâmetro 
// `nome` (uma string) e retorne uma string como "Olá, [nome]! Bem-vindo(a)!". Teste a função com o seu nome. 
function saudar(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudar("Ana"));

// 4. Função que retorna valor
function area(l, a) {
    return l * a;
}
let resultado = area(5, 3);
console.log(resultado);

// 5. Função anônima
const mult = function(a, b) {
    return a * b;
};
console.log(mult(4, 6));

// 6. Arrow function básica
const multArrow = (a, b) => {
    return a * b;
};
console.log(multArrow(4, 6));

// 7. Arrow Function (Retorno Implícito): 
const dobro = n => n * 2;
console.log(dobro(7)); 

// 8. Comportamento do `this` (Função Tradicional em Objeto):
const usuario = {
    nome: "Carlos",
    idade: 30,
    mostrar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
};
usuario.mostrar();

// 9. Comportamento do `this` (Arrow Function em Objeto): 
usuario.mostrarArrow = () => {
    console.log(`Nome: ${this.nome}`);
};
usuario.mostrarArrow(); // Undefined

// 10. Métodos de Objeto:
const item = {
    nome: "Livro",
    preco: 15,
    qtde: 2,
    total() {
        return this.preco * this.qtde;
    }
};
console.log(item.total()); // 30