const x = 3;

let nome1 = "João";
let idade = 51;
let ativo = true;
ativo = false;

let sobrenome;
let myNumber = Number("asd");
let result = 3/0;

let num1 = 10;
let num2 = 2.5;

let myArray = [1, 2, 3, 4, 5];
let nomes = ["João", "Maria", "José"];

let Pessoa = {
    nome: "João",
    idade: 51,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 10
    }
};

let myFunction = null;

// =========================================
const peso1 = 1;
const peso2 = 2.1;

// console.log(peso1);
// console.log(Number.isInteger(peso1));

// console.log(peso2);
// console.log(Number.isInteger(peso2));

// const avaliacao1 = 9.45;
// const avaliacao2 = 6.456;
// const total = avaliacao1 * peso1 + avaliacao2 * peso2;
// const media = total / (peso1 + peso2);

// console.log(media.toFixed(1)); //toFixed fixa a quantidade de casas após a vírgula
// console.log(media.toString());
// console.log(typeof media);

// //number com n minúsculo é um tipo e com N maiúsculo é uma função
// console.log(typeof Number);

// =========================================
const nome = "Fábio";

//console.log(nome.charAt(3));
// console.log(nome.charCodeAt(3));
// console.log(nome.replace("bi", "XX"));
 console.log(nome.length);
 console.log(nome.endsWith("n"));
 console.log(nome.indexOf("b"));
 console.log(nome.substring(0, 3));
 console.log(nome.toLocaleUpperCase());
 console.log("Ana,Maria,José".split(","));
 console.log(nome.concat(' Rodrigo '.concat('Colombini')));
 if (nome.includes("i")) { }

 // =========================================

 let valor = 100;
 console.log(`O ${nome} tem ${valor} reais.`);

 // =========================================
 function soma(a, b) {
     return a + b;
 }

let resultado = soma(2, 3);
console.log(resultado); 

// Função anônima
let dobro = function(a) {
    return 2 * a;
}

console.log(dobro(5));