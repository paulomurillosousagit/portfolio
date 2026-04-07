// Seletores globais
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcon = document.querySelector('.menu-btn i');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// 1. Efeito na Navbar ao rolar (Scrolled)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Menu Hamburger (Mobile)
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Trocar ícone do menu
    if (navMenu.classList.contains('active')) {
        menuBtnIcon.classList.remove('fa-bars');
        menuBtnIcon.classList.add('fa-times');
    } else {
        menuBtnIcon.classList.remove('fa-times');
        menuBtnIcon.classList.add('fa-bars');
    }
});

// Fechar menu mobile ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtnIcon.classList.remove('fa-times');
        menuBtnIcon.classList.add('fa-bars');
    });
});

// 3. Smooth Scroll e Scrollspy (Highlight ativo no menu)
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 4. Animações com Intersection Observer (Scroll Reveal)
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: Desobservar após animar para não repetir
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// Lidar com o Formulário de Contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! (Esta é uma demonstração)');
        contactForm.reset();
    });
}
