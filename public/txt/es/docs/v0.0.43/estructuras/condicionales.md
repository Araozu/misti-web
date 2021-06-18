# Condicionales

> En diseño

> `"if", expresion, "do", expresion`,
> <br>
> `{"elif", expresion, "do", expresion},`
> <br>
> `["else", expresion]`

La estructura es la siguiente:

```
if nombre == "Jose Luis" do
    const apodo = "Pepe"
    console.log apodo
```

Se coloca `do` al terminar la condición.

También se puede expresar en una sola linea:

```
if nombre == "Jose Luis" do console.log "Pepe"
```

### Reglas de sintaxis

- Si el código se coloca en la misma linea, solo puede haber 1 expresión

```
if true do "verdadero"
```

- Si el código se coloca en una nueva linea se pueden colocar varias expresiones

```
if true do
    expr1
    expr2
```

- La palabra clave `do` debe estar en la misma linea de la condición.

```
if a && b || c do console.log "correcto"

if a && b || c
do  //! Error de sintaxis
    console.log "incorrecto"
```


