# Start

Misti is _yet another programming language_ that compiles to JavaScript.

Its syntax is indentation based (similar to F#/OCaml), and favors functional programming.

```misti
fun MainTitle props =
    const title = createMemo #(props.title + "!")
    #h1 title

const mainTitleElem = MainTitle "misti"     
```

## Install

The compiler is being rewritten from TypeScript to Kotlin. And old version is available
in [npm](https://www.npmjs.com/package/kscript) with the old name of the project (kscript).

## About the documentation

The documentation explains concepts for people who already know JavaScript. Both sidebars can be
resized, and in the right you can enter Misti code, run it or compile it locally.
No sending the code to a server and waiting for a response.

## Goals

- Be 100% compatible with existing JavaScript

- Reduce noise in JavaScript code

- Use a consistent syntax and semantics

- Include functional constructs like typeclasses

- (Someday) include type checking from typescript definitions

- (Someday) include type inference

- (Someday) export type information to a typescript format

## But why?

In short, no language had the features I wanted, so I just decided to create my own.

|           | Indentation based | Uses the same JS API | Typed |
|-----------|-------------------|----------------------|-------|
|CoffeScript|yes                |yes                   |no     |
|TypeScript |no                 |yes                   |yes    |
|ReasonML   |no                 |no                    |yes    |
|PureScript |yes                |no                    |yes    |
|Elm        |yes                |no                    |yes    |

The language is meant to be used in personal projects.

