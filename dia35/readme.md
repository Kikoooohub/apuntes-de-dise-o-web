## Recordamos el uso de  ForEach y Map

-Importante :

La diferencia entre uno y otro es que el forEach  no retorna nada,mientras que el map retorna un nuevo array con los resultados de la funcion que se le pasa.

```js

const numeros = [1,2,3,4,5];
cosnt cuadrados = [];


// Ejemplo utilizando forEach
numeros,forEach( (num) => {
    console.log(num);
    cuadrados.push(num*num);

})
console.log(cuadrados); // [1,4,9,16,25]



const cuadradoMap = numero.map(num => num * num);

   /* return num * num;
    }) 
    console.log(cuadradoMap); */




```

# Metodos de busqueda de Array

-Los metodos de busqueda se podrian considerar como un metodo map() modificada que devuelve tanto elementos tanto ellemntos como booleanos

```javascript	

let lista_coches = ["Peugeot", "BMW", "VW", "Tesla", "Ford", "BYD"];
 const coche = lista_coches.find ( item => item === "BMW");
 console.log(coche);


// Find ( devuelve el primer elemneto que encuentre)

// Some 
const tieneTesla = lista_coches.some( coche => coche === "Tesla" );
console.log(tieneTesla);


// Every 
const todosEmpiezanConB = lista_coches.every(coche = > coche [0] === "B");
cosnole.log(todosEmpiezanConB);// false;


// filter ( todos los elemntos que cumplan el requisito)
//cada elemento que cumpla el requisito como verdadero me lo va ha devolver.
const cochesQueEmpiezanConB = lista_coches.filter ( coche => coche[0] === "B");


const cochesConT = lista_coches.filter ( coche => coche.includes ("T"));


const cochesConTyt = lista_coches.filter ( coche => coche.toLowerCase("t").includes("t"));
console.log ( cochesConTyt);


const cochesDeTresLetras = lista_coches.filter ( coche => coche.lenght === 3);
console.log (cochesDeTresLetras);


```