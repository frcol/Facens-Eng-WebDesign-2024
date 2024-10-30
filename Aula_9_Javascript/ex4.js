// Gerar email com base no nome
let nome = "Fabio Rodrigo Colombini";
let partes = nome.split(" ");
let primeiroNome = partes[0].toLowerCase();
let ultimoNome = partes[partes.length - 1].toLowerCase();

let email = primeiroNome+ "." + ultimoNome + "@facens.br";
let email2 = `${primeiroNome}.${ultimoNome}@facens.br"`;

console.log("Email gerado: " + email);