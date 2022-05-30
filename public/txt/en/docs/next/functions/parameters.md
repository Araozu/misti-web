# Function parameters


## Function with 1 parameter

Place the parameter's datatype after the function's name, then the name of the parameter.

For example, a function that takes a `Str` as parameter is defined as follows:

```misti
fun sayHello Str name =
    // Body of the function
```

Then the parameter `name` can be used.

```misti
fun sayHello Str name =
    print "Hello {name}"
```

## Function with 2 or more parameters

The parameters are separated with a colon:

```misti
// 2 parameters: x and y, both Int
fun add Int x, Int y -> Int =
    x + y
```

```misti
// 3 parameters
fun substring Str input, Int start, Int end -> Str =
    // Logic...
```

## Generic parameters

Generic parameters consist of a single quote and an uppercase letter.
They are enclosed in square brackets.

```misti
// A generic type
'T

// Now used in a function
fun getItemAt['T] Array['T] arr, Int pos -> 'T =
    // Logic...

// When using a concrete type the single quote is not neccesary
getItemAt[String] array 0
```
