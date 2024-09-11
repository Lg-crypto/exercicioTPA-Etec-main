const exercicio = ()=>{
    const palavras = [
        'abacaxi', 'bola', 'cachorro', 'dado', 'elefante', 'futebol', 'gato', 'hotel', 'iguana', 'jacare',
        'kiwi', 'leão', 'macaco', 'navio', 'ocelote', 'pato', 'quadro', 'rato', 'sapato', 'tigre',
        'urso', 'vaca', 'wolverine', 'xaxim', 'yeti', 'zebra', 'abacate', 'bola', 'cachorro', 'dado',
        'elefante', 'futebol', 'gato', 'hotel', 'iguana', 'jacare', 'kiwi', 'leão', 'macaco', 'navio',
        'ocelote', 'pato', 'quadro', 'rato', 'sapato', 'tigre', 'urso', 'vaca', 'wolverine', 'xaxim',
        'yeti', 'zebra'
      ];
    const palavra = prompt("digite uma palavra");
    let contagem = 0;
    for (let i = 0; i < palavras.length; i++) {
        const  p = palavras[i];
        if (p === palavra) {
            contagem++;
        }  
    }
    if (contagem) {
        alert(`A palavra "${palavra}" aparece ${contagem} vezes no vetor.`);
    }else {
        alert(`A palavra "${palavra}" não aparece no vetor.`)
    }
}