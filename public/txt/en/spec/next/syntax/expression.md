# Expression

An expression is any code that produces a value.

```ebnf
Expression = Function call ;
```

## Function call

It may be a primitive, or a function call

```ebnf
Function call = Primitive, Primitive* ;
```

## Primitive

Represents a primitive value.

```ebnf
Primitive = integer
          | floating
          | string
          | identifier
          | unit
          | "(", Expression, ")"
          ;
```
