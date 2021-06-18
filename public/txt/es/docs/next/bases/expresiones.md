# Expresiones

> En uso

En KS y varios lenguajes de programación funcionales se dice que todo es una expresión.
Si vienes de un lenguaje que no cuenta con esta característica, puede que no entiendas
muy bien qué significa esto.

## Composición

Se puede pensar en las expresiones como piezas de lego. Se pueden juntar para formar cosas
mas grandes, y no hay (muchos) límites en cómo se pueden juntar.

Un ejemplo sencillo se ven en las matemáticas. Una expresión matemática es un conjunto de
símbolos que, en cierto orden, producen un resultado. Por ejemplo, ejecutar `1 + 1`
produce como resultado `2`.

Entonces, la composición se da cuando se juntan varias sub-expresiones. Podemos juntar
la expresión anterior con una nueva expresión, `1 + 1 + 2`, lo cual se ejecutaría como:

```
1 + 1 + 2
(1 + 1) + 2
2 + 2
4
```

Y así sucesivamente. Si sabemos que la suma es una expresión, podemos componer todas las
suma que querramos. Si sabemos que la resta es una expresión, podemos componer todas las
restas que querramos. Y mas aun, podemos componer sumas y restas. Y así sucesivamente.

Para aplicar este concepto en programación, debemos saber qué estructuras del lenguaje
son expresiones, y qué resultado dan.

Por ejemplo, los condicionales son una expresión.

```
if condicion do
    10
else
    20
```

¿Cómo es esto una expresión? De la siguiente forma:

- Si `condicion` es verdadero, se devuelve la expresión dentro del bloque `if`. En este caso `10`.
- Si `condicion` es falso, se devuelve la expresión dentro del bloque `else`. En este caso `20`.

Entonces, los condicionales son una expresión porque se pueden ejecutar, y devuelven un valor.
Y ya que los condicionales devuelven un valor, podemos usarlos para inicializar una variable:

```
const resultado =
    if condicion do
        10
    else
        20
```

En este caso, el valor de `resultado` es el resultado de la expresión condicional, cuyo resultado
depende de `condicion`.

Si por ejemplo, `condicion` fuera verdadero, `resultado` tendría como valor `10`.

```
const condicion = true

const resultado =
    if condicion do
        10
    else
        20

console.log resultado
```

```terminal
10
```

Caso contrario su valor sería `20`.

```
const condicion = false

const resultado =
    if condicion do
        10
    else
        20

console.log resultado
```

```terminal
20
```

Y como dentro de `if` o `else` se ejecuta una expresión, tambien podemos anidarlos.

```
if c1 do
    if c2 do
        10
    else
        20
else
    if c2 do
        30
    else
        40

```

## Técnicamente, todo es una expresión

No siempre tiene sentido que todos los componentes sean una expresión. Por ejemplo, no tendría mucho
sentido lo siguiente:

```
const numero1 = const numero2 = 30
```

¿Cúal sería el valor de numero1? Para saberlo hay que saber qué devuelve la declaración de constantes.
Este valor es `()`. Entonces, `numero1` tiene como valor `()`.

De ese modo se tratan las estructuras que no tienen sentido componer.

