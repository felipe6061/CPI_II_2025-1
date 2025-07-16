const nota1 = parseFloat(prompt("Nota da Prova 1 (Peso 2):"));
const nota2 = parseFloat(prompt("Nota da Prova 2 (Peso 3):"));
const nota3 = parseFloat(prompt("Nota da Prova 3 (Peso 5):"));

const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

if (media >= 7.0) {
    alert(`Média: ${media.toFixed(2)}\nAprovado!`);
} else {
    alert(`Média: ${media.toFixed(2)}\nReprovado!`);
}