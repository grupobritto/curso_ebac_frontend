type aluno = {
    nome: string;
    curso?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: 'Julina',
    curso: ['Arquitetura'],
    idade: 23
})

const newAluno: aluno = {
    nome: 'Lucas',
    idade: 18,
}

function showAluno(aluno: aluno) {
    console.log(aluno.nome);
}