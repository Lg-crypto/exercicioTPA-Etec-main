const exercicio = ()=>{
    const age = parseInt(prompt("Digite sua idade:"));
    if (age < 0) {
        alert(" A idade deve ser um número positivo!");
    } else if ( age <= 12){
        alert(" Você é uma criança! ");
    } else if ( age <= 18){
        alert("Você é um adolescente");
    } else if (age <= 64){
        alert("Você é um adulto!");
    } else if (age <= 120){
        alert("Você é um idoso");
    } else {
        alert("Informe sua Idade CORRETA!")
    }
}