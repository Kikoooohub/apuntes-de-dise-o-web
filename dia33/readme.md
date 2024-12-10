```js

const alumno = {;
"edad": 33,
"nombre":"Juan",
saludar : function (){
    console.log('Hola ${this.nombre}')
},
saludarConFlecha : ( => {
    console.log(this)
})

alumno.edad = 33;
alumno["nombre"]= "Juan";


//https://www.youtube.com/watch?v=z2mligKvV0A 
//- como presentar el proyecto final