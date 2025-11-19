"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    salario;
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach((func) => {
        const salarioInicial = func.getSalario();
        const salarioFinal = func.getSalario() + func.calcularBonus();
        console.log(`Funcionário: ${func.getNome()} | Salário inicial: R$ ${salarioInicial.toFixed(2)} | Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    });
}
const funcionarios = [
    new Gerente("Carlos", 5000),
    new Operario("Marcos", 2500),
    new Operario("Anronio", 2000),
    new Operario("Amanda", 1500)
];
calcularSalarioComBonus(funcionarios);
