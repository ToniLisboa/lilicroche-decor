// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seletores do menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Toggle do dropdown (se existir na página)
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });

        // Fecha o dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Toggle do menu hamburguer
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Inicialização dos carrosséis com jQuery
$(document).ready(function () {
    // Carrossel Principal (Página Inicial)
    $('.carrossel-principal').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

    // Carrossel de Dicas (Página de Dicas)
    $('.carrossel-dicas').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Carrossel da Galeria (Produtos ou Imagens)
    $('.galeria-carrossel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Carrossel Sobre (Página Sobre)
    $('.carrossel-sobre').slick({
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // Carrossel Genérico (Outros carrosséis)
    $('.carrossel').slick({
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});
