


//---------------------------------------------------
// 1. Declaro cosntantes
//---------------------------------------------------


const sliderImages = document.querySelector('.Slider-images');
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;



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
 //---------------------------------------------------
// 3. Inicializo los contadores/Ejecutamos nuestro codigo
//---------------------------------------------------
spanTotal.textContent = totalImages;
actualizarContador();


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

