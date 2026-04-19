let index = 0;
let total = document.querySelectorAll(".pantalla").length;

function ir(n){
    if(n < 0) n = 0;
    if(n >= total) n = total - 1;

    index = n;

    document.querySelector(".contenedor").style.transform =
        "translateX(-" + (n * 100) + "vw)";

    activarAnimacion();
}

/* ANIMACIÓN DE ENTRADA */
function activarAnimacion(){
    let pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(p => p.classList.remove("activa"));
    pantallas[index].classList.add("activa");
}

/* BOTÓN */
function mensaje(){
    alert("¡Querétaro te espera!");
}

/* MODO OSCURO */
function modoOscuro(){
    document.body.classList.toggle("dark");
}

/* CARRUSEL AUTOMÁTICO */
let slide = 0;
setInterval(()=>{
    let galeria = document.querySelector(".galeria");
    if(!galeria) return;

    slide++;
    if(slide > 3) slide = 0;

    galeria.style.transform = "translateX(-" + (slide * 100) + "%)";
},3000);

/* TECLADO */
document.addEventListener("keydown", e=>{
    if(e.key === "ArrowRight") ir(index+1);
    if(e.key === "ArrowLeft") ir(index-1);
});

/* INICIO */
window.onload = ()=>{
    activarAnimacion();
};
