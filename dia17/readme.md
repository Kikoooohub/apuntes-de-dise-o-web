# Transition CSS

## que son

es una forma de cambiar los valores de una propiedad de manera suave y gradual.Se pueden aplicar transiciones a cualquier propiedad que acepte valores numericos o de color.
Por ejemplo:
-cambiar tamaño,color de fondo,opacidad,etc.

Propiedades numericas:
-widht
-margin
-padding
-font-size
-border-widht
-opacity(0-1)
-transform(tiene propiedades como:scale,rotate,-translate,etc)

Propiedades de color:
-color
-background-color
-border-color
-box-shadow

## Como se define
Utilizamos la propiedad `transition` y se pueden personalizar de la siguente manera: 

- `transitions-property`: nos indica la propiedad que se animara.
- `transitions-duration`: duracion de la animacion.
- `transition-timing-funcion`: La manera en que se llevara a cabo la animacion.
- `transition-delay`: demora antes de que inicie la animacion.

```css
div{
    transition-property:font-size;
    transition-duration:4s;
    transition-delay:2s;
    transition-timing-function :ease-in-out;

    /*unificar las 4 reglas en 1*/
    /*transition:<property><duration><timing-funcion><delay>*/
    transiton:font-size 4s ease-in-out 2s;
}
```
### Cubic-Bezeier

Es una funcion que permite crear una curva de velocidad personalizado.
https://cubic-bezier.com

```css
div{
    transitions-timing-function:cubic-bezeier:cubic-bezier(.54,.13,.31,.55);
}
```