"use strict";
function multi(numberA = 10, numberB = 20) {
    return numberA * numberB;
}
function sayHi(name) {
    return `Opa, ${name}`;
}
const resultMulti = multi(30, 45);
const hi = sayHi("Mauricio");
console.log(`O resultado da multiplicação é: ${resultMulti.toLocaleString('pt-BR', { style: 'decimal', currency: 'BRL' })}`);
console.log(hi);
