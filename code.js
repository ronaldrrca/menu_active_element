let url = window.location.href;
let from = url.lastIndexOf("/") + 1;
let to = url.indexOf(".html"); 
let pageName = url.slice(from, to);

switch (pageName) {
    case "index":
        document.getElementById("item_index").style.color = "#FF6600";
        break;
    
    case "contactame":
        document.getElementById("item_contactame").style.color = "#FF6600";
        break;

    case "productos":
        document.getElementById("item_productos").style.color = "#FF6600";
        break;

    case "servicios":
        document.getElementById("item_servicios").style.color = "#FF6600";
        break;
}

