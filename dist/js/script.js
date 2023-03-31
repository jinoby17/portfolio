const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});
close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});