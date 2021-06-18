# Interpolación de strings

> Experimental

> Los backticks \`\` aun no están soportados por el lexer,
> puede que se muestren incorrectamente.

## Sintáxis

Contrario a JS, no se coloca un signo de dolar y se usan comillas dobles.

```
const nombre = "Juan"
const apellido = "Perez"

const nombreCompleto = "{nombre} {apellido}"
```

## Tagged templates

Usar un string con comillas dobles como parámetro encierra estos en paréntesis:

```
console.log "hola {10 + 20}"

// Se compila a 
console.log(`hola ${10 + 20}`);
```

Para usar tagged templates se usan los backticks:

```
console.log `hola {10 + 20}`

// Se compila a
console.log `hola ${10 + 20}`
```
