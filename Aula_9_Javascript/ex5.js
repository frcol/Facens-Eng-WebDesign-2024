// Imprimir números de 1 a 10 separados por traço
let resultado = "";

for (let i = 1; i <= 10; i++) {
    resultado += i;
    if (i < 10) {
        resultado += " - ";
    }
}
console.log(resultado);