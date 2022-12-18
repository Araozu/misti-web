# Array

An ordered collection of multiple values of a same datatype.

---

## Overview

An array is a data structure that can contain multiple values under the same name.

To create an array write `Array` followed by the elements, separated by commas and enclosed by parens.

```misti
// An array of strings
val fruits = Array("apple", "orange", "banana")

// An array of numbers
val evenNumbers = Array(2, 4, 6, 8)
```

You can specify the datatype of the elements of the array:

```misti
// First way to specify the elements' datatype
Array[Str] fruits = Array("apple", "orange", "banana")

// Second way to specify the elements' datatype
val fruits = Array[Str]("apple", "orange", "banana")
```

## Access a value of an array

You can access the value of an array at a specific position with the following syntax:

```misti
val firstFruit = fruits.[0]

console.log(firstFruit)  //: "apple"
```

