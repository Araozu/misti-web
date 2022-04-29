# Function calls

A function is called by placing its parameters after its name.

```misti
// No parameters: place opening and closing paren
debugState ()

// 1 parameter: place the parameter after the function
val result = fibonacci 20

// 2 or more parameters: place the parameters after the function,
//   and separate them with spaces
val remainder = substract 50 30
val total = add 60 -30 90
```

## Execute calculations inside the parameter

Surround the calculation with parens.

```misti
console.log "The result is:" (10 + 20 - 30)
```
