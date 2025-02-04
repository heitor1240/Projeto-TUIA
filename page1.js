document.addEventListener("DOMContentLoaded", function () {
    let carrossel = document.querySelector(".carousel");
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;
    let index = 0;

    // Clonando o primeiro slide e adicionando ao final do carrossel
    let primeiroSlide = slides[0].cloneNode(true);
    carrossel.appendChild(primeiroSlide);

    function mudarSlide() {
        index++;
        carrossel.style.transition = "transform 1s ease-in-out";
        carrossel.style.transform = `translateX(-${index * 100}vw)`;

        // Quando chega no último slide, faz a transição de volta para o primeiro slide
        if (index === totalSlides) {
            setTimeout(() => {
                carrossel.style.transition = "none"; // Remove a transição
                carrossel.style.transform = "translateX(0vw)"; // Reseta para o primeiro slide
                index = 0; // Reinicia o índice
            }, 1000); // Exibe o último slide por 1 segundo
        }
    }

    setInterval(mudarSlide, 4000); // Troca a cada 4 segundos
});


document.getElementById("vermais").addEventListener("click", function() {
    let tooltip = document.getElementById("tooltip-text");

    if (tooltip.style.display === "none" || tooltip.style.display === "") {
        tooltip.style.display = "block"; // Mostra o texto
    } else {
        tooltip.style.display = "none"; // Oculta o texto
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let carrossel = document.querySelector(".carousel2");
    let slides = document.querySelectorAll(".slide2");
    let totalSlides = slides.length;
    let index = 0;

    if (!carrossel || slides.length === 0) {
        console.error("Carrossel não encontrado ou sem slides.");
        return;
    }

    // Corrige a largura do carrossel para conter todos os slides corretamente
    carrossel.style.width = `${totalSlides * 100}%`;

    function mudarSlide() {
        index++;

        if (index >= totalSlides) {
            index = 0; // Reinicia no primeiro slide
        }

        carrossel.style.transition = "transform 1s ease-in-out";
        carrossel.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
    }

    setInterval(mudarSlide, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
