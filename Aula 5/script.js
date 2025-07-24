//Declaração de Função Tradicional
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));

// 2. Chamada e Reutilização de Função:
console.log(soma(10, 20)); 
console.log(soma(-1, 7));  

// 3. Função de Saudação
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