# Signatura

> En diseño

## Signatura general

```
number number -> string
```

Dentro de una funcion se usa el estilo de F#.

```
fun f (x: number) (y: number) : string = // ...
```

## Funciones genéricas

En un futuro se espera implementar generalización de tipos. Por el momento, se
definen usando la sintaxis:

```
fun elementoDeArray 'T (arr: [T]) pos = arr[pos]
```
