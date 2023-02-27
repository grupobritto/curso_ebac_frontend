const myFunction = () => "Diz ola";

const retornaCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Forde'
});

console.log(myFunction());
console.log(retornaCarro);

const carro = {
    currentVelocity: 230,
    acelerate: function(){
        console.log(this);
        this.currentVelocity += 10;
    },
    reduce: () => {
        console.log(this);
        this.currentVelocity -+ 10;
    }
}

carro.acelerate();
carro.reduce();

console.log(carro.currentVelocity);