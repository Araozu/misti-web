# Contratos

> En diseño

KScript cuenta con mecanismos para validar el tipo de dato y valor de una expresión en tiempo de
ejecución. Este mecanismo se conoce como contratos.

## Sintaxis

Para definir contratos se usa el operador `:` junto con expresiones. Por ejemplo, si queremos validar
que una constante es de tipo `number` usando contratos, lo haríamos de la siguiente forma:

```
const id: $ is number = sql.getUsers().[0].id;
```

El contrato está definido entre los operadores `:` y `=`.

Allí el signo de dolar hace referencia a la constante `id`. El operador `is` se usa para validar
un tipo de dato. En este caso se usa para verificar que id es number.

## Validar un tipo de dato

Para validar un tipo de dato se usa el operador `is`. Este operador toma como parámetros una
expresión y un tipo de dato, y devuelve un bool.

Por ejemplo, podemos usarlo para verificar que una variable/constante sea de tipo string,
y ejecutar cierto código si es así

```
if entrada is string do
    ":D"
else
    "D:"
```

## Referenciar el dato a validar

Al colocar el contrato dentro de una declaración o un parámetro, usualmente queremos validar cierta
propiedad. Por ejemplo, si al llamar a un metodo `desconocido()` no sabemos qué tipo de dato obtendremos
podríamos hacer lo siguiente:

```
const valor: valor is Date = desconocido()
```

En este ejemplo el contrato es `valor is Date`, estamos validando que la constante sea de tipo Date.

Sin embargo, si el nombre de la variable fuera más largo el código sería más verboso:

```
const valorDesconocido: valorDesconocido is Date = desconocido()
```

Para no repetir el nombre de la constante podemos usar un símbolo de dolar `$` en su lugar:

```
const valorDesconocido: $ is Date = desconocido()
```

## Validar un valor

También se puede validar el valor de una declaración o parámetro. En este caso se usan operadores comunes:

```
// Queremos verificar que la edad sea mayor o igual a 18
const edad: $ >= 18 = preguntarEdad()
```

Se pueden colocar varias expresiones:

```
// Y que tambien sea menor a 40
const edad: $ >= 18 && $ < 40 = preguntarEdad()
```

## Precondiciones

Se pueden colocar dichos contratos en los parámetros de una función. Por ejemplo, una función que divide 2
números se puede definir así:

```
fun dividir
| dividendo: $ is number
| divisor: $ is number && $ != 0
=
    x / y
```

Aquí estamos validando los parámetros de la función. Validamos que `dividendo` sea un número y que `divisor`
sea un número diferente de 0.

## Postcondiciones

Dada la función anterior, queremos validar que esta función siempre retorne un número:

```
fun dividir
| dividendo: $ is number
| divisor: $ is number && $ != 0
: $ is number && !(Number.isNan $)
=
    x / y
```

La postcondición está definida en la 4ta linea.
