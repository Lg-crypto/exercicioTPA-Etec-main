const exercicio = ()=>{
    const p = document.querySelector("#p")
    p.innerHTML = "";
    for (let i = 0; i <= 10; i++) {
        p.innerHTML += i + " ";
    }
}