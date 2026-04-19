// Mostrar solo una sección
function mostrar(seccion){
    let pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(p => {
        p.style.display = "none";
    });

    document.getElementById(seccion).style.display = "block";
}

// Mensaje botón
function mensaje(){
    alert("¡Gracias por visitar Querétaro!");
}

// Mostrar inicio por defecto
window.onload = function(){
    mostrar("inicio");
}
