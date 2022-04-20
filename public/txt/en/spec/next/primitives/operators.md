# Operators

Operators in Misti consist of one or more characters.

```ebnf
operator char = "+" | "-" | "=" | "*" | "!" | "\" | "/" | "'" | "|" |
              | "@" | "#" | "$" | "~" | "%" | "¦" | "&" | "?" |
              | "<" | ">" | "^" | "." | ":" ;

operator = { operator char } ;
```

