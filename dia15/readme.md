# Unidades de Medidas en CSS:px,%,em,rem

## Pixels
-Son unidades absolutas,que representan un punto en la pantalla..Son ideales para tamaños que deben ser precisos y no cambiar en relacion con otros elemntos.No se adaptan a diseños responsive.

# Porecentajes(%)

-Se adapta al tamaño del padre.
-Es unidad relative al tamaño del elemento padre.Por ejemplo si un elemnto tiene 200px y el hijo tiene 50%,entonces el elemento ocupara 100px.Son utiles para crear diseños fluidos y responsive que se adapten a distintos tamaños de pantalla.

# EM

(wikipedia EM)

-Se basa al tamaño del padre.
  
  50px y un margen de 3em= 150px

La unidad em es relativa al tamaño de la fuente del elemento del padre.
Ejemplo:Si el padre tiene un font-size:10px , y un margin:3em,el margen sera de 30px.

-esta unidad es util para crear tamaños de texto y margenes que escalen con el tamaño de la fuente.Esto mejora la accsesibilidad y flexibildad del diseño.Es ideal para escalar elemntos proporciaonalmente al texto.Por defecto los navegadores asignan el font-size a 16px.



```css

.card{
    font-size:16px;/*16px*/
    padding:1.5em /* 24px*/
}
.card title{
    font-size:2em; /*32px*/
    margin:2.5em;/*40px*/
}
```
## REM

 Es relative al tamaño de fuente de nuestro elemneto raiz(noramlmente es el<html>).Por defecto esta es de 16px.REM es util para mantener una escala consistente en el documento,independientemente de esrtuctira del DOM.


 -

 ```css
 html{
    font-size:16px
    }
    .card{
        font-size:2em /*32px*/
    }
    .card__title{
        /*el REM ignora el font-size de .card*/
        margon:1rem/*16px*/
    }
     /* 1rem = 16px */
    h1 {
      font-size: 2rem; /* 2rem = 32px */
    }