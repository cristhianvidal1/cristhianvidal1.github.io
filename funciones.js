// Mensaje de Bienvenida.
function Mostrar(){
    var miDiv = document.getElementById(bienvenido);
    if(miDiv.style.display === "nome"){
        // Muestro la etiqueta div
        miDiv.style.display = "block";
    }else{
        // Oculto la etiquta div
        miDiv.style.display ="none"
    }
}