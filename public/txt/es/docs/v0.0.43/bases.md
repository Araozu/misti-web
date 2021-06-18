# Bases

## Identificadores

- Inician con guion bajo, una letra o un dolar `$`.
- Luego pueden tener numeros, letras, guiones bajos, comillas simples y dolar `$`.
- No pueden ser un único guion bajo.

```
identificador
IdentificadorValido
_valido'
__identificador'valido'2__

_  //! Invalido.
```

## Constantes

```
const nombre = "Pedro"
```


## Variables

```
let edad = 20

edad = 21  // OK
```

## Tipos de datos

```
// Txt o string
const nombre = "Hola"

// No se usan comillas simples para crear Txt
const canal = 'beta' // Error


// Num o number
let edad = 20


// Bool o boolean
let esSoltero = true
let esCasado  = false
```

## Operadores

```
"Hola" <> "mundo"  //= Hola mundo

10 + 5   //= 15
10 - 5   //= 5
10 * 5   //= 50
10 / 5   //= 2
10 % 5   //= 0
10 ** 5  //= 100000

let numero = 10
numero += 5   //= 15
numero -= 5   //= 10
numero *= 2   //= 20
numero /= 4   //= 5
numero %= 3   //= 2
numero **= 3  //= 8

let i = 0
i++            //= 0
++i            //= 2
i--            //= 2
--i            //= 0

true && false  //= false
true || false  //= true
!true          //= false

10 > 20   //= false
20 >= 20  //= true
15 < 30   //= true
15 <= 15  //= true

// Otros
<|  |>  <<  >>  ?  ?.  ??  ?:  !!
```

No hay operadores para bits.

