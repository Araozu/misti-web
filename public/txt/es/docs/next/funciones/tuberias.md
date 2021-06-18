# Tuberías

> En diseño

"Conducen" parametros a funciones.

## `<|`

Simplemente aplica la función

```
console.log (1 + 2)
```

se puede hacer

```
console.log <| 1 + 2
```

se compila a:

```javascript
console.log(1 + 2);
```

## `|>`

Permite unir varias funciones.

```
10
    |> sumar5
    |> restar2
    |> multiplicar2
```

```javascript
multiplicar2(restar2(sumar5(10)));
```

## `|.`

Hacer `a b |. c` es equivalente a `(a b).c` en KS, o `a(b).c` en JavaScript.

## `.|`

Hacer `a .| b c` es equivalente a `(b c).a` en KS, o `b(c).a` en JavaScript.

## `?|`

Dado `a ?| b`:

- Si `a` existe y es una función, ejecuta la función `a` con el parámetro `b`. Es decir, hace
  `a b`.
- Sino devuelve `()`.

```
localStorage?.getItem ?| "usuario"
```

## `|?`

Dado `b |? a`:

- Si `a` existe y es una función, ejecuta la función `a` con el parámetro `b`. Es decir,
  hace `a b`. Nótese que el orden es el inverso al operador anterior.
- Sino devuelve `()`

```
"usuario" |? localStorage?.getItem
```
