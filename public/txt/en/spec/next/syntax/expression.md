# Expression

An expression is any code that produces a value.

```ebnf
expression = integer
           | floating
           | string
           | identifier
           | unit
           | enclosed expr
           | function call
           | expression, operator, expression
           ;

// v2
expression    = operator call;
operator call = primary, operator, primary;
unary         = ("!" | "-"), (unary | call);
primary       = integer
              | floating
              | string
              | identifier
              | unit
              | enclosed expr

enclosed expr = left paren, expression, right paren;
```

