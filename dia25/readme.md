## Scope (alcance) de variables.

En JS  las variables tienen 3 tipos de diferentes alcances.

# Global

Son accesibles desde cualquier parte del codigo.
```html
<script>
    let nombre = "juan"
    </script>

    <script>
let nombre="juan";

function saludar(){
    console.log("Hola"+ nombre);
}
console.log(nombre)//Juan
saludar();// Hola Juan
        </script>


```
```js
let nombre="juan";

function saludar(){
    console.log("Hola"+ nombre);
}
console.log(nombre)//Juan
saludar();// Hola Juan

```
# Local
           
     Son varibale definidas dentro de funciones.

     ```js
     function saludar(){

        let nombre="Juan"; // Variable local
        console.log("Hola"+nombre);//ok

     }

     console.log(nombre);//Error :"nombre" no esta definida

     saludar(); //imprime "Hola Juan"
```
## Bloque

Las variables con`let`o `const` dentro de un  bloque
(`{}`) solo accesesible dentro de ese bloque.Algunos ejemplos de bloque son `son` p
`for`.

    


```js
if(true){
let nombre = "Juan";
console.log("Hola" + nombre);// Hola Juan
}

console.log("Hola"+ nombre); // Error:"nombre" is not defined


```

## Hoisting

En js cuando definimos una variable con"var"
 estas se mueven al inicio del script.

 Al usar let o const estas varibles no se eleveran al inicio del script(para evitar errores).



# Operadores de comparacion.


Se utilizan para comparar 2 valores.


```js
let numero=10
let esPar = (numero %2 == 0) // true
let esInpar = (numero %2 == 1); // true

```

-Igual (==):Compara a ver si 2 valores son iguales
-Estrictamenete igual(===): Si tienes 2 valores son iguales y del mismo tipo.
-Distinto(!=):Compara si 2 valores son distintos.
-Estricatamente distinto
-Mayor que (>):Compara si un valor es menor qu otro.
-Menor que(<):Compara si un valor es menor que otro.
-Mayor o gual que: (>=) Ver si un valor es mayor o igual que otro
-Menor o igual que:(<=) Ver si un valor es menor o igual que otro
```js

let num1="5";
let num2=5;

const sonIguales = (num1==num2); // true
const sonIguales = (num1===num2); // false

```
## Truthy y Falsy

Las variables en JS pueden tener un valor de "truthy" o "falsy", Un valor " truthy" es aquel que se evalua como verdadero en un contexto booleoano,mientras que el "falsy" se evalua como falso.

Podemos usar esta propiedad para la toma de decisiones en nuestro codigo.

/////freecodecamp.com   -check this out!//////


Valores falsy:
`undefined,null,NaN,0,""(cadena vacia) y false`

```js
let edad = 18;
if(edad >=18){
    //se ejecuta si el valor es truthy
    console.log("Soy mayor de edad")
}else{
    //se ejecuta  si el valor es falsy
    console.log("Soy menor de edad");
}

```

```js

let numero = 16;
if(numero == 0){
    console.log("soy par");
}else{
    console.log("soy impar");
}



// 16%2 = 0 ... y 0 es falsy

if(numero%2){
    console.log("soy par");
}else{
    console.log("soy impar");
}

```

## Reduccion de condicionales quitando el else

Podemos simplificar nuestro codigo condicional quitando el else.Esto es util cuando no necesitamos un bloque falsy o cuando tenemos multiples condiciones.


neal.fun


```js

let user="cei";
let pass="abc123";

let mensaje "CORRECTA: Clave incorrecta";

if(pass.length <= 8) {
    mensaje="INCORRECTA:La pass debe tener al menos 8 characteres";
}
if(pass.includes)(user) {
    mensaje= "INCORRECTA: La pass no puede incluir tu nombre de usuario";
}





 // "abc 123"=== "Abc 123"  
if(pass.toLowerCase)(==user)  mensaje=" INCORRECTA:La pass debe tener al menos una mayuscula";

    if(pass.length <= 8) {mensaje="INCORRECTA:La pass debe tener al menos 8 characteres";}
}
if(pass.icnludes)(user) { mensaje= "INCORRECTA: La pass no puede incluir tu nombre de usuario";
}

 // "abc 123"=== "Abc 123"  
if(pass.toLowerCase)(==user) { mensaje=" INCORRECTA:La pass debe tener al menos una mayuscula";}

console.log(mensaje); //clave correcta o incorrecta
```


## Manipulacion de textos

1.Concatenacion
```js
let nombre"Lucas";
let apellido="Perez"
let nombreCompleto = nombre + apellido; // LucasPerez

// Concactanera utilizado +=

let saludo = "Hola" ;
saludo + = "Como estas?"
console.log (saludo); // Hola,como estas?
```








2. Interpolacion
Con las plantillas literales (template literals/tempplate strings),pueden insertar variables o expresiones dentro de una cadena usando"${}".

```js
let nombre = "Ana";
let edad = 25;

//intercopalacion 
let mensaje = `Hola,mi nombre es ${nombre} y tengo ${edad} años`;


// insertar  expresion
let total = 50;
let iva = 0.21;
console.log(` El total con impuestos es: ${total + total * iva}`);


```


3. Metodos de strings