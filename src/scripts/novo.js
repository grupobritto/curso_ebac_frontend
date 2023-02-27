function People(name, age) {
    this.name = name;
    this.age = age;
}

function Aluno(name, age, classroom) {
    this.name = name;
    this.age = age;
    this.classroom = classroom;

    this.Apresentar = function(){
        console.log(`Eu sou ${this.name}, tenho ${age} anos e estou na sala ${this.classroom}`)
    }

    People.call(this.name);
}

function Professor(name, age, matter) {
    this.name = name;
    this.age = age;
    this.matter = matter;

    this.Ensinar = function() {
        console.log(`Eu sou ${this.name}, tenho ${this.age} anos e leciono a matéria de ${this.matter}.`);
    }

    People.call(this.name);
}

//Aluno
const Joao = new Aluno('Joao', 12, 'A4');
const Maria = new Aluno('Maria', 16, 'B1');
const Jonas = new Aluno('Jonas', 13, 'C5');

//Professor
const Edvar = new Professor('Edvar', 41, 'Historia');

//Alunos
Joao.Apresentar();
Maria.Apresentar();
Jonas.Apresentar();

//Professor
Edvar.Ensinar();