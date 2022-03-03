const item_index = document.getElementById("item_index");
const item_productos = document.getElementById("item_productos");
const item_servicios = document.getElementById("item_servicios");
const item_contactame = document.getElementById("item_contactame");

let url = window.location.href;
let from = url.lastIndexOf("/") + 1;
let to = url.indexOf(".html"); 
let pageName = url.slice(from, to);

switch (pageName) {
    case "index":
        item_index.style.color = "#FF6600";
        break;
    
    case "contactame":
        item_contactame.style.color = "#FF6600";
        break;

    case "productos":
        item_productos.style.color = "#FF6600";
        break;

    case "servicios":
        item_servicios.style.color = "#FF6600";
        break;
}

