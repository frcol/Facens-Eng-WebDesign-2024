// Função para somar todos os elementos de um array:
const numeros = [10, 20, 30, 40, 50];

function soma(array) {
    let result = 0;
    
    for (let num of numeros) {
        result += num;
    }

    return result
}


console.log(soma(numeros));
