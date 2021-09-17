# Operadores comunes

> En uso

Los operadores heredados de JavaScript no realizan ningún tipo de
verificación de los tipos de datos. Funcionan igualmente a JavaScript.

```
// Txt
// La concatenación se hace con +, como en JavaScript
"Hola " + "mundo"  //: hola mundo

// Num
4 + 2   //: 6
4 - 2   //: 2
4 * 2   //: 8
4 / 2   //: 2
4 % 2   //: 0
4 ** 2  //: 16

// Bool
1 > 2   //: false
1 >= 2  //: false
1 < 2   //: true
1 <= 2  //: true
"a" < "b"  //: true

1 == "1"   //: true
1 === "1"  //: false

true && false  //: false
true || false  //: true
!true          //: false

// de asignación
// solo funcionan en variables
let num = 10

num += 1   //: 11
num -= 2   //: 9
num *= 2   //: 18
num /= 3   //: 6
num %= 4   //: 2
num **= 3  //: 8
```

## Operadores de incremento/decremento

En KS no existen los operadores de incremento/decremento `++` y `--`, porque se
prefiere el comportamiento funcional. En su lugar se deben incrementar los valores
explícitamente:

```
let i = 0

i + 1
i += 1
```

## Discusión

Eliminado el operador `<>` porque no sería posible incluirlo en todas las llamadas.

