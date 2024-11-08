//Selecionar elementos
const form = document.querySelector("#form-container");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#theme");
const mensagem = document.querySelector("#message");
const errorMessages = document.querySelectorAll(".error-message");
const btn = document.querySelector("button");

//Eventos

form.addEventListener("submit", (e) => {
    e.preventDefault();

    resetInputs();
    validateInputs();
})

//Funções

function setError(input, errorMessage){
    const errorMessageElement = input.nextElementSibling;//seleciona o proximo elemento depois do input, ou seja, a div .error-message
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add("error");
}

function resetInputs(){
    errorMessages.forEach((msg) => {
        msg.textContent = "";
    })
    nome.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    assunto.parentElement.classList.remove("error");
    mensagem.parentElement.classList.remove("error");
}

function validateInputs(){
    const nomeValue = nome.value.trim();//para tirar os espaços em branco
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    if(nomeValue === ""){
        setError(nome, "Nome não pode ficar em branco")
    }
    if(emailValue === ""){
        setError(email, "E-mail não pode ficar em branco")
    } else if(!isValidEmail(emailValue)){
        setError(email, "E-mail inválido")
    }
    if(assuntoValue === ""){
        setError(assunto, "Digite um tema")
    }
    if(mensagemValue === ""){
        setError(mensagem, "Digite sua mensagem")
    }
}

//fazer uma validação no formato do email digitado:
function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}