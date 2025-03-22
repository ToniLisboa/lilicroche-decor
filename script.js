document.addEventListener('DOMContentLoaded', (event) => {
    // Seletores
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Abrir/Fechar o dropdown menu
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });

        // Fechar o dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Abrir/Fechar o menu de navegação (hamburguer)
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// script.js - Adicione esta inicialização
$(document).ready(function(){
    $('.galeria-carrossel').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Inicialização de todos os carrosséis
$(document).ready(function(){
    // Carrossel Principal
    $('.carrossel-principal').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Carrossel de Dicas
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

    // Carrossel Sobre
    $('.carrossel-sobre').slick({
        dots: true,
        fade: true
    });
});

$(document).ready(function(){
    $('.galeria-carrossel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // 3 produtos por vez
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
});

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

$(document).ready(function(){
    $('.carrossel-sobre').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

