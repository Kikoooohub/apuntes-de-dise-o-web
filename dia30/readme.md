## bucles,for.forEach,While,Do-while


```js

//Bucle for

//for  puedes ejecutar un codigo ciertas cantidas de veces

for(let i=0;i<10; i++){
    console.log(i);
}



//Bucle for Each

//Ejecutar un codigo x cantidat de veces.Muy util para trabajar con indices y podemos acceder tanto al valor como a su indice.

const listaNumeros=[1,2,3,4,6];
listaNumeros.forEach( (numero,indice) => {
    console.log(`Elemento ${numero} y su indice es ${indice}`);
} );



/*let i=0       esto aqui es igual que esto de lo arriba,para esto sirve el bucle for para ahorrarnos codigo.
console.log(i);
i++;

i=1
conosle.log(i);
i++
*/


```

1) crear una lista con los nombres de sus compañeros y mostrarlos en consola con un bucle for



```js
//con .lenght despues de listaAlumnos vez el todo 


const listaAlumnos=["Maria","Alin","Alejo","Lucia","Kristiyan"];
for(let i=0; i<5; i++);
console.log(listaAlumnos[i]);
console.log(listaAlumnos[i]);






```

2)crear ej1,usando for each y mostrando el indice del alumno.


```js
const listaAlumnos=["Maria","Alin","Alejo","Lucia","Kristiyan"];


listaAlumnos.forEach( (alumno,indice) => {
    const item =indice+1;
    console.log(`${item})
console.log(`El alumno ${alumno} tiene su indice  ${indice}`);

)};




```

```js

//BUCLE WHILE(MIENTRAS)
while(i<10){
    console.log(i);
    i++;
}

//ej3

while

    //3)Crear un bucle while que le pida al usuario un numero (prompt)  y los vaya sumando hasta que el usuario ingrese el valor 0.Mostrar el total.