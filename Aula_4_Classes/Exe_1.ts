class Carro_exe {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  
    exibirInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
    
    get GetIdade(): number {
        let date = new Date().getFullYear();
        return date - this.ano;
    }

  }
  
  let Carro1 = new Carro_exe("Toyota", "Corolla", 2020, "Prata");
  //console.log(Carro1.GetIdade)
  //meuCarro.exibirInfo();
    