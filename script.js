// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Inicia Funcion para ENCRIPTAR Texto

var encriptButton = document.querySelector("#encriptar");
var errormsg = document.querySelector("#error_msg");
var noMsg = document.querySelector("#nomsg");
var msg = document.querySelector("#msg");
var copymsg = document.querySelector("#copy_msg")

function encriptar() {
    var texto = document.querySelector("#textoCampo").value;
    var validarTexto = /^[(a-z)+(0-9)+(\u00f1)+(\s) ]*$/;
    // alert(validarTexto.test(texto)); 
    if (validarTexto.test(texto)) {
        var textoEncriptado = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
        document.querySelector("#resultado").innerHTML = textoEncriptado;
        document.querySelector("#textoCampo").value = "";
        errormsg.className = "error__input--hide";
        noMsg.className = "resultado__no-msg--hide";
        msg.className = "resultado__msg";
        copymsg.className = "copy__input--hide";
    } else {
        // alert("No se permiten mayúsculas, acentos ni caracteres especiales")
        copymsg.className = "copy__input--hide";
        errormsg.className = "error__input";
    }
}
encriptButton.addEventListener('click', encriptar);

// Termina Funcion para ENCRIPTAR Texto


// Inicia Funcion para DESENCRIPTAR Texto

var desencriptButton = document.querySelector("#desencriptar");
function desencriptar() {
    var texto = document.querySelector("#textoCampo").value;
    var textoDesencriptado = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")
    document.querySelector("#resultado").innerHTML = textoDesencriptado;
    document.querySelector("#textoCampo").value = "";
    noMsg.className = "resultado__no-msg--hide";
    msg.className = "resultado__msg";
    copymsg.className = "copy__input--hide";
}

desencriptButton.addEventListener('click', desencriptar);

// Termina Funcion para DESENCRIPTAR Texto


// Inicia Funcion para Copiar Texto

var btnCopiar = document.querySelector("#copiar");
function copiar() {
    var txtcopiar = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(txtcopiar);
    document.querySelector("#resultado").innerHTML = "";
    msg.className = "resultado__msg--hide";
    noMsg.className = "resultado__no-msg";
    copymsg.className = "copy__input";
    // alert("Texto copiado");
}
btnCopiar.addEventListener('click', copiar);

// Termina Funcion para Copiar Texto
