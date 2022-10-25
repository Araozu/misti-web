# Tuples

Tuples contain a fixed number of values of any datatype. They are denoted with
a hash and curly braces.

```misti
val person = #{"John", "Doe", 25}
val result = #{true, 200}
```

Tuples must have at least 2 elements. A tuple with 1 element is a syntax error.

```misti
#{ true, 500.23 }  // This is a tuple with 2 elements

#{ "Hello" }  // Syntax error

{ 20 }  // This is not a tuple with a single element,
        // this is an anonymous function that returns 20

{}      // This is not a tuple with no elements,
        // This is an anonymous function that returns ()
```

## Signature

```misti
#{Str, Str, Int}

Array[#{Str, Int, Bool}]

(Str, Int) -> #{Str, Int}

(#{Str, Int}) -> Bool
```

## Destructuring

In variable declaration

```misti
val data = #{"String", 322, true}

val #{string, number, boolean} = data
val #{string, _, _} = data
```

In function parameters

```misti
// Without parameter destructuring
fun destructure(#{Str, Int} data) =
    val #{name, age} = data
    // Computations with name, age


// With parameter destructuring
fun destructure(#{Str name, Int age}) =
    // Computations with name, age
    // Note that now there is no way to refer to the whole tuple


// Parameter destructuring with tuple preservation
fun destructure(#{Str name, Int age} data) =
    // Computations with name, age
    // The tuple `data` can still be referred to
```

