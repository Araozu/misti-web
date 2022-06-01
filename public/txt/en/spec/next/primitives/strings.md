# Strings

```md-implemented
71b6f26195b88a5a63b9d98a7d8f7c27c4e8ff86
```

Strings start and end with double quotes, and cannot contain new lines.

```misti
val name = "Juan"
val lastName = "Perez"
```

<div style="height: 3rem; width: 1rem"></div>

```js
/// railroad
Diagram(
    Sequence(
        Terminal("\""),
        ZeroOrMore(
            Choice(0,
                NonTerminal("any except `\\n` or \\ or \""),
                Sequence(
                    Terminal("\\"),
                    Choice(0,
                        Terminal("'"),
                        Terminal("\""),
                        Terminal("r"),
                        Terminal("\\"),
                        Terminal("n"),
                        Terminal("f"),
                        Terminal("b"),
                        Terminal("t"))))),
        Terminal("\"")))
```

## Error handling

If a newline is encountered inside a string, an error is emitted and the string is terminated.
Any characters after the new line will be treated as new tokens.

```misti
// It will be parsed as: String "Some string cut", identifier "in", identifier "two", etc.
"Some string cut
in two lines"
```
