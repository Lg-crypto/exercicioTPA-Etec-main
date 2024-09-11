const exercicio = ()=>{
    const numeros = [];
    let i = 0;
    let soma = 0;
    do {
        numeros.push(parseInt(prompt("Digite um número (0 para parar)")));
        i++;
    } while (numeros[i-1] !== 0);
    numeros.forEach((n)=>{
        soma += n;
    })
    alert("a doma de todos os números digitados é " + soma);
}