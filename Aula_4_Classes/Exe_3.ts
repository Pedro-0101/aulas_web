class Produto{
    private nome: string;
    private preco: number;
    private quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get getValorEmEstoque(): number{
        return this.preco * this.quantidadeEmEstoque;
    }

    set setReporEstoque(quant: number){
        this.quantidadeEmEstoque = this.quantidadeEmEstoque+quant;
        console.log(this.quantidadeEmEstoque);
    }

    set setVender(quant: number){
        if(this.quantidadeEmEstoque >= quant){
            this.quantidadeEmEstoque = this.quantidadeEmEstoque-quant;
            console.log(this.quantidadeEmEstoque);
        }else{
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