# JSON " Javascript Object Notation"
-Json es un formato de intercambio de datos muy utilizado en la actualidad. es facil de leer y escribir por humano y facil de interpretar y generar por las maquinas .Es muy similar a los objetos JS , con la diferencia de que todas las caracteristicas deben utilizar comillas dobles , y que no se suelen incluir funciones o metodos solo datos ( listas,strings,booleanos,numeros).

```js

let objeto ={
    nombre: "Juan",
    edad: 38,
    "casado":false,
    hijos:null,
    "mascotas": {
        {"nombre" : "firualis","raza","Labarador"}
        {"nombre" :  "Mishi", raza: "Siames"};
    }
    saludar : ()0> { alert ("HOLA")};
}
//con json.stringify convertimos nuestro objeto de JS a un string de JSON
let json = JSON.stringify(objeto);
console.log (objeto);
console.log (json);

// con JSON.parse convertimos un string de JSON  a un objeto JS
let objetoRecuperador = JSON.parse(json);
console.log (objetoRecuperador);
 // hemos perdido al camino los metodos