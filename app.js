// ========================================
// BASTI - FUNCIONES DE LA PÁGINA
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // BOTÓN EXPLORE DE LA PORTADA
    // ========================================

    const entrada = document.querySelector(".entrada");
    const sitio = document.querySelector(".sitio");
    const botonEntrar = document.querySelector(".boton-entrar");

    if (botonEntrar) {

        botonEntrar.addEventListener("click", function () {

            entrada.style.opacity = "0";
            entrada.style.transform = "scale(1.03)";

            setTimeout(function () {

                entrada.style.display = "none";

                sitio.classList.remove("oculto");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 800);

        });

    }


    // ========================================
    // BOTONES BASIC / PROFESSIONAL / PREMIUM
    // ========================================

    const botonesLinea = document.querySelectorAll(".explorar-linea");

    const colecciones = document.querySelectorAll(".coleccion");


    botonesLinea.forEach(function (boton, indice) {

        boton.addEventListener("click", function (evento) {

            evento.preventDefault();

            // Busca la colección correspondiente
            const coleccion = colecciones[indice];

            if (coleccion) {

                coleccion.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ========================================
    // NAVEGACIÓN DEL HEADER
    // ========================================

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const destino = enlace.getAttribute("href");

            const seccion = document.querySelector(destino);

            if (seccion) {

                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ========================================
    // MENÚ PARA CELULAR
    // ========================================

    const menuMovil = document.querySelector(".menu-movil");
    const navegacion = document.querySelector(".navegacion");

    if (menuMovil && navegacion) {

        menuMovil.addEventListener("click", function () {

            if (navegacion.style.display === "flex") {

                navegacion.style.display = "none";

            } else {

                navegacion.style.display = "flex";

                navegacion.style.flexDirection = "column";

                navegacion.style.position = "absolute";

                navegacion.style.top = "70px";

                navegacion.style.right = "0";

                navegacion.style.background = "#080808";

                navegacion.style.padding = "25px";

                navegacion.style.width = "200px";

            }

        });

    }

});