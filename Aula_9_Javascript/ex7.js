// Função que inverte uma string
function exercicio7(texto) {
    //let textoInvertido = texto.split("").reverse().join("");

    let textoInvertido = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    console.log(textoInvertido);
}

exercicio7("Exemplo");
