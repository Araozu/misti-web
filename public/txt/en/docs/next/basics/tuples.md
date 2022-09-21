# Tuples

Tuples contain a fixed number of values of any datatype. They are denoted with
curly braces.

```misti
val person = {"John", "Doe", 25}
val result = {true, 200}
```

Tuples must have at least 2 elements. If you write a tuple with 1 or 0
elements they would be interpreted as anonymous functions instead.

```misti
{ true, 500.23 }  // This is a tuple with 2 elements

{ 20 }  // This is not a tuple with a single element,
        // this is an anonymous function that returns 20

{}      // This is not a tuple with no elements,
        // This is an anonymous function that returns ()
```

## Signature

```misti
{Str, Str, Int}
```
