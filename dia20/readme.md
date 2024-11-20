# Emmet

Ver emmet.html

# Variables Css

Se pueden craer variables para reutilizar valores en distintas partes del codigo

-Mejorar la legibilidad del codigo
Facilitar la actualizacion de los valores

Se pueden crear de manera global en la raiz del documento,que en el caso de webs es
<html>En otros casos por ejemplo en imagenes SVG,es la etiqeta<svg>

```css
:root{
--blue:#1e9ff;
--white:#fff;
--danger:red;
--primary:#aaaccb;
}


.contaienr{
    background-color:var(--blue);
    color:var(--white)
}
.container.dark-mode{
    --primary:#bbbaac;
}


```
# Suit CSS