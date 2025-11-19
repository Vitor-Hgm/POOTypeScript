class Animal {
    private energia: number;
    constructor(energia: number){
        this.energia = energia;
    }
    
    comer(valor: number = 0): void {
        this.energia += valor;
    }

    protected gastarEnergia(valor: number): void {
        this.energia -= valor;
        if (this.energia < 0) this.energia = 0;
    }

    statusEnergia(): void {
        console.log(`Enrgia atual: ${this.energia}`)
    }
}

class Leao extends Animal {
    comer(): void{
        console.log("O leão esta caçando zebras");
        this.gastarEnergia(30);
        super.comer(20);
        console.log("O Leão comeu apos caçar ")
    }
}
class Passaro extends Animal {
    comer(): void {
        console.log("O passaro esta comendo alpiste");
        super.comer(10);
    }
}

function alimentarAnimais(animais: Animal[]): void {
  animais.forEach((animal, index) => {
    console.log(`\nAnimal ${index + 1}:`);
    animal.comer();
    animal.statusEnergia();
  });
}

const animais: Animal[] = [
  new Leao(70),
  new Passaro(30),
  new Leao(50),
  new Passaro(15),
];

alimentarAnimais(animais);

