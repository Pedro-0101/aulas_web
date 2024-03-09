"use strict";
class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get getSoma() {
        return this.num1 + this.num2;
    }
    get getSub() {
        return this.num1 - this.num2;
    }
    get getMult() {
        return this.num1 * this.num2;
    }
    get getDiv() {
        if (this.num2 == 0) {
            return 0;
        }
        else {
            return this.num1 / this.num2;
        }
    }
    get getPor() {
        return this.num1 / (this.num2 / 100);
    }
}
let dadosTeste = new Calculadora(10, 1);
console.log(dadosTeste.getSoma);
console.log(dadosTeste.getSub);
console.log(dadosTeste.getMult);
console.log(dadosTeste.getDiv);
console.log(dadosTeste.getPor);
