# Genéricos

> En diseño

Para los genéricos se usa una sintaxis especial, basada en espacios blancos.

```
class Array 'T =
    // ...
```

La sección `'T` define el genérico. En lugar de colocar `<T>` o `[T]` se usa
una comilla simple.

## En clases

```
class Array 'T tamaño =
    // ...
```

## En funciones

```
fun elementoDeArray 'T arr pos = // ...
```

## En llamadas a clases

```
const arr = new Array 'number 5
```

## En llamadas a funciones

```
const elemento = elementoDeArray 'number [1, 2, 3] 1
```

## Genéricos anidados

Los genericos son asociativos hacia la derecha. Eso quiere decir que `Array 'Array 'number` equivale a
`Array<Array<number>>`
