# Operadores

> En diseño

KS permite declarar operadores de la siguiente manera:

```
fun \<*> x y = x.concat y 
```

Al colocar una barra invertida se señala que estamos declarando un operador.
Luego podemos usar el operador (sin la comilla).

```
const res = "Hola " <*> "mundo"
```

## Notacion prefija

Si a cualquier operador le colocamos una barra invertida al inicio, este se trata
como una función normal, es decir, de [forma prefija](https://es.wikipedia.org/wiki/Notaci%C3%B3n_polaca).

```
\+ 10 20  // Es equivalente a 10 + 20

const r = \+ 10 20
console.log r  //= 30
```

Esto es útil para definir funciones anónimas rápidamente. Por ejemplo, si queremos sumar
20 a todos los elementos de un array tenemos 4 opciones:

```
// Declarar una funcion adicional y pasarla como parametro
fun sumar20 x = 20 + x
numeros.map sumar20

// Función anónima
numeros.map (fn x -> 20 + x)

// Función anónima compacta
numeros.map #(20 + $1)

// Operador infijo
numeros.map (\+ 20)
```

## Operadores con más de 3 parámetros

Si un operador tiene más de 3 parámetros se le aplica currying automáticamente,
de ese modo pasa a tener 2 parámetros, y devolver una función con los parámetros restantes.

```
fun \>*> n1 n2 n3 = n1 + n2 + n3

// Es equivalente a
fun \>*> n1 n2 = fn n3 -> n1 + n2 + n3
```

Del mismo modo, si se llama a un operador de forma infija con más de 2 parámetros, se trasforma
en lo siguiente:

```
\+ 10 20 30

// Se transforma en
(10 + 20) 30
```
