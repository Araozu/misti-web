/* @refresh reload */
import { render } from "solid-js/web"
import "solid-js"
import App from "./App"
import "normalize.css"
import "./styles/global.css"
import "railroad-diagrams/railroad-diagrams.css"
import "./styles/prism-atom-dark.min.css"
import { language } from "./globalValues"

console.log(`Using language=${language()}`)

render(App, document.getElementById("root") as Node)
