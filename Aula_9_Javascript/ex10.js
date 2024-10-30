// Verificar se a string é um palíndromo
function inverteTexto(texto) {
   let textoInvertido ="";

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

function exercicio10(texto) {
    // let textoInvertido = texto.split("").reverse().join("");
    let textoInvertido = inverteTexto(texto);

    if (texto === textoInvertido) {
        console.log(texto + " é um palíndromo.");
    } else {
        console.log(texto + " não é um palíndromo.");
    }
}

exercicio10("arara");
