# Grouping signs

```md-implemented
85d68872b0bfe787c56b4410012e27da6d1df54f
```

```ebnf
left paren    = "(" ;
right paren   = ")" ;
left bracket  = "[" ;
right bracket = "]" ;
left brace    = "{" ;
right brace   = "}" ;
```

## Unit

Unit is the equivalent to `null` or `nil` in other
languages. It is represented.

```misti
val unit = ()
```

In the scanner if a pair of parens is found it is
scanned as a `unit` before a grouping sign.

Whitespace in between the parenthesis is ignored.
If there is no other token inside, it will be considered
as a `unit`.

## Other usages

If a unit is not detected, then the grouping signs
are scanned as tokens, and are left to the syntax phase
to interpret them.
