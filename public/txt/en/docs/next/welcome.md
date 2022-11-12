# Welcome

Misti is _yet another_ toy language to replace JavaScript.

It's objectives are:

- Reduce compilation times using Rust.

- Improve code quality by making the language more expressive.
- Make the language easy to understand by using a consistent syntax (at the expense of familiarity).
- Integrate with existing TypeScript definitions by importing and exporting `.d.ts` files.
- Serve as a side project.

The purpose of the language is to address many of the limitations of JS.
To serve that end, __many concepts from JS may be completely omitted
or replaced with different syntax/semantics__.

Such things will be noted in the documentation where neccesary.

## Syntax summary

```misti
//
// Variables and constants
//
var aVariable = 20
val aConstant = 30
aVariable = 40
//            | semi colons not required


// Specify the datatype of a constant
Num aConstant = 30       //  <- `val` is optional

// Specify the datatype of a variable
Num var aVariable = 20   // <- `var` required

// You can assign the result of many operations to a variable
val roi = {
    val income = someIncomeCalculation()
    val investment = 25000
    income / investment   // This will be the value of `roi`
}
```

```misti
//
// Basic datatypes
//
Num number = 40.12345
Bool boolean = true
Str string = "John Doe"
```

```misti
//
// Conditionals
//
if name == "John Doe" {
    val message = "Hello John"
    console.log(message)
} elif name == "Mark" {
    console.log("Hi Mark!")
} else {
    console.log("Hello there")
}

// You can use conditionals as expressions
val response = if risk < 0.2 { "Go ahead" } else { "Don't" }
//                           | Braces are required

// There is no ternary conditional
```

```misti
//
// Arrays
//
val dates = Array(1990, 1995, 2014, 2015, 2017)
//          | There isn't special syntax for array declaration
//            so you can't do `[1990, 1995, ...]`

val firstDate = dates.[0]
//                   | Notice the dot for access                  

dates.[4] = 2018
//   | Dot for mutation

// Array signature
Array[Num] dates = Array(1990, 1995, 2014, 2015, 2017)
//   | Square brackets are used for generics
//     instead of angle brackes.
```

```misti
//
// Tuples
//
val person = #{"John", 30, true}

// Destructuring
var #{name, age, isMarried} = person

// Tuple signature
#{Str, Num, Bool} signature = #{"John", 30, true}
```

```misti
//
// Loops
//
for key in object {
    console.log("key: {key}, value: {object.[key]}")
}

for value of array {
    console.log("value: {value}")
}

while condition {
    print("while")
}
```

```misti
//
// Functions
//
console.log("Enclose the parameters in parens")

add(10, 20)

// Named parameters
substring(input: "Hello, world!", start: 7, end: 12)

// Funtion declaration
fun add(Num x, Num y) -> Num {
    x + y
}

// Function with default value
fun calculate(Num price, Num discount = 0.0) {
    val total = price * (1.0 - discount)
    console.log("Your total is {total}$")
}

calculate(100, 0.25)  // "Your total is 75$"
calculate(100)        // "Your total is 100$"
```


```misti
//
// Objects
//

type Person = {
    Str name,
    Num age,
}

val john = Person {
    name: "John",
    age: 21,
}

// An object with arbitrary keys/values
val randomObject = Obj {
    key1: "Any value"
    key2: 322,
    key3: true,
    key4: Obj {
        key5: "zzz",
    },
    key6: Person {
        name: "Sarah",
        age: 20,
    },
}
```


```misti
//
// Classes
//

// Declare a simple class
class Shape

// Declare a class open for inheritance
open class Shape {
    // Method that can be overrided
    open fun printName() {
        print("Generic Shape")
    }
}

val shape = Shape()
//          | There's no `new` keyword

shape.printName()   // "Generic Shape"


class Rectangle(Num height, Num length) -> Shape() {
//             | Constructor parameters

    // Properties are private
    val vertexCount = 4

    // Methods are public by default
    fun perimeter() {
        (height + length) * 2
    }

    // Private method
    private fun area() {
        height * length
    }

    // Method override
    override fun printName() {
        print("A rectangle")
    }
}

val rectangle = Rectangle(10, 20)
rectangle.perimeter()   // 60
rectangle.printName()   // "A rectangle"


class Square(Num length) -> Rectangle(length, length) {
//                       | Inheritance

    override fun printName() {
        console.log("A square")
    }

    fun printInfo() {
        // Use @ to refer to methods/properties of the parent class
        console.log("A square with perimeter = {@perimeter()} and area = {@area()}")
    }
}
```

```misti
//
// Null safety
//

// Operations that may fail return an Option value
fun divide(Int numerator, Int denominator) -> Option[Num] {
    if denominator == 0 {
        None    // Equivalent to `null`
    } else {
        Some(numerator / denominator)
    }
}

val possibleResult = divide(10, 5)

if val Some(result) = possibleResult {
    print("The result of the division is {result}")
} else {
    print("Division by zero")
}

// `Type?` is syntax sugar for Option[Type]
Num? roi = divide(income, investment)
```

```misti
//
// Error handling
//

// A recoverable error
fun testVersionNumber(Str version) -> Result[Int, Str] {
    if version == "10" {
        Ok(10)
    } elif version == "11" {
        Ok(11)
    } else {
        Err("Invalid version")
    }
}

// Traditional try-catch (may change)
try {
    // some operation
    10
} catch (Error e) {
    // do something
    // must return an expression
    10
}
```







