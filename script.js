// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Inicia Funcion para ENCRIPTAR Texto

var encriptButton = document.querySelector("#encriptar");
function encriptar() {
    var texto = document.querySelector("#textoCampo").value;
    var validarTexto = /^[(a-z)+(0-9)+(\u00f1) ]*$/;
    // alert(validarTexto.test(texto)); 
    if (validarTexto.test(texto)) {
        var textoEncriptado = texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
        document.querySelector("#resultado").innerHTML = textoEncriptado;
    } else {
        alert("No se permiten mayúsculas, acentos ni caracteres especiales")
    }
}
encriptButton.onclick = encriptar;

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
}

desencriptButton.onclick = desencriptar;

// Termina Funcion para DESENCRIPTAR Texto


// Inicia Funcion para Copiar Texto

var btnCopiar = document.querySelector("#copiar");
function copiar() {
    var txtcopiar = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(txtcopiar);
    document.querySelector("#resultado").innerHTML = "";
    alert("Texto copiado");
    document.querySelector("#textoCampo").value = "";
}
btnCopiar.onclick = copiar;

// Termina Funcion para Copiar Texto
