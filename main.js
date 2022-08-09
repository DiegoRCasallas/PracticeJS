//Seleccionamos eventos
const h1 = document.querySelector('h1');
const input1  =document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const botonCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
//Escuchamos eventos html


//funcinon calculadora
function btnOnClick(){
    let a;
    let b;
    a=Number(input1.value);
    b=Number(input2.value);
    // console.log(a,b);
    let suma= a+b;
    suma=String(suma);
    console.log(typeof suma+" sm")
    pResult.innerHTML=suma; 
}




