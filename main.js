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
const cardsContainer = document.querySelector('.cards-container');
const productDetailComponent = document.querySelector('.product-detail');
const buttonCloseProductDetail = document.querySelector('.product-detail-close');



/*ESCUCAMOS EVENTOSde los selectores*/
menuEmail.addEventListener('click', toggleDesktopMenu);
/*evento click a menuBurgerIcon que ejecutara la funcion del parámetro*/
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
/**/
iconCard.addEventListener('click', toggleShopingCardMenu);

buttonCloseProductDetail.addEventListener('click', closeProductDetail);




/*FUNTIONS*/

/**
 * When the user clicks on the hamburger menu, toggle the inactive class on the desktop menu.
 */
function toggleDesktopMenu() {
    const isCloseProductDetailComponent= productDetailComponent.classList.contains('inactive');
    const isCloseShopingCardMenu = menuShopingCard.classList.contains("inactive");
    if (!isCloseShopingCardMenu || !isCloseProductDetailComponent) {
        menuShopingCard.classList.add("inactive");
        productDetailComponent.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
/**
 * If the shopping card menu is closed, toggle the mobile menu. Otherwise, toggle the shopping card
 * menu and then toggle the mobile menu.
 */
function toggleMobileMenu() {
    const isCloseProductDetailComponent= productDetailComponent.classList.contains('inactive');
    const isCloseShopingCardMenu = menuShopingCard.classList.contains('inactive');
    if (isCloseShopingCardMenu == false) {
        menuShopingCard.classList.add("inactive");
    }
    if(isCloseProductDetailComponent==false){
        productDetailComponent.classList.add("inactive");
    }
    mobileMenu.classList.toggle('inactive');

}
function toggleShopingCardMenu() {
    const isCloseMobileMenu = mobileMenu.classList.contains('inactive');
    const isCloseDesktopMenu = desktopMenu.classList.contains('inactive');
    const isCloseProductDetailComponent=productDetailComponent.classList.contains('inactive');

    if (!isCloseMobileMenu) {
        mobileMenu.classList.add("inactive");
    }
    if (!isCloseDesktopMenu) {
        desktopMenu.classList.add("inactive");
    }
    if(!isCloseProductDetailComponent){
        productDetailComponent.classList.add('inactive');
    }
    menuShopingCard.classList.toggle("inactive");
}

function openProductDetail() {
    const isCloseShopingCardMenu = menuShopingCard.classList.contains('inactive');
    const isCloseDesktopMenu = desktopMenu.classList.contains('inactive');
    const isCloseMobileMenu=mobileMenu.classList.contains('inactive');
    if(!isCloseDesktopMenu){
        desktopMenu.classList.add('inactive');
    }
    productDetailComponent.classList.remove('inactive');
    if (!isCloseShopingCardMenu){
        menuShopingCard.classList.add('inactive');

    }
    if(!isCloseMobileMenu){
        mobileMenu.classList.add('inactive');
    }
    productDetailComponent.classList.remove('inactive');
}

function closeProductDetail() {
    productDetailComponent.classList.add('inactive');
}


/*Simulacion agregar producto mediante javascript*/
/* Creamos lista de productos*/
const productList = [];

/*Agregamos productos como objectos literales JS */
productList.push({
    name: 'Pinarello Blue',
    price: '200',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2021/12/pinarello_prince_strongman-09.jpg?w=1275&ssl=1',
});
productList.push({
    name: 'Pinarello White',
    price: '520',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2022/05/pinarello-gan-ultegra.jpg?fit=1000%2C1000&ssl=1',
});
productList.push({
    name: 'Willier MTB',
    price: '320',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2022/05/WILLIERMTBNEGRA.jpg?resize=480%2C480&ssl=1',
});
productList.push({
    name: 'Pinarello Blue',
    price: '200',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2021/12/pinarello_prince_strongman-09.jpg?w=1275&ssl=1',
});
productList.push({
    name: 'Pinarello White',
    price: '520',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2022/05/pinarello-gan-ultegra.jpg?fit=1000%2C1000&ssl=1',
});
productList.push({
    name: 'Willier MTB',
    price: '320',
    /*imagen del producto que se desea */
    image: 'https://i0.wp.com/bicicletasstrongman.co/wp-content/uploads/2022/05/WILLIERMTBNEGRA.jpg?resize=480%2C480&ssl=1',
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


function renderProducts(arr) {
    /*Crearemos un producto por cada producto dentro de array productList*/
    for (product of arr) {
        /*Repicamos la estructura del componente html en js*/

        /*Creamos elemento div*/
        const productCard = document.createElement('div');
        /*añadimos la clase al elemento*/
        productCard.classList.add('main-product-card');

        //product={name, price, image}-->product.image

        /*creamos etiqueta img; agremos atributo src con 
        la propiedad que esta dentro de product.name*/
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetail)

        /*Creamos contenedor main-produc-card_description*/
        const productDescription = document.createElement('div');
        productDescription.classList.add('main-product-card__description');

        productCard.appendChild(productImg);
        productCard.appendChild(productDescription);


        const div1 = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        productPrice.innerText = product.price;
        productName.innerText = product.name;

        //metemos el figure y div1 dentro del productDescription

        productDescription.appendChild(div1);
        div1.appendChild(productPrice);
        div1.appendChild(productName);

        const figure = document.createElement('figure');
        const imgIcon = document.createElement('img');
        imgIcon.setAttribute("src", "./icons/add-to-car2.png");
        //metemos imgIcon(<img>), dentro de figure(<figure>)
        figure.appendChild(imgIcon);
        productDescription.appendChild(figure);
        //metemos el componente dentro del elemento html antes seleccionado 
        cardsContainer.appendChild(productCard);

        //Organizamos los elementos en la herarquia correcta segun html
    }
};

renderProducts(productList);


console.log('ome gonorrea');


