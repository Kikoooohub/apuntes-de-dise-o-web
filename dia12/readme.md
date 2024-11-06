Etiqeutas semanticas

ejemplos de etiqeutas no semanticas:Div,Span
-Ejemplos de etiquetas semanticas:form,table,article

## Header
Encabeado de una paguna,seccion o articulo.Inlcuye como logo,Texto introductorio,menus de navegacion.
-Puede haber multiples header en una misma pagina
-No puede haber un header dentro de un footer,o otro header

<div class="header">
<nav></nav>
</div>


<header class="header">
<nav></nav>
</header>

## Footer

Pie de pagina de un sitio web o una seccion

-puede haber multiples footers en una misma pagina
-puede incluir informacion como:
-Informacion de contacto
-Enlaces a RRSS(redes sociales)
-Mapa de sitio
-Formulario de contacto
-Creditos

## Nav 
Un conjunot de enlances de navegacion

-No todos los links deben estar dentro de Nav("<a></a>") deben de estar dentro de nav,ya que e-readers pueden omitir los navs al leer el contenido.

## Main

El contenedor para el contenido principal de la pagina.

-debe haber uno solo
-el main no debe inluir contenido de otras secciones,por ejemplo logos,sidebar,navegacion,etc.
-No puede ser hijo de etiqutas:article,aside,footer,header,nav.

## Aside
Define un contenido relacionado indirectamente con el contenido principal,por ej:un sidebar.

elementos que suelen estar en un aside son:
-Publicidad
-Biografia del autor
-Enlaces relacionados
-Inforamacion

## Seccion
Define una seccion de una pagina,donde se agrupa los contenidos relacionados,normalmente incluye un titulo.Una web se compone de multiples secciones y cada una con su propio contenido y proposito

Ejemplos
-Capitulo
-Itruduccion
-Noticias
-Informacion de contacto


## Article

Define un contenido independiente".El mismo puede ser compartido o reutilizado en otro sitio sin requerir contenxto.

-Suele incluir un titulo
Ejemplos de uso:
-un post
-un articulo
-comentario de un usuario
-tarjeta de un producto´

tanto las secciones con los articulos,pueden estar uno dentro del otro.

## Figure

Define elementos autocontenidos,como  una imagen,un diagrama o grafico,una tabla,una fotografia etc.
Dentro de ella se suele utilizar"figcaption",para describir este contenido.
<figure>
<img src="ruta-de-imagen.png"  alt="Mi imagen">
<figcaption>Fig1. -Imagen de prueba</figcaption>
</figure>

## Mark

define un texto resaltado,normalmente se muestre con un fondo amarillo.