# Errores

> En diseño

```
try
    // codigo lanza excepciones
with
| Error e ->
    // manejar Error
| SyntaxError e ->
    // Manejar error de sintaxis
| _ ->
    // manejar cualquiera
```
