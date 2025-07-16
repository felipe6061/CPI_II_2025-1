     const altura = parseFloat(prompt("Digite a altura (em metros):"));
        const sexo = prompt("Digite o sexo (M/F):").toUpperCase();
        
        let pesoIdeal;
        
        if (sexo === 'M') {
            pesoIdeal = (72.7 * altura) - 58;
        } else if (sexo === 'F') {
            pesoIdeal = (62.1 * altura) - 44.7;
        } else {
            alert("Sexo inválido!");
            throw new Error("Entrada inválida");
        }
        
        alert(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);