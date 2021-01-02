
function menuToggle() {

    let menuMobile = document.querySelector('nav');
    
    if (menuMobile.style.display == '' || menuMobile.style.display == 'none') {
        menuMobile.style.display = 'flex';
    } else {
        menuMobile.style.display = 'none';
    }
}