# Javascript

Es un lenguaje de programacion de alto nivel,interpretado y orientado a objetos.Se uitiliza para crear contenido dinamico e interactivo en sitios web.

Lenguaje de alto nivel:
-esta diseñado para ser facil de leer y escribir para humanos.


Interpretado:
-Se ejecuta linea por linea y en tiempo real.No necesita ser compilado.

```js

let numero=1;
console.log("Mi numero vale:",numero);
//imrpime"Mi nukmero vale:1"
numero = numero + 2;
console.log("Mi numero ahora vale:",numero);
//Imprime"Mi numero ahora vale:3";



```

metodos:queryselectos.log


Orientada a objetos:

JS utiliza un paradigma(OOP),lo que significa que organiza el codigo en "objetos".Un objeto es una coleccion de propiedades y metododoso que se pueden leer y manipular.

Perro
//Propiedades
-color:blacno y negro
-nombre:Lassie
size.grande
cantidadDePatas:4

//
-ladrar():Hacer un ruido feurte
-comer():ingerir alimentos
-moverLaCola():demostrar  felicidad moviendo la cola

```js
//ejemplo de  un objeto con propiedades y metodos

let alumno={
    nombre:"Juan",
    edad:16
    saludar;function(){
        console.log("Hola,mi nombre es Juan");
    }
}

//Quiero imrimir los datos de mi alumno

console.log(alumno.nombre);//Juan
console.log("Me llamo",alumno.nombre" y tengo",alumno.edad,"años");

//Me llamo Juan y tengo 16 años

//Para que el alumno me salude uso:

 alumno.saludar();



 let alumno={
    actividades:{
        lugar:"afuera",
        practicar:funciot(){"hacer la actividad"}
    }
    edad:25
 }
 alumno.actividades.lugar
 ```

 ## Donde probar/codificar JS

 -En el navegador:en la pestaña de consola,escribimos directamente.
 -En etiquetas de html"<script></script> en un principio se recomineda poner las etiqutas al final dl body.
 -Se puede usar en archivos externos con extension".js" y linkeado a nuestro HTML."<script src="./js/mi-archivo.js"></script>
-En sitios web externos:
-1. https://playcode.io/new
 2. https://linangdata.com/javascript-tester/
 3. https://codepen.io/
 4. https://jsfiddle.net/

 ## Funcionalidades
 
 1.Manipulacion del DOM(Document Object Model):Agregar,modificar o eliminar elementos HTML y CSS.

 2.Procesar Formularios:
 Verificar datos ingresados por el usuario y realizar formularios complejos de multiples secciones.

 3.Se puede manejo de animaciones:Manipular efectos visuales y animaciones en nuestro web.Hace que vuelvas a la misma pagina,cuando terminan las fotos.

 4.Manejo de Eventos:Responder a las acciones del usurarios.Ej:click,desplazarse por la web.

 5.Comunicaion asincrona con servidores mediante Ajax/Fetch:enviar y recibir datos de un servidor sin tener que recargar la pagina


## Variables
>Son como CAJAS/CUBOS/Valdes/ que utilizamos para guardar informacion.Esta info puede ser un numero,un texto,una lista de cosas, y muchos otros tipos mas.Nos permite almacenar datos y luego usarlos o modicarlos en diferentes partes de nuestro programa.
> Definir una variable:Asignarle un nombre para encontrarla mas adelanete.
> Asignar un valor:Es un poner cosa dentro de la caja,se realiza con el simbolo"=".

En JS las variables se declaran con la palabra `let` o `const`. Antes se utilizaba la palabra `var` como valor.

```js
let nombre="Sofia";
let edad=35;
const PI=3.14159;

nombre="Sofia";// actualizamos con Tilde  

PI=4 //devuelve error
```

## Comentarios en JS

-Simple `//`

-Simple en la misma linea `nombre="Sofia" ; // soy comentario`

-Bloque:`/*......*/

-Comentario de documentacion:se utiliza /**.....*/  para bloques de documentacion,este se usa para comentarios de fucniones y clases.Sirve para comentar una funcion.

```js
//soy simple

nombre="sofi";//soy simple detras de linea.


/*
soy multilinea
*/
/**
 * Esta es una funcion que suma 2 numeros
 * la obte de sesta url: http://mis.sumas.com
 * 
 * @param {number} a-El primer numero
 * @param {number} b-El segundo numero
 * @return {number} La suma de los 2 numeros ateriores(a+b)
 * 
 *  En estos comentarios se explica que es cada cosa.*/

fucntion sumar(a,b){
    return a+b;
}


/*-----------------------------------------------+
+         Aca empieza el codigo de la Galeria    +
+----------------------------------------------+*/


```

## Tipos de datos para nuestros variables

- Numeros:enteros,decimales,postivos,negativos.(los decimales son con   "."  .ej:3.5)
- Cadena de texto(Strings):textos,palabras,frases,1 letra.Van entre commilas dobre,triples y simples o backticks".

- Booleanos:True/False (true,false).
- Lista de cosas(Arrays):Se escriben entre corchetes[] y se separan con comas ",".
- Objeeto(Objetos):Coleccion de propiedades(caracteristicas) y metodos(funcionalidades) y se escriben con {}

```js

//Primitivos
let texto="Hola aalumnos de CEI";
let textoConComillas='Hola estoy "bien"';
let textoConComillasSimples="I'm Tomi":
//template string
let texto=`Puedo usar comillas 'Simples y "Dobles"`;

let numeros=123
let numeros2="123";
nuemros2=Number(numeros2);//coveierte strings a numeros

let entero=25
let decimal=22.30;
let negativo=-5;
const PI=3.14;
let num1234= Number("1234");//1234

let estaPrendido=false;
let isPrimary=true;
let onActive=false;
let esMenorDeEdad=true;


//Referenciales

//objetos o arrays (son constantes)
//Listas/arrays/arreglos
//Te lleva a otro lado
//Todas la refernciales van con const


const alumnosDeDW= ("Daniel","Jaime","Laura",)
const edades =(25,32,30,29);
const listaMix = [1,"Juan",true, {edad:18,nombre:"Laura"};

const listaCompras=["tomate","lechuga"];
listaCompras=["tomate,"Lechuga","papa"];//OK;

console.log(listaCompras[0]);//tomate
console.log(listaCompras[2]);//papa

}

const alumno = {
    nombre: "Juan",
    edad: 16
    saludar:function(name) {
        console.log("Hoal",+name,"Mi nombre es Juan")
    }

}


```