//REST

function somarRest(...numeros){
    const soma = numeros.reduce((total, numeroatual) => {
        total += numeroatual;
        return total;
    }, 0)
    return soma;
}

console.log(somarRest(11, 22, 33));

//SPREAD
const numbers = [1, 2, 3, 4];
console.log(...numbers);

const timesS = ['Santos', 'Palmeiras', 'Sao Paulo'];
const timesJ = ['Vasco', 'Flamento', 'Fluminence'];

const Times = [...timesS, ...timesJ];
console.log(Times);

const carroJulia = {
    modelo: 'Gol',
    marca: 'vw',
    potencia: 1.6
}

const carroAna = {
    ...carroJulia,
    potencia: 1.8
}

console.log(carroAna);

//DESESTRUTURACAO

const {potencia: carroDaAna} = carroAna;
const {potencia: carroDaJulia} = carroJulia;

console.log(carroDaAna);
console.log(carroDaJulia);

const [item1, item2, item3, ...outros] = Times;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outros);