## Metodos de strings


Javascript nos ofrece una variedad de metodods para manipular una cadenas de textos.Algunos ejemplos comunes son:

a.  toUpperCase() y toLowerCase()

Convierte todas las letras de una cadena en mayusculas.


b. split()
 -Divide una d¡cadena en una lista/array basada en un seperador.Crea una lista con comillas divide palabra por palabra con comillas " !!!!!!

 c. slice()
 -Extrae una porcion de la cadena basada en indices de inicio y fin.

 El fin es sin incluir el indice final!

 ```js

 const texto = "El total con impusetos es";
 ["E","l"," ","t",....];
```

 d. replace()

 -Reemplaza una parte de la cadena por otra.(La primera ocuurencia).
 

 e.  trim

 Elimina los espacios en blanco al inicio y fin dfe la cadena.   "hola........


 f.  `Includes`()

 -Verifica si una cadena contiene un subcadena especifica.

 g.  `startWith y endWith``

-Verifica si una cadena comienza o termina con una subcadena especifica.

h.   `repeat`()

- Repite una cadena un numero especifico de veces.

```js
let text ="Me encanta JavaScript";

console.log(text.toUppperCase()); // ME ENCANTA JAVASCRIPT

console.log(text.toLowerCase()); //  me encanta javascript



// split

const palabras = text.split(" ");
console.log (pabaras); // ["Me","encanta","JavaScript"];

const palabras_2 = text.split("encanta");
console.log(palabras_2); // ["Me" , "JavaScript"]

let csv = "rojo,verde,azul"
console.log("Lista de colores: " ,csv.split);


//slice

let frase = "Aprender javascript es divertido";
console.log ( "Parte de frase:",frase.slice(9,19)) // javascript
console.log ("Desde el indice 9 al final: ",frase.slice(9)); //"javascript es divertido";

//replace

let frase ="Hola mundo,hola universo";
console.log ("Reemplazar 'hola' por 'Hola': ", frase.replace("hola","Hola"));

console.log ("Reemplazar todos los 'hola' por 'Hola'; " , frase.replace(/hola/g,"Hola")); //regX (expresiones regulares)



//trim

let frase = "      Hola mi  nombre es Luka " ;
console.log( " Luego de hacer trim: "frase.trim()   ); // " Hola mi nombre es Luka

//includes 
let frase = "El sol brilla en e cielo";
console.log("Contiene 'sol'?: ", frase.includes("sol"));
console.log("Contiene 'luna'?: ",frase.includes("luna"));


// startWith y endsWith

let frase = "Jvascript es genial";

console.log("Empieza con'Java'?: ", frase.startWith("Java"));
console.log("Termina con genial'?:" , frase.endsWith("genial"));



// repeat

let risa ="Ja";
console.log("Me causa mucha gracia: ",risa.repeat(3)); //JaJaJa




```

Podemos combinar los metodos

```JS
let frase = "   no me gusta Javascript en diseño web    ";


let resultado = frase.trim().  //elimina espcaios en blacno
                             toUpperCase(). // covierte el texto a mayusculas
                             replace("NO ME GUSTA","ME ENCANTA"); // reemplaza texto en mayusculas porque el metodo anterior le hizo toUpperCase().

                             console.log(resultado); // ME ENCANTA JAVASCRIPT EN DISEÑO WEB

                             ```
                             