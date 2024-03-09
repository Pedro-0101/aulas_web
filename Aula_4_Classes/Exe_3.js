"use strict";
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getValorEmEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
    set setReporEstoque(quant) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quant;
        console.log(this.quantidadeEmEstoque);
    }
    set setVender(quant) {
        if (this.quantidadeEmEstoque >= quant) {
            this.quantidadeEmEstoque = this.quantidadeEmEstoque - quant;
            console.log(this.quantidadeEmEstoque);
        }
        else {
            console.log("Erro: quantidade vendida é maior que a quantidade em estoque");
        }
    }
}
let produto1 = new Produto('Notebook', 10, 20);
console.log(produto1.getValorEmEstoque);
produto1.setReporEstoque = 5;
produto1.setVender = 10;
produto1.setVender = 10;
produto1.setVender = 10;
