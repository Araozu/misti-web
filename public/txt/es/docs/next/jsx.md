# JSX &rarr; KSX

> Experimental

Se propone utilizar la sintaxis propia de KScript en lugar de una sintaxis especial:

```jsx
// JSX
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

```
// KSX
from "react" import React, {useState}

fun Example () =
    const [count, setCount] = useState 0
    
    #div [
        #p "You clicked {count} times"
        #button {onClick #(setCount (count + 1)}
            "Click me"
    ]
```

## API

La única sintáxis nueva sería el uso de `#` para indicar una etiqueta de JSX.

```
// Escribir
#div

// Equivale a
<div></div>
```

Los atributos del elemento se pasan dentro de un objeto.

```
// Escribir
#div {className "contenedor"}

// Equivale a
<div className={"contenedor"}></div>
```

El último parámetro determina los hijos del elemento, y puede ser un string, array o `undefined`.

### String

```
// Escribir
#div {className "contenedor"} "Hola mundo"

// Equivale a
<div className={"contenedor"}>Hola mundo</div>
```

### Array

Si se pasa un array se definen varios hijos

```
// Escribir
#div {className "contenedor"} [
    #h1 "Blog"
    #br
    #p "Bienvenido a mi blog"
]

// Equivale a
<div className={"contenedor"}>
    <h1>Blog</h1>
    <br />
    <p>Bienvenido a mi blog<p>
</div>

```

## Ejemplo

Se pueden usar todo lo que ya se usa con React.

```
from "aphrodite" import {Stylesheet, css}

const estilos = Stylesheet.create {
    contenedor {
        border "solid 1px #dedede"
        padding "20px"
        margin "0"
    }
    titulo {
        color "#23bf87"
        fontSize "1.25rem"
        margin "0"
        padding "2rem 1rem"
    }
}

// Crear un elemento Titulo
fun Titulo props =
    #h1 {className css estilos.titulo} "Bienvenido, {props.usuario.nombre}!"


fun PantallaBienvenida () =
    // Crear un array de p
    const elementos = [1, 2, 3].map #(#p {key $1} "Elemento {$}")
    
    
    #div {className css estilos.contenedor} [
        #Titulo {usuario {nombre "Pedro"}}
        #br
        elementos
    ]
```

Los parámetros pueden ser dinámicos, gracias a 
[JSX spread attributes](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes).
