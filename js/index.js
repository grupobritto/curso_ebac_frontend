const form = document.getElementById('valid-form');

formvalid = false;

function numbervalid (nA, nB){
    return nB > nA;
}

form.addEventListener('submit',function(e){
    let nA = parseFloat(document.getElementById('nA').value);
    let nB = parseFloat(document.getElementById('nB').value);

    e.preventDefault();
    const messagesucess = `O valor B é maior que A. Parabéns!` 

    formvalid = numbervalid(nA,nB);
    
    if (formvalid){              
        alert(messagesucess);

        nA.value = '';
        nB.value = '';
    }
    else{
        alert(' O valor B precisa ser maior que o valor A!');
    }
});
