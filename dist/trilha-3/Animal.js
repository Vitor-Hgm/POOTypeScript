"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    energia;
    constructor(energia) {
        this.energia = energia;
    }
    comer(valor = 0) {
        this.energia += valor;
    }
    gastarEnergia(valor) {
        this.energia -= valor;
        if (this.energia < 0)
            this.energia = 0;
    }
    statusEnergia() {
        console.log(`Enrgia atual: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        console.log("O leão esta caçando zebras");
        this.gastarEnergia(30);
        super.comer(20);
        console.log("O Leão comeu apos caçar ");
    }
}
class Passaro extends Animal {
    comer() {
        console.log("O passaro esta comendo alpiste");
        super.comer(10);
    }
}
function alimentarAnimais(animais) {
    animais.forEach((animal, index) => {
        console.log(`\nAnimal ${index + 1}:`);
        animal.comer();
        animal.statusEnergia();
    });
}
const animais = [
    new Leao(70),
    new Passaro(30),
    new Leao(50),
    new Passaro(15),
];
alimentarAnimais(animais);
