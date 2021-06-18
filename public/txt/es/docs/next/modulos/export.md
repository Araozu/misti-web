# Export

> En diseño

## Contenido

Export funciona como funciona normalmente en JavaScript.

```
export fun sumar x y = x + y

fun restar x y = x - y

fun multiplicar x y = x * y

export { restar, multiplicar as mult }

export default {
    sumar
    restar
    multiplicar
}
```

Sin embargo **no** se puede re-exportar un módulo.

## Discusión

No se puede re-exportar un módulo porque pienso que no ofrece ningún beneficio,
ademas de que complica la sintáxis.
