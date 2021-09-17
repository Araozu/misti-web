# Bases

## Constantes

```
const nombre = "Pedro"

// Como nombre es constante no se puede re-asignar
// La siguiente linea da error.
nombre = "Juan" // Error
```

## Variables

```
let edad = 20

edad = 21  // OK
```

## Tipos de datos

Kan usa los mismos tipos de datos de JS, y siempre inician en mayuscula.

```
// Txt (nuevo nombre de string. Tambien puedes usar String)
const nombre = "Hola"

// No se usan comillas simples para crear Txt
const canal = 'beta' // Error


// Num (o Number)
const edad = 20


// Bool (o Boolean)
const esSoltero = true
const esCasado  = false
```

## Operadores comunes

```
// Txt
// La concatenación se hace con <>
"Hola " <> "mundo"  //: hola mundo

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

1 == 2    //: false
1 != 2    //: true
"1" == 1  // Error. No se pueden comparar Txt y Num

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


## Anotaciones de tipos

```
const nombre: Txt = "Pedro"
const edad: Num = 20
const esSoltero: Bool = false
```

## Inferencia de tipos

Los tipos de datos se infieren automáticamente, no es necesario
anotarlos siempre.
Sin embargo, a veces puede ser útil como aclaración o para
indicarle al compilador qué tipo en especial queremos.

## Expresiones

Todo es una expresion en Kan.

```
const total =
    const precio = 100
    const impuesto = 0.18
    
    precio + (precio * impuesto) // Esta ultima linea actua como 'return'

// total = 118
```

