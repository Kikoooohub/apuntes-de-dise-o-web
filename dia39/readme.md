# Funciones de callback /Promesas


## Concepto de Sicnronia vs Asincronia

La sincronia es la ejuccione de tareas en un orden secuencial,es decir una detras de otras.


```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    // esperar 3 segundos
    esperar(3000);
    console.log("Paso 2");
};

function esperar(miliSegundos){
    const start
    
}
```

La asincronia es la ejjucion de tareas NO  secuenciales ,es decir se puede ejecutar antes de que la anterior haya terminado.

Esto se usa para:
-traer informacion de una base de datos(DB)
-traer informacion API
-Manipular nuestros propios archivos

Para lograr esto,simplemente debemos enviar como paramentro una funcion de callback que se ejecuta al finaliar la tarea.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    // esperar 3 segundos
    setTimeout( ()=>{
        console.log("Paso 2");
    },3000);
    
};

```
Como debemos esperar a que una tarea asincrona termine para poder continuar con la siguiente ,se utilizan los callbacks para realizar una accion despues de que la tarea asincrona ha terminado.




## Fucniones de Callback




## Promesas

-La gran desventaja de los callback es que se pueden anidar y se vuelven muy dificiles de leer y mantener.A esto se llama `Callback Hell`.Por eso se han creado las `Promesas`



Una promesa es un objeto que representa la terminacion o el fracaso de una operacion asincrona.

Puede tener uno de estos 3 estados.
-Pnediente :cuando aun no se ha completado y no se sabe si se va a cumplir o no.
-resuelta:(con resolve),cuando se ha completado con exito
-reachazada :(con reject),cuando ocurrio un error.



```js
const miPromesa=  new Promise ( (resolve,reject)=> {
    console.log ("Intentando hacer lo que te prometi");
    //.....
    setTimeout(()=> {
        resolve("EXITO!");

        //no pude cumplir la promesa
        //reject("ERROR,no encontre los archivos que pediste");




    },3000)
});


miPromesa.then(resultado => console.log (resultado))
.catch (error => console.log ("Tuve un error:",error))
.finally ( () => console.log ("Termina la tarea (con error o exito"))

```


-Las promesas se puede encadenar:
```js

miPromesa.then(result => {
    console.log(result);
    return"Exito2!";
}).then(result => {
    console.log(result);
    return"Exito3!";
}).then(result => {
    console.log(result);
    return"Exito4!";
}).then(result => {console.log(result);
}).catch(error =>console.log("Tuve error",error));


```

## Fetch con promesas  .then() y .catch()


Uno de los usos fundamentales de las promesa ses le fetch API para hacer peticiones web(http).
La fucnion fetch() nos devuelve una promesa.





```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(jsonString=> {
  //  return JSON.parse(jsonString);
//})
.then( response => response.json())
.then(datos => {
    console.log ("Mis datos son..",datos.title);
})
.catch(error => console.log("Tuvimos un error al traer los datos:",error));

```


## Fetch con async/await