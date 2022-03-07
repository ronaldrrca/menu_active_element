//Identifico la url completa de la página en la que nos encontramos.
let url = window.location.href; 
//Identifico el último índice del caracter "/", y le sumo 1 para utilizarlo en el slice.
let from = url.lastIndexOf("/") + 1; 
//Identifico el índice a partir de donde encontramos la extensión del archivo.
let to = url.indexOf(".html");
//Tomo sólo el nombre del archivo, que se encuentra entre los dos índices establecidos.
let pageName = url.slice(from, to); 

//Dependiendo del resultado obtenido, agrego los estilos al item correspondiente.
document.getElementById(pageName).style.color = "#FF6600";


