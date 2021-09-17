# Function calls

A function is called by simply placing its parameters after its name.

```misti
console.log "Hello world!"
```

```javascript
console.log("Hello world");
```

To call a function with two or more parameters just place them separated with whitespaces.

```misti
console.log "Hello" "world" "!"
```

```javascript
console.log("Hello", "world", "!")
```

## Do calculations inside the parameter

Surround the calculation with parens.

```misti
console.log "The result is:" (10 + 20 - 30)
```

```javascript
console.log("The result is:", 10 + 20 - 30);
```

## What happens if i use parens and commas?

The code

```misti
console.log("The result is:", 10 + 20 - 30)
```

is valid in Misti, but has a different meaning:

- console.log is being called with only 1 parameter: `("The result is:", 10 + 20 - 30)`

- The parameter is being interpreted as a tuple of a string and a number.

So the equivalent JavaScript will be:

```javascript
console.log(["The result is:", 10 + 20 - 30]);
```
