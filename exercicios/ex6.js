const exercicio = ()=>{
    const randomNumber = Math.round(Math.random()*10);
    let resposta = "";
    let tentativas = 5;
    do {
        resposta = parseInt(prompt("Tente adivinhar o número secreto entre 0 e 10 \nRestam "+tentativas+" tentativas"));
        tentativas--;
        if (resposta > randomNumber){
            alert(resposta + " é maior que o número");
        }else if(resposta < randomNumber){
            alert(resposta + " é menor que o número");
        } else if(resposta === randomNumber){
            alert("Parabéns! Você acertou!");
            break;
        }
        if(tentativas === 0){
            alert("Você perdeu!\n:(")
            break;
        }
        
        
    } while (resposta !== randomNumber);
}
