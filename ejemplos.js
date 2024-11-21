let numero1 = 5; // Creamos una variable con valor 5
let numero2 = 10; // Creamos otra variable con valor 10

function sumarNumeros(a, b) {
  // Creamos una función que suma dos valores
  return a + b; // Devuelve el resultado de la suma
}

let resultado = sumarNumeros(numero1, numero2); // Llamamos a la función con las dos variables
console.log("El resultado es:", resultado); // Mostramos el resultado en la consola


// Esto aqui abajo es un ejemplo de como obtener datos de un servidor con Fetch.

fetch("https://jsonplaceholder.typicode.com/posts/1") // Hacemos una petición al servidor
  .then((response) => response.json()) // Convertimos la respuesta a JSON
  .then((data) => {
    console.log("Datos recibidos:", data); // Mostramos los datos en la consola
  })
  .catch((error) => {
    console.error("Error:", error); // Mostramos un error si ocurre algo malo
  });

