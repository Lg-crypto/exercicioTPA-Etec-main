const exercicio = ()=>{
    const vetor = [];
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.round(Math.random()*897));
    }
    const valor = parseInt(prompt("Digite um valor que você deseja usar para comparar os elementos de um vetor"));
    const newVetor = vetor.filter((e)=>{
        if (e > valor) {
            return e;
        }
    });
    var array =[]
    for (let i = 0; i < 999; i++) {
        array.push(i)
    }
    alert(array)
    alert(newVetor);
}