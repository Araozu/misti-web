# Tipos nulos

> Experimental

KS diferencia tipos nulos y tipos no nulos en las signaturas, es decir que
podemos indicar si una variable puede o no contener null o undefined.
Se indica del siguiente modo:

- Una variable anotada con `string` indica que esa variable contiene un string, mas no undefined.

- Una variable anotada con `string?` indica que esa variable **puede** contener un string o undefined.

KS diferencia entre `null` y `undefined` al igual que JavaScript, y puede realizar
comprobaciones a estos valores cuando sea necesario.

## undefined

Es bastante comun ver y usar `undefined` en JavaScript, así que KS ofrece un alias:
`()`. De ese modo se pueden escribir 2 caracteres en lugar de 9.

```
const indefinido = ()

// Es equivalente a:
const indefinido = undefined
```

## null

`null` es su propio tipo de dato, y su signatura es, pues, null.

```
const n: null = null
```

Null no se puede usar como reemplazo de `undefined`.

## Verificar undefined/null en condicionales

Ver (/#/docs/next/estructuras/condicionales)[Condicionales]

```
if const s = op() do
    // s existe...
else
    // s es null/undefined...
```

## Operadores

### `?`

Devuelve `true` si el valor existe, o `false` si es undefined o null.

```
const s1 = "hola"
s1?  //= true

const s2 = ()
s2?  //= false
```

Se usa principalmente en condicionales para verificar que un valor existe.

```
if segundoNombre? do
    // segundoNombre existe
    console.log "El segundo nombre es ${segundoNombre}."
else
    // segundoNombre es null o undefined
    console.log "No existe segundo nombre."n
```

### `?.`

Dado `a?.b`:

- Si el objeto `a` tiene una propiedad llamada `b`, devuelve esta propiedad.
- Caso contrario devuelve `()`

```
const persona = {
    nombre: "Juan"
    edad: 25
}

persona?.nombre    //= Juan
persona?.apellido  //= ()
```

Se pueden unir varias llamadas con `?.` para verificar que todos existen.

```
persona?.datos?.dni
```

Si `persona` tiene un atributo `datos` y este tiene un atributo `dni` se devuelve este valor.
Caso contrario, toda la expresión devuelve `()`.

### `??`

Dado `a ?? b`:

- Si `a` existe devuelve `a`
- Caso contrario devuelve `b`

```
const s1 = "hola"

s1 ?? "adios"   //= hola

const s2 = ()

s2 ?? "adios"   //= adios
```

Este operador se suele usar junto al operador `?.`:

```
const apellido = persona?.apellido ?? "-"
```

Si `persona` tiene un atributo `apellido` este se asigna a la constante.
Sino, se asigna "-".

### `?|`

Dado `a ?| b`:

- Si `a` existe y es una función, ejecuta la función `a` con el parámetro `b`. Es decir, hace
  `a b`.
- Sino devuelve `()`.

```
localStorage?.getItem ?| "usuario"
```

### `|?`

Dado `b |? a`:

- Si `a` existe y es una función, ejecuta la función `a` con el parámetro `b`. Es decir,
  hace `a b`. Nótese que el orden es el inverso al operador anterior.
- Sino devuelve `()`

```
"usuario" |? localStorage?.getItem
```
