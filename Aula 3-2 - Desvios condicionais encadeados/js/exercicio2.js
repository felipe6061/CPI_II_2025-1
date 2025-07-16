 const sigla = prompt("Digite a sigla do seu estado (ex: RJ, SP, MG):").toUpperCase();
        
        switch(sigla) {
            case 'RJ':
                alert("Carioca");
                break;
            case 'SP':
                alert("Paulista");
                break;
            case 'MG':
                alert("Mineiro");
                break;
            default:
                alert("Outros estados");
        }