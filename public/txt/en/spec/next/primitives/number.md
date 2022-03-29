# Number

Defines a number.

```ebnf
digit excluding zero = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
digit                = "0" | digit excluding zero ;
hexadecimal digit    = "a" | "b" | "c" | "d" | "e" | "f" | "A" | "B" | "C" | "D" | "E" | "F";

number = double | integer;
```

## Integer

```ebnf
integer = decimal integer | hexadecimal integer;
```

## Decimal Integer

```ebnf
decimal integer = { digit }
```

```railroad
Diagram(
    OneOrMore(
        Terminal("0-9")
    )
)
```

## Hexadecimal Integer

```ebnf
hexadecimal integer = 0 , "x" | "X" , { digit | hexadecimal digit }
```

```railroad
Diagram(
    Sequence(
        Terminal("0"),
        Choice(
            0,
            "x",
            "X"
        ),
        OneOrMore(
            Choice(0,
                NonTerminal("digit", {href: "custom-non-terminal"}),
                NonTerminal("hexadecimal digit")
            )
        )
    )
)
```
