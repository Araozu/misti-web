# Strings

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
