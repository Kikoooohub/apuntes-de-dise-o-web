# Metodos de Arrays

## push()

Añade un nuevo item

```javascript 
let frutas = ["Manzanas","Naranjas","Platanos"] 

let nuevaLongitud = frutas.push("Peras","Bananas");
console.log(nuevaLongitud);
console.log(frutas);

//Pop
//Eliminar el ultimo elemnto del array 
//devuelve el elemnto eliminado
let elementoEleminado = frutas.pop();
console.log(elementoEliminado);
console.log(frutas);

//Shift 
// eliminida el pirmer elemto del array y lo devuelve.

let elementoQuitado = frutas.shift();
console.log(elemetnoQuitado);// Manzanza
cossole.log(frutas);//[Naranjas ,Platanos Peras]

//Unshift
//Es como el push ,pero agrega al princpio,Dveuelve el largo del array
nuevaLongitud = frutas.unshift("sandia","melon");

console.log(nuevaLongitud);
console.log(frutas);//[sandia,melon,narandjas,platos,peras]




//Splice
//posee 3 parametros
//el 1ero: El indice donde se va posicionar
//el 2ndo :La cantidad de elemtnos a eleiminar
// EL 3 er:los elemtos a agregar
//devuelve elementos eliminados

const elementosQuitados = frutas.splice(2,1 "Kiwi","Frutilla");
cosnole.log(elemtosQuitados);//["Naranjas]
console.log(frutas);//[sandia,melon,kiwi,frutilla,platanos,peras



frutas.splice(0,1)// quitando el primer elemento
frutas.splice(-1,1)// quitando el ultimo elemento
frutas.splice(2,2)//quitar 2 elemntos a partir del 2 idice
frutas.splice(-1,0,"Mandarina","Papaya"); //[...]