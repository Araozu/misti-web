# Welcome

Misti is _yet another_ toy language to replace JavaScript.

It's objectives are:

- Reduce compilation time by using Rust.

- Improve code quality by making the language more expressive.
- Make the language easy to understand by using a consistent syntax (at the expense of familiarity).
- Integrate with existing TypeScript definitions by importing and exporting `.d.ts` files.
- Serve as a side project.

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
Int aConstant = 30       //  <- `val` is optional

// Specify the datatype of a variable
Int var aVariable = 20   // <- `var` required
```

```misti
//
// Basic datatypes
//
Int val integer = 40
Float val float = 322.12345
Bool val boolean = true
Str val string = "John Doe"
```

```misti
//
// Conditionals
//
if name == "John Doe" {
    val message = "Hello John"
    print(message)
} elif name == "Mark" {
    print("Hi Mark!")
} else {
    print("Hello there")
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
//               | There isn't special syntax for array declaration

val firstDate = dates.[0]
//                   | Notice the dot for access                  

dates.[4] = 2018
//   | Dot for mutation

// Array signature
Array[Int] dates = Array(1990, 1995, 2014, 2015, 2017)
```

```misti
//
// Tuples
//
val person = #("John", 30, true)

// Destructuring
var #(name, age, isMarried) = person

// Tuple signature
#(Str, Int, Bool) signature = #("John", 30, true)
```

```misti
//
// Loops
//
for item in collection {
    print("for each")
}

while condition {
    print("while")
}
```

```misti
//
// Functions
//
print("Enclose the parameters in parens")

add(10, 20)

// Named parameters
substring(input: "Hello, world!", start: 7, end: 12)

// Funtion declaration
fun greet(Str name) {
    print("Hello {name}")
}

// Function with return
fun add(Int x, Int y) -> Int {
    x + y
}

// Function with default value
fun calculate(Int price, Float discount = 0.0) {
    val total = price * (1.0 - discount)
    print("Your total is {total}$")
}

calculate(100, 0.25)  // "Your total is 75$"
calculate(100)        // "Your total is 100$"
```

```misti
//
// Classes
//

// Declare a simple class
class Shape

// Declare a class open for inheritance
open class Shape() {
    // Method that can be overrided
    open fun printName() {
        print("Generic Shape")
    }
}

val shape = Shape()
shape.printName()   // "Generic Shape"


class Rectangle(Int height, Int length) -> Shape() {
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


class Square(Int length) -> Rectangle(length, length) {
    override fun printName() {
        print("A square")
    }

    fun printInfo() {
        // Use @ to refer to methods/properties of the parent class
        print("A square with perimeter = {@perimeter()} and area = {@area()}")
    }
}
```

```misti
//
// Error handling
//

// Operations that can fail return an Option value
fun divide(Int numerator, Int denominator) -> Option[Int] {
    if denominator == 0 {
        None
    } else {
        Some(numerator / denominator)
    }
}

val result = divide(10 / 5)

if val Some(result) = result1 {
    print("The result of the division is {result}")
} else {
    print("Division by zero")
}


// To specify an error reason Result is used
fun testVersionNumber(Str version) -> Result[Int, Str] {
    if version == "10" {
        Ok(10)
    } elif version == "11" {
        Ok(11)
    } else {
        Err("Invalid version")
    }
}
```







