export class Produto{
    private _name: string;
    private _desc: string;
    private _price: number;

    constructor (_name: string, _desc: string, _price: number){
        this._name = _name;
        this._desc = _desc;
        this._price = _price;
    }

    public set setName(name: string) {
        this._name = name;
    }

    public set setDesc(desc: string) {
        this._desc = desc;
    }

    public set setPrice(price: number) {
        this._price = price;
    }

    public get getName(){
        return this._name;
    }

    public get getDesc(){
        return this._desc;
    }

    public get price(){
        return this._price;
    }
}