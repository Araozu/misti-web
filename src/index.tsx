/* @refresh reload */
import { render } from "solid-js/web";
import "solid-js";
import App from "./App";
import "normalize.css";
import "./styles/global.css";
import "railroad-diagrams/railroad-diagrams.css";
import { language } from "./globalValues";
import { Router } from "solid-app-router";
import { marked } from "marked";
// Import railroad-diagrams as a module, and add all its constructors to window,
// to be able to use them globally.
import rr from "./types/rail/rail";
Object.assign(window, rr);

console.log(`Using language=${language()}`);

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
        const nextLinePos = input.indexOf("\n");
        if (nextLinePos !== -1) {
            return input.substring(nextLinePos);
        } else {
            return null;
        }
    }
    return null;
}

function handleJSCodeBlock(code: string) {
    const possibleRailroad = tryGetRailroad(code);
    if (possibleRailroad === null) {
        return `<pre class="language-javascript"><code class="language-javascript">${code}</code></pre>`;
    } else {
        return `<div class="railroad-code" style="display: none">${possibleRailroad}</div>`;
    }
}

function handleMDInfoTag(code: string): string {
    return `<div class="md-modifier md-info"><div>INFO</div>${code}</div>`;
}

function handleMDWarningTag(code: string) {
    return `<div class="md-modifier md-warning"><div>WARNING</div>${code}</div>`;
}

function handleMDImplementationTag(code: string) {
    return `<div class="md-modifier md-implemented"><div>IMPLEMENTED</div>Commit hash: ${code}</div>`;
}

marked.use({
    renderer: {
        code(code: string, language: string | undefined): string {
            // If the language is railroad, include the code inside a hidden div.
            // This code will be evaluated somewhere else to create the railroad diagram
            switch (language) {
                case "js": {
                    return handleJSCodeBlock(code);
                }
                case "md-info": {
                    return handleMDInfoTag(code);
                }
                case "md-warning": {
                    return handleMDWarningTag(code);
                }
                case "md-implemented": {
                    return handleMDImplementationTag(code);
                }
                default: {
                    return `<pre class="language-${language} match-braces" tabindex="="><code class="language-${language}">${code}</code></pre>`;
                }
            }
        },
    },
});

render(
    () => <Router><App /></Router>,
    document.getElementById("root") as Node,
);
