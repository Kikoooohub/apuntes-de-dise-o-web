## Repaso de funciones

```js


function suma(a,b){
// let resultado = a+b;
// return resultado;
return a+b;

}

console.log(suma(5,3));// 8
const res = suma(24,-3);//res = 21


//-----------------------------------

// funciones anonimas
  const cuadrado = function(a){
    return a*a
}

const res =cuadrado(3); // 9
let res2 = cuadrado(5); // 25

//-----------------------------------

//funciones flecha

//fuicnion que devuleve el cubo de numero

const cubo = (a) => {
    return a * a * a;
}
const res3 = cubo(3); //27






// funcion flecha con 1 solo parametro y sin return
//Recibe un numero y devuelve el doble de ese numero
// optimizacion 1: quitar parametros cuando tengo 1 solo parametro
// si mi codigo tiene una sola linea,puedo devolverlo sin llaves,mi return.

const doble = a => a * 2;


console.log(doble(3)); // 6
```
