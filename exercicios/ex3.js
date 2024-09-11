const exercicio = ()=>{
    let numero = parseInt(prompt("Digite um número de 1 a 7 para obter o dia da semana correspondente:"), 10);

    let diaSemana;

    switch (numero) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Segunda-feira";
            break;
        case 3:
            diaSemana = "Terça-feira";
            break;
        case 4:
            diaSemana = "Quarta-feira";
            break;
        case 5:
            diaSemana = "Quinta-feira";
            break;
        case 6:
            diaSemana = "Sexta-feira";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
        default:
            diaSemana = "Número inválido. Por favor, insira um número de 1 a 7.";
            break;
    }
    alert(diaSemana);

}