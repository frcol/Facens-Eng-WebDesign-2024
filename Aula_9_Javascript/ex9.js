// Verificar se o email é válido
function exercicio9(email) {
    let partes = email.split("@");
    
    if (partes.length === 2 && partes[1].includes(".")) {
        console.log(true);
    } else {
        console.log(false);
    }
}

exercicio9("usuario@dominio.com");
