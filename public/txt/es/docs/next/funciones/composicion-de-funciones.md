# Composición de funciones

> En diseño

Toma 2 funciones y devuelve una nueva función que compone las 2.

Por ejemplo, se crea la funcion `sumar10` que suma 10 al parámetro,
y la función `multiplicar2` que multiplica por 2 el parámetro. Al componer estas 2
funciones se crea una nueva función que suma 10 y multiplica 2 a la vez.

```
fun sumar10 x = x + 10

fun multiplicar2 x = x * 2

// Composición pasa aquí
sumar10 >> multiplicar2

```

También hay composición izquierda.

```
const sumarYMult = sumar10 << multiplicar2

console.log <| sumarYMult 10
```

```terminal
30
```

## Ejemplo detallado

La composicion de funciones es dificil de comprender la primera vez que uno
se encuentra con lenguajes funcionales, así que en esta sección se explica
más detalladamente.

Vamos a definir 2 funciones, probarlas, componerlas, y probar el resultado.
Espero que tras esta sección entiendas el concepto de composición de funciones.

### Primera función: sumar10

La primera función se llama `sumar10`, toma un parámetro, le
suma 10 y lo devuelve. Mostramos la definición y una prueba.

```
fun sumar10 x =
    x + 10

console.log (sumar10 5)
console.log (sumar10 23)
```

```terminal
15
23
```

La función es sencilla y fácil de entender. Sin embargo, para confirmar
que la estamos llamando vamos a imprimir un mensaje dentro de la función.

```
fun sumar10 x =
    console.log "Llamando a sumar10 con" x
    x + 10

console.log (sumar10 5)
```

```terminal
Llamando a sumar10 con 5
15
```

Vemos que se imprime el mensaje correctamente, y el resultado es el esperado.
La siguente función será similar.

### Segunda función: multiplicar5

La segunda función toma un parámetro, lo multiplica por 5 y lo devuelve.
También imprimirá un mensaje.

```
fun multiplicar5 x =
    console.log "Llamando a multiplicar5 con" x
    x * 5

console.log (multiplicar5 3)
```

```terminal
Llamando a multiplicar5 con 3
15
```

Del mismo modo, la función funciona adecuadamente. Ahora, vamos a ver una función
adicional.

### Función componer

Ahora vamos a crear una nueva función llamada `componer`, y la vamos a construir paso a paso.
Va a tomar un parámetro, llamará a la función `sumar10` definida anteriormente y devolverá el
resultado.

```
fun componer x =
    sumar10 x

console.log (componer 10)
```

```terminal
Llamando a sumar10 con 10
20
```

Vemos que el comportamiento es el esperado. Ahora, vamos a cambiar la función para
que almacene el resultado de `sumar10` en una constante, llame `multiplicar5` con esta
variable, y devuelva el resultado.

```
fun componer x =
    const resultado1 = sumar10 x
    multiplicar5 resultado1

console.log (componer 10)
```

```terminal
Llamando a sumar10 con 10
Llamando a multiplicar5 con 20
100
```

Al llamar `sumar10` con 10 se imprime el mensaje y se almacena el resultado `20`
en la constante `resultado1`. Luego se llama `multiplicar5` con el valor almacenado
en la variable (en este caso 20), imprime el mensaje y devuelve el resultado
que es `100`.

En el siguiente fragmento nos deshacemos de la constante. El codigo funcionará de la
misma manera.

```
fun componer x =
    multiplicar5 (sumar10 x)

console.log (componer 10)
```

```terminal
Llamando a sumar10 con 10
Llamando a multiplicar5 con 20
100
```

### Devolviendo una nueva función

El siguiente cambio que haremos es que en lugar de ejecutar las funciones,
devolveremos una función, la cual será la que llame a `sumar10` y `multiplicar5`.

```
fun componer x =
    fn ->
        multiplicar5 (sumar10 x)

const funcionCompuesta = componer 10
console.log (funcionCompuesta ())
```

```terminal
Llamando a sumar10 con 10
Llamando a multiplicar5 con 20
100
```

El código cambió bastante. Ahora dentro de `componer` creamos una función anónima
con `fn ->` que ejecutará las funciones. Esta función anónima no toma parámetros.

Luego creamos una constante `funcionCompuesta`, cuyo valor es la función anónima
que definimos dentro de `componer`.

Finalmente, llamamos la función `funcionCompuesta` e imprimimos su resultado.

### Moviendo el parámetro

Vamos a hacer el penúltimo cambio a la función: Mover el parámetro a la función anónima.

```
fun componer () =
    fn x ->
        multiplicar5 (sumar10 x)

const funcionCompuesta = componer()
console.log (funcionCompuesta 10)
```

```terminal
Llamando a sumar10 con 10
Llamando a multiplicar5 con 20
100
```

Ahora `componer` no toma ningún parámetro, y la función anónima si. Es un cambio
menor pero importante.

Vamos a repasar lo que sabemos de la función componer hasta ahora:

- No toma ningún parámetro

- Devuelve una función anónima, que:

  - Toma un parámetro
  - Llama a `sumar10` y `multiplicar5` con el parámetro
  - Devuelve el resultado.

### Generalizando `sumar10` y `multiplicar5`

Terminado este paso habremos creado nuestra propia función componer. Lo que vamos a
hacer es que dentro de la función anónima se puedan usar cualquier función, no
solamente `sumar10` y `multiplicar5`. El código es el siguiente:

```
fun componer funcion1 funcion2 =
    fn x ->
        funcion2 (funcion1 x)

const funcionCompuesta = componer sumar10 multiplicar5
console.log (funcionCompuesta 10)
```

```terminal
Llamando a sumar10 con 10
Llamando a multiplicar5 con 20
100
```

Una vez más, hay varios cambios importantes. `componer` ahora toma 2 parámetros,
`funcion1` y `funcion2`. Como dicen los nombres, estos deben ser funciones.

Dentro de la función anónima usamos esas funciones en lugar de `sumar10` y `multiplicar5`.

Finalmente, a la hora de llamar a `componer` pasamos como parámetros nuestras funciones
`sumar10` y `multiplicar5` para que se puedan usar dentro de la función anónima.

Esta última función es la función componer completa, que toma 2 funciones como parámetros, y
devuelve una nueva función. Esta nueva función a su vez toma 1 parámetro, y llama a las 2
funciones pasadas como parámetros.

### Bonus 1: Simplificar la función

Aquí simplemente se retoca la forma en la que está definida la función para que sea
más fácil de leer. Sin embargo su uso no cambia.

```
fun componer f g = fn x -> g (f x)
```

### Bonus 2: Tranformar la función a operador

Aquí se transforma la función a un operador, el cual se usó en el ejemplo al inicio de la
página. Espero que con la información mostrada anteriormente puedas entender qué hace
el operador.

```
fun (>>) f g = fn x -> g (f x)

const funcionCompuesta = sumar10 >> multiplicar5
```

### Bonus 3: Composición inversa

Este operador hace lo mismo que el anterior, excepto que las funciones se aplican al revés.

```
fun (<<) f g = fn x -> f (g x)

const funcionCompuesta = multiplicar5 << sumar10
```

### Bonus 4: Aún más compacto

Aprovecha el hecho de que los operadores con más de 2 parámetros cuentan con currying.

```
fun (>>) f g x = g (f x)

fun (<<) f g x = f (g x)
```
### Bonus 5: Signatura

```
(>>): ('a -> 'b) ('b -> 'c) -> ('a -> 'c)

(<<): ('b -> 'c) ('a -> 'b) -> ('a -> 'c)
```
