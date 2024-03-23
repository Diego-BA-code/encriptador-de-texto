const avisoEntradas = document.getElementById('aviso-entradas');
const avisoSinContenido = document.getElementById('aviso-sin-contenido');
const avisoResultado = document.getElementById('aviso-resultado');
const campoResultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');

function verificarCaracteres(texto, resultado){
    if (!/^[a-z]+$/.test(texto)) {
        // Si tiene mayúsculas se cambia el background del aviso a rojo
        avisoEntradas.style.backgroundColor = "red";
        avisoEntradas.style.transition = "1s";
        // Después de dos segundos el color del background empieza a quitarse
        setTimeout(function resetBackground() {
            avisoEntradas.style.backgroundColor = "";
            avisoEntradas.style.transition = "3s";
        }, 2000);
    } else {
        avisoSinContenido.style.display = "none";
        avisoResultado.style.display = "flex";
        mensaje.value = "";
        campoResultado.value = resultado;
    }
}
function encriptar() {
    // Obtener el valor de entrada
    let textoSinEncriptar = mensaje.value;
    // Remplazar ciertos caracteres del mensaje
    let resultado = textoSinEncriptar.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    // Si ingresa mayúsculas se resalta el aviso y no se procesa su mensaje
    verificarCaracteres(textoSinEncriptar, resultado);
}

function desencriptar() {
    //obtener el valor del texto encriptado
    let textoEncriptado = mensaje.value;
    let resultado = textoEncriptado.replace(/imes/g, 'i').replace(/u/g, 'ufat').replace(/enter/g, 'e').replace(/ai/g, 'a').replace(/ober/g, 'o');
    verificarCaracteres(textoEncriptado, resultado);
}
