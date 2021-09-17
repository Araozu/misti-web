# Arrays

> En diseño

Igual a JS.

## Definición

```
const frutas = ["Manzana", "Naranja", "Pera"]
```

## Acceso

Para acceder a un elemento de un array se coloca un punto antes de los corchetes

```
const primeraFruta = frutas.[0]
```

Esto es así para evitar conflictos con llamadas a funciones:

```
frutas[0]   // Es llamar a la funcion `frutas` con [0] como parametro
frutas [0]  // Es equivalente
// Se compila a `frutas([0])`


frutas.[0]    // Es acceder al elemento en la posición 0
frutas . [0]  // Es equivalente
// Se compila a `frutas[0]`
```

## Escritura

La escritura tambien necesita el punto antes del corchete.

```
frutas.[2] = "Guayaba"
```

## Anotación

La anotación asume que todos los elementos del array son del mismo tipo de dato.

```
// [string]
const frutas: [string] = ["Manzana", "Naranja", "Pera"]
```
