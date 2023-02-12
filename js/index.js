const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="img/aprovado.png" alt="Aprovado" />'
const imgReprovado = '<img src="img/reprovado.png" alt="Reprovado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
    mediaNotes();
});

function addLine() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    };

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function updateTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
};

function mediaNotes() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
};

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };

    return somaDasNotas / notas.length;
};