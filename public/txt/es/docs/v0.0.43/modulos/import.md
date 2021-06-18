# Import

> En diseño

## Contenido

KS usará los módulos de ECMAScript 2015, pero con el estilo de Python:

```
from "vue" import Vue

from "vue-router" import * as VueRouter

from "react" import React, {Component}

from "./foo.js" import {foo}

from "../scripts/bar.ks" import {baz bar}

import "./Button.css"

```

## Importar con otro nombre (as)

KScript invierte el orden. Primero se coloca el nuevo nombre, luego el nombre anterior.

Por ejemplo, si queremos importar `useEffect` y darle el nombre `effect` se escribe:

```
from "react" import {effect useEffect}
```

Primero se coloca el nuevo nombre (`effect`) y luego el nombre anterior (`useEffect`)

## Discusión

Se coloca `from` al inicio para que los IDEs puedan autocompletar correctamente. Eso es todo.
