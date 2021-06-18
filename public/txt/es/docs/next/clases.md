# Clases

> En diseño

Similar a Kotlin:

```
class Persona @nombre @edad =

    fun decirNombre () =
        console.log @nombre

    fun decirEdad () =
        console.log @edad

```

## Constructor

El constructor es parte de la definición de la clase:

```
class Animal nombre =
    // ...
    
const gato = new Animal "gato"
```

En este caso `nombre` es el parametro del constructor.
Es similar a la forma en la que se definen funciones.

Un constructor sin parametros se escribe así:

```
class Ente =
    // ...
```

## Cuerpo del constructor: `init`

Para ejecutar codigo en el constructor se usa un bloque init:

```
class Gato nombre =
    init =
        console.log "Inicializando Gato con nombre {nombre}"
```

El código dentro del bloque `init` se ejecuta cuando se crea la clase, y tiene acceso a los parámetros.

## Asignar propiedades de la clase

Se pueden asignar las propiedades dentro del bloque init:

```
class Gato nombre =
    init =
        @nombre = nombre
```

KS brinda azúcar sintáctico para este caso:

```
class Gato @nombre =
    // ...
```

Ambos fragmentos de código son equivalentes

## Clase sin cuerpo

Usando la sintaxis anterior se pueden crear clases que solo contengan datos, sin métodos:

```
class Persona @nombre

const p = new Persona "Juan"
```

## Clase vacia

Para una clase sin cuerpo y sin parámetros se usa:

```
class Vacio ()

const v = new Vacio()
```

Los paréntesis son obligatorios.

## Métodos

Los métodos son funciones dentro de la clase:

```
class Gato @nombre =

    fun maullar () =
        console.log "Miau!"
        
    fun decirNombre () =
        console.log @nombre
```

Los métodos no tienen acceso a los parámetros de la clase que no usan `@`:

```
class Cuadrado @largo color =

    // No tiene acceso al parametro color
    fun imprimirDatos () =
        console.log color //= undefined
```

## Métodos estáticos

```
class GatoBuilder @nombre =
    static fun build () =
        // ...
```

## Parametros anotados

Para anotar el tipo de dato de los parametros se usa la misma sintaxis que para anotar funciones.

```
class Persona (nombre: string) (edad: number) =
    // ...
```

## Herencia

Se usa dos puntos para denotar herencia

```
class Figura @color

class Rectangulo color @largo @ancho : Figura color
```

Los 2 puntos denotan la herencia.

## Genericos

```
class ListaEnlazada 'T =
    // ...
```
