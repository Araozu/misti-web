# Funciones anónimas

> En diseño

## Sintaxis regular

Usa la siguiente sintaxis:

```
fn x y -> x + y
```

Los parametros son `x` y `y`, y devuelve `x + y`.

Si la función anónima necesita hacer uso de un `this` dinámico, se usa una flecha
simple `->`.

```
fun descuento -> this.precio * descuento
```

```javascript
function (descuento) {
    return this.precio * descuento;
}
```

Si la función anónima necesita hacer uso de this léxico, se usa una flecha doble `=>`.

```
fun descuento => this.precio * descuento
```

```javascript
(descuento) => this.precio * descuento;
```

Una función anónima que no toma parámetros se escribe así: 

```
fn () -> 200
```

Los paréntesis son obligatorios para mantener consistencia con el resto del lenguaje.

## Sintaxis compacta

Con esta sintaxis se pueden declarar funciones anónimas más cortas:

```
#($1 + $2)
```

```javascript
($1, $2) => $1 + $2;
```

Los parámetros de la función se definen según el uso de `$1, $2, $3`, etc.

Si la función toma un parametro rest se usa `$$`.

```
#($1.concat $$)
```

```javascript
($1, ...$$) => $1.concat($$);
```

Si la función solo toma un parámetro se puede usar `$` en lugar de `$1`:

```
#($)
```

Se compila a:

```javascript
($) => $;
```

Si se usan `$` junto a `$1`, `$2`, etc. entonces `$` se convierte a `$1`:

```
#($1 + $)
```

Se compila a:

```javascript
($1) => $1 + $1;
```
