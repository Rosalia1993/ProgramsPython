
const div= document.querySelector('primera');

var urlCats= "https://github.com/mdn/learning-area/blob/master/javascript/oojs/tasks/json/sample.json";


var request= new XMLHttpRequest();
    request.open('GET',urlCats);
    request.responseType = 'json';

    request.send();



    request.onload= function(){
        const gatasMadre= request.response;
        crearTitulo(gatasMadre);
    }


    function crearTitulo(jsonObj){
        var h1= document.createElement('h1');
        h1.textContent= jsonObj[0].name;
        div.appendChild(h1);

   
       }


