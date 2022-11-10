# Definition

Objects should have a definition that specifies which fields it accepts.

```misti
type Position = {
    Num latitude,
    Num longitude,
}

val position = Position {
    latitude: -93.0838749,
    longitude: 80.2847561,
}

// Destructure
val Position {latitude: lat, longitude: long} = position

```

## Arbitrary keys and values

Use `Obj` if you need an object that doesn't specify a schema.

```misti
val object2 = Obj {
    key1: "sample",
    key2: "text",
    key3: 322,
}

object2.key1
```
