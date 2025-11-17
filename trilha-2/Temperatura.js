"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return (this.valor * 9 / 5) + 32;
    }
    paraKelvin() {
        return this.valor + 173.15;
    }
}
const temp = new Temperatura(25);
console.log(temp.paraFahrenheit(), temp.paraKelvin());
//# sourceMappingURL=Temperatura.js.map