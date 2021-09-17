# Estructura

> En diseño

> `params = id, {id} | "()"`
> <br>
> `"fun", id, params, "=", expresion`

Las funciones se declaran con la palabra clave `fun`, seguida del nombre de la función, los parámetros,
el signo `=` y el cuerpo de la función.

Por ejemplo, una función que suma 2 números se define así:

```
fun sumar x y =
    x + y
```

En este ejemplo, `sumar` es el nombre de la función, `x` y `y` son parámetros. El valor que devuelve la
función es `x + y`. Al igual que otras estructuras que vimos anteriormente, las funciones devuelven el
valor de la última expresión evaluada.

Para llamar a la función hacemos lo siguiente:

```
sumar 10 20  //= 30
```

Colocamos el nombre de la función, luego los parámetros separados por espacios.

## Realizar cálculos en los parámetros de la función

En JavaScript es común realizar operaciones dentro de los parámetros de una función. Por ejemplo, si
quisieramos imprimir el valor de `10 + 20` por consola, haríamos esto:

```javascript
console.log(10 + 20);  // 30
```

Sin embargo, hacer algo parecido en KS da lugar a un error:

```err
console.log 10 + 20   // NaN
```

Esto se debe a que llamar a una función tiene una menor precedencia que usar un operador. En otras palabras,
el código anterior es equivalente al siguiente:

```
(console.log 10) + 20
```

Llamar a console.log devuelve `()`, y no se le puede sumar 20.

Para conseguir nuestro objetivo debemos encerrar la suma en paréntesis, entonces el resultado será correcto.

```ok
console.log (10 + 20)  // 30
```

## Funciones sin parámetros

Una función que no toma parámetros se define así:

```
fun imprimirHolaMundo () =
    console.log "Hola mundo"

imprimirHolaMundo ()
```

```terminal
Hola mundo
```

Al llamar a la función se coloca `()`.

