# Metodologia SuitCSS
[SuitCSS Oficial]


Suit CSS se utuliza en muchosframeworks como Angular,React,etc.Es una nomencaltura basada en BEM,pero con algunas diferencias.

Sus partes son:"Componentes,"Elemntos",Modificadores","Estados" y "Utilidades"

## Partes 
-ComponentName(PascalCase)
-ComponentsName-elementName(-camelCase)
-ComponentsName--modifierName(--camelCase)

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
-Los estados son como los modificadores,pero "temporales",de un elemtno(activo,ianctive,cerrado,abierto) y son indepentienes de los componentes en que se utiliza.

```css

```


```html
<div class="MiComponente isActive"><div>
    <div class="MiComponente"><div>
        <div class="MiComponentee"><div>
            <div class="MiGaleria isActive"><div>
                <div class="MiGaleria "><div>
                    <div class="MiGaleria "><div>

```