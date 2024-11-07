## Grid CSS

-Es un sistema para cracion de Layouts del estilo de tablas.Secompone de filas y columnas,y se pueden anidar unos dentro de otras.

Su ventaja frente a flex es que podemos crear layouts complejos con pocas lineas de codigo.

-No es opuesto a flex ni a float,se pueden combinar entre ellos.

-Utilizamos`dipslay:grid` para crear un grid y grid-templete-columns y `grid-templete-rows`para definir el de filas y columnas quer tendra mi grid.


```css


/*sistema de 3x3*/

.container{
    display:grid
    grid-templete-rows:100px 100px 50px-
     /*esta es la mas angosta*/


    grid-templete-columns:100px 100px 100px
}
```
-----------------------------------------------------

Podmeos indicar a cada item donde posocionarlo con reglas grid-row-start,
grid-row-end,grid-column-start, y grid-column-end.

Tener en cuenta que se cuenta desde 1 y no de 0!

Si queremos que un item ocupe 3 columnas y 1 fila,deberiamos indicar que comienze en la columna 1 y termine en la columna 4,Que comienze en la fila 1 y termine en la fila 2.

```css
/*Tenemos un container de 3 filas y 4 columnas*/
/*El item-1 va ir desde columna 1 a la 4 (3columnas)
el item-1 va ir desde la fila 1 al fila 2(1fila)*/




