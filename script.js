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
    
    var textoAprocess = texto.split("");
    for (let i = 0; i < textoAprocess.length; i++) {
        textoAprocess[i] = textoAprocess[i].replace("e", "enter")
        textoAprocess[i] = textoAprocess[i].replace("i", "imes")
        textoAprocess[i] = textoAprocess[i].replace("a", "ai")
        textoAprocess[i] = textoAprocess[i].replace("o", "ober")
        textoAprocess[i] = textoAprocess[i].replace("u", "ufat")
    }
    document.querySelector("#resultado").innerHTML = textoAprocess;
    var textoResultado = textoAprocess.join("");
    document.querySelector("#resultado").innerHTML = textoResultado;
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

// function desencriptar() {
//     let textoEncriptado = textoIngresado.value.toLowerCase();
//     let texto = textoEncriptado
//         .replaceAll("enter", "e")
//         .replaceAll("imes", "i")
//         .replaceAll("ober", "o")
//         .replaceAll("ai", "a")
//         .replaceAll("ufat", "u");