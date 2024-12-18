## Creacion de eitquetas HTML con JS

El uso innerHTML es rapido y sencillo.Es util para grandes bloques de contenido.


```js

let div = document.getElementById("#container");
div.innerHTML = `
<style> body { background-color:  red; }</style>
<h1>titulo</h1>
`;
```


Alternativamente podemos crear elemntos HTML de forma programcatica
Desventajas:

-Requiere mas pasos para construir el HTML
Ventajas:

-Ofrece control total sobre los elemntos
-Es mas seguro (ya que podemos usar textContent en vez de innerHTML).



```JS

let  fragmento = document.createDocumentFragment();// etiqueta invisble "<>"

let div = document.createElement("div"); // creamos un div

div.classList.add("clase1","clase2"); //agregar una o msa clases  <div class= `clase1 clase2`> </div>
div.id = "idCaja";

div.textContent = "<h1>Caja</h1>"; // lso h1 se muestro como texto
div.setAttribute ("data-color", "red"); // <div id="idCaja" class=" class='clase1 clase 2' data-color='red'>  <h1>'titulo'</h1> </div>
div.addEventListner ("click",() => { console.log("click en el div")});
fragment.appendChild(div); // lo metemos en el fragmento


document.body.appendChild(fragmento);  //  agrega nuestro  al final del body
// o a este otro (pero no ambos)


document.body.insertBefore(fragmento,docuemnt.body.firstChild); // al principio del body.
```


