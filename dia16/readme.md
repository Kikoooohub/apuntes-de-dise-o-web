## Grid CSS

-Es un sistema para cracion de Layouts del estilo de tablas.Se compone de filas y columnas,y se pueden añadir unos dentro de otras.

[Juego CSS descripcion]

Su ventaja frente a flex es que podemos crear layouts complejos con pocas lineas de codigo.

-No es opuesto a flex ni a float,se pueden combinar entre ellos.

 -Utilizamos `dipslay:grid` para crear un grid y grid-templete-columns y `grid-templete-rows`para definir el de filas y columnas que tendra mi grid.


```css


/*sistema de 3x3*/

.container{
    display:grid
    grid-templete-rows:100px 100px 50px-
     


    grid-templete-columns:100px 100px 100px/*esta es la mas angosta*/
}
```
-----------------------------------------------------

Podmeos indicar a cada item donde posocionarlo con reglas grid-row-start,
grid-row-end,grid-column-start, y grid-column-end.

Tener en cuenta que se cuenta desde 1 y no de 0!

Si queremos que un item que ocupe 3 columnas y 1 fila,deberiamos indicar que comienze en la columna 1 y termine en la columna 4,Que comienze en la fila 1 y termine en la fila 2.

```css
/*Tenemos un container de 3 filas y 4 columnas*/
/*El item-1 va ir desde columna 1 a la 4 (3columnas)
el item-1 va ir desde la fila 1 al fila 2(1fila)*/
```


```css
.item{
grid-column-start:4;
grid-column-end:1;
grid-row-start:2;
grid-row-end:1;
}
```

En vez de seleccionar inicio y fin de fila/col,podemos usar `span`para indicar cuanto se expande nuestro item.

```css
.item-1{
grid-column-start:1;
grid-column-end:span 2;
grid-row-start:1;
grid-row-end:span 3;/* se aplica 2 bloques mas(total:3)*/
}
```

Se puede utilizar la regla reducida span para expandir el objeto:



```css
.item-1{
grid-column:span 2;
grid-row:span 2;
}
```

Se puede simplificar la regla grid-column-start/end en una sola usando el simbolo "/".


```css
.item{
grid-column:1/4;
grid-row:1/4;
}
```
Se puede simplificar aun mas utilizando ``grid-area``.

```css
/*grid-row-start/grid-col-start/grid-row-end/grid-col-end*/.

.container{
    display:grid;
    ....
    grid-area:1/1/4/4;
    grid-gap:10px;/* mismo valor para filas y columnas*/
    grid-gap:1em 3em;

}
```

Si agreagamod mas bloques dentro de nuestro grid que cantidad de filas y columnas,grid creara automaticamente una nueva fila.Esto se llama `grid-implicita`.Podemos usar `grid-auto-rows:100px`.Para definir el tamaño de nuevas celdas.

```css


/*sistema de 3x3*/
 
.container{
    display: grid;
    grid-templete-rows:100px 100px 50px;

/*esta es la mas angosta*/
    grid-templete-columns:100px 100px 100px


    grid-auto-rows:100px;
}
```
Tambien existe el`grid-auto-flow`,que nos permite definir si las nuevas celdas seran filas o columnas.

```css
/*sistema de 3x3*/

.container{
    display: grid;
    grid-templete-rows:100px 100px 50px;
    grid-templete-columns:100px 100px 100px


    /*grid-auto-rows:100px;*/
    grid-auto-flow:column;
    grid-auto-columns:100px;
}
```

En grid poseemos una nueva medida llamada fraccion"fr".

```css
/*sistema de 3x3*/

.container{
    display: grid;
    /*grid-templete-rows:100px 100px 50px;*/

    grid-templete-columns:1fr 2fr 1fr; /*25% 50% 25%*/
    1fr/*toda la pantalla*/


    grid-templete-columns:200px 1fr 1fr;/* el resto de la pnatlla dividida en 2  gracias a "fr".3 columnas 200px y el resto dividido*/.
}
```

## Grid templates areas


Podemos nombrar celdas utilizando "grid-template-areas"

```css
/*container de 3 x 4 */
.container{
    display:grid
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(4,100px)
    grid-gap:10px


grid-template-areas:
"sector1 sector1 sector2"
"sector3 sector3 sector2"
"sector4 sector5 sector5"
"sector4 sector5 sector5";
}





.header{
    grid-area:sector1

}
.caja-2{
    grid-area:sector2

}
.caja-3{
    grid-area:sector3

}
.caja-4{
    grid-area:sector4

}
.caja-5{
    grid-area:sector5

}
https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas



```

-minmax
-repeat
-templates-areas
-auto-fit 