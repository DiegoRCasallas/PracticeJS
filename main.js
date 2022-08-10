/*Traemos el selector del elemento que desplegara nuestro componente en html*/
const menuEmail= document.querySelector('.navbar-email');
/*traemos el elemnto al cual le quitaremos clases o agregaremos*/
const desktopMenu=document.querySelector('.desktop-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

console.log('ome gonorrea');
