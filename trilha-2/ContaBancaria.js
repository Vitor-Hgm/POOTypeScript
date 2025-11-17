"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    titular;
    saldo;
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const cliente1 = new ContaBancaria("Vitor", 0);
cliente1.depositar(10000);
console.log(cliente1.consultarSaldo());
cliente1.sacar(500);
console.log(cliente1.consultarSaldo());
//# sourceMappingURL=ContaBancaria.js.map