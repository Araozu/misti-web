# Introducción

Bienvenido(a) a la documentación de KS. A lo largo de las siguientes páginas
aprenderás todo sobre este lenguaje, desde las razones por las que fue creado,
hasta la sintaxis y semántica del mismo.

## Estructura de la documentación

La documentación está divida en diferentes secciones.
Cada una de estas tiene una página principal, por ejemplo, esta página
es la página principal de la sección Introducción.

Cada página principal contiene un resumen de los temas a tratar,
y cada sección tiene páginas específicas, las cuales explican
a fondo cada concepto del lenguaje
así como conceptos de programación funcional.

De ese modo, si quieres aprender un concepto desde 0 usarías la
página especifica correspondiente, mientras que si solo quieres recordar
la sintaxis, o ya has trabajado con lenguajes similares a este, usarías
el resumen de la página principal.

## Comentarios

A lo largo de la documentación se incluirán ejemplos de código. Estos a su vez
tendrán comentarios para indicar lo que está pasando con el siguiente formato:

- `//=` indica el valor resultante
  
  Por ejemplo:
  
  ```
  let total = 10 * 5  //= 50
  ```
  
  Nos dice que el valor de `total` es `50`.
  
- `//:` indica tipo de dato

  Por ejemplo
  
  ```
  let nombre = "Juan"  //: string
  ```
  
  Nos dice que el tipo de dato de `nombre` es `string`.
  
- `//!` indica un error

  Por ejemplo
  
  ```
  console.log apellido  //! Error: `apellido` no está definido.
  ```
  
  Nos indica que hay un error en esa linea. La razón está en el comentario.

## ¿Exáctamente qué es KS?

KS es una nueva sintaxis para el lenguaje de programación JavaScript, la cual reduce
la cantidad de parentesis, comas, puntos y comas y llaves. JS tiene una sintaxis basada
en C como la siguiente:

```javascript
const concatenarEnMayuscula = (s1, s2) => {
    return s1.toUpperCase() + y.toUpperCase();
};

concatenarEnMayuscula("hola", "mundo");
```

KS tiene una sintaxis basada en ML:

```
fun concatenarEnMayuscula s1 s2 =
    s1.toUpperCase() <> s2.toUppercase()
    
concatenarEnMayuscula "hola" "mundo"
```

KS es funcional impuro, con caracteristicas imperativas y orientadas a objetos.
Sin embargo, las caracteristicas de KS tienden más a las de los lenguajes como
F# y Haskell, que a Java o C.

KS (planea incluir) varias características de los lenguajes funcionales al
ecosistema de JavaScript, como son:

- Covariantes
- Registros
- Pattern Matching
- Rasgos
- Tuberias
- Composición de funciones
- Operadores personalizados
- Tipos nulos

Finalmente, KS usa la misma API de JavaScript. Una vez que aprendas la sintáxis, estás
listo para programar con las misma librerias de JS. Es por ello que como meta a (muy)
largo plazo tenemos integración con las definiciones de Typecript.

## ¿Para que aprender otra sintaxis?

Personalmente creo que las ventajas que ofrece KS compensan la curva de aprendizaje.
JavaScript no cuenta con muchas características, o estructuras avanzadas que permitan
el desarrollo a gran escala.

Ultimamente la programación funcional está ganando popularidad, y JavaScript
necesita más que funciones de primera clase. Varios patrones de FP o no se pueden hacer
en JS, o hacerlos sería tan complicado que no valen la pena. Buscamos solucionar
ese problema.

