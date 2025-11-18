class Veiculo{
    mover(): void{
        console.log("O veiculo esta se movendo");

    }
}

class Carro extends Veiculo{
    mover(): void {
        console.log("O carro esta e movendo");
    }
}

class Bicicleta extends Veiculo{
    mover(): void {
        console.log("A bicicleta esta se movendo");
    }
}

const carro1 = new Carro();
const bike1 = new Bicicleta();

carro1.mover();
bike1.mover();