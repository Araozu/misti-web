# Objetos

## Estructura

No se usan dos puntos para delimitar la clave y el valor. En su lugar,
el primer identificador es la clave, y el resto es el valor.

Las comas son opcionales si el objeto ocupa varias lineas.

Las llaves son obligatorias.

```
const persona = {
    nombre "Abel"
    edad 32
}

const persona = {nombre "Abel", edad 32}

const persona = {nombre, edad}
const persona = {
    nombre
    edad
}

persona.nombre
persona.edad
```

## Anotaciones

> Experimental

```
const persona = {
    nombre: string "Abel"
    edad: number 32
}
```

## Signatura

Para la signatura se usa dos puntos.

```
const persona: {nombre: string, edad: number} = {
    nombre "Abel"
    edad 32
}
```

## Métodos

```
const persona = {
    nombre "Juan"
    apellido "Perez"
    nombreCompleto fn () ->
        @nombre + " " + @apellido
}

persona.nombreCompleto ()  //: Juan Perez
```

## this

Se pueder usar `this` o `@`.

```
const producto = {
    nombre "Leche"
    precio 20
    descuento 0.05
    fn precioFinal ->
        const precio = this.precio
        const descuento = @descuento

        precio - (precio * descuento)
}
```
