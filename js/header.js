let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");

window.addEventListener("scroll", function() {

    let desplazamientoActual = window.pageYOffset;

    if(ubicacionPrincipal >= desplazamientoActual) {
        $nav.style.top = "0px";
    } else {
        $nav.style.top = "-70px";
    }

    ubicacionPrincipal = desplazamientoActual;
});