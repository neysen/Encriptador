const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"` */

function btnEncriptar() {

    if(!validarInput()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
    }
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["a", "ai"],["e", "enter"] , ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function validarInput() {

    let palabraEscrita = document.querySelector(".text-area").value;
    let validador = palabraEscrita.match(/^[a-z]*$/);

    if(!validador || validador.length == 0) {
        alert("Caracteres no permitidos");
        location.reload();
        return true;
    }
}



