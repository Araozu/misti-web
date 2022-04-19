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
integer = decimal integer
        | hexadecimal integer;
```

<div class="padded">

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
                NonTerminal("digit"),
                NonTerminal("hexadecimal digit", {href: "number#integer"})
            )
        )
    )
)
```

</div>

## Double

```ebnf
double = { decimal integer }, ( ".", { decimal integer }, [ scientific notation ] )
                              | scientific notation
```

```railroad
Diagram(
    Sequence(
        NonTerminal("decimal integer"),
        Choice(
            0,
            Sequence(
                Terminal("."),
                NonTerminal("decimal integer"),
                Optional(NonTerminal("scientific notation"))
            ),
            NonTerminal("scientific notation")
        )
    )
)
```

<div class="padded">

## Scientific notation

```ebnf
scientific notation = "e", "+" | "-", { decimal integer }
```

```railroad
Diagram(
    Sequence(
        Terminal("e"),
        Choice(0,
            Terminal("+"),
            Terminal("-")
        ),
        OneOrMore(NonTerminal("decimal integer"))
    )
)
```

</div>
