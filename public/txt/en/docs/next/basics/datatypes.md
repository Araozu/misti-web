# Datatypes

Each datatype lists its differences.

## String

Strings can be declared __only with double quotes__.

```misti
const greeting = "Hello"
const receiver = "world"

// Will throw an error
const exclamationPoint = '!'
```

String interpolation (will) use curly braces.

```misti
const greeting = "Hello"

const fullGreeting = "{greeting} world!"
```

## Number

For now only integer and double notation is supported.

```misti
150
150.45

// Will throw an error (for now)
0b110
0xffa
1.344e+25
```
## Boolean

The same as JavaScript

```
true
false

!true
```

## Other datatypes

will be dealt with in their own sections.
