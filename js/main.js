$(document).ready(function(){
    $('.cadastrar-tarefa').on('click', function(){
        const nameTarefa = $('#nome-Tarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${nameTarefa}`
        $('ul').append(li)
        $('#nome-Tarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('done')
        })
    })
})