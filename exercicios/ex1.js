const exercicio = ()=>{
    const numero = parseInt(prompt("Digite um numero :"));
    if (numero < 0) {
        alert("O número é negativo!");
    } else if(numero > 0){
        alert("O número é positivo!");
    }else{
        alert("O número 0 é neutro!");
    }
}