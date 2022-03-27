# Start

Misti ~~is~~ will be a 

- functional first
- indentation based
- statically typed

programming language for web assembly via LLVM written in Java.

```misti
fun quicksort Array[T] arr -> Array[T] =
    match arr with
    | x::xs =
        val less = arr.collect {x < $}
        val greater = arr.collect {x > $}
        (uicksort less) ++ Array x ++ (quicksort greater)
    | _ = Array()

fun main Array[Str] args =
    val numbers = Array 10 30 4 897 2 41
    val sortedNumbers = quicksort numbers
    for n in sortedNumbers do
        log n
```

```misti
func[type] argument  // Function, type parameter, argument
func.[idx] argument  // Function, array access, argument

value[Str] // Generic
value [Str] // Generic

value . [0]  // Array access

// Arrays are created with Array param1 param2 ..., not with [param1, param2]
```

## Install

WIP

## About the learn page

It includes topics to begin to learn the language. The formal definition is under the
Spec page.

## Why Java?

The implementation language doesn't matter, if the language
will eventually be self-hosted.

