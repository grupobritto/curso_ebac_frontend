document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');
    const local = document.querySelector('#local');

    fetch('https://api.github.com/users/grupobritto')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        username .innerText = json.login;
        avatar.src = json.avatar_url;
        repositorio.innerText = json.following;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.public_repos;
        link.innerText = json.html_url;
        local.innerText = json.location;
    })
})