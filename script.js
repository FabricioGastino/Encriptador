const textArea = document.querySelector(".text_area");
const mensagem = document.querySelector(".mensagem");



console.table(matrizCodigo);

function btnEncriptar() {
    const textoEncrip = encriptar(textArea.value);
    mensagem.value = textoEncrip;
    textArea.value = "";
}

function encriptar(sEncriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"]
, ["u", "ufat"]];
    sEncriptada = sEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(sEncriptada.includes(matrizCodigo[i][0])) {
            sEncriptada = sEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return sEncriptada
}


function btnDesencriptar() {
    const textoDesen = desencriptar(textArea.value);
    mensagem.value = textoDesen;
    textArea.value = "";
}

function desencriptar(sDesen) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"]
, ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(sDesen.includes(matrizCodigo[i][1])) {
            sDesen = sDesen.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return sDesen;
}


function copiarTexto() {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);
