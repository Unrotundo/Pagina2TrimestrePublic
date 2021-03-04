
let nombre = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("password")
let form = document.getElementById("form")
let parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()/*Concretamente como podemos hacer para eliminar el comportamiento por defecto de un elemento html.*/
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(!regexPassword.test(pass.value)){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
