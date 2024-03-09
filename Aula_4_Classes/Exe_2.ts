class Calculadora {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

    get getSoma(): number{
        return this.num1 + this.num2;
    }

    get getSub(): number{
        return this.num1 - this.num2;
    }

    get getMult(): number{
        return this.num1 * this.num2;
    }

    get getDiv(): number{
        if(this.num2 == 0){
            return 0;
        }else{
            return this.num1 / this.num2;
        }
    }

    get getPor(): number{
        return this.num1 / (this.num2/100);
    }

}

let dadosTeste = new Calculadora(10, 1)

/*
console.log(dadosTeste.getSoma);
console.log(dadosTeste.getSub);
console.log(dadosTeste.getMult);
console.log(dadosTeste.getDiv);
console.log(dadosTeste.getPor);
*/