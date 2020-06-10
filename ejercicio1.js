'use strict'
 //pida 6 numeros por pantala y los meta en un array
//mostrar todos los elementos del array de enteros en consola y documento
 //3 ordenar matriz y mostrarlo
 //4 invvertir orden  y mostrarlo
 //5 mostrar cuantos elementos tiene el array
 //6  busqueda de valor introducido pr el usuario y 
 //diga si esta en el array y su indice



 //*********************************funcion declarada */

 
function mostrarArray(elementos,textoPersonalizado){
    document.write("<h1>"+textoPersonalizado+"</h1>");
    elementos.forEach((elementos,index) =>{
            document.write("<ul>");
            document.write("<li>"+elementos+"</li>");
            document.write("</ul>");
        });
    };

 var array= new Array(2);

 for(let cuentaNumeros=0; cuentaNumeros <= 2; cuentaNumeros++){
     array[cuentaNumeros] = parseInt(prompt("Dame un numero  entero",0));

 }
console.log(array);

//muestra elementos en documento

mostrarArray(array,"ContenidoArray");


//Ordena y muestra la lista
array.sort(function(a,b){return a-b});
mostrarArray(array,"array ordenado");



//invertir el orden 
array.sort(function(a,b){return b-a});
mostrarArray(array,"array invertido");

//mostrar cuantos numeros tiene el array
document.write("<h2>elementos del array</h2>"+array.length);

//buscar un numero del usuario  en el array

var buscarNumero= parseInt(prompt("que numero quieres buscar?"));

if(array.find(element => element== buscarNumero)){//esta es una fucion de callback
    console.log(" tu numero "+buscarNumero
   + " esta en la posicion "+array.indexOf(buscarNumero));
}
else{
 console.log("tu numero no existe en el arreglo");
}