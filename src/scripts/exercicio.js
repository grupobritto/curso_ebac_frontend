const alunos = [
    {name: "Ana", note: 2}, 
    {name: "Bruno", note: 7}, 
    {name: "Carla", note: 10}, 
    {name: "Daniel", note: 3}, 
    {name: "Eva", note: 7}, 
    {name: "Fábio", note: 8}, 
    {name: "Giovana", note: 5}, 
    {name: "Hugo", note: 2}, 
    {name: "Isabela", note: 1}, 
    {name: "João", note: 9}, 
    {name: "Karla", note: 10}, 
    {name: "Lucas", note: 5}, 
    {name: "Mariana", note: 4}, 
    {name: "Nelson", note: 4}, 
    {name: "Olívia", note: 3},
    {name: "Paulo",  note: 7}, 
    {name: "Queila", note: 4}, 
    {name: "Ricardo", note: 9}, 
    {name: "Sofia", note: 8}, 
    {name: "Tiago", note: 10}, 
    {name: "Ulisses", note: 0}, 
    {name: "Vera", note: 0}, 
    {name: "Wagner", note: 2}, 
    {name: "Ximena", note: 6}, 
    {name: "Yuri", note: 2}, 
    {name: "Roberto", note: 7}, 
    {name: "Mateus", note: 2}, 
    {name: "Igor", note: 5}, 
    {name: "Liliane", note: 10}, 
    {name: "Tamilis", note: 9}, 
    {name: "Felipe", note: 4}, 
    {name: "Vanessa", note: 7}, 
    {name: "Pedro", note: 8}, 
    {name: "Maria Clara", note: 1}, 
    {name: "Ana Julia", note: 9}, 
    {name: "Herim", note: 0}, 
    {name: "Wumior", note: 4}, 
    {name: "Foasgey", note: 3}, 
    {name: "Madao", note: 6}, 
    {name: "Gilweadan", note: 6}, 
    {name: "Xaomefle", note: 7}, 
    {name: "Nurerrak", note: 5}, 
    {name: "Gofyo", note: 1}, 
    {name: "Tuorgea", note: 9}, 
    {name: "Usmerond", note: 8}, 
    {name: "Urimrn", note: 7}, 
    {name: "Huxua", note: 9}, 
    {name: "Liros", note: 1}, 
    {name: "Xugen", note: 0}, 
    {name: "Ishedir", note: 0}, 
    {name: "Piar", note: 3}, 
    {name: "Felanay", note: 5}, 
    {name: "Pituli", note: 1}, 
    {name: "Annuthalion", note: 6}, 
    {name: "Zuleica", note: 10}

    //https://www.4devs.com.br/gerador_de_nomes
];

const verifyIndex = alunos.map(function(item){
    return item.note >= 6;
})

const verifyNote = alunos.filter(function(item){
    return item.note >= 6;
})

console.log(verifyIndex);
console.log(verifyNote);