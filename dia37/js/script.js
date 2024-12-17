


//---------------------------------------------------
// 1. Declaro cosntantes
//---------------------------------------------------


const sliderImages = document.querySelector('.Slider-images');
//const images = document.querySelectorAll('.Slider-img');
const images = []; // lista de elementos HTML con imagenes dentro.
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
let spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length; // devuelve 0,porque images encotre imagenes en el HTML



// lista de imagenes
const listaImagenes = [
    {
        file: "imagen1.jpg", description: "imagen 1"
    },

    { file: "imagen2.jpg", description: "imagen 2" },
    { file: "imagen3.jpg", description: "imagen 3" },
    { file: "imagen4-long.jpg", description: "imagen 4" },
    { file: "imagen1.jpg", description: "imagen 1" },
    { file: "imagen2.jpg", description: "imagen 2" },
    { file: "imagen3.jpg", description: "imagen 3" }
];


// Metodo 2: Lista de imagenes en JSON (string)
/*const listaImagenes_json = `[
{file: "imagen1.jpg", description: "imagen 1"},

    { file: "imagen2.jpg", description: "imagen 2" },
    { file: "imagen3.jpg", description: "imagen 3" },
    { file: "imagen4-long.jpg", description: "imagen4"},
    { file: "imagen1.jpg", description: "imagen 1" },
    { file: "imagen2.jpg", description: "imagen 2" },
    { file: "imagen3.jpg", description: "imagen 3" }
]`;

// con JSON.parse (miStringDeJSON) convertimos de JSON A Objeto JS.
const listaImagenes = JSON.parse(listaImagenes_json);

// Si quisiera convertir de JS a JSON usaria:
const stringJson = JSON.stringify(listaImagenes);
console.log(stringJson);*/

//metodo 3: Lista de imagenes obtenida desde una "API" con promesas/fetch

function traerImagenesAPI(){
    fetch//('https://jsonplaceholder.typicode.com/photos')
    fetch('./basededatos.json').then(response => response.json());// esto es un JSON parse
}



//---------------------------------------------------
// 2. Agrego los eventos de click a los botones
// --------------------------------------------------
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


function nextImage() {
    currentImageIndex++; // incrementa el valor de  la varibale currentImageIndex con 1 ; ++1
    if (currentImageIndex >= images.length) {// si currentImageIndex es igual o mayor que el numero de imagenes
        currentImageIndex = 0;
    }
    actualizarSlider(); // actualiza el slider con la nueva imagen
    actualizarContador(); // actualiza el numero de la imagen actual
}
function prevImage() {  // decrementa el valor de  la varibale currentImageIndex con 1 ; --1
    currentImageIndex--; // esta linea 
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    actualizarSlider();
    actualizarContador();
}
function actualizarSlider() {
    const width = 400;
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}
function actualizarContador() {
    spanActual.textContent = currentImageIndex + 1;
}
function cargarImagenes() {


    listaImagenes.map((imagen) => {
        console.log("Cargando imagenes del objeto js listaImagenes");

        //metodo inseguro y seceptible a inyecion de codigo
        /* sliderImages.innerHTML +=
                `<img src="0" oneerror="alert('tengo acceso a t navegador')"/>`
 
 
            `<img class="Slider-img" src="img/${imagen.file}" alt="${imagen.description}">`;*/




        //METODO SEGURO Y DE MAYOR CONTROL!



        const img = document.createElement('img');// crear etiqueta <img>
        img.classList.add('Slider-img');//agregar clase "Slider-img"
        img.scr = 'img/${imagen.file}';// establecer el src de la imagen
        img.alt = imagen.description;// establecer el alt de la imagen


        //img.textContent ="el texto que quiera dentro de la etiqueta";
        //img.setAttribute('edad',38);   //<img edad=38 />
        //img.addEventListener("clcik en la imagen"); //
        //console.log("click en imagen");
    //})

        sliderImages.appendChild(img); // agregar la imagen al sliderImages



        //images = document.querySelectorAll('.Slider-img');
        images.push(img);    



    });

    // ahora que tenemos el HTML cargado, contamos la cantidad de imagenes.

    totalImages = images.length;
    spanTotal.textContent = totalImages;
    actualizarContador();

};


//---------------------------------------------------
// 3. Inicializo los contadores/Ejecutamos nuestro codigo
//---------------------------------------------------
cargarImagenes();



//---------------------------------------------------
// 4. Fucnionalida de intervalos
// ----------------------------------------------------------------
agregarIntervalo();

sliderImages.addEventListener('mouseover', () => {
    clearInterval(intervalos);
});
sliderImages.addEventListener('mouseout', () => {
    agregarIntervalo();
});
function agregarIntervalo() {
    intervalos = setInterval(nextImage, 1000);
}



