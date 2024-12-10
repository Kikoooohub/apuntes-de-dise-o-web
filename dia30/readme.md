## Bucles :For ,ForEach , While , Do-While,Map

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
// Eso puede ser un ejemplo.
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

// El while se va ha ejecutar si el dato es true
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

//break - se usa para salir del bucle.Leiste break ya esta ha salido del bucle

```

```js
//
let ii = 0;
do {
    console.log(ii);
    ii+;
}while(ii<10);




        let numero = -1;
        let total = 0;
do{
    numero = prompt("ingrese un numero distinto a 0");
            numero = Number(numero);
            total = total + numero;
            

        }while (numero != 0);
        alert(total);



//Bucle Map
//A diferencia del forEach, el metodo Map devuelve una copia del array.
//ninguno de los 2 ,modifica el array original.
//Creates a new array from calling a fucntion 
//does not change 
const lista_nums= [1,2,3,7];
lista_nums.map( (numero,index) =>{
    console.log(`Numero ${numero} en la posiscion ${index}`);


});



// LOFI CAFE



const lista_nums= [1,2,3,7];
const lista_dobles = lista_nums.map((num) => {
    //num = num*2
    return num*2;

    console.log(lista_nums); 
    console.log(lista_dobles);// 2,4,6,14

});
