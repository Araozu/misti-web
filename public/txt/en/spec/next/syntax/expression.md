# Expression

An expression is any code that produces a value.

```ebnf
Expression = Primitive
           | Enclosed expression
           ;
```

## Primitive

Represents a primitive value.

```ebnf
Primitive = integer
          | floating
          | string
          | identifier
          | unit
          ;
```

## Enclosed expression

Represents an expression wrapped in parentheses.

```ebnf
Enclosed expression = "(", Expression, ")" ;
```
