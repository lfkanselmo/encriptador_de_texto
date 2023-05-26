
var llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
var llavesAcentos = ["é","í","á","ó","ú"];
const entrada = document.querySelector(".textoEntrada");
const salida = document.querySelector(".textoSalida");

/*Función para el botón encriptar*/
function btnEncriptar(){
    const entrada = document.querySelector(".textoEntrada");
    const salida = document.querySelector(".textoSalida");
    textoEntrada = entrada.value.trim();

    const textoEncriptado = encriptar(textoEntrada);
    salida.value = textoEncriptado;

    if (textoEncriptado==" "){
        document.getElementById("btnsCopiar-Limpiar").style.display = "none";
        entrada.value = "";
        salida.value = "";
    } else if (textoEncriptado=="") {
            swal({
                title:"Alerta",
                text:"No ha ingresado nada válido para encriptar en la entrada",
                icon:"error"
            });
            entrada.value = "";
            document.getElementById("btnsCopiar-Limpiar").style.display = "none";
        } else{
        entrada.value = "";
        document.getElementById("btnsCopiar-Limpiar").style.display = "flex";
        }
}

/*Función para ENCRIPTAR la cadena de texto*/
function encriptar(cadenaEncriptada){
    cadenaEncriptada = cadenaEncriptada.toLowerCase();
    let pasa = true;

    for (let j=0; j<llaves.length; j++){
        if (cadenaEncriptada.includes(llavesAcentos[j])) {
            pasa = false;
        }
    }

    if(pasa==false){
        swal({
            title:"Alerta",
            text:"No se admiten vocales con acento",
            icon:"error"
        });
        return " ";
    } else {
        cadenaEncriptada = cadenaEncriptada.replaceAll(/[^0-9a-z.,; ]/g,"");
        for (let j=0; j<llaves.length; j++){
            if (cadenaEncriptada.includes(llaves[j][0])) {
                cadenaEncriptada = cadenaEncriptada.replaceAll(llaves[j][0],llaves[j][1]);
            }
        }
        return cadenaEncriptada;
    }
}

/*Función para el botón Desencriptar*/
function btnDesencriptar(){
    const entrada = document.querySelector(".textoEntrada");
    const salida = document.querySelector(".textoSalida");
    textoEntrada = entrada.value.trim();

    const textoDesencriptado = desencriptar(textoEntrada);
    salida.value = textoDesencriptado;
    

    if (textoDesencriptado==" "){
        document.getElementById("btnsCopiar-Limpiar").style.display = "none";
        entrada.value = "";
        salida.value = "";
    } else if (textoDesencriptado=="") {
            swal({
                title:"Alerta",
                text:"No ha ingresado nada válido para encriptar en la entrada",
                icon:"error"
            });
            entrada.value = "";
            document.getElementById("btnsCopiar-Limpiar").style.display = "none";
        } else{
        entrada.value = "";
        document.getElementById("btnsCopiar-Limpiar").style.display = "flex";
        }
}

/*Función para DESENCRIPTAR la cadena de texto*/
function desencriptar(cadenaDesencriptada){
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();
    let pasa = true;

    for (let j=0; j<llaves.length; j++){
        if (cadenaDesencriptada.includes(llavesAcentos[j])) {
            pasa = false;
        }
    }
    
    if(pasa==false){
        swal({
            title:"Alerta",
            text:"No se admiten vocales con acento",
            icon:"error"
        });

        return " ";
    } else {
        cadenaDesencriptada = cadenaDesencriptada.replaceAll(/[^0-9a-z.,; ]/g,"");
        for (let j=0; j<llaves.length; j++){
            if (cadenaDesencriptada.includes(llaves[j][1])) {
                cadenaDesencriptada = cadenaDesencriptada.replaceAll(llaves[j][1],llaves[j][0]);
            }
        }

        return cadenaDesencriptada;
    }

}

/*Función para el botón copiar*/
function btnCopiar(){
    let copy = document.querySelector(".textoSalida").value;
    navigator.clipboard.writeText(copy);
}

/*Función para limpiar la página*/
function limpiar(){
    const entrada = document.querySelector(".textoEntrada");
    const salida = document.querySelector(".textoSalida");

    entrada.value = "";
    salida.value = "";

    document.getElementById("btnsCopiar-Limpiar").style.display = "none";
}
