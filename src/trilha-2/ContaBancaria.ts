class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser positivo.");
      return;
    }
    this.saldo += valor;
  }

  sacar(valor: number): void {
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

consultarSaldo(): number {
  return this.saldo;
}



}

const cliente1 = new ContaBancaria("Vitor", 0)
cliente1.depositar(10000);
console.log(cliente1.consultarSaldo())

cliente1.sacar(500);

console.log(cliente1.consultarSaldo())