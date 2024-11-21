# Java script 2(continuacion)

## Mas tipos de datos
-undefined:valor que se asigna una variable,pero que no tiene valor.  NO TIENE VALOR!

-Null:es un valor que se asigna a una variable que no tiene.NO representa NADA(en un principio)

let nombre=Null;

-Nan (Not a number):valor que se asigna cuando se esperaba un numero,pero no se recibio un numero.

let edad = Number("hola como andan"?);//NaN
-Empty:String tiene un valor de ''o ""
## otros tipos de datos

-funcion
-fecha => 

```js

let noDefinido = Undefined;
let nulo = null;
let noEsUnNumero= Nan;
const moverLaCola= function () {}  // se puede hacer con let tambien.
const hoy = new Date();

```
```js
console.log (typeof NoDefinido)://undefined
console.log(typeof vacio); //String
console.log(typeof hoy);//objeto
console.log(typeof moverLaCola);// function

```

## Consola 
```js
//Mensaje informativo
console.log("Este es un mensaje informativo");
//Mensaje de error
console.log("Este es un mensaje de error");
//Mensaje de advertencia
console.warn("Este es un mensaje de advertencia");
//mensaje de informacion
console.info("Este e sun mensaje de info");
//Mensaje de depuracion
console.debug(("Este es un mensaje de depuracion"));
//Tbala de datos
console.table("Manzana","Banana",);



```

# Operadores aritmeticos

Se utilizan por a hacer operaciones matematicas en JS.

-Suma (+): Suma 2 valores
-Restar(-):Resta 2 valores
-Multiplicacion (+):Multiplica 2 valores
-Division (/):Divide 2 valores.
-Modulo(%):Devuelve el resto de la division de enteros de 2 valores.
-Incremento(++):Aumentar en uno le valor de la variable.
-Decremento(--):


```js
let a=10;
let b=5;


let suma= a+b; //15
let resta = a-b; // 5
let multiplicador =a*b; //50
let modulo = a%b; // 0
let incremento = a++;// 11
let decremnto = b--; // 4

let resultado=a+Suma ;// 26(porque use a++ arriba)

b++; 4+1
b++; 5+1
b++; 6+1
console.log(b);// 7


