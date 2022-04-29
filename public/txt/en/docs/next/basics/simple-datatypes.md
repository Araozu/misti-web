# Simple datatypes

The following are the primitive datatypes. They have literal representations.

## Int

A (length to be specified) integer value. Supports hexadecimal notation.

```misti
val i1 = 10
val i2 = -50
val i3 = 0xff
val i4 = 0XDaDaDa
```

## Float

A single precision floating point number.

```misti
val f1 = 10.304
val f2 = -34.343223
val f3 = 0.234234e+2
val f4 = 1e+4
```

A floating point number __must__ have a digit before and after the dot.

```misti
val valid1 = 0.45
val valid2 = 13.0

// Will not be considered as floating point numbers
val invalid1 = .45  // Will be interpreted as the operator `.` and the integer 45
val invalid2 = 13.  // Will be interpreted as the integer 13 and the operator `.`
```

## Bool

True and false

```
true
false
```

## Other datatypes

will be dealt with in their own sections.
