// Questão 4: Manipulando lista de itens
const itens = document.querySelectorAll('.item');
itens.forEach(item => {
    item.style.color = 'blue';
});

// Questão 6: Alterando atributos de imagem
function alterarImagem() {
    const foto = document.getElementById('foto');
    foto.src = 'imagem2.jpg';
    foto.alt = 'Nova imagem';
    foto.style.width = '300px';
}

// Chamando a função para testar (pode remover depois)
alterarImagem();

// Questão 7: Adicionando parágrafo
const div = document.getElementById('conteudo');
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Bem-vindo!';
div.appendChild(novoParagrafo);

// Questão 9: O que será exibido no console?
const elemento = document.querySelector('p');
console.log(elemento.textContent); // "Olá, mundo!"

// Questão 10: Desafio prático - Adicionar novo item
function adicionarItem() {
    const lista = document.getElementById('minhaLista');
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo item';
    lista.appendChild(novoItem);
}

// Adicionando alguns itens iniciais para demonstração
adicionarItem();
adicionarItem();

// Demonstração de navegação no DOM (Questão 8)
const item = document.querySelector('li');
if (item) {
    const pai = item.parentNode;
    const primeiroFilho = pai.children[0];
    const proximo = item.nextElementSibling;
    
    console.log('Elemento pai:', pai);
    console.log('Primeiro filho:', primeiroFilho);
    console.log('Próximo irmão:', proximo);
}