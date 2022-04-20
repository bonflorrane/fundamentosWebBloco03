/* declaraçao de variáveis
var: escopo global (var acessado em todo código)
let: escopo local (boa prática)
const: constante
*/

/* Pode também ser acesso por:
Case Sensitive = reconhece letrar maiúsculas e minúsculas nas palavras reservadas

 Tag: getElementByTagName()
 Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector() (melhor prática)
*/

//valiar nome email assunto
let nome = window.document.getElementById("nome") // variavel nome recebeu o acesso ao input nome
let email = window.document.querySelector("#email")//"input#email" 
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")// pegou div id Nome
    if(nome.value.length < 3){
        txtNome .innerHTML = "Nome Inválido"
        txtNome .style.color = "red"
    }else{
        txtNome .innerHTML = "Nome Válido"
        txtNome .style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail .innerHTML = "E-mail Válido"
        txtEmail .style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Prencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom(){
   mapa.style.width = "800px"
   mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}