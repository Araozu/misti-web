# Comments

## Single line

```ebnf
single line comment = "//", ? any char except new line ? ;
```

## Multiline comment

```ebnf
multiline comment content = { ? any except '*' ?
                            | ( "*", ? any except '/' ? )
                            | ( "/"
                              , ? any except '*' ? 
                                | ( "*", [ multiline comment content ], "*/" ) 
                              ) 
                            } ;
```

```js
/// railroad
Diagram(
    OneOrMore(
        Choice(0,
            NonTerminal("any except '*'"),
            Sequence(
                Terminal("*"),
                NonTerminal("any except '/'")),
            Sequence(
                Terminal("/"),
                Choice(0,
                    NonTerminal("any except *"),
                    Sequence(
                        Terminal("*"), 
                        ZeroOrMore(NonTerminal("multiline comment content")), 
                        Terminal("*/")))))))
```

```ebnf
multiline comment = "/*", [ multiline comment content ], "*/" ;
```

```js
/// railroad
Diagram(
    Sequence(
        Terminal("/*"),
        ZeroOrMore(NonTerminal("multiline comment content")),
        Terminal("*/")
    )
)
```

Multi line comments can be nested.

```cpp
/*
    A multi line comment
    /*
        A comment inside a comment - a nested comment
    */
*/
```
