

// ESTO ES UN EJEMPLO DE VARIABLE GLOBAL.


let mensajeGlobal = "Hola, soy una variable global"; // Variable global

function mostrarMensaje() {
    console.log(mensajeGlobal); // La usamos dentro de esta función
}

function cambiarMensaje() {
    mensajeGlobal = "He sido cambiado"; // Cambiamos su valor desde aquí
}

console.log(mensajeGlobal); // Imprime: Hola, soy una variable global
mostrarMensaje(); // Imprime: Hola, soy una variable global

cambiarMensaje(); // Cambia el valor de la variable global
console.log(mensajeGlobal); // Imprime: He sido cambiado

//-------------------------------------------------------------------------

// ESTO ES UN EJEMPLO DE VARIBALE LOCAL.

function saludar() {

    let mensajeLocal = "Hola soy una variable local";  // Variable local
    console.log(mensajeLocal);
}
saludar();
console.log(mensajeLocal);//  Error: mensajeLocal no esta definido!



//--------------------------------------------------------------------------
// ESTO ES UN EJEMPLO DE UNA VARIBALE DE BLOQUE

{
    let mensaje = "Hola desde el bloque";
    console.log(mensaje); // aqui funciona
}

console.log(mensaje)// Error:mensaje no esta definido fuera del bloque!



// otro ejemplo practico de variables de bloque

function saludar() {
if (true) {
let resultado = 42;
console.log (resultado) ;
}
console.log (resultado) ; // Error: Eso pasa porque,"resultado esta definido dentro de "if"!
}


//-----------------------------------------------------
// ESTO ES UN EJEMPLO DE OPERADORES DE COMPARACION.


//IGUALDAD
console.log(5 == "5"); // true (porque convierte "5" a número)
console.log(5 == 5);   // true
console.log(5 == 10);  // false

//IGUALDAD ESTRICTA
console.log(5 === "5"); // false (porque uno es número y el otro string)
console.log(5 === 5);   // true

//DESIGUALDAD
console.log(5 != "5"); // false (porque considera que "5" es igual a 5)
console.log(5 != 10);  // true


//DESIGUALAD ESTRICTA
console.log(5 !== "5"); // true (porque el tipo es diferente)
console.log(5 !== 5);   // false

//MAYOR QUE
console.log(10 > 5); // true
console.log(5 > 10); // false

//MENOR QUE
console.log(3 < 7); // true
console.log(10 < 2); // false


//MAYOR O IGUAL QUE
console.log(5 <= 5); // true
console.log(2 <= 1); // false



//EJEMPLO PRACTICO

let edad = 18;
if( edad>=18){
    console.log("Eres mayor de edad"); //Esto se ejecuta
}else {
    console.log("Eres menor de edad");
}

console.log (edad === "18" ) ; //  false ( porque tipo string no es igual a tipo numero)
console,log (edad == "18" ) // true (porque convierte "18" a numero)


// buena practica es usar simpre los operadores de compracion estrictos para evitar errores con tipos de datos!!!!!



  //"hola" 	Truthy	Actúa como true
//0  	Falsy	Actúa como false
//false	Falsy	Es estrictamente false
//{} (objeto vacío)	Truthy	Actúa como true
//"" (cadena vacía)	Falsy	Actúa como false
