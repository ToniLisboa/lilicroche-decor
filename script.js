// ========================================
// CONFIGURAÇÃO DE NAVEGAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Gerenciamento do Dropdown
    initDropdownMenu(dropdownToggle, dropdownMenu);
    
    // Gerenciamento do Menu Mobile
    initMobileMenu(menuToggle, navMenu);
});

// Funções de inicialização da navegação
function initDropdownMenu(toggle, menu) {
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
}

function initMobileMenu(toggle, menu) {
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// ========================================
// CONFIGURAÇÃO DOS CARROSSÉIS
// ========================================

$(document).ready(() => {
    // Carrossel da Página Inicial
    initMainCarousel();
    
    // Carrossel da Página de Dicas
    initTipsCarousel();
    
    // Carrossel da Galeria
    initGalleryCarousel();
    
    // Carrossel da Página Sobre
    initAboutCarousel();
    
    // Carrossel Genérico
    initGenericCarousel();
});

// Funções de inicialização dos carrosséis
function initMainCarousel() {
    $('.carrossel-principal').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });
}

function initTipsCarousel() {
    $('.carrossel-dicas').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 600,
            settings: { slidesToShow: 1 }
        }]
    });
}

function initGalleryCarousel() {
    $('.galeria-carrossel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    });
}

function initAboutCarousel() {
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
}

function initGenericCarousel() {
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
}
