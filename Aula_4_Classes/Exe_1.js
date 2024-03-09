"use strict";
class Carro_exe {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
    get GetIdade() {
        let date = new Date().getFullYear();
        return date - this.ano;
    }
}
let Carro1 = new Carro_exe("Toyota", "Corolla", 2020, "Prata");
//console.log(Carro1.GetIdade)
//meuCarro.exibirInfo();
