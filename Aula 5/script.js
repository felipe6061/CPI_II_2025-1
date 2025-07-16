// 1. Declaração de Função Tradicional
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

// 2. Chamada e Reutilização de Função
console.log(somarDoisNumeros(5, 3));    // 8
console.log(somarDoisNumeros(10, 20));  // 30
console.log(somarDoisNumeros(-1, 7));   // 6

// 3. Parâmetros e Saudação
function gerarSaudacao(nome) {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}
console.log(gerarSaudacao("SeuNome")); // Substitua "SeuNome" pelo seu nome

// 4. Valor de Retorno e Cálculo
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
let areaCalculada = calcularAreaRetangulo(5, 3);
console.log(areaCalculada); // 15

// 5. Função Anônima (Function Expression)
const multiplicar = function(a, b) {
    return a * b;
};
console.log(multiplicar(4, 6)); // 24

// 6. Arrow Function (Sintaxe Básica)
const multiplicarArrow = (a, b) => {
    return a * b;
};
console.log(multiplicarArrow(4, 6)); // 24

// 7. Arrow Function (Retorno Implícito)
const dobrarNumero = n => n * 2;
console.log(dobrarNumero(7)); // 14

// 8. Comportamento do `this` (Função Tradicional em Objeto)
const pessoa = {
    nome: "Maria",
    idade: 25,
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa.apresentar();
// Explicação: Neste contexto, `this` referencia o próprio objeto `pessoa`.

// 9. Comportamento do `this` (Arrow Function em Objeto)
pessoa.apresentarArrow = () => {
    console.log(`Olá, meu nome é ${this.nome}.`);
};
pessoa.apresentarArrow();
// Explicação: Em Arrow Functions, `this` não referencia o objeto `pessoa`, mas sim o contexto léxico onde a função foi criada (geralmente o escopo global ou do módulo).

// 10. Métodos de Objeto
const produto = {
    nome: "Caderno",
    preco: 10,
    quantidade: 3,
    calcularValorTotal: function() {
        return this.preco * this.quantidade;
    }
};
console.log(produto.calcularValorTotal()); // 30
