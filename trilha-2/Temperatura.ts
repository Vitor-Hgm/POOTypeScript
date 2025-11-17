class Temperatura {
    valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    paraFahrenheit(): number {
         return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 173.15;
    }


}

const temp = new Temperatura(25);
console.log(temp.paraFahrenheit(), temp.paraKelvin());
