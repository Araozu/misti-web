# Tipos de datos

Los tipos de datos de KS son los mismos de JavaScript, con algunas diferencias.


## String (o Txt)

> `"\"", {caracter-menos-comilla}, "\""`

Los string tienen algunas diferencias respecto a JS.

```
const nombre   = "Juan"
const apellido = "Perez"
```

#### Solo se definen con comillas dobles

En KS no es posible crear strings con comillas simples. Hacerlo significa un error.

```
const strCorrecto   = "Juan"
const strIncorrecto = 'Juan'  //! Error. No se reconoce como string.
```

Las comillas simples se usan para declarar genéricos, que aún no están soportados.

KS soportará interpolación de strings en un futuro. Sin embargo, se haran dentro de comillas dobles y no tildes.

```
const nombre = "Juan"
const nombreCompleto = "${nombre} Perez"  // Proximamente: Juan Perez
```

#### Se concatena con el operador `<>`

Para evitar ambiguedades con el operador `+`, en KS se concatenan los strings con el operador `<>`.

```
"Hola" <> " mundo!"  //= Hola mundo
"Hola" + " mundo:"   //! Error: el operador `+` se usa con números.
```


## Number (o Num)

> `digito, {digito}, [".", digito, {digito}]`

Los números son los mismos de JS. Por ahora no soporta notación cientifica, hexadecimal, octal o binario.

```
const edad = 30
const porcentaje = 0.05
```

Los números usan los operadores comunes.

```
10 + 20  //= 30
45 - 12  //= 33
5 * 2    //= 10
5 / 2    //= 2.5
5 ** 2   //= 25
```


## Boolean (o Bool)

> `"true" | "false"`

Los booleanos también funcionan igual a JS.

```
const terminado = true
const activo = false
```

```
true && false   //= false
true || false   //= true
!true           //= false
```


## Consideraciones

No se puede operar con tipos de datos incompatibles. Por ejemplo, concatenar un string y un número.
KS tampoco cambia los tipos de datos implícitamente.

```
"10" <> 10  //! Error
"10" + 10   //! Error

true + 2    //! Error
```
