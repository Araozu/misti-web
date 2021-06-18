# Operadores comunes

KS usa la mayoría de operadores de JS, para facilitar la claridad y consistencia.

## Operadores especiales

Concatenación de texto:

```
"Hola" <> "mundo"  //= Hola mundo
```

Suma de numeros:

```
10.25 + 8.5   //= 18.75
```

## Operadores comunes

Números:

```
10 + 5   //= 15
10 - 5   //= 5
10 * 5   //= 50
10 / 5   //= 2
10 % 5   //= 0
10 ** 5  //= 100000
```

Variables numéricas:

```
let numero = 10

numero += 5   //= 15
numero -= 5   //= 10
numero *= 2   //= 20
numero /= 4   //= 5
numero %= 3   //= 2
numero **= 3  //= 8
```

No hay un operador `<>=` para concatenar un string consigo mismo.

## Incrementos y decrementos

Estos operadores existes para tener compatibilidad con código y usuarios de JS
existentes.

```
let i = 0
i++            //= 0
++i            //= 2
i--            //= 2
--i            //= 0
```

## Operadores lógicos

```
true && false  //= false
true || false  //= true
!true          //= false
```

## Operadores de comparación

Estos operadores son capaces de operar en diferentes tipos de datos.

```
10 > 20   //= false
20 >= 20  //= true
15 < 30   //= true
15 <= 15  //= true
```

La comparación de string se comporta igual a JS.

```
"a" < "A"  //= true
```

Los operadores para probar igualdad funcionan diferente a JS:

- Los operadores `==` y `!=` comparan el valor, y no permiten diferentes tipos de datos.
  
  Funciona de la siguiente manera:
  
  ```
  10 == 10  //= true, los dos valores son iguales
  15 != 15  //= false, los dos valores no son diferentes.
  
  "10" == 10  //! Error: no se pueden comparar un string y number.
  "15" != 15  //! Error: no se pueden comparar un string  y number.
  ```
  
  Intentar comparar dos valores con tipos diferentes resulta en un error.
  
  Compara profundamente los valores, por lo tanto:
  
  ```
  [0, 1, 2] == [0, 1, 2]  //= true
  [0, 1]    == [0, 1, 2]  //= false
  ```
  
  Esto tambien funciona con objetos.
  
- Los operadores `===` y `!==` comparan direcciones de memoria.

  En lugar de comparar el valor, este operador compara referencias. Por ejemplo:
  
  ```
  const arr = [0, 1, 2]
  
  arr === [0, 1, 2]  //= false
  arr === arr        //= true
  ```

## Operadores con bits

Estos operadores no existen en KS, porque han sido reemplazados con otros operadores usados en programación funcional.

Los siguientes operadores **no** funcionan igual que JS:

`~  <<  >>  >>>  &  |  ^  <<=   >>=  >>>=  &=  ^=  |=`

## Operadores adicionales

KS incorpora los siguientes operadores a la libreria estandar para el facil manejo de
programación funcional y tipos nulos:

`<|  |>  <<  >>  ?  ?.  ??  ?:  !!`

Para saber más de estos operadores, visita las secciones de tuberias, composición
de funciones, y tipos nulos.

