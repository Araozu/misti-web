# Expresiones

En KS como en varios lenguajes funcionales, todo es una expresión.
Sin embargo, para un programador que no conoce otros lenguajes funcionales como
Haskell, Ocaml, o F#, esta frase no significa nada.

Así que en este documento se explica qué significa que todo sea una expresión,
y por qué es importante.

## ¿Qué es una expresión?

Una expresión es una combinación finita de simbolos, la cual se evalua
y produce un resultado.

Por ejemplo, `1 + 1` contiene 2 números y un operador, los cuales son los símbolos.
Si evaluamos (resolvemos) esta operación, obtenemos como resultado 2. Por lo tanto,
`1 + 1` es una expresión.

KS amplía ese concepto. Por ejemplo, cada una de las siguientes lineas es una expresión:

```
1.5 * 2             //= 3
"Hola" <> " mundo"  //= Hola mundo
true && true        //= true
```

Estas son fáciles de comprender, pero la clave es que toda estructura en KS es una
expresión, y eso veremos a continuación.

## Constantes y variables

Al declarar una constante se tiene la siguiente estructura:

```
const <identificador> = <expresion>
```

Allí reemplazamos `<identificador>` con un nombre, por ejemplo `total`,
y reemplazamos `<expresion>` con un valor, por ejemplo `100 + 20`.

```
const total = 100 + 20
```

Entonces, podemos declarar una constante/variable, y asignarle cualquier expresión.
Veamos cómo nos puede ser útil.


## Declarar una constante/variable es una expresión.

¿Tendría sentido hacer lo siguiente?:

```
const num1 = (sea num2 = 10)
```

Aunque no lo parezca, esto es código válido. Y eso es porque las declaraciones son
expresiones.

¿Qué significa eso? Significa que evaluar el siguiente código devuelve un resultado.

```
const num2 = 10
```

Ese código lo único que hace es asociar `10` al nombre `num2`. Por lo tanto, no devuelve
nada, es decir `undefined`*.


Entonces, podemos decir que el código inicial


```
const num1 = (sea num2 = 10)
```

equivale** a


```
const num1 = undefined
```


## Bloques de código

La siguiente expresión que veremos es el bloque de código.

Un bloque de codigo es un conjunto de una o más expresiones, las cuales se evaluan. 
Tienen la siguiente forma:

```
<expresion_1>
<expresion_2>
...
<expresion_n>
```

Los bloques de código tienen una característica importante: ***Cuando se evalua un bloque de código, se evaluan todas las expresiones que contiene, y se devuelve el valor de 
la última expresión.***

Eso quiere decir que si tenemos el siguiente bloque:

```
10 + 20
45.35 * -14.56
"Hola"
20 + 30
```

y lo evaluamos, pasará lo siguiente:

1. Se evalua `10 + 20`
2. Se evalua `45.32 * -14.56`
3. Se evalua `"Hola"`
4. Se evalua `20 + 30`. Como esta es la última expresión del bloque, se devuelve
   su valor. En este caso, `50`

Como solo se devuelve el valor de la última expresión, los resultados de las primeras 3
expresiones son ignorados.


## Constantes/Variables y bloques de código.

Toda declaración hecha en un bloque, solo es visible en el mismo bloque.
Similar a cómo en JS las variables declaradas dentro de una funcion solo se pueden
usar dentro de la misma función.

Entones, definamos el siguiente bloque:

```
const precioUnitario = 200
const descuento = 0.05     // 5% de descuento
precioUnitario - (precioUnitario * descuento)
```

Cuando se evalue, obtendremos como resultado `190`, el valor de la última expresión.

## Declaraciones y bloques de código

Ahora que sabemos que los bloques son expresiones, podemos hacer lo siguiente:

```
const total =
    const precioUnitario = 200
    const descuento = 0.05     // 5% de descuento
    precioUnitario - (precioUnitario * descuento)
```

Para usar el bloque como valor de `total`, tenemos que indentarlo.

Así, el valor de `total` es `190`, el cual es el valor del bloque al cual se le asignó.


## Declaraciones y bloques anidados

La estructura vista anteriormente no tiene limitaciones. Es posible escribir código como
el siguiente:

```
const valor1 =
    const valor2 =
        const valor3 = 10
        valor3 * 2
    
    const valor4 = 80
    
    valor4 / valor2
```

Sin embargo, es buena práctica de programación no tener código muy indentado, así que
evita en lo posible hacerlo.

## Dividir expresiones en varias lineas

Si por alguna razon las operaciones que realizas son largas, necesitas sabes las reglas
de indentación para poder dividir una expresión en varias lineas.

A continuación se muestran ejemplos equivalentes:

```
"Este " <> "es " <> "un " <> "texto " <> "largo"

"Este " <> "es " <> "un " <>
"texto " <> "largo"

"Este " <> "es " <> "un "
<> "texto " <> "largo"

"Este " <> "es " <> "un " <>
    "texto " <> "largo"
    
"Este " <> "es " <> "un "
    <> "texto " <> "largo"
```

Se puede colocar el operador al final de la linea, al inicio de la nueva linea o indentado en la nueva linea.

En el siguiente ejemplo vemos cómo se hace lo mismo en una declaración.

```
const txt1 = "Este " <> "es " <> "un " <> "texto " <> "largo"

const txt2 = "Este " <> "es " <> "un " <>
             "texto " <> "largo"
             
const txt3 = "Este " <> "es " <> "un "
             <> "texto " <> "largo"
             
const txt3 = "Este " <> "es " <> "un "
                 <> "texto " <> "largo"

const txt3 = "Este " <> "es " <> "un " <>
                 "texto " <> "largo"
```

Al dividir la expresión es necesario iniciar en la columna en la que inicia la expresión.
Es decir, en:

```
const txt2 = "Este " <> "es " <> "un " <>
             "texto " <> "largo"
```

La expresión inicia en la columna 14, cuando se abre la comilla. Por lo tanto, para que
la siguiente linea se considere como parte de la expresión, debe empezar también en
la columna 14, o más adelante.

Si se continua en una columna anterior, se cuenta como una expresión diferente:

```
const txt2 = "Este " <> "es " <> "un " <>
    "texto " <> "largo"  // Es una expresión diferente.
```


## Consideraciones

Los bloques de código son una estructura fundamental en KS. Es importante que entiendas
cómo funcionan para poder entender el resto de conceptos, como condicionales, bucles,
funciones, etc.


Para declarar un bloque de código, todas las expresiones deben tener la misma indentación.
Por ejemplo, si el bloque inicia con 4 espacios en blanco, todas las expresiones del bloque deben tener 4 espacios en blanco.

```
    const nombre = "Juan"
    const apellido = "Perez"
    nombre <> " " <> apellido
```

Si alguna expresion tiene una cantidad diferente, está fuera del bloque:

```
    const nombre = "Juan"     // Dentro del bloque
    const apellido = "Perez"  // Dentro del bloque
nombre <> " " <> apellido   // Fuera del bloque
```


\* Técnicamente no es `undefined`, sino un valor especial llamado Unidad, el 
cual actua como si fuera `undefined`. No uses `undefined` en tu código, pues obtendrás
un error, en su lugar usa la unidad, que se representa como `()`. Para más información
visita la sección de tipos nulos.
