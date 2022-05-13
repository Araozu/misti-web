# Identifier

```md-implemented
64f39c3d25af925a195303db7693ea9bde3c1d5b
```

Defines the syntax of identifiers.

An identifier starts with underscore or a lowercase letter.
If it started with an uppercase letter, it would be treated as a datatype. 

Then it can contain any letter and digit.

An identifier can be a single underscore, but it will be treated differently in the
semantic phase of the compiler.

```ebnf
low letter = "a" | "b" | "c" | "d" | "e" | "f" | "g"
           | "h" | "i" | "j" | "k" | "l" | "m" | "n"
           | "o" | "p" | "q" | "r" | "s" | "t" | "u"
           | "v" | "w" | "x" | "y" | "z" ;

upp letter = "A" | "B" | "C" | "D" | "E" | "F" | "G"
           | "H" | "I" | "J" | "K" | "L" | "M" | "N"
           | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
           | "V" | "W" | "X" | "Y" | "Z" ;

letter =  low letter | upp letter ;

underscore = "_" ;

identifier = ( underscore | low letter ), [{ underscore | letter | digit }] ;
```

```js
/// railroad
Diagram(
    Sequence(
        Choice(0,
            NonTerminal("underscore"),
            NonTerminal("low letter")
        ),
        ZeroOrMore(
            Choice(0,
                NonTerminal("underscore"),
                NonTerminal("letter"),
                NonTerminal("digit")
            )
        )
    )
)
```

Some special values are defined as identifiers, and then treated differently in the
semantic phase of the compiler.

For example, boolean values are just identifiers, they don't have special syntax.

```ebnf
(* This is not implemented *)
boolean = "true" | "false"
```
