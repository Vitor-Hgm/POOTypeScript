abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome:string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario{
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario{
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((func) => {
    const salarioInicial = func.getSalario();
    const salarioFinal = func.getSalario() + func.calcularBonus();
    console.log(
      `Funcionário: ${func.getNome()} | Salário inicial: R$ ${salarioInicial.toFixed( 2 )} | Salário Final: R$ ${salarioFinal.toFixed( 2 )}`
    );
  });
}

const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("Marcos", 2500),
    new Operario("Anronio", 2000),
    new Operario("Amanda", 1500)
];

calcularSalarioComBonus(funcionarios);