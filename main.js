/*SELECTORES CLASES HTML */
/*Traemos el selector del elemento que desplegara nuestro componente en html*/
const menuEmail = document.querySelector('.navbar-email');
/*traemos el elemnto al cual le quitaremos clases o agregaremos*/
const desktopMenu = document.querySelector('.desktop-menu');
/*Selector elemento navbar*/
/* mobileMenu*/
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
/*shopingCard*/
const menuShopingCard = document.querySelector('.shopping-card');
const iconCard = document.querySelector('.navbar-shoping-cart');




/*ESCUCAMOS EVENTOSde los selectores*/
menuEmail.addEventListener('click', toggleDesktopMenu);
/*evento click a menuBurgerIcon que ejecutara la funcion del parámetro*/
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
/**/
iconCard.addEventListener('click', toggleShopingCardMenu);




/*FUNTIONS*/

/**
 * When the user clicks on the hamburger menu, toggle the inactive class on the desktop menu.
 */
function toggleDesktopMenu() {
    const isCloseShopingCardMenu = menuShopingCard.classList.contains("inactive");
    if (!isCloseShopingCardMenu) {
        menuShopingCard.classList.add("inactive");
    }
    desktopMenu.classList.toggle('inactive');
}
/**
 * If the shopping card menu is closed, toggle the mobile menu. Otherwise, toggle the shopping card
 * menu and then toggle the mobile menu.
 */
function toggleMobileMenu() {
    const isCloseShopingCardMenu = menuShopingCard.classList.contains('inactive');
    if (isCloseShopingCardMenu==false) {
        menuShopingCard.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
    
}
function toggleShopingCardMenu() {
    const isCloseMobileMenu = mobileMenu.classList.contains('inactive');
    const isCloseDesktopMenu = desktopMenu.classList.contains('inactive');

    if (!isCloseMobileMenu) {
        mobileMenu.classList.add("inactive");
    } 
    if (!isCloseDesktopMenu) {
        desktopMenu.classList.add("inactive");
    } 
    menuShopingCard.classList.toggle("inactive");
}

console.log('ome gonorrea');


