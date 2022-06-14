# Function call

A function call consists of 2 or more expressions
together

```ebnf
function call = expression, { expression };
```

Usually the first expression will be an identifier,
but since functions are first-class citizens, they can be
obtained from other expressions.

```misti
function parameter

function parameter1 parameter2
```
