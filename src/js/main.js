document.addEventListener('DOMContentLoaded', () => {
    const btnOpenHeader = document.querySelector('.header-mobile__toggle');
    const btnCloseHeader = document.querySelector('.header-mobile__close');
    const pseudoElement = document.querySelector('.header-mobile__menu--after');
    const menuList = document.querySelectorAll('.header-mobile__item');

    const buttons = [btnOpenHeader, btnCloseHeader, pseudoElement];

    if (btnOpenHeader && btnCloseHeader && pseudoElement) {
        buttons.forEach(button => button.addEventListener('click', toggleMobileMenu));
    }

    menuList.forEach(item => item.addEventListener('click', toggleMobileMenu));
});

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