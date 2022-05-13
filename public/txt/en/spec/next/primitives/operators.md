# Operators

```md-implemented
4f9b67ef918b6f04a1831260f8551070a0925fee
```

Operators in Misti consist of one or more characters.

```ebnf
operator char = "+" | "-" | "=" | "*" | "!" | "\" | "/" | "|"
              | "@" | "#" | "$" | "~" | "%" | "&" | "?" | "<"
              | ">" | "^" | "." | ":" ;

operator = { operator char } ;
```

