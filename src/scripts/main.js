$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const button = $(this); 

        $(button).find('i').addClass('d-none');
        $(button).find('span').removeClass('d-none');

        fetch(endpoint).then(function(resposta) {
            return resposta.json();
        }).then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

        }).catch(function(erro) {
            alert("Ocorreu um erro ao buscar o CEP.")

        }).finally(function() {
            setTimeout(function() {
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            }, 1000);
        })
    })

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length == 0) {
            throw new Error('Digite o nome');
        }
    })
})