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

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Abrir/fechar o menu ao clicar no botão
    menuToggle.addEventListener("click", function (event) {
        nav.classList.toggle("active");
        event.stopPropagation(); // Impede que o clique no botão feche imediatamente o menu
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove a classe ativa de todas as abas e conteúdos
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Adiciona a classe ativa ao tab clicado e ao conteúdo correspondente
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-target")).classList.add("active");
        });
    });
});

function enviarWhatsApp() {
    // Capturar os valores do formulário
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    let telefone = "5544999418023";

    // Criar a mensagem formatada
    let texto = `*Novo contato pelo formulário*%0A%0A`
              + `*Nome:* ${nome}%0A`
              + `*E-mail:* ${email}%0A`
              + `*Mensagem:* ${mensagem}`;

    // Criar link para o WhatsApp
    let url = `https://api.whatsapp.com/send?phone=${telefone}&text=${texto}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
}


