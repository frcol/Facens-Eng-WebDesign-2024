// Função que conta o número de vogais
function exercicio8(texto) {
    let textoMinusculo = texto.toLowerCase();
    let vogais = "aeiou";
    let contagem = 0;

    for (let i = 0; i < textoMinusculo.length; i++) {
        if (vogais.includes(textoMinusculo[i])) {
            contagem++;
        }
    }
    console.log("Número de vogais: " + contagem);
}

exercicio8("Fabio");
