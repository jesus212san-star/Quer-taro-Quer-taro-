let index = 0;
const pantallas = document.querySelectorAll(".pantalla");
const total = pantallas.length;
const contenedor = document.querySelector(".contenedor");

function ir(n){
    if(n < 0) n = 0;
    if(n >= total) n = total - 1;

    index = n;

    contenedor.style.transform = `translateY(-${n * 100}vh)`;

    activarAnimacion();
    sonido();
}

function activarAnimacion(){
    let puntos = document.querySelectorAll(".indicadores span");

    pantallas.forEach(p => p.classList.remove("activa"));
    puntos.forEach(p => p.classList.remove("activo"));

    pantallas[index].classList.add("activa");
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

function sonido(){
  let s = document.getElementById("sonido");
  if(s) s.play();
}

window.onload = ()=>{
  activarAnimacion();
  document.getElementById("loader").style.display="none";
};
