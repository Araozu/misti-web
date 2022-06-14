# Expression

An expression is any code that produces a value.

```ebnf
expression = integer
           | floating
           | string
           | identifier
           | unit
           | function call
           ;
```

Expressions are parsed in a bottom-up way.
