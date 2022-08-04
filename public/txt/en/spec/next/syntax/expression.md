# Expression

An expression is any code that produces a value.

```ebnf
Expression = Function call
           | Primitive
           ;
```

## Function call

A primitive followed by an expression.

```ebnf
Function call = Primitive, Expression ;
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
