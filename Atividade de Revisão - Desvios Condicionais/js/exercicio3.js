 const num1 = parseFloat(prompt("Digite o primeiro número:"));
        const num2 = parseFloat(prompt("Digite o segundo número:"));
        
        const soma = num1 + num2;
        let resultado;
        
        if (soma > 20) {
            resultado = soma + 8;
        } else {
            resultado = soma - 5;
        }
        
        alert(`Resultado: ${resultado}`);