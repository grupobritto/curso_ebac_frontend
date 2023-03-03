"use strict";
const alunos = [
    {
        nome: 'Mauricio',
        curso: ['Front-end', 'Back-end'],
        idade: 26
    },
    {
        nome: 'Jiovane',
        curso: ['Front-end', 'Back-end'],
        idade: 56
    }
];
alunos.push({
    nome: 'Julina',
    curso: ['Arquitetura'],
    idade: 23
});
const newAluno = {
    nome: 'Lucas',
    idade: 18,
};
function showAluno(aluno) {
    console.log(aluno.nome);
}
