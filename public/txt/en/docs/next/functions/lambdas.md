# Lambdas / Anonymous Functions

## Long form

A lambda is created with `fn` followed by parameters, and the body inside
curly braces.

```misti
fn x, y {
    // Body of the lambda
    x + y
}
```

```misti
addOnClickListener fn event {
    // do something
}
```

```misti
val function = fn { /* code */ }
```

The datatypes are optional.

```misti
fn Int x, Int y {
    x + y
}
```


## Short form

The short form omits the `fn` keyword and parameters. 

```misti
// A lambda that returns 20
val lambda = { 20 }
```

Inside it there are special values that act as parameters.

```misti
// The following
{ $1 + 10 }

// is the same as
fn Int p {
    p + 10
}
```

## Function type

```misti
() -> Unit
() -> Str
Int -> Int
// 2 ints as parameters and returns a float
Int, Int -> Float
// A tuple as a parameter has parens.
// 1 tuple as paramater and returns a float. The tuple has 2 ints inside
(Int, Int) -> Float
// Generics
Array['T], Int -> 'T
String, Bool -> T

// Functions as parameters
fun createArrayList['T] Int size -> ArrayList['T] =
    ...

Int -> ArrayList['T]
```

