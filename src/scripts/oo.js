//MAE
class Pokemo {
    #hp = 100;

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    attack(attackName) {
        console.log(`${this.name} usou o ${attackName}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    showHP() {
        console.log(this.#hp);
    }
}

//HERANCA
class Pikachu extends Pokemo {
    constructor() {
        super('Pikachu', 'Eletrico')
    }

    attack() {
        console.log(`${this.name} usou o choque de picaaaa`);
    }
}

const pikache = new Pikachu();
pikache.recebeuAtaque();
pikache.hp = 3000;
pikache.attack();
pikache.showHP();

console.log(pikache.hp);

const pikachu = new Pokemo('Pikachu', 'Eletrico');
//pikachu.attack('Choque do Trovao');

console.log(pikachu);
console.log(pikache);