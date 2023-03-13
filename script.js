var filme1 = document.getElementById('f1');
var filme2 = document.getElementById('f2');
var filme3 = document.getElementById('f3');
var filme4 = document.getElementById('f4');
var filme5 = document.getElementById('f5');
var filme6 = document.getElementById('f6');

//filme 1
function entrar1(){
    if(filme1){
        filme1.src = 'midia/sinopse-adao-negro.png';
    }
}
function sair1(){
    if(filme1){
        filme1.src = 'midia/adaonegro.jpeg';
    }
}

//Filme 2
function entrar2(){
    if(filme1){
        filme2.src = 'midia/sinopseminions.png';
    }
}


function sair2(){
    if(filme1){
        filme2.src = 'midia/minions.jpeg';
    }
}

//Filme 3
function entrar3(){
    if(filme3){
        filme3.src = 'midia/sinopse-thor.png';
    }
}

function sair3(){
    if(filme3){
        filme3.src = 'midia/thor.jpeg';
    }
}

//Filme 4
function entrar4(){
    if(filme4){
        filme4.src = 'midia/sinopse-jungle.png';
    }
}

function sair4(){
    if(filme4){
        filme4.src = 'midia/jungle.jpeg';
    }
}

//Filme 5
function entrar5(){
    if(filme5){
        filme5.src = 'midia/sinopse-gato-de-botas.png';
    }
}

function sair5(){
    if(filme5){
        filme5.src = 'midia/gatodebotas.jpeg';
    }
}

//Filme 6
function entrar6(){
    if(filme6){
        filme6.src = 'midia/sinopse-pantera.png';
    }
}

function sair6(){
    if(filme6){
        filme6.src = 'midia/pantera.jpg';
    }
}

// Formulario

var nome = document.getElementById('nome');
var email = document.getElementById('email');
var telefone = document.getElementById('telefone');
var senha = document.getElementById('senha');

function valida(){
    if(nome.value.length == 0){
        alert('ERRO no nome');
        return false;
    }else{
        if(nome.value == senha.value){
            alert('ERRO nome nao poser igual a senha')
            return false;
        }else{
            if(telefone.value.length != 9){
                alert('Numero invalido');
            }else{
                return true;
            }
        }
    }
}  
/*
function valida(){
    if(document.getElementById('nome').value == ''){
        alert('Preencaha o campo do Nome');
        document.getElementById('nome').focus();
        return false;
    }
    if(document.getElementById('nome').value.length < 3){
        alert('Informe pelo menos 3 caracteres');
        document.getElementById('nome').focus();
        return false;
    }
return true;
}
*/
