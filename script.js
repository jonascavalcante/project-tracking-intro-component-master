
function menuToggle() {

    let menuMobile = document.querySelector('nav');
    let buttonOpen = document.querySelector('.open');
    let buttonClose = document.querySelector('.close');
    
    if (menuMobile.style.display == '' || menuMobile.style.display == 'none') {
        menuMobile.style.display = 'flex';
        buttonClose.style.display = 'block';
        buttonOpen.style.display = 'none';
    } else {
        menuMobile.style.display = 'none';
        buttonClose.style.display = 'none';
        buttonOpen.style.display = 'block';
    }
}