# Function call

A function call is 2 expressions separated by whitespace.

However, if the parser only finds a `Primitive` it will return the `Primitive`,
without emitting an error.

```ebnf
Function call = Primitive, Primitive* ;
```

As far as the syntax is concerned, any expression
can be used as a function.

It's implemented this way to allow first-class functions, currying and partial application.

```misti
// Here, `10` would be the function and `20` the parameter
(10) 20

(10 20) 30

10 20
```

However, it is still semantically incorrect.

## Currying

Misti implements currying, and function calls are left-associative.

```misti
add 10 20

// Equivalent
(add 10) 20
```
