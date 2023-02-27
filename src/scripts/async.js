function Heavy() {
    var Exec = 0;

    for(var i = 0; i < 2000000000; i++) {
        Exec++
    }
    return Exec;
}

const FunctionHeavy = new Promise((success, unsuccessfully) => {
    try {
        var Exec = 0;

        for(var i = 0; i < 2000000000; i++) {
            Exec++
        }
        success(Exec);
    } catch(e) {
        unsuccessfully('Sem sucesso');
    }
})

const promiseParameters = (login, password) => {
    return new Promise((success, unsuccessfully) => {
        setTimeout(() => {
            success(`Logado com o usuario: ${login}`)
        }, 3000)
    })
}

async function mainExec() {
    console.log("----- Iniciando -----");

    promiseParameters('Mauricio@obritto.com', '123456').then(result => {
        console.log(result);
    });

    // await FunctionHeavy.then(result => console.log(result)).catch(erro => console.log(erro));
    const result = await FunctionHeavy;
    console.log(result);

    console.log("----- Fim -----");
}

mainExec();