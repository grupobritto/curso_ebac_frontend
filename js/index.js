const form = document.getElementById('form-atividade');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
});

function addLine() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if(nome.includes(inputNome.value)) {
        alert(`Contato: ${inputNome.value} já foi inserido`)
    } else {
        nome.push(inputNome.value);
        telefone.push(parseFloat(inputTelefone.value));
        
        let linha = '<tr>';
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${inputTelefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    };

    inputNome.value = '';
    inputTelefone.value = '';
};

function updateTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
};