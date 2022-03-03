# menu_active_element
Identificando el elemento del menú según la página en la que nos encontremos, en un menú sencillo utilizo unas pocas líneas
de código JS de la siguiente manera:

Creamos variables para almacenar las siguiente 4 instrucciones:
    window.location.href: Identifico la url completa de la página en la que nos encontramos.
    lastIndexOf("/") + 1: Identifico el último índice del caracter "/".
    indexOf(".html"): Identifico el índice a partir de donde encontramos la extensión del archivo.
    slice(lastIndexOf("/") + 1, indexOf(".html")): Tomamos solo el nombre del archivo.

Posteriormente con un switch statement aplicamos el cambio en el item según el nombre del archivo.


Nota: Seguramente podemos reducir el código en los archivos html, pero por practicidad y para demostrar solamente cómo podemos resolver esta funcionalidad, lo realicé de esta manera.
