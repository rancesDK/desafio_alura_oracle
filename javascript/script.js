// `La letra "e" es convertida para "enter"`
// `La letra "o" es convertida para "ober"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "u" es convertida para "ufat"`
function encriptar() {
  var texto = document.getElementById("texto_in").value.toLowerCase();
  var texencriptado = texto.replace(/e/igm,"enter");
  texencriptado = texencriptado.replace(/o/igm,"ober");
  texencriptado = texencriptado.replace(/i/igm,"imes");
  texencriptado = texencriptado.replace(/a/igm,"ai");
  texencriptado = texencriptado.replace(/u/igm,"ufat");

  document.getElementById("imadercha").style.display = "none";
  document.getElementById("text-derecho").style.display = "none";
  document.getElementById("texto_ou").innerHTML = texencriptado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
console.log(texto);
}
function desencriptar() {
  var texto = document.getElementById("texto_in").value.toLowerCase();
  var texencriptado = texto.replace(/enter/igm,"e");
  texencriptado = texencriptado.replace(/ober/igm,"o");
  texencriptado = texencriptado.replace(/imes/igm,"i");
  texencriptado = texencriptado.replace(/ai/igm,"a");
  texencriptado = texencriptado.replace(/ufat/igm,"u");

  document.getElementById("imadercha").style.display = "none";
  document.getElementById("text-derecho").style.display = "none";
  document.getElementById("texto_ou").innerHTML = texencriptado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

}

function copyDocument() {
  var selector = document.querySelector("#texto_ou");
  selector.select();
  document.execCommand("copy");
  alert("!se copio¡");
}
// document.getElementById("bt-encriptar").onClick = encriptar;
// document.getElementById("bt-desencriptar").onClick = desencriptar;
// document.getElementById("copiar").onClick = copyDocument;

