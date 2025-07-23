// Questão 1: Exemplo de objeto
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
};

// Questão 2: Tipos de valores em propriedades
const exemplos = {
    string: "Texto",
    numero: 42,
    booleano: true,
    array: [1, 2, 3],
    objeto: {
        chave: "valor"
    },
    funcao: function() {
        console.log("Olá");
    },
    nulo: null,
    indefinido: undefined
};

// Questão 3: Propriedades vs Métodos
const carro = {
    // Propriedades
    marca: "Ford",
    ano: 2020,
    
    // Método
    ligar: function() {
        console.log("Carro ligado");
    }
};

// Chamando o método para demonstração
carro.ligar();

// Questão 4: Objeto aluno com método saudar
const aluno = {
    nome: "João",
    idade: 20,
    aprovado: true,
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

// Chamando o método saudar
aluno.saudar();

// Questão 5: Objetos aninhados
const pessoaComEndereco = {
    nome: "Carlos",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    }
};

// Acessando propriedades aninhadas
console.log(pessoaComEndereco.endereco.cidade); // "São Paulo"

// Questão 7: Loop for...in
const carroToyota = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

for (let propriedade in carroToyota) {
    console.log(`${propriedade}: ${carroToyota[propriedade]}`);
}

// Questão 8: Função construtora
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    
    // Método (pode ser adicionado aqui ou via prototype)
    this.exibirInfo = function() {
        console.log(`${this.marca} ${this.modelo}`);
    };
}

// Criando instância
const meuCarro = new Carro("Volkswagen", "Gol");
meuCarro.exibirInfo();

// Questão 9: Função construtora Livro
function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.exibirInfo = function() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    };
}

// Criando instância e chamando método
const meuLivro = new Livro("Dom Casmurro", "Machado de Assis");
meuLivro.exibirInfo();

// Questão 10: Demonstração do operador new
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudar = function() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos`);
    };
}

// Criando nova pessoa
const maria = new Pessoa("Maria", 25);
maria.saudar();

// Demonstração adicional de objetos
console.log("--- Demonstrações Adicionais ---");

// Acessando propriedades
console.log(pessoa.nome); // Notação de ponto
console.log(pessoa["profissao"]); // Notação de colchetes

// Adicionando nova propriedade dinamicamente
pessoa.email = "maria@exemplo.com";
console.log(pessoa.email);

// Deletando propriedade
delete pessoa.email;
console.log(pessoa.email); // undefined

// Verificando existência de propriedade
console.log("nome" in pessoa); // true
console.log("email" in pessoa); // false