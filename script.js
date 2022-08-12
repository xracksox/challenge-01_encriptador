// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Inicia Funcion para ENCRIPTAR Texto

// no mayusculas
// no caracteres especiales 




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



// Inicia Funcion para Copiar Texto

var copiarTexto = document.querySelector("#copiar");
function copiar() {
    var estomelocopias = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(estomelocopias);
    document.querySelector("#resultado").innerHTML = "";
    alert("Texto copiado");
}

copiarTexto.onclick = copiar;

// Termina Funcion para Copiar Texto
