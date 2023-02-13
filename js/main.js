$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 0-0000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            CPF: {
                required: true,
            },
            endereco: {
                required: true,
            },
            CEP: {
                required: true,
            }
        },
        messages: {
            nomeCompleto: 'Insira seu nome completo',
            email: 'Insira o e-mail corretamente',
            telefone: 'Insira um telefone celular',
            CPF: 'Insira seu CPF',
            endereco: 'Insira o endereço completo',
            CEP: 'Insira seu CEP ou <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank"> consulte um aqui</a>',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Atenção ${camposIncorretos} campos necessitam de sua atenção.`)
            }
        }
    })
})
