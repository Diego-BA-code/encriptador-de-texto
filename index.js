const avisoEntradas = document.getElementById('aviso-entradas');
const avisoSinContenido = document.getElementById('aviso-sin-contenido');
const avisoResultado = document.getElementById('aviso-resultado');
const cajaResultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');
const avisoCopiar = document.getElementById('aviso-copiado');

function verificarCaracteres(texto, resultado) {
    if (texto === "") {
        avisoResultado.style.display = 'none';
        avisoSinContenido.style.display = 'flex';
        // Si no hay contenido en el input se muestra un aviso
        avisoSinContenido.style.transition = "opacity 1s";
        avisoSinContenido.style.opacity = "0";
        setTimeout(function mostrarAviso() {
            avisoSinContenido.style.transition = "opacity 0s"
            avisoSinContenido.style.opacity = "1";
        }, 500);
        return;
    }
    if (!/^[a-z\s]+$/.test(texto)) {
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
        cajaResultado.value = resultado;
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

function copiarTexto() {
    let avisoCopiado = '¡Texto copiado con éxito!';
        //seleccionar el texto de la caja
        cajaResultado.select();
        cajaResultado.setSelectionRange(0, 999);
        //copiar el texto de la caja
        navigator.clipboard.writeText(cajaResultado.value);
        //avisar que ha copiado el texto
        avisoCopiar.style.display = 'block'
        avisoCopiar.style.color = '#000FFF';
        avisoCopiar.innerText = avisoCopiado;
        //despues de 2 segundos el aviso desaparece
        setTimeout(function avisos(){

            avisoCopiar.style.display = 'none';
            }, 2000);
    }