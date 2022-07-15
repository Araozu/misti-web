# Function call

A function call can either be:
- An identifier, followed by 1 expression
- An expression enclosed by parens, followed by 1 expression
- A function call, followed by 1 expression

```ebnf
function call = identifier, expression
              | enclosed expr, expression
              | function call, expression
              ;
```

This is done to simplify the parsing.

The only way to reference a function is by its name, or as the result
of other operation.

Technically, one could do the following:

```misti
// Here, `10` would be the function and `20` the parameter
(10) 20

(10 20) 30

10 20
```

That would provoke an error, but in the semantic phase of the compiler.
