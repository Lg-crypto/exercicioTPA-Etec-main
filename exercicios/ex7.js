const exercicio = ()=>{
    let numeros = [];
    for (let i = 0; i < 5 ; i++){
        numeros[i] = prompt("digite um número");
    }
    numeros.sort(function (a,b){
        return a - b;
    })
    alert("O menor número inserido é : "+numeros[0])
    alert("O maior número inserido é : "+numeros[numeros.length-1])
}