/* @refresh reload */
import { render } from "solid-js/web"
import "solid-js"
import App from "./App"
import "normalize.css"
import "./styles/global.css"
import "railroad-diagrams/railroad-diagrams.css"
import { language } from "./globalValues"
import { Router } from "solid-app-router"
import { marked } from "marked"
// Import railroad-diagrams as a module, and add all its constructors to window,
// to be able to use them globally.
import rr from "./types/rail/rail"
Object.assign(window, rr)

console.log(`Using language=${language()}`)

/**
 * Checks if the input contains the line
 * <code>
 *     /// railroad
 * </code>
 *
 * If so, returns the input from the next line, otherwise null
 * @param input the block of code to check
 */
function tryGetRailroad(input: string): string | null {
    if (input.startsWith("/// railroad")) {
        const nextLinePos = input.indexOf("\n")
        if (nextLinePos !== -1) {
            return input.substring(nextLinePos)
        } else {
            return null
        }
    }
    return null
}

marked.use({
    renderer: {
        code(code: string, language: string | undefined): string {
            // If the language is railroad, include the code inside a hidden div.
            // This code will be evaluated somewhere else to create the railroad diagram
            if (language === "js") {
                const possibleRailroad = tryGetRailroad(code)
                if (possibleRailroad === null) {
                    return `<pre class="language-javascript"><code class="language-javascript">${code}</code></pre>`
                } else {
                    return `<div class="railroad-code" style="display: none">${possibleRailroad}</div>`
                }
            } else {
                return `<pre class="language-${language} match-braces" tabindex="="><code class="language-${language}">${code}</code></pre>`
            }
        },
    },
})

render(
    () => <Router><App /></Router>,
    document.getElementById("root") as Node,
)
