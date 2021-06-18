# Switch

> En diseño

En lugar de switch, KS tiene pattern matching!

```
const nombre = "Juan"

match nombre with
| "Pedro" -> console.log "Hola Pedro!"
| "Juan"  -> console.log "Hola Juan!"
| _       -> console.log "Hola forastero!"

```

```terminal
Hola Juan!
```

El comodín `_` es similar a `default` en un switch de JS. Acepta cualquier
valor. En el siguiente ejemplo cambiamos el nombre a Perez para demostrar ese
comportamiento.

```
const nombre = "Perez"

match nombre with
| "Pedro" -> console.log "Hola Pedro!"
| "Juan"  -> console.log "Hola Juan!"
| _       -> console.log "Hola forastero!"

```

```terminal
Hola forastero!
```

Una condicion puede tener varios valores, separados por una barra.

```
match nombre with
| "Luis" | "Lucho" -> 
    console.log "Hola Luis"
| _ ->
    console.log "Hola forastero"
```


## Guardias

Supongamos que tenemos el nombre, apellido y edad de una persona en una tupla

```
const persona = ("Juan", "Perez", 30)
```

Y queremos imprimir "Aceptado" si la persona es mayor o igual a 18, "Rechazado" sino.

```
match persona with
| (_, _, edad) ->
    if edad >= 18 then console.log "Aceptado"
    else console.log "Rechazado"
| _ ->
    console.log "Rechazado"
```

En vez de colocar un condicional dentro del match, podemos usar un guardia:

```
match persona with
| (_, _, edad) when edad > 18 ->
    console.log "Aceptado"
| _ ->
    console.log "Rechazado"
```

Tenemos acceso a las variables desestructuradas dentro de la clausula where.

## Discusión

No se usa la sintaxis de switch para diferenciar entre ese y pattern matching.
Switch tiene un comportamiento muy especial, al cual están acostumbrados los
programadores de JavaScript. Al usar una nueva sintaxis nos aseguramos de que
el programador no asuma el mismo comportamiento (porque no lo tiene).
