# Metodologia SuitCSS
[SuitCSS Oficial]


Suit CSS se utuliza en muchos frameworks como Angular,React,etc.Es una nomencaltura basada en BEM,pero con algunas diferencias.

Sus partes son:"Componentes,"Elemntos",Modificadores","Estados" y "Utilidades"

## Partes 
-ComponentName(PascalCase)
-ComponentName-elementName(-camelCase)
-ComponentName--modifierName(--camelCase)

-ComponentName.isStateofComponent(.isPascalCase,.hasPascalCase,focusPascalCase,.onPascalCase)

-u-utilityName (u-camelCase)

## Components(bloque) y elemntos

```CSS
/*Componentes*/

.-Galeria{}
/*Elementos*/
.Galeria-titulo{}
.Galeria-imagen{}
.Galeria-pieGaleria{}

/*Modificaion*/
.Galeria-principal{}
.Galeria-imagen-extraGrande{}

```

## Estados
-Los estados son como los modificadores,pero "temporales",de un elemtno(activo,inactive,cerrado,abierto) y son indepentienes de los componentes en que se utiliza.

```css


.isActive{}
.Micomponente.isActive{}
.MiGaleria.isActive{}

.MiComponente.onHover{}
.MiComponente.isLoading{}
```


```html
<div class="MiComponente isActive"><div>
    <div class="MiComponente"><div>
        <div class="MiComponente"><div>
            <div class="MiGaleria isActive"><div>
                <div class="MiGaleria "><div>
                    <div class="MiGaleria "><div>

```

## Utilidad

Es una Utilidad que se puede aplicar a Cualquier Etiqueta y que no tiene relacion con el componente.Se escribe con una"u-"al frente.

```css
.u-textCenter{
    text-align:center;
    margin-left:auto;
    margin-right:auto;
}

.u-bgRed{
background-color:red;
}
.u-textRigth{}
.u-textDanger{}

Incluso las utilidades poseen variantes responsive como "u-sm-textCenter","u-md-textCenter","u-lg-textCenter",para aplicar en diferetes tamaños de pantalla