# Estructuras Básicas

## Condicionales

Se coloca `do` luego de cada if/else if para poder diferenciar entre la condición y
la expresión a ejecutar.

```
if 1 + 1 == 3 do
    console.log "1 + 1 = 3"
elif 1 + 1 == 4 do
    console.log "1 + 1 = 4"
else
    console.log "No sé cuanto es 1 + 1"


// En una linea
const esSoltero = false

if esSoltero do "soltero" else "casado"


// Como expresion
const estadoCivil =
    if esSoltero do "soltero"
    else "casado"


// Como expresion en una linea
const estadoCivil = if esSoltero do "soltero" else "casado"


// Como statement
if esSoltero do
    console.log "soltero"

// No hacemos nada si no es soltero.
```


## Switch

Switch tiene una estructura diferente, y contiene caracteristicas de pattern matching.

```
const lenguaje = "F#"

match lenguaje with
| "Lisp" | "Clojure" ->
    console.log "Basado en Lisp"
| "C" | "C++" | "Java" ->
    console.log "Basado en C"
| "F#" | "Haskell" | "Kan" ->
    console.log "Basado en ML"
| "BASIC" -> 
    console.log "Basic"
| _ -> console.log "Lenguaje desconocido"

// Imprime "Basado en ML"
```

## Tuplas

```
const persona = ("Juan", 25)

// Con anotación
const persona: (string, number) = ("Juan", 25)

// Anidado
const tuplaAnonima: ((string, number), boolean) = (("A", 1), false)

// Desestructuracion
const (nombre, edad) = persona
console.log nombre  //= "Juan"
console.log edad    //= 25
```

## Arrays

```
const numeros = [5, 6, 7, 8]
numeros[0]  //= 5

// Anotado
const edades: [number] = [10, 11, 10, 12]

// Anidado
const fragmentos: [[string]] = [["Hola", "Que tal"], ["Adios", "Nos vemos"]]

// Desestructuración
const [primer, ...resto] = numeros
console.log primer  //= 5
console.log resto   //= [6, 7, 8]
```

## Bucles

Se usa la palabra clave `do` para diferenciar entre la condición y la expresión a ejecutar.

### While

```
let numeroActual = 0
while numeroActual < 10 do
    console.log ("El numero actual es " <> numeroActual)
    numeroActual -= 1
```

### For each

```
const productos = {
    p01 := "Leche"
    p02 := "Arroz"
    p03 := "Atún"
}

for (codigo, producto) in productos do
    console.log (codigo <> " -> " <> producto)
```

```
const nombres = ["Juan", "Pedro", "Maria"]

for (posicion, nombre) in nombres do
    console.log (nombre <> " está en la posición " <> posicion)

```
