function encriptar(){
    var texto = document.getElementById("text-input").value;
    //i es para que afecte tanto mayusculas como minuslas000000 -- e else {
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos 

    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("av1").style.display = "none";
    document.getElementById("av2").style.display = "none";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    

}

function desencriptar(){
    var texto = document.getElementById("text-input").value;
    //i es para que afecte tanto mayusculas como minuslas000000 -- e else {
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos 

    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("av1").style.display = "none";
    document.getElementById("av2").style.display = "none";
    document.getElementById("resultado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}    

function copiar(){

    document.getElementById("resultado").select(); 
    var textR = document.getElementById("resultado");

    navigator.clipboard.writeText(textR.textContent);
}
