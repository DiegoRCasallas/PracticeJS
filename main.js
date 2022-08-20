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

/*Seleccionamos elemento para agregar nuestro componente de js/html*/
const cardsContainer=document.querySelector('.cards-container')




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
    if (isCloseShopingCardMenu == false) {
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

/*Simulacion agregar producto mediante javascript*/
/* Creamos lista de productos*/
const productList = [];

/*Agregamos productos como objectos literales JS */
productList.push({
    name: 'Bike',
    price: '120',
    /*imagen del producto que se desea */
    image: 'https://bicicletasstrongman.co/wp-content/uploads/2022/06/willier-cento-10-ultegra.jpg',
});
productList.push({
    name: 'Automobil',
    price: '520',
    /*imagen del producto que se desea */
    image: 'https://bicicletasstrongman.co/wp-content/uploads/2022/06/willier-cento-10-ultegra.jpg',
});
productList.push({
    name: 'Moto',
    price: '320',
    /*imagen del producto que se desea */
    image: 'https://bicicletasstrongman.co/wp-content/uploads/2022/06/willier-cento-10-ultegra.jpg',
});


/*
<div class="main-product-card">
                <img src="https://bicicletasstrongman.co/wp-content/uploads/2022/06/willier-cento-10-ultegra.jpg"
                    alt="">

                <div class="main-product-card__description">
                    <div>
                        <p>$120,00</p>
                        <p>Bicicleta</p>
                    </div>
                    <figure>
                        <img src="./icons/add-to-car2.png">
                    </figure>
                </div>
            </div>

*/

/*Crearemos un producto por cada producto dentro de array productList*/
for (product of productList) {
    /*Repicamos la estructura del componente html en js*/

    /*Creamos elemento div*/
    const productCard = document.createElement('div');
    /*añadimos la clase al elemento*/
    productCard.classList.add('main-product-card');

    //product={name, price, image}-->product.image

    /*creamos etiqueta img; agremos atributo src con 
    la propiedad que esta dentro de product.name*/
    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);

    /*Creamos contenedor main-produc-card_description*/
    const productDescription=document.createElement('div');
    productDescription.classList.add('main-product-card__description');

    productCard.appendChild(productImg);
    productCard.appendChild(productDescription);


    const div1 = document.createElement('div');
    const productPrice=document.createElement('p');
    const productName=document.createElement('p');
    productPrice.innerText=product.price;
    productName.innerText=product.name;

    //metemos el figure y div1 dentro del productDescription
    
    productDescription.appendChild( div1);
    div1.appendChild(productPrice);
    div1.appendChild(productName);

    const figure = document.createElement('figure');
    const imgIcon=document.createElement('img');
    imgIcon.setAttribute("src","./icons/add-to-car2.png");
    //metemos imgIcon(<img>), dentro de figure(<figure>)
    figure.appendChild(imgIcon);
    productDescription.appendChild(figure);
    //metemos el componente dentro del elemento html antes seleccionado 
    cardsContainer.appendChild(productCard);
    
    //Organizamos los elementos en la herarquia correcta segun html
    
    


}

console.log('ome gonorrea');


