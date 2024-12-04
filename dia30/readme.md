## Bucles :For ,ForEach , While , Do-While

```js
//Bucle for es un bucle o un bloque que puede ejecutar u codigo ciertas cantidades de veces.
for(let i=0;i<10 ; i++){
    console.log(i);

}
```
Ej :1

-Crear una lista con los nombres de su companeros, y mostrarlos en cosnola con bucle for


Ej :2
-Recrear ej1,usando forEach,y mostrando el indice del alumno.


Ej3:Crear un bucle de while que le pida al usuarioun un numero(promt), y so los vaya sumando hasta que el usuario ingrese el valor 0.Mostar el total
```js
const listaAlumnos=["Maria","Alin","Alejo","Lucia","Kristiyan"];


for(let i=0; i<5 ; i++){
    console.log(listaAlumnos(i));
}

 /* Esto es otro ejemplo
    console.log(listaAlumnos(0));
    console.log(listaAlumnos(1));
    console.log(listaAlumnos(2));

for(listaALumnos=0  listaAlumnos< 5;listaAlumnos++){
    console.log(listaAlumnos);
}
*/

```

```js

//Bucle forEach-A diferencia del for ,trabajamos con un metodo de listas y podemos acceder tanto al valor como a su indice.
// Es puede ser un ejemplo.
/*const listaNumeros = [1,2,3,4,6];
lista.forEach( (numero) => {
console.log(`Elemento ${numero}`);

});*/

const listaNumeros = [1,2,3,4,6];
lista.forEach( (numero,indice) => {
console.log(`Elemento ${numero} y su indice ${indice}`);
});


```

```js
//ej2
const listaPersona=["Maria","Alin","Alejo","Lucia","Kristiyan"]; 

listaPersona.forEach( (persona,indice) => {
console.log(`El alumno ${persona} tiene su indice ${indice+1}`);
});



/* Esto es otro de ejmplo de Ej2
const listaPersona=["Maria","Alin","Alejo","Lucia","Kristiyan"]; 
listaPersona.forEach( (persona,indice) => {
    const item=indice+1;
    console.log(`${item}.${alumno}`);*/


//funciona igual sin los indices.
/*const listaPersona=["Maria","Alin","Alejo","Lucia","Kristiyan"]; 
listaAlumnos.forEach(alumno => console.log(alumno));*/

```

```js
let i=0;
while(i<10){
    console.log(i);
    i++;
}
```

```js

let i= usuario.prompt("Ingrese un numero");
while(i>-10){
    console.log(i);
    i++;
}

