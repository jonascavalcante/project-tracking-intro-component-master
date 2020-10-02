const menuToggle = () => {
    const menu = document.querySelector('.menu');
    const open = document.querySelector('.open');
    const close = document.querySelector('.close');
    const nav = document.querySelector('nav');

    menu.addEventListener('click', () => {
        open.classList.add('disable');
        close.classList.add('active');
        nav.classList.add('menu-opened');
    });
}

menuToggle();