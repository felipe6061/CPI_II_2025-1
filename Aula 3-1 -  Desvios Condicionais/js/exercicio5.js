  const salario = parseFloat(prompt("Digite o salário:"));
        let novoSalario;
        
        if (salario <= 300) {
            novoSalario = salario * 1.15;
        } else {
            novoSalario = salario * 1.10;
        }
        
        alert(`Salário reajustado: R$${novoSalario.toFixed(2)}`);