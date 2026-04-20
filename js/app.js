let index = 0;
const pantallas = document.querySelectorAll(".pantalla");
const total = pantallas.length;
const contenedor = document.querySelector(".contenedor");

function ir(n){
    if(n < 0) n = 0;
    if(n >= total) n = total - 1;

    index = n;

    contenedor.style.transform = `translateX(-${n * 100}vw)`;

    activarIndicadores();
}

function activarIndicadores(){
    let puntos = document.querySelectorAll(".indicadores span");

    puntos.forEach(p => p.classList.remove("activo"));
    puntos[index].classList.add("activo");
}

function mensaje(){
    alert("¡Querétaro te espera!");
}

function modoOscuro(){
    document.body.classList.toggle("dark");
}

function toggleMenu(){
  document.getElementById("menu").classList.toggle("activo");
}

window.onload = ()=>{
  activarIndicadores();
  document.getElementById("loader").style.display="none";
};
