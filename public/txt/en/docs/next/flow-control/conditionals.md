# Conditionals

Conditionals in Misti surround the condition with keywords.

```Misti
if condition {
    // Expressions
} else if anotherCondition {
    // Other expressions
} else {
    // More expressions
}
```

Conditionals are expressions, they evaluate to the last expression
in each branch.

```misti
val result = if condition {value1} else {value2}
```

