# Variables and Constants

Misti uses `const` and `let`, and they behave similar to JavaScript.

At the time of writing, variables and constants must always be initialized.

```misti
let accumulator = 0
accumulator += 1

const path = "/public/txt/en/docs/next/basics/variables-and-constants.md"

// Will give an error
let unassigned
```

## Identifiers

Misti's identifiers are the same as JavaScript, __plus__ using a single quote from the second character,
the same as numbers.

```misti
variable
Variable
$variable
_variable

var1
v4r

var'
v'ar
v''ar
```
