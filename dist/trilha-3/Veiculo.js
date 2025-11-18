"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    mover() {
        console.log("O veiculo esta se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro esta e movendo");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta esta se movendo");
    }
}
const carro1 = new Carro();
const bike1 = new Bicicleta();
carro1.mover();
bike1.mover();
