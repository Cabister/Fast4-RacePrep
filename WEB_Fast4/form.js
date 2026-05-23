//obtem o botao do formulario
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click",function(event){
event.preventDefault();

//captura o formulario
var form = document.querySelector("#frmContato");

//Verificar se o usuario preencheu e-mail ou telefone
if(form.email.value=='' && form.telefone.value==''){
    return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato.');
} else {
    //monte o texto de retorne
    msgRetorno=form.nomesobrenome.value + ", agredecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos"

    ////Abre a div de retorno
    document.getElementById('formRetorno').style.display="block";
    //efetua o retorno
    document.getElementById('textoRetorno').innerHTML=msgRetorno;
    //Fecha o formulario
    document.getElementById('formulario').style.display="none";
    return;
}

});
