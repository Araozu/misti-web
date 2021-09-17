# Condicionales

> Aprobado

## Contenido

Se usan `if`, `do`, `elif` y `else` para definir condicionales.

```
const nombre = "Juan"

if nombre == "Pedro" do
    console.log "Hola Pedro"
elif nombre == "Juan" do
    console.log "Hola Juan"
else
    console.log "Hola forastero"
```

```terminal
Hola Juan
```

No hay un operador ternario `a? b: c`. En su lugar se usan estos condicionales.

## Expresiones

Los condicionales se pueden usar como expresiones, es decir:

```
const mensaje = if edad > 18 do "si"
                else "no"
```

Es importante notar que la indentacion debe ser correcta. Si el `if` inicia en la columna 17,
toda la expresión debe estar indentada desde la columna 17.

A continuación se muestran otros estilos de indentación.

```

const mensaje = if true do
                    console.log "Hola mundo"
                else
                    console.log "Adios mundo"

const mensaje =
    if true do
        console.log "Hola mundo"
    else
        console.log "Adios mundo"
```

## Corto circuito de undefined

Se tiene la siguiente estructura:

```
if const s = obtSegundoNombre() do
    console.log s
else
    console.log "No existe segundo nombre."
```

Si el resultado de `obtSegundoNombre()` no es undefined, este valor se asigna a `s`, y se
ejecuta el código dentro del condicional, en este caso, imprimir en consola.

Si el resultado de `obtSegundoNombre()` **es undefined**, no se crea la constante,
y se ejecuta el código del else, en este caso imprimir "No existe segundo nombre.".

Tambien se puede usar let: `if let s = expr do`.

## Discusión

Se usa `do` en lugar de `then` para que los condicionales sean más concisos.

