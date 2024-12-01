# Nombres de variables (y selectores)
-UPPERCASE
-Lower case
-title case

camel case: `miClase`
-pascal case: `MiClase`
-`kebab case: `mi-clase`(archivos)
-snake case: `mi_clase`

# Especificidad

La especiificidad es la forma en que los navegadores deciden que regla de CSS se aplica a un elemento.Mientras mas especififca,mas peso tendra,pero tambien sera mas dificil de sobreescribir.

-la primera columna representa los ID

-La segunda columna clases y sus atributos(...),y se pseudo clases(:hover:root:requiered:nth-child(odd),:nth-of-type(3n))

-la tercer columna represta las etiquetas(p,div,ul,li,a).





```css

/* Ejemplo 1 */
#myElement { color: yellow; }
#myElement .myBox { color: green; }

/* Ejemplo 2 */
#myElement { color: green; }
.bodyClass .sectionClass .parentClass[id="myElement"] { color: yellow; }

/* Ejemplo 3 */
:root input { color: green; }
html body main input { color: yellow; }

/* Ejemplo 4 */
input.myClass { color: yellow; }
:root input { color: green; }
input[type="checkbox"] { color: orange; }





```

# Nomencaltura BEM (Block-Elements-Modifier)
-sus nombres son en kebab-case
-bloques".boton",."formulario,."navegacion"
-**elemntos**
