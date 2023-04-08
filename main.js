const menuBurger = document.querySelector('.menu-burger');
menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('open');
    document.querySelector('body').classList.toggle('lock');
});