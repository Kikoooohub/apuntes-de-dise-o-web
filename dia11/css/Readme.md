
# Media Queries!

declaracion en CSS que nos permite definir los estilios de nuestra web.

## Sintaxis de una MQ
una media query se compone de multiples partes:
- un @media es una palabra clave reservada
-un tipo de media(screen,print,all,spreech)Media type.
-Operadores (and,not,only)
-breakpoint una condicion (max-widht,min-widht,etc)
-un bloque de CSS



```css
/*@media screen and (breakpoint){ }*/

@media screen and (min widht:600px){
    body{
    background:lightgreen;
}
}



```css
/* Combinación de Breakpoints */
@media screen and (min-width: 600px) and (max-width: 800px) {
    body {
        background-color: lightblue;
    }
}

/* Orientación del dispositivo (landspace vs portrait) */
@media screen and (orientation: landscape){
    body {
        background-color: lightblue;
    }
}

/* Modo oscuro */
@media screen and (prefers-color-schema: dark){
    body {
        background-color: black;
        color: white;
    }
}



@Media 
-all:todos los dispositivos
-print:vista previa de impresion
-screen:pantallas a color (tablets,moviles,ordenadores)
-speech:dispositivos que convierten texto a voz
-otros elemntos despreciados:tv,handled,braille,etc.(no se utilizan en CSS)

```css
.no-imprimir{
    dislay:block;
}
@media print{
    .no-imprimir{
        diplay:none
    }
}
```


## Tips para ultilizarlo
- Sobreescriben las reglas CSS,pero no poseen mayor especifificidad por lo tanto los MQ deben ir al final de nuestro CSS.
- Deben ultilizar el mismo selector y reglas para que reemplace las reglas que deseamos.
- Pensar de antemano los breakpoints.
- Podemos utilizar una @media para cada selector o una sola para todos los selectores(recomendada)

-intentemos desarollar siempre primero el movil (mobile first!)

```css
/*moviles*/
.box{}
.p{}

@media screen and(min-widht:600px){
.box{}
.p{}
}
/*pantalla mediana*/
@media screen and(min-widht:1024px){
.box{}
.p{}
}
/*pantalla grande*/
@media screen and(min-widht:2048px){
.box{}
.p{}
}

@media screen and(min-widht:600px){
.box{}
.p{}
}
@media screen and(min-widht:1024px){
.box{}
.p{}
}
@media screen and(min-widht:2048px){
.box{}
.p{}
}
```

## Mobile vs tablets vs Dekstop
Actualizados en 2024- https://www.browserstack.com/guide/common-screen-resolutions


- Mobile(55%):320px-480px
- Tablets(2%)768px-1024px
-Dekstop(43%)1024px-1920px