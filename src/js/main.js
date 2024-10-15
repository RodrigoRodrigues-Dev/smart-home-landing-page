const btnOpenHeader = document.querySelector('.header-mobile__toggle');
const btnCloseHeader = document.querySelector('.header-mobile__close');
const pseudoElement = document.querySelector('.header-mobile__menu--after');
const menuList = document.querySelectorAll('.header-mobile__item');
const buttons = [btnOpenHeader, btnCloseHeader, pseudoElement];

// Funções de manipulação do menu mobile
const toggleMobileMenu = () => {
    const headerMobile = document.querySelector('.header-mobile__menu');

    if (headerMobile) {
        headerMobile.classList.toggle('header-mobile__menu--active');

        if (headerMobile.classList.contains('header-mobile__menu--active')) {
            disableScroll();
        } else {
            enableScroll();
        }
    }
};

const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
    document.body.style.overflow = '';
};

if (btnOpenHeader && btnCloseHeader && pseudoElement) {
    buttons.forEach(button => button.addEventListener('click', toggleMobileMenu));
}

menuList.forEach(item => item.addEventListener('click', toggleMobileMenu));

// Controle dos depoimentos/testemunhos
const testimonials = document.querySelectorAll('.testimonials__content');
const btnNext = document.querySelector('.testimonials__next');
const btnPrev = document.querySelector('.testimonials__prev');
let currentItem = 0;

btnNext.addEventListener('click', () => {
    testimonials[currentItem].classList.remove('testimonials__content--visible');
    currentItem = (currentItem + 1) % testimonials.length;
    testimonials[currentItem].classList.add('testimonials__content--visible');
});

btnPrev.addEventListener('click', () => {
    testimonials[currentItem].classList.remove('testimonials__content--visible');
    currentItem = (currentItem - 1 + testimonials.length) % testimonials.length;
    testimonials[currentItem].classList.add('testimonials__content--visible');
});