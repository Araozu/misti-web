# Tuplas

> En diseño

## Definición

```
const coordenada = (10, 20)
```

Los paréntesis son obligatorios.

## Acceso

Se pueden acceder mediante pattern matching (próximamente) o como arrays.

```
const (x, y) = coordenada

const x = coordenada[0]
const y = coordenada[1]
```

## Escritura

Las tuplas son inmutables, no se pueden modificar sus valores.
Todas las tuplas son envueltas con `Object.freeze`

## Anotación

Los paréntesis son obligatorios en la anotación.

```
const coordenada: (number, number) = (10, 20)
```
