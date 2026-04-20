let index = 0;
const pantallas = document.querySelectorAll(".pantalla");
const total = pantallas.length;
const contenedor = document.querySelector(".contenedor");

/* NAVEGACIÓN */
function ir(n){
    if(n < 0) n = 0;
    if(n >= total) n = total - 1;

    index = n;

    contenedor.style.transform = `translateX(-${n * 100}vw)`;

    activarAnimacion();
}

/* ANIMACIÓN */
function activarAnimacion(){
    pantallas.forEach(p => p.classList.remove("activa"));
    pantallas[index].classList.add("activa");
}

/* BOTÓN */
function mensaje(){
    alert("¡Querétaro te espera! 🌄");
}

/* MODO OSCURO */
function modoOscuro(){
    document.body.classList.toggle("dark");
}

/* DESLIZAR CON EL DEDO (CELULAR) */
let startX = 0;

contenedor.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

contenedor.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        ir(index + 1); // desliza izquierda
    } else if(endX - startX > 50){
        ir(index - 1); // desliza derecha
    }
});

/* TECLADO */
document.addEventListener("keydown", e=>{
    if(e.key === "ArrowRight") ir(index+1);
    if(e.key === "ArrowLeft") ir(index-1);
});

/* INICIO */
window.onload = ()=>{
    activarAnimacion();
};
