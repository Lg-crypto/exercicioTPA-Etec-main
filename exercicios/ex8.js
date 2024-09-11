function encontrarMedia(vetor) {
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i];
    }
    let media = soma / vetor.length;
    return media;
}
function criarVetor(qtdItens){
    let vetor = [];
    for(let i = 0; i < qtdItens; i++){
        vetor[i] = parseInt(prompt("digite o valor "+(i+1)));
    }
    return vetor;
}
const exercicio = ()=>{
    let quantidade = parseInt(prompt("digite a quantidade de valores que deseja informar"));
    const array = criarVetor(quantidade);
    alert(encontrarMedia(array));
}