"use strict";
// funcao nomeada
function adicionar(x, y) {
    return x + y;
}
let resultado = adicionar(1, 2);
//console.log(adicionar(1, 2), resultado)
// funcao anonima
let add = function (x, y) { return (x + y); };
//Funções com tipos
function adicionarTipada(x, y) {
    return x + y;
}
function somarTipada(p1, p2) {
    let p = { x: p1.x + p2.x, y: p1.y + p2.y };
    return p;
}
let ponto_1 = { x: 1, y: 5 };
let ponto_2 = { x: 10, y: 20 };
let ponto3 = somar(ponto_1, ponto_2); // retorna {x: 11, y: 25}
//Parâmetros opcionais e padrões
function nome(primeiro, ultimo) {
    if (ultimo) {
        return `${primeiro} ${ultimo}`;
    }
    else {
        return primeiro;
    }
}
nome('José', 'Silva'); // retorna 'José Silva'
nome('José'); // retorna 'José'
function inicializar(valor = 0) {
    return valor;
}
inicializar(); // retorna 0
inicializar(10); // retorna 10
//Parâmetros rest
//Não confundir com REST, recurso para definição de serviços sobre HTTP
function concatenar(primeiro, ...ultimos) {
    return primeiro + ' ' + ultimos.join(' ');
}
concatenar('a', 'b', 'c', 'd', 'e'); // retorna 'a b c d e';
function somar(p1, p2) {
    if (p1 instanceof Array) {
        return [p1[0] + p2[0], p1[1] + p2[1]];
    }
    else {
        return { x: p1.x + p2.x, y: p1.y + p2.y };
    }
}
let ponto1 = { x: 1, y: 5 };
let ponto2 = { x: 10, y: 20 };
somar(ponto1, ponto2); // retorna {x: 11, y: 25}
somar([1, 1], [2, 2]); // retorna [3, 3]
//let operacao = prompt("Digite a operacao que deseja realizar: Soma, Subtracao, Multiplicacao, Divisao")
let num1; // = prompt("Digite o primeiro numero")
let num2; // = prompt("Digite o segundo numero")
num1 = 10;
num2 = 20;
//console.log("O resultado é: ", calculadora(num1, num2, operacao))
function calculadora(num1, num2, op) {
    switch (op) {
        case "Soma":
            return num1 + num2;
            break;
        case "Subtracao":
            return num1 - num2;
            break;
        case "Multiplicacao":
            return num1 * num2;
            break;
        case "Divisao":
            return num1 / num2;
            break;
        default:
            console.log("Opcao invalida");
            return 0;
            break;
    }
}
/*
Exercício 1: Calculadora Simples
Crie uma função chamada calculadora que recebe três parâmetros:
numero1 (um número), numero2 (um número) e operacao (uma string representando a operação a ser realizada: "soma", "subtracao", "multiplicacao" ou "divisao").
A função deve retornar o resultado da operação entre numero1 e numero2.

Resultado esperado:
console.log(calculadora(5, 3, "soma")); // Saída esperada: 8
console.log(calculadora(10, 2, "subtracao")); // Saída esperada: 8
console.log(calculadora(4, 5, "multiplicacao")); // Saída esperada: 20
console.log(calculadora(10, 2, "divisao")); // Saída esperada: 5

Dica:
Estrutura switch-case
switch(expression) {
   case constant-expression1: {
      //statements;
      break;
   }
   case constant_expression2: {
      //statements;
      break;
   }
   default: {
      //statements;
      break;
   }
}

*/
/*
Exercício 2: Verificador de Palíndromo
Crie uma função chamada verificarPalindromo que recebe uma string como parâmetro e retorna verdadeiro se a string for um palíndromo
(ou seja, se ela é lida da mesma forma da esquerda para a direita e da direita para a esquerda) e falso caso contrário.

Resultado esperado:
console.log(verificarPalindromo("arara")); // Saída esperada: true
console.log(verificarPalindromo("reviver")); // Saída esperada: true
console.log(verificarPalindromo("banana")); // Saída esperada: false
console.log(verificarPalindromo("reconhecer")); // Saída esperada: true

Dica:
let frase: string = "Ana"
const fraseInverso = frase.split('').reverse().join('');

let frase: string = "teste";

verificarPalindromo(frase)

function verificarPalindromo(frase: string){
    let fraseInv:string
    fraseInv = frase.split('').reverse().join('')

    if(frase == fraseInv){
        console.log("Palindromo")
    } else{
        console.log("Nao")
    }
}

*/
function maiorNum(...val) {
    return Math.max.apply(null, val);
}
function ePar(val) {
    if (val % 2 == 1) {
        console.log("O numero " + val + " é impar");
        return false;
    }
    else {
        console.log("O numero " + val + " é par");
        return true;
    }
}
function calcMedia(val) {
    let soma = 0;
    for (let i = 0; val[i] != null; i++) {
        soma += val[i];
    }
    return soma / val.length;
}
function caixaAlta(frase) {
    let fraseUp = frase.toUpperCase();
    return fraseUp;
}
function ePrimo(num) {
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
function inverte(vetor) {
    return vetor.reverse();
}
function porcentagem(valor, porc) {
    return (valor + (valor * (porc / 100)));
}
//console.log(maiorNum(1,2,3,4,5,5,6,7,8,9))
//ePar(32);
//console.log(calcMedia([2,2]))
//console.log(caixaAlta("frase"))
/*if(ePrimo(30)){
    console.log("é primo")
}else{
    console.log("nao e primo")
}*/
//console.log(inverte([1,2,3,4,5,6]))
console.log(porcentagem(100, 50));
