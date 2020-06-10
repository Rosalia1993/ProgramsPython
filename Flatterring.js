//flatterin 

var array1= [1,14,3];
var array2=[4,16,8];



 var arregloTotal= array1.reduce((arreglo2)=>{
     var total= array1.concat(array2);
     return total;
 },0);


 //console.log(arregloTotal);




 ///funcion some que funciona como un ||

 var existen= array1.some((existe)=>{ return existe>=10;});

 //console.log(existen);

//funciona every que funciona como un &&

var cumplen = array2.every((numeroPar)=>{
    return  numeroPar%2 ==0;
    
});

console.log(cumplen);