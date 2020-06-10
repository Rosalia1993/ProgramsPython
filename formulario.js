'use strict'

window.addEventListener('load', ()=>{

//capturar  primero el formulario

var formulario =document.querySelector("#formulario"); //el onsubmit="return false" es para evitar redireccion del formulario
var box_dashed = document.querySelector(".box_dashed");
box_dashed.style.display = "none";

formulario.addEventListener('submit',()=>{
    console.log("submit capturado");
    
    var nombre= document.querySelector("#nombre").value;
    var materno= document.querySelector("#materno").value;
    var paterno= document.querySelector("#paterno").value;
    var edad= parseInt( document.querySelector("#edad").value);

    //validacion  de formulario y el trim s usa para quitar espacios en blanco

    if( nombre.trim() == null || nombre.trim().length == 0){
        alert("El nombre  no es valido");
        return false;

    }

    if( paterno.trim() == null || paterno.trim().length == 0){
        alert("El paterno  no es valido");
        return false;

    }
    if( materno.trim() == null || materno.trim().length == 0){
        alert("El materno  no es valido");
        return false;

    }
    if(edad== null || edad <= 0 || isNaN(edad)){
        alert("No es un numero valido");
        return false;

    }


    box_dashed.style.display = "block";

     var id_nombre= document.querySelector("#nombre span");
     var id_pataerno= document.querySelector("#paterno span");
     var id_materno = document.querySelector("#materno span");
     var id_edad = document.querySelector("#edad span");

     id_nombre.innerHTML= nombre;
     id_pataerno.innerHTML = paterno;
     id_materno.innerHTML = materno;
     id_edad.innerHTML = edad;

   /*
     llena datos con un arreglo
   var datos_usuario= [nombre, paterno, materno, edad];

    var index=0;
    for (index in datos_usuario){
  
        var parrafo= document.createElement("p");
        parrafo.append(datos_usuario[index]);
        box_dashed.append(parrafo);

    }*/
     // console.log(nombre, paterno, materno, edad);

});

});