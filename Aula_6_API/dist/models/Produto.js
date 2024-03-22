"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(_name, _desc, _price) {
        this._name = _name;
        this._desc = _desc;
        this._price = _price;
    }
    set setName(name) {
        this._name = name;
    }
    set setDesc(desc) {
        this._desc = desc;
    }
    set setPrice(price) {
        this._price = price;
    }
    get getName() {
        return this._name;
    }
    get getDesc() {
        return this._desc;
    }
    get price() {
        return this._price;
    }
}
exports.Produto = Produto;
