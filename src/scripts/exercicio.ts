function multi(numberA: number = 10, numberB: number = 20): number {
    return numberA * numberB;
}

function sayHi(name: string): string {
    return `Opa, ${name}`
}

const resultMulti = multi(30, 45);
const hi = sayHi ("Mauricio");

console.log(`O resultado da multiplicação é: ${resultMulti.toLocaleString('pt-BR', { style: 'decimal', currency: 'BRL' })}`);
console.log(hi);