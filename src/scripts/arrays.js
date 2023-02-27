const SocialMidia = ['Facebook','Instagram','Twitter'];

SocialMidia.forEach(function(name, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${name}`);
})

/* ============================================================================================================================================================================= */

const aluno = ["Ana", "Bruno", "Carla", "Daniel", "Eva", "Fábio", "Giovana", "Hugo","Isabela", "João", "Karla", "Lucas", "Mariana", "Nelson", "Olívia","Paulo", "Queila", "Ricardo", "Sofia", "Tiago", "Ulisses", "Vera","Wagner", "Ximena", "Yuri", "Zuleica"];

const alunos = aluno.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Front-end'
    }
})

console.log(alunos);

/* ============================================================================================================================================================================= */

const Lucas = alunos.find(function(item){
    return item.nome == 'Lucas'; // True or false
})

console.log(Lucas);

const LucasIndex = alunos.findIndex(function(item){
    return item.nome == 'Lucas'; // True or false
})

console.log(LucasIndex);

/* ============================================================================================================================================================================= */

alunos.push({
    nome: 'Carlao',
    curso: 'Back-end'
}) 

/* ============================================================================================================================================================================= */


const all = alunos.every(function(item){
    return item.curso === 'Front-end';
})

console.log(all);

/* ============================================================================================================================================================================= */


const exist = alunos.some(function(item){
    return item.curso === 'Back-end' && item.curso === 'Front-end';
})

console.log(exist);

/* ============================================================================================================================================================================= */

const FiltraMelhor = alunos => alunos.curso === 'Back-end';
const FiltraMelhor2 = (alunos, indice) => alunos.curso === 'Back-end';

function Filtra(alunos) {
    return alunos.curso === 'Back-end';
}

const alunosB = alunos.filter(Filtra);

console.log(alunosB);

/* ============================================================================================================================================================================= */


const nums = [10, 20, 30, 10, 24, 21, 98, 12, 98];

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

/* ============================================================================================================================================================================= */

const nomes = alunos.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '');

console.log(nomes);